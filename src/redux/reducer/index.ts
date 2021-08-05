interface actionType {
  type: string;
  payload: Object;
}

const initialState = {};

export default function rootReducer(state = initialState, action: actionType) {
  switch (action.type) {
    default:
      return state;
  }
}
