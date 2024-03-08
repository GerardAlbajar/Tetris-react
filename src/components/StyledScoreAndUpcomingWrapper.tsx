import styled from "styled-components";

const StyledScoreAndUpcomingWrapper = styled.div`
  display: none;
  color: #fff;
  font-size: 12px;

  .score {
    display: flex;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export default StyledScoreAndUpcomingWrapper