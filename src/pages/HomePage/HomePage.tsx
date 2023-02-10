import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { main } from '../../app/styles/theme.styled'
import { build_board } from '../../utils/taquito/transactions.taquito'
import Games from './Games/Games'
import {
  ButtonsWrapper,
  HomePageWrapper,
  ActionButton
} from './HomePage.styled'
import Statistics from './Statistics/Statistics'

const HomePage = () => {
  const [gamesView, setGamesView] = useState<1 | 2>(1);

  return (
    <HomePageWrapper>
      <Statistics />
      <ButtonsWrapper>
        <ActionButton
          backgroundColor={main.colors.primary}
          onClick={() => setGamesView(1)}
        >
          My Games
        </ActionButton>
        <ActionButton onClick={() => setGamesView(2)}>Available Games</ActionButton>
        <ActionButton
          backgroundColor={main.colors.secondary}
          onClick={() => 
            toast.promise(
              build_board,
              {
                pending: 'Creating new game...',
                success: 'Game created!',
                error: 'Oups! Error creating game'
              }
            )
          } 
        >
          New Game
        </ActionButton>
      </ButtonsWrapper>
      <Games gamesView={gamesView} />
    </HomePageWrapper>
  )
}

export default HomePage