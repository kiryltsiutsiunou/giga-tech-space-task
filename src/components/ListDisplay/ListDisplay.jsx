import { useMemo } from 'react';
import { arrayOf, number } from 'prop-types';
import Wrapper from "../Wrapper/Wrapper";
import './styles.scss';

const ListDisplay = ({ list }) => {
  const displayedList = useMemo(() =>
    list.map(id => <Wrapper key={id} id={id} />
  ), [list]);

  return (
    <div className='ListDisplayWrapper'>
      {displayedList}
    </div>
  )
};

ListDisplay.defaultProps = {
  list: []
}

ListDisplay.propTypes = {
  list: arrayOf(number)
}

export default ListDisplay;
