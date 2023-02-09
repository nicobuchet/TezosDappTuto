import React, { FC } from 'react'
import { main } from '../../app/styles/theme.styled';
import {
    GameStatusLabel,
    GameTitle,
    GameWrapper
} from './GameCard.styled';

type GameCardProps = {
    onClick: () => void;
}

export const GameCard: FC<GameCardProps> = ({ onClick }) => {
  return (
    <GameWrapper onClick={onClick}>
        <div>
            <GameTitle>Game ID: 12</GameTitle>
            <div>Opponent: 0x123...</div>
        </div>
        <GameStatusLabel color={main.colors.secondary}>
            LOST
        </GameStatusLabel>
    </GameWrapper>
  )
}
