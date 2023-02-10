import React from 'react'
import { Cell, GridWrapper, MovesLabel, Row } from './Grid.styled'

const Grid = () => {
  return (
    <GridWrapper>
        <MovesLabel>Moves: 2</MovesLabel>
        <div>
            {[...Array(3)].map((i: number, key: number) => {
                return (
                    <Row key={key}>
                        {[...Array(3)].map((j: number, key: number) => (
                            <Cell key={key} />
                        ))}
                    </Row>
                )
            })}
        </div>
    </GridWrapper>
  )
}

export default Grid