import styled from 'styled-components';

export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-family: 'Pixel';
    header {
        margin-top: 20px;
        img {
            height: 50px;
        }
    }

    .game-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        @media only screen and (min-width: 768px) {
            gap: 20px;
        }

        .controls {
            min-width: 125px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            h2 {
                margin: 0;
            }
        }
    }
    footer {
        position: fixed;
        bottom: 30px;
        color: #fff;
        margin: auto;
        text-align: center;
    }
`;
