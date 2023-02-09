import React from 'react'
import { main } from '../../../app/styles/theme.styled'
import { 
    StatFigure,
    StatisticsWrapper,
    StatTitle,
    StatWrapper
} from './Statistics.styled'


const Statistics = () => {
  return (
    <StatisticsWrapper>
        <StatWrapper borderRight>
            <StatTitle>Games</StatTitle>
            <StatFigure>200</StatFigure>
        </StatWrapper>
        <StatWrapper borderRight>
            <StatTitle>Won</StatTitle>
            <StatFigure color={main.colors.primary}>100</StatFigure>
        </StatWrapper>
        <StatWrapper borderRight>
            <StatTitle>Draw</StatTitle>
            <StatFigure color={main.colors.systemGrey}>100</StatFigure>
        </StatWrapper>
        <StatWrapper>
            <StatTitle>Lost</StatTitle>
            <StatFigure color={main.colors.secondary}>100</StatFigure>
        </StatWrapper>
    </StatisticsWrapper>
  )
}

export default Statistics