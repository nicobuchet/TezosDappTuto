import styled from "styled-components"

export const GamePageWrapper = styled.div`
    position: relative;
    top: 70px;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
`;

export const PlayersWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const PlayerLabel = styled.div<{
    align?: string;
}>`
    font-size: 26px;
    text-align: ${(props) => props.align || "left"};
    font-weight: 600;
`;

export const VSLabel = styled.div`
    font-size: 26px;
    font-weight: 700;
`;

export const StatusLabel = styled.div<{
    color?: string;
}>`
    font-size: 36px;
    font-weight: bold;
    color: ${(props) => props.color || "black"};
`;