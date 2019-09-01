import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex(p => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus
      };
      return { products: updatedProducts };
    }
  };
  initStore(actions, {
    products: [
      {
        id: 'p1',
        title: 'Mr.',
        name: 'Jack',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Mr.',
        name: 'Gorakh',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Mr.',
        name: 'Ram',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Mr',
        name: 'Jhon',
        isFavorite: false
      }
    ]
  });
};

export default configureStore;