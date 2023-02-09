import React from 'react'
import { useParams } from 'react-router-dom'
import { main } from '../../app/styles/theme.styled'
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

    return (
        <GamePageWrapper>
            <PlayersWrapper>
                <PlayerLabel align="right">tz1....</PlayerLabel>
                <VSLabel>VS</VSLabel>
                <PlayerLabel>tz1....</PlayerLabel>
            </PlayersWrapper>
            <Grid />
            <StatusLabel color={main.colors.primary}>YOU WON</StatusLabel>
        </GamePageWrapper>
    )
}

export default GamePage