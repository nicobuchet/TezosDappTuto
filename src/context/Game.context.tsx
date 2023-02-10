import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getAllGames } from "../utils/taquito/games.taquito";
import { Game } from "../utils/types/game.types";

type GameContextProps = {
  games: Game[];
};

type GameProviderProps = {
  children: ReactNode;
};

export const GameContext = createContext({} as GameContextProps);

const GameProvider = ({ children }: GameProviderProps) => {
  const [games, setGames] = useState<Game[]>([]);
  
  useEffect(() => {
    getAllGames().then((res) => setGames(res.map((item: any) => item.value as Game)));
  }, []);

  return (
    <GameContext.Provider
      value={{
        games,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
