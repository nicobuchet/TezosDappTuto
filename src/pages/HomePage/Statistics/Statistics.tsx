import React, { useContext, useMemo } from 'react'
import { main } from '../../../app/styles/theme.styled'
import { GameContext } from '../../../context/Game.context'
import { WalletContext } from '../../../context/Wallet.context'
import {
    getGamesDraw,
    getGamesLost,
    getGamesWon,
    getMyGames
} from '../../../utils/helpers/game.helpers'
import { 
    StatFigure,
    StatisticsWrapper,
    StatTitle,
    StatWrapper
} from './Statistics.styled'


const Statistics = () => {
    const { currentWalletAddress } = useContext(WalletContext);
    const { games } = useContext(GameContext);

    const gamesPlayed = useMemo(() => getMyGames(games, currentWalletAddress || "").length, [games, currentWalletAddress]);
    const gamesWon = useMemo(() => getGamesWon(games, currentWalletAddress || ""), [games, currentWalletAddress]);
    const gamesDraw = useMemo(() => getGamesDraw(games, currentWalletAddress || ""), [games, currentWalletAddress]);
    const gamesLost = useMemo(() => getGamesLost(games, currentWalletAddress || ""), [games, currentWalletAddress]);

    return (
        <StatisticsWrapper>
            <StatWrapper borderRight>
                <StatTitle>Games</StatTitle>
                <StatFigure>{currentWalletAddress ? gamesPlayed : "--"}</StatFigure>
            </StatWrapper>
            <StatWrapper borderRight>
                <StatTitle>Won</StatTitle>
                <StatFigure color={main.colors.primary}>
                    {currentWalletAddress ? gamesWon : "--"}
                </StatFigure>
            </StatWrapper>
            <StatWrapper borderRight>
                <StatTitle>Draw</StatTitle>
                <StatFigure color={main.colors.systemGrey}>
                    {currentWalletAddress ? gamesDraw : "--"}
                </StatFigure>
            </StatWrapper>
            <StatWrapper>
                <StatTitle>Lost</StatTitle>
                <StatFigure color={main.colors.secondary}>
                    {currentWalletAddress ? gamesLost : "--"}
                </StatFigure>
            </StatWrapper>
        </StatisticsWrapper>
    )
}

export default Statistics