import React, { FC } from 'react'
import { toast } from 'react-toastify';
import { play } from '../../../utils/taquito/transactions.taquito';
import { Cell, GridWrapper, MovesLabel, Row } from './Grid.styled'

type GridProps = {
    game_id: number;
}

const Grid: FC<GridProps> = ({ game_id }) => {
    console.log(game_id);
    return (
        <GridWrapper>
            <MovesLabel>Moves: 2</MovesLabel>
            <div>
                {[...Array(3)].map((_, j: number) => {
                    return (
                        <Row key={j}>
                            {[...Array(3)].map((_, i: number) => (
                                <Cell
                                    key={i}
                                    onClick={() => (
                                        toast.promise(
                                            () => play(i, j,game_id),
                                            {
                                                pending: 'Playing...',
                                                success: 'Played!',
                                                error: 'Oups! Error playing'
                                            }
                                        )
                                    )}
                                />
                            ))}
                        </Row>
                    )
                })}
            </div>
        </GridWrapper>
    )
}

export default Grid