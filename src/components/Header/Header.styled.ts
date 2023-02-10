import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

export const AppTitle = styled.h1`
    margin: auto 0;
`;

export const WalletInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const WalletBalanceLabel = styled.div`
    font-size: 14px;
    font-weight: 600;
`;

export const ConnectButton = styled.button<{
    isConnected: boolean;
}>`
    padding: 0.8rem 2rem;
    border: none;
    background-color: ${(props) => props.isConnected ? props.theme.colors.primary : props.theme.colors.secondary};
    border-radius: 10px;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: white;
    font-size: 18px;
`;