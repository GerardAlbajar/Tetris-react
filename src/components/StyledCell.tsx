import styled from 'styled-components';

export const StyledCell = styled.div`
  width: 27px;
  aspect-ratio: 1;
  border: 2px solid #2a52a4;
    &.I {
        background-color: rgba(80, 227, 230, 0.8);
    }
    &.J {
        background-color: rgba(36,95,223, 0.8);
    }
    &.L {
        background-color: rgba(223,173,36, 0.8);
    }
    &.O {
        background-color: rgba(223,217,36, 0.8);
    }
    &.S {
        background-color: rgba(48,211,56, 0.8);
    }
    &.T {
        background-color: rgba(132,61,198, 0.8);
    }
    &.Z {
        background-color: rgba(227,78,78, 0.8);
    }
    &.hidden {
        visibility: hidden;
    }
    &.Empty {
        background-color: #292b79;
    }
`;
