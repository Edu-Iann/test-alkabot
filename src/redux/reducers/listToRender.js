import { SHOULD_RENDER } from '../actions';

const INITIAL_STATE = {
  shouldRender: 'USUÁRIOS',
};

function listToRender(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOULD_RENDER:
      return {
        shouldRender: action.option,
      };
    default:
      return state;
  }
}

export default listToRender;
