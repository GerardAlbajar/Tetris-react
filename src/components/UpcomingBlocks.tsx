import { Block, SHAPES } from '../types';
import { StyledCell } from './StyledCell';
import { StyledUpcomingBlocks } from './StyledUpcomingBlocks';

interface Props {
  upcomingBlocks: Block[];
}

function UpcomingBlocks({ upcomingBlocks }: Props) {
  return (
    <StyledUpcomingBlocks>
      {upcomingBlocks.map((block, blockIndex) => {
        const shape = SHAPES[block].shape.filter((row) =>
          row.some((cell) => cell)
        );
        return (
          <div key={blockIndex}>
            {shape.map((row, rowIndex) => {
              return (
                <div key={rowIndex} className="row">
                  {row.map((isSet, cellIndex) => {
                    const cellClass = isSet ? block : 'hidden';
                    return (
                      <StyledCell key={cellIndex} className={`cell ${cellClass}`}/>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </StyledUpcomingBlocks>
  );
}

export default UpcomingBlocks;
