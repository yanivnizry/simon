// redux/action.js
import {ACTION_TYPES} from '../utils/constants';

//game status
export const start = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.STATUS_START,
  });
};
export const play = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.STATUS_PLAY,
  });
};
export const startUserInput = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.STATUS_USER_INPUT,
  });
};
export const askName = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.STATUS_ASK_NAME,
  });
};
export const finish = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.STATUS_FINISH,
  });
};

export const addToResults = ({name, score}) => dispatch => {
  dispatch({
    type: ACTION_TYPES.ADD_RESULT,
    name,
    score,
  });
};

export const addToSequence = key => dispatch => {
  dispatch({
    type: ACTION_TYPES.ADD_SEQ,
    key,
  });
};
export const resetSequence = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.RESET_SEQ,
  });
};
export const addToUserInput = key => dispatch => {
  dispatch({
    type: ACTION_TYPES.ADD_INPUT,
    key,
  });
};
export const resetUserInput = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.RESET_INPUT,
  });
};
export const turnOn = key => dispatch => {
  dispatch({
    type: ACTION_TYPES.TURN_ON,
    key,
  });
};
export const turnAllOff = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.TURN_ALL_OFF,
  });
};
