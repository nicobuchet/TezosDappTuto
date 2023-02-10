import { tezos } from "./main.taquito";

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS as string;
/**
 * Calls the entrypoint build_board from the smart contract
 * @returns Promise
 */
export const build_board = async () => {
    try {
        const contract = await tezos.wallet.at(CONTRACT_ADDRESS);

        return contract.methods
            .build_board()
            // The entrypoints requires us to send an amount of 5 XTZ
            .send({ amount: 5, mutez: false })
            .then((res: any) => res.confirmation(1));
    } catch (error) {
        throw error;
    }
}

/**
 * Calls the entrypoint join_game from the smart contract
 * @param game_id number
 * @returns Promise
 */
export const join_game = async (game_id: number) => {
    try {
        const contract = await tezos.wallet.at(CONTRACT_ADDRESS);
        
        return contract.methods
            .join_game(game_id)
            .send({ amount: 5, mutez: false })
            .then((res: any) => res.confirmation(1));
    } catch (error) {
        throw error;
    }
}

/**
 * Calls the entrypoint play from the smart contract
 * @param x number - x coordinate
 * @param y number - y coordinate
 * @returns Promise
 */
export const play = async (x: number, y: number, game_id: number) => {
    try {
        const contract = await tezos.wallet.at(CONTRACT_ADDRESS);
        
        return contract.methods
            .play(game_id, x, y)
            // Here no need to send an amount of XTZ
            // because the entrypoint play doesn't require it
            .send()
            .then((res: any) => res.confirmation(1));
    } catch (error) {
        console.log(error);
        throw error;
    }
}