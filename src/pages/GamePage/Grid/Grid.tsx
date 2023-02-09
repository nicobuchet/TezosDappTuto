import React from 'react'
import { Cell, GridWrapper, MovesLabel, Row } from './Grid.styled'

const Grid = () => {
  return (
    <GridWrapper>
        <MovesLabel>Moves: 2</MovesLabel>
        <div>
            {[...Array(3)].map((i: number) => {
                return (
                    <Row key={i}>
                        {[...Array(3)].map((j: number) => <Cell key={j} />)}
                    </Row>
                )
            })}
        </div>
    </GridWrapper>
  )
}

export default Grid