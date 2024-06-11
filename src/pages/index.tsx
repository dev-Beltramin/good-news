/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { api } from "./api/api";

export type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
};

export default function Home() {
  const [item, setItem] = useState<Props[]>([]);

  useEffect(() => {
    async function getNews() {
      const Data = await api.get("/articles");

      setItem(Data.data);
    }
    getNews();
  }, []);

  if (!item) {
    return <h2>carregando</h2>;
  }

  return (
    <>
      <NavBar />

      <main>
        {Array.isArray(item) &&
          item.map((items) => (
            <>
              <div className="mt-44 max-w-screen-xl w-full mx-auto my-0 flex justify-center">
                <div className="flex flex-col my-8 max-w-2xl">
                  <p className="underline">{items.createdAt}</p>
                  <h2 className="font-bold text-4xl w-11/12 ">{items.title}</h2>
                  <div className="flex flex-col pt-6">
                    <Link href={`/detalhes/${items.id}`}>
                      {items.description}
                    </Link>
                  </div>
                </div>

                <div className="relative w-96">
                  <div className=" rounded-xl ">
                    <img
                      src={items.image}
                      alt="imagem da noticia"
                      className=" mb-6 absolute object-contain flex gap-y-10 h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
      </main>
      <Footer />
    </>
  );
}
