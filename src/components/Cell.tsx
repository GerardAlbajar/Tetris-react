import { CellOptions } from '../types';
import { StyledCell } from './StyledCell';

interface Props {
  type: CellOptions;
}

function Cell({ type }: Props) {
  return <StyledCell className={`cell ${type}`}/>;
}

export default Cell;
