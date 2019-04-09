export const TEST = 'TEST';

const initialState = {
  test: true,
};

const mainScreen = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: action.test,
      };
    default:
      return state;
  }
};

export default mainScreen;
