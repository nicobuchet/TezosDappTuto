import styled from "styled-components"

export const StatisticsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StatWrapper = styled.div<{
    borderRight?: boolean;
}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    min-width: 100px;
    padding: 0.5rem 0;
    border-right: ${(props) => props.borderRight && ("1px solid " + props.theme.colors.systemGrey)};
`;

export const StatTitle = styled.h3`
    margin: 0;
`;

export const StatFigure = styled.div<{
    color?: string;
}>`
    color: ${(props) => props.color || "black"};
    font-size: 25px;
    font-weight: bold;
`;