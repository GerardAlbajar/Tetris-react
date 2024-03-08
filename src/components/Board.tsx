import Cell from './Cell';
import { BoardShape } from '../types';
import { StyledBoard } from './StyledBoard';

interface Props {
  currentBoard: BoardShape;
}

function Board({ currentBoard }: Props) {
  return (
    <StyledBoard>
      {currentBoard.map((row, rowIndex) => (
        <div className="row" key={`${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} type={cell} />
          ))}
        </div>
      ))}
    </StyledBoard>
  );
}

export default Board;
