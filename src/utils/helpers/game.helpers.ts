import { main } from "../../app/styles/theme.styled";
import { Game } from "../types/game.types";

export const getMyGames = (games: Game[], wallet_address: string) => {
    return games.filter((game: Game) => (
        game.player1 === wallet_address || game.player2 === wallet_address
    ));
}

export const getGamesWon = (games: Game[], wallet_address: string) => {
    const myGames = getMyGames(games, wallet_address);

    return myGames.filter((game: Game) => (
        game.finished && game.winner === wallet_address && !game.draw
    )).length;
}

export const getGamesDraw = (games: Game[], wallet_address: string) => {
    const myGames = getMyGames(games, wallet_address);

    return myGames.filter((game: Game) => (
        game.finished && game.draw
    )).length;
}

export const getGamesLost = (games: Game[], wallet_address: string) => {
    const myGames = getMyGames(games, wallet_address);

    return myGames.filter((game: Game) => (
        game.finished && game.winner !== wallet_address
    )).length;
};

export const getAvailableGames = (games: Game[], wallet_address: string) => {
    return games.filter((game: Game) => (
        !game.started && game.player1 === game.player2 && game.player1 !== wallet_address
    ));
}

export const getMyOpponent = (game: Game, wallet_address: string) => {
    return game.player1 === wallet_address ? game.player2 : game.player1;
}

export const getGameStatus = (game: Game, wallet_address: string) => {
    if (game.finished) {
        if (game.draw) {
            return "draw";
        } else if (game.winner === wallet_address) {
            return "won";
        } else {
            return "lost"
        }
    } else if (game.started) {
        return "started";
    } else {
        return "waiting";
    }
}

export const getGameStatusColor = (game: Game, wallet_address: string) => {
    const status = getGameStatus(game, wallet_address);

    switch (status) {
        case "won":
            return main.colors.primary;
        case "lost":
            return main.colors.secondary;
        case "waiting":
            return main.colors.systemYellow;
        case "started":
            return main.colors.systemGreen;
        default:
            return "black";
    }
}