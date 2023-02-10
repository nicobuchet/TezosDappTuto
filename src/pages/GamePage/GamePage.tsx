import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GameContext } from '../../context/Game.context'
import { WalletContext } from '../../context/Wallet.context'
import { getGameById, getGameStatus, getGameStatusColor } from '../../utils/helpers/game.helpers'
import { getFormattedWalletAddress } from '../../utils/helpers/Wallet.helpers'
import { Game } from '../../utils/types/game.types'
import { 
    GamePageWrapper,
    PlayerLabel,
    PlayersWrapper,
    StatusLabel,
    VSLabel
} from './GamePage.styled'
import Grid from './Grid/Grid'

type LocationParams = {
    id: string
}

const GamePage = () => {
    const { id } = useParams<LocationParams>();

    const [game, setGame] = useState<Game>();

    const { games } = useContext(GameContext);
    const { currentWalletAddress } = useContext(WalletContext);

    useEffect(() => {
        const game = getGameById(games, Number(id));
        game && setGame(game);
    }, [id, games]);

    const status = useMemo(
        () => game && getGameStatus(game, currentWalletAddress || ""),
        [game, currentWalletAddress]
    );
    const statusColor = useMemo(
        () => game && getGameStatusColor(game, currentWalletAddress || ""),
        [game, currentWalletAddress]
    )

    return (
        <GamePageWrapper>
            <PlayersWrapper>
                <PlayerLabel align="right">
                    {game ? getFormattedWalletAddress(game.player1) : "--"}
                </PlayerLabel>
                <VSLabel>VS</VSLabel>
                <PlayerLabel>
                    {game ? getFormattedWalletAddress(game.player2) : "--"}
                </PlayerLabel>
            </PlayersWrapper>
            <Grid game={game} />
            {game?.finished && (
                <StatusLabel color={statusColor}>
                    {
                        status === "won" ? 
                            "You won" :
                            status === "lost" ?
                                "You lost" :
                                "Draw"
                    }
                </StatusLabel>
            )}
        </GamePageWrapper>
    )
}

export default GamePage