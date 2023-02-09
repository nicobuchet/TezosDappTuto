import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GameCard } from '../../../components/GameCard/GameCard';
import { GamesWrapper } from './Games.styled'

const Games = () => {
    const navigate = useNavigate();

    return (
        <GamesWrapper>
            {/* Here we are creating two placeholders for the game items*/}
            <GameCard onClick={() => navigate("/game/1")} />
            <GameCard onClick={() => navigate("/game/2")} />
        </GamesWrapper>
    )
}

export default Games