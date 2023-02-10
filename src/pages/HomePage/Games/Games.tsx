import React, { FC, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { GameCard } from '../../../components/GameCard/GameCard';
import { GameContext } from '../../../context/Game.context';
import { WalletContext } from '../../../context/Wallet.context';
import { getAvailableGames, getMyGames } from '../../../utils/helpers/game.helpers';
import { Game } from '../../../utils/types/game.types';
import { GamesWrapper } from './Games.styled'

type GamesProps = {
    gamesView: 1 | 2;
}

const Games: FC<GamesProps> = ({ gamesView }) => {
    const [gamesList, setGamesList] = useState<Game[]>([]);

    const { currentWalletAddress } = useContext(WalletContext);
    const { games } = useContext(GameContext);

    const myGames = useMemo(
        () => getMyGames(games, currentWalletAddress || ""), 
        [games, currentWalletAddress]
    );
    const availableGames = useMemo(
        () => getAvailableGames(games, currentWalletAddress || ""),
        [games, currentWalletAddress]
    );
    
    const navigate = useNavigate();

    useEffect(() => {
        setGamesList(gamesView === 1 ? myGames : availableGames)
    }, [gamesView, myGames, availableGames]);

    return (
        <GamesWrapper>
            {gamesList.map((game: Game, key: number) => (
                <GameCard key={key} onClick={() => navigate(`game/${game.board_id}`)} game={game} />
            ))}
        </GamesWrapper>
    )
}

export default Games