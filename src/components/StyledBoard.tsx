import styled from 'styled-components';

export const StyledBoard = styled.div`
    user-select: none;
    margin: auto;
    grid-area: game;
    border: 1px solid #2a52a4;
    @media only screen and (min-width: 767px) {
        margin-left: 140px;
    }
    .row {
        display: flex;
    }
`;
