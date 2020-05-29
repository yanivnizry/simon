import {COLORS} from '../utils/constants';

export const getOneRandomButton = () => {
  const rand = Math.floor(Math.random() * Math.floor(4));
  return COLORS[rand];
};

export const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
