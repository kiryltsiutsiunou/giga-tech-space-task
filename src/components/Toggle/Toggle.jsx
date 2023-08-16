import { useCallback, useMemo } from 'react';
import { func, array } from 'prop-types';
import { Card } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import componentList from '../../helpers/componentList';
import './styles.scss';

const Toggle = ({ displayList, onToggle }) => {
  const handleChange = useCallback((value) => () => {
    onToggle(value)
  }, [onToggle]);

  const toggleItems = useMemo(() =>
    componentList.map(el =>
      <FormControlLabel
        key={el.id}
        label={el.title}
        className='toggleFormControl'
        control={
          <Checkbox
            label={el.title}
            checked={displayList.includes(el.id)}
            onChange={handleChange(el.id)}
          />
        }
      />
  ), [displayList, handleChange]);

  return (
    <Card className='toggleListContainer' elevation={12}>
      {toggleItems}
    </Card>
  )
}

Toggle.defaultProps = {
  onToggle: () => {},
}

Toggle.propTypes = {
  onToggle: func,
  displayList: array.isRequired
}

export default Toggle;
