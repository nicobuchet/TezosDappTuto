export type BoardRow = {
    row_id: string;
    cells: String[];
}

export type Game = {
    board_id: number;
    player1: string;
    player2: string;
    moves_number: number;
    winner: string;
    draw: boolean;
    started: boolean;
    finished: boolean;
    board: BoardRow[];
    next_player: number;
}