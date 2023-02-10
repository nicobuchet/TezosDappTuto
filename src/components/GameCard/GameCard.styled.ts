import styled from "styled-components"

export const GameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${(props) => props.theme.colors.systemGrey};
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
`;

export const GameTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const GameStatusLabel = styled.div<{
    color?: string;
}>`
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.color || "black"};
`;

export const JoinGameButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    background: ${(props) => props.theme.colors.systemYellow};
    font-family: inherit;
    font-weight: 600;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    color: white;

    &:hover {
        opacity: 0.8;
    }
`;