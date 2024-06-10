/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import NavBar from "@/components/navbar";

export type Props = {
  id: string;
  name: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

export default function Home() {
  const [items, setItems] = useState<Props[]>([]);

  useEffect(() => {
    async function getNews() {
      const api = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d26b895a6ae54c39bd5853da741e8cbf"
      );

      setItems(api.data.articles);
    }
    getNews();
  }, []);

  return (
    <>
      <NavBar />

      <main>
        {Array.isArray(items) &&
          items.map((item) => (
            <>
              <div className="mt-44 max-w-screen-xl w-full mx-auto my-0 flex justify-center">
                <div className="flex flex-col my-8 max-w-2xl">
                  <h2 className="font-bold text-4xl w-11/12 ">{item.title}</h2>
                  <div className="flex flex-col pt-6">
                    <Link href={""}>{item.description}</Link>
                  </div>
                </div>

                <div className="relative w-96">
                  <div className=" rounded-xl ">
                    <img
                      src={item.urlToImage}
                      alt="imagem da noticia"
                      className=" mb-6 absolute object-contain flex gap-y-10 h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
      </main>
    </>
  );
}
