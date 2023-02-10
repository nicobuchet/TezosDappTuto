import styled from "styled-components"

export const GridWrapper = styled.div`
    margin: 2rem 0;
`;

export const Cell = styled.div<{
    active?: boolean;
    player?: 1 | 2;
    hover?: 1 | 2;
}>`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.active ? 
        props.player === 1 ? props.theme.colors.primary : props.theme.colors.secondary :
        props.theme.colors.systemGrey
    };
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.hover === 1 ? props.theme.colors.primary : props.theme.colors.secondary};
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const MovesLabel = styled.div`
    margin-bottom: 0.5rem;
`;