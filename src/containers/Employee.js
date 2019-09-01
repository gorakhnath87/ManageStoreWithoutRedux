import React, { useContext } from 'react';

import EmployeeItem from '../components/Products/EmployeeItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Employee = props => {
  const state = useStore()[0];
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <EmployeeItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          name={prod.name}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Employee;
