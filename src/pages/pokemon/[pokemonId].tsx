import { pokemonContext } from "@/context/pokemon";
import Image from "next/image";
import React, { useContext } from "react";
import { PokemonData } from "..";

interface IPath {
  params: {
    pokemonId: string;
  };
}

export const getStaticPaths = async () => {

  let paths: IPath[] = [];
  for (let index = 0; index < 500; index++) {
    paths.push({
      params: {
        pokemonId: (index + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async (context: IPath) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: PokemonData = await res.json();

  return { props: { pokemon: data } };
};
interface IProps {
  pokemon: IPokemon;
}

interface IPokemon {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: Itype;
  }[];
}
interface Itype {
  name: string;
  url: string;
}

const Pokemon = ({ pokemon }: IProps) => {
  console.log(pokemon);
  return (
    <div className="flex flex-col items-center text-center h-[70vh]">
      <h1 className="text-lg capitalize bg-gray-900 text-white p-1 my-[0,8rem] w-60 font-bold">
        {pokemon.name}
      </h1>
      <Image
        src={pokemon.sprites.front_default}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div className="flex flex-col text-center justify-center">
        <h3 className="mx-2 text-sm">Numero:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3 className="text-sm mb-1">Tipo:</h3>
        <div className="flex gap-x-2 flex-wrap text-center justify-center">
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`p-1 text-white bg-black border border-gray-400 rounded-md uppercase text-xs ${
                "type_" + item.type.name
              }`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-2">
        <div className="my-4 px-4 flex items-center justify-center flex-col border-r border-gray-400">
          <h4>Altura:</h4>
          <p>{pokemon.height * 10}cm</p>
        </div>
        <div className="my-4 px-4 flex items-center justify-center flex-col">
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10}kg</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
