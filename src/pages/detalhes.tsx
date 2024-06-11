/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Link from "next/link";

type PropsDetails = {
  title: string;
  image: string;
  description: string;
  publishedAt: string;
};

const detalhes = ({ image, description, publishedAt, title }: PropsDetails) => {
  return (
    <>
      <NavBar />

      <main className="max-w-7xl w-full my-0 mx-auto mt-12">
        <div>
          <ul>
            <Link href={"/"}>
              {" "}
              <li className="font-bold text-lg hover:text-red-500 hover:underline mb-8">
                Inicio
              </li>
            </Link>
          </ul>
        </div>

        <ul>
          <li className="mb-3 ">
            <div className="mx-auto my-0 flex justify-center flex-col ">
              <p>{title}</p>
              <img src={image} alt="imagem da noticia" width={800} />
              <span className="flex items-start underline ">{publishedAt}</span>
            </div>
          </li>

          <p className="w-full text-base">{description}</p>
        </ul>

        <div>
          <p className="border-b w-full mt-16 font-bold text-lg">Leia mais</p>
        </div>
        {/* <section className="max-w-5xl w-full my-0 mx-auto mt-28">
          <ul className=" grid grid-cols-3 gap-x-8">
            <li>
              <img src="../jogadores.webp" alt="" />
              <p>
                Uma campanha de financiamento coletivo está sendo realizada em
                favor da professora, atriz, poeta e produtora cultural Christine
                Vianna, de Londrina, para a realização de uma cirurgia cujos
                custos não são cobertos pelos planos de saúde aos quais ela é
                associada.
              </p>

              <button className="bg-black text-white py-1 px-2">
                Detalhes
              </button>
            </li>

            <li>
              <img src="../jogadores.webp" alt="" />
              <p>
                Uma campanha de financiamento coletivo está sendo realizada em
                favor da professora, atriz, poeta e produtora cultural Christine
                Vianna, de Londrina, para a realização de uma cirurgia cujos
                custos não são cobertos pelos planos de saúde aos quais ela é
                associada.
              </p>

              <button className="bg-black text-white py-1 px-2">
                Detalhes
              </button>
            </li>

            <li>
              <img src="../jogadores.webp" alt="" />
              <p>
                Uma campanha de financiamento coletivo está sendo realizada em
                favor da professora, atriz, poeta e produtora cultural Christine
                Vianna, de Londrina, para a realização de uma cirurgia cujos
                custos não são cobertos pelos planos de saúde aos quais ela é
                associada.
              </p>

              <button className="bg-black text-white py-1 px-2">
                Detalhes
              </button>
            </li>
          </ul>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default detalhes;
