import { useState, useEffect } from 'react';

let mainState = {};
let eventListeners = [];
let actions = {};

export const useStore = (shouldUpdate=true) => {
  const setState = useState(mainState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](mainState, payload);
    mainState = { ...mainState, ...newState };

    for (const listener of eventListeners) {
      listener(mainState);
    }
  };

  useEffect(() => {
    if(shouldUpdate){
    eventListeners.push(setState);
    }

    return () => {
      if(shouldUpdate){
      eventListeners = eventListeners.filter(li => li !== setState);
      }
    };
  }, [setState,shouldUpdate]);

  return [mainState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    mainState = { ...mainState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
