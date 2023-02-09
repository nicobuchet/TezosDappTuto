import styled from "styled-components"

export const HomePageWrapper = styled.div`
    position: relative;
    top: 70px;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ActionButton = styled.button<{
    backgroundColor?: string;
}>`
    margin: 2rem 0 1rem 0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: none;
    background-color: ${(props) => props.backgroundColor || props.theme.colors.systemGrey};
    font-size: 20px;
    font-family: inherit;
    border-radius: 10px;
    color: ${(props) => props.backgroundColor ? "white" : "black"};
`;