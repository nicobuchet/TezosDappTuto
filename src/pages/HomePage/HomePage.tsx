import React from 'react'
import { main } from '../../app/styles/theme.styled'
import Games from './Games/Games'
import {
  ButtonsWrapper,
  HomePageWrapper,
  ActionButton
} from './HomePage.styled'
import Statistics from './Statistics/Statistics'

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Statistics />
      <ButtonsWrapper>
        <ActionButton backgroundColor={main.colors.primary}>My Games</ActionButton>
        <ActionButton>Available Games</ActionButton>
        <ActionButton backgroundColor={main.colors.secondary}>New Game</ActionButton>
      </ButtonsWrapper>
      <Games />
    </HomePageWrapper>
  )
}

export default HomePage