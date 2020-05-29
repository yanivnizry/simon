// redux/reducer.js
import {ACTION_TYPES} from '../utils/constants';

const initialState = {
  status: ACTION_TYPES.STATUS_FINISH,
  sequence: '',
  userInput: '',
  results: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.STATUS_START:
      return {
        ...state,
        status: ACTION_TYPES.STATUS_START,
      };
    case ACTION_TYPES.STATUS_PLAY:
      return {
        ...state,
        status: ACTION_TYPES.STATUS_PLAY,
      };
    case ACTION_TYPES.STATUS_ASK_NAME:
      return {
        ...state,
        status: ACTION_TYPES.STATUS_ASK_NAME,
      };
    case ACTION_TYPES.STATUS_USER_INPUT:
      return {
        ...state,
        status: ACTION_TYPES.STATUS_USER_INPUT,
      };
    case ACTION_TYPES.STATUS_FINISH:
      return {
        ...state,
        status: ACTION_TYPES.STATUS_FINISH,
        userInput: '',
        sequence: '',
      };
    case ACTION_TYPES.ADD_SEQ:
      return {
        ...state,
        sequence: state.sequence + action.key,
      };
    case ACTION_TYPES.RESET_SEQ:
      return {
        ...state,
        sequence: '',
      };
    case ACTION_TYPES.ADD_INPUT:
      return {
        ...state,
        userInput: state.userInput + action.key,
      };
    case ACTION_TYPES.RESET_INPUT:
      return {
        ...state,
        userInput: '',
      };
    case ACTION_TYPES.TURN_ON:
      return {
        ...state,
        turnOn: action.key,
      };
    case ACTION_TYPES.TURN_ALL_OFF:
      return {
        ...state,
        turnOn: '',
      };
    case ACTION_TYPES.ADD_RESULT:
      return {
        ...state,
        results: [...state.results, {name: action.name, score: action.score}],
      };
    default:
      return state;
  }
}
