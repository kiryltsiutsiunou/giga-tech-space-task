import { useState, useEffect, useMemo, useCallback } from 'react';
import { number } from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import componentList from '../../helpers/componentList';
import { fetchData } from '../../helpers/fetchData';
import './styles.scss';

const Wrapper = ({ id }) => {
  const [text, setText] = useState('');
  const { backgroundColor, title } = componentList.at(id);

  const handleFetchData = useCallback(async () => {
    const data = await fetchData(id);

    if(data) {
      setText(prevState => prevState+data);
    }
  }, [id]);


  useEffect(() => {
    const interval = setInterval(handleFetchData, 500);

    return () => {
      clearInterval(interval);
    };
  }, [handleFetchData, id]);

  const formattedText = useMemo(() => text.slice(-30), [text])

  return (
    <Card
      className='cardContainer'
      style={{ backgroundColor }}
      elevation={24}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" className='cardText'>
          {formattedText}
        </Typography>
      </CardContent>
    </Card>
  )
}

Wrapper.defaultProps = {
  id: 0
}

Wrapper.propTypes = {
  id: number
}

export default Wrapper;
