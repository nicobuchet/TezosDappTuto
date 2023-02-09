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