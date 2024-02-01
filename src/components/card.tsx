import { IResult } from "@/pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  pokemon: IResult;
}



const Card = ({ pokemon }: IProps) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className="flex justify-center items-center flex-col p-4 w-[22%] mb-6 border-2 rounded-2xl border-red-600 shadow-[5px_5px_12px_rgba(0,0,0,0.5)] bg-gray-900 text-white hover:bg-red-600 hover:text-black hover:border-gray-400 transition">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className="mb-2 bg-red-600 rounded-lg p-2 text-white flex items-center ">#{pokemon.id}</p>
      <h3 className="capitalize mb-4 text-lg">{pokemon.name}</h3>
    </Link>
  );
};

export default Card;
