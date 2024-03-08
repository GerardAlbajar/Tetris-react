import Board from './components/Board';
import StyledStartButton from './components/StyledButton';
import StyledScoreAndUpcomingWrapper from './components/StyledScoreAndUpcomingWrapper';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';
import { StyledApp } from './StyledApp';

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();
  
  return (
    <StyledApp>
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Tetris_logo.png" alt="tetris logo" />
        </header>
        <div className='game-wrapper'>
          {isPlaying ? <Board currentBoard={board} /> : <></>}
          <div className="controls">
            {isPlaying ? (
              <StyledScoreAndUpcomingWrapper>
                <div className='score'>
                  <h2>Score:</h2>
                  <h2>{score}</h2>
                </div>
                <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
              </StyledScoreAndUpcomingWrapper>
            ) : (
              <StyledStartButton onClick={startGame}><p>New Game</p></StyledStartButton>
            )}
          </div>
        </div>
        <footer>
            <span>Designed & Developed by Gerard Albajar</span>
        </footer>
    </StyledApp>
  );
}

export default App;
