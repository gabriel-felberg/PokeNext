import Card from "@/components/card";
import { pokemonContext } from "@/context/pokemon";
import Image from "next/image";
import { useContext } from "react";

export interface PokemonData {
  results: IResult[];
}

export interface IResult {
  id: number;
  name: string;
  url: string;
}

export default function Home() {

  const {pokemon} = useContext(pokemonContext)

  return (
    <>
      <div className="flex items-center justify-center mb-4 gap-x-4">
        <h1 className="text-red-600 text-center text-4xl ">
          Poke<span className="text-black">Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          alt="PokeNext"
          height={50}
          width={50}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between max-w-5xl m-auto">
        {pokemon?.map((pokemon) =>( 
           <Card key={pokemon.id} pokemon={pokemon} />)
        )}
      </div>
    </>
  );
}
