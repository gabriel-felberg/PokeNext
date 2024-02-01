import { IReactNode } from "@/components/logout";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface IPokemonProps {
  pokemon: IPokemon[];
}

export const pokemonContext = createContext<IPokemonProps>({} as IPokemonProps);

interface IPokemon {
  id: number;
  name: string;
  url: string;
}

export const PokemonProvider = ({ children }: IReactNode) => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([] as IPokemon[]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${500}`)
      .then(({ data }) => {
        const a = data.results.map((e: IPokemon, index: number) => ({
          ...e,
          id: index + 1,
        }));
        setPokemon(a);
      })
      .catch((err) => console.error(err));
  }, [pokemon]);
  
  return (
    <pokemonContext.Provider value={{ pokemon }}>
      {children}
    </pokemonContext.Provider>
  );
};
