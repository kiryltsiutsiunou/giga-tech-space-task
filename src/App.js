import { useCallback, useState } from 'react';
import Toggle from './components/Toggle/Toggle';
import ListDisplay from './components/ListDisplay/ListDisplay';
import './App.scss';

const  App = () => {
  const [displayList, setDisplayList] = useState([]);

  const onListItemToggle = useCallback((id) => {
    if (displayList.includes(id)) {
      setDisplayList(displayList.filter(item => item !== id));
    } else {
      setDisplayList(prevState => [...prevState, id]);
    }
  }, [displayList]);

  return (
    <div className="App">
      <div className='container'>
        <div className='appSidebar'>
          <Toggle
            displayList={displayList}
            onToggle={onListItemToggle}
          />
        </div>
        <div className='appBody'>
          <ListDisplay list={displayList} />
        </div>
      </div>
    </div>
  );
}

export default App;
