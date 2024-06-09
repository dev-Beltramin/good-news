import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

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

      <main className="mt-44 max-w-screen-xl w-full mx-auto my-0">
        <div className="flex">

          <div className="flex flex-col my-8">
          <h2 className="font-bold text-4xl w-11/12">
            Em Londrina, sobram vacinas contra gripe e dengue nos postos de
            saúde
          </h2>
            <Link href={""}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at
              beatae, commodi explicabo repudiandae,...
            </Link>
            <Link href={""}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at
              beatae, commodi explicabo repudiandae,...
            </Link>
            <Link href={""}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at
              beatae, commodi explicabo repudiandae,...
            </Link>
          </div>

          <div>
            <Image className="absolute rounded-xl "
              src="/jogadores.webp"
              width={500}
              height={500}
              alt="Picture of the author"
          
            />
            <p>Contra o correa</p>

            <p className="relative">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              possimus voluptas reiciendis? Soluta, nesciunt accusant
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
