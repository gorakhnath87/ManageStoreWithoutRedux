import React from 'react';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './EmployeeItem.css';

const EmployeeItem = React.memo(props => {
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () =>  {
    // toggleFav(props.id);
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="employee-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.name}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'FavoriteNo' : 'FavoriteYes'}
        </button>
      </div>
    </Card>
  );
});

export default EmployeeItem;
