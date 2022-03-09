const initialState = {
  trending: {},
  count: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_TRENDING": {
      const data = action.payload;
      return {
        ...state,
        trending: data,
      };
    }

    default:
      return state;
  }
};
