import React, { FC, useContext } from 'react'
import { toast } from 'react-toastify';
import { WalletContext } from '../../../context/Wallet.context';
import { getBoardCellStatus } from '../../../utils/helpers/game.helpers';
import { play } from '../../../utils/taquito/transactions.taquito';
import { Game } from '../../../utils/types/game.types';
import { Cell, GridWrapper, MovesLabel, Row } from './Grid.styled'

type GridProps = {
    game?: Game;
}

const Grid: FC<GridProps> = ({ game }) => {
    const { currentWalletAddress } = useContext(WalletContext);

    return (
        <GridWrapper>
            <MovesLabel>Moves: {game?.moves_number || "--"}</MovesLabel>
            <div>
                {[...Array(3)].map((_, j: number) => {
                    return (
                        <Row key={j}>
                            {[...Array(3)].map((_, i: number) => {
                                const cellStatus = getBoardCellStatus(i + 1, j + 1, game);

                                return <Cell
                                    key={i}
                                    active={cellStatus === "X" || cellStatus === "O"}
                                    player={
                                        cellStatus === "X" ? 1 : 2
                                    }
                                    hover={game?.player1 === currentWalletAddress ? 1 : 2}
                                    onClick={() => (
                                        toast.promise(
                                            () => play(i + 1, j + 1, game?.board_id || 0),
                                            {
                                                pending: 'Playing...',
                                                success: 'Played!',
                                                error: 'Oups! Error playing'
                                            }
                                        )
                                    )}
                                />
                            })}
                        </Row>
                    )
                })}
            </div>
        </GridWrapper>
    )
}

export default Grid