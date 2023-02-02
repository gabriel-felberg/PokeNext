import Card from "@/components/card";
import Image from "next/image";

export interface PokemonData {
  results: IResult[];
}

export interface IResult {
  id: number;
  name: string;
  url?: string;
}

export async function getStaticProps(): Promise<{
  props: {
    data: IResult[];
  };
}> {
  const maxPokemon = "1000";
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemon}`
  );
  const data: PokemonData = await pokemon.json();

  const newData = data.results.map((e, index) => {
    return { ...e, id: index + 1 };
  });

  return {
    props: {
      data: newData,
    },
  };
}

interface IProps {
  data: IResult[];
}

export default function Home({ data }: IProps) {
  console.log(data);
  return (
    <>
      <div className="flex items-center justify-center mb-4 gap-x-2">
        <h1 className="text-red-600 text-center text-xl ">
          Poke<span className="text-black">Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          alt="PokeNext"
          height={30}
          width={30}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between max-w-5xl m-auto">
        {data.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon}/>
        })}
      </div>
    </>
  );
}
