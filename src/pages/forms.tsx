import { useRef, useState } from "react";
import { api } from "./api/api";

const Forms = () => {
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputImage = useRef();

  const createPost = async () => {
    await api.post("/create", {
      title: inputTitle.current.value,
      description: inputDescription.current.value,
      image: inputImage.current.value
    });
  };

  return (
    <div>
      <form className="bg-slate-400 max-w-5xl w-full flex my-0 mx-auto h-80 items-center rounded-3xl">
        <div className="flex flex-col items-center justify-center my-0 mx-auto">
          <label className="text-white font-bold text-xl pb-2">
            Titulo da noticia
          </label>
          <input
            ref={inputTitle}
            type="text"
            name="title"
            placeholder="Digite o titulo da noticia"
            className="w-full py-1 px-2"
            required
          />

          <label className="text-white font-bold text-xl pb-2 pt-2">
            Descrição
          </label>
          <textarea
            ref={inputDescription}
            name="description"
            placeholder="Digite a descrição"
            className="w-full py-1 px-2"
            required
          />

          <label className="text-white font-bold text-xl pb-2 pt-2">
            Imagem
          </label>
          <input
            ref={inputImage}
            type="url"
            placeholder="digite a url da imagem"
            required
            className="w-full py-1 px-2"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-1 mt-5"
            onClick={createPost}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
