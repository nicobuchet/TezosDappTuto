import React, { FC, useContext, useMemo } from 'react'
import { WalletContext } from '../../context/Wallet.context';
import { getGameStatus, getGameStatusColor, getMyOpponent } from '../../utils/helpers/game.helpers';
import { getFormattedWalletAddress } from '../../utils/helpers/Wallet.helpers';
import { Game } from '../../utils/types/game.types';
import {
    GameStatusLabel,
    GameTitle,
    GameWrapper,
    JoinGameButton
} from './GameCard.styled';
import { toast } from "react-toastify";
import { join_game } from '../../utils/taquito/transactions.taquito';

type GameCardProps = {
    onClick: () => void;
    game: Game;
}

export const GameCard: FC<GameCardProps> = ({ onClick, game }) => {
    const { currentWalletAddress } = useContext(WalletContext);
    
    const myOpponent = useMemo(() => (
            getMyOpponent(game, currentWalletAddress || "")
        ),
        [game, currentWalletAddress]
    );
    const status = useMemo(
        () => getGameStatus(game, currentWalletAddress || ""),
        [game, currentWalletAddress]
    );
    const statusColor = useMemo(
        () => getGameStatusColor(game, currentWalletAddress || ""),
        [game, currentWalletAddress]
    );

    return (
        <GameWrapper onClick={onClick}>
            <div>
                <GameTitle>Game ID: {game.board_id}</GameTitle>
                <div>
                    Opponent: {" "}
                    {myOpponent === currentWalletAddress ? "--" : getFormattedWalletAddress(myOpponent)}
                </div>
            </div>
            {status === "waiting" && game.player1 !== currentWalletAddress ? (
                    <JoinGameButton
                        onClick={
                            () => toast.promise(
                                () => join_game(game.board_id),
                                {
                                    pending: "Joining the game...",
                                    success: "Game joined!",
                                    error: "Failed to join the game",
                                }
                            )
                        }
                    >
                        Join Game
                    </JoinGameButton> 
                ) : (
                    <GameStatusLabel 
                        color={statusColor}
                    >
                        {status}
                    </GameStatusLabel>
                )
            }
        </GameWrapper>
    )
}
