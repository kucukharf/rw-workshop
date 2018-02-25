import ApiClient from "../utils/apiClient";
const actions = {
  WORKS_INCREMENT: "WORKS_INCREMENT",
  WORKS_REQUEST: "WORKS_REQUEST",
  WORKS_RECEIVED: "WORKS_RECEIVED",
  WORKS_FAILED: "WORKS_FAILED",
  WORK_DETAIL_REQUEST: "WORK_DETAIL_REQUEST",
  WORK_DETAIL_RECEIVED: "WORK_DETAIL_RECEIVED",
  WORK_DETAIL_FAILED: "WORK_DETAIL_FAILED"
};

const initialState = {
  isFetching: false,
  hasError: false,
  items: [],
  current: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.WORKS_REQUEST:
      return { ...state, isFetching: true };

    case actions.WORK_DETAIL_REQUEST:
      return { ...state, isFetching: true };

    case actions.WORKS_INCREMENT:
      return {
        ...state,
        total: state.total + 1
      };

    case actions.WORKS_RECEIVED:
      const items = (action.response && action.response) || {};
      console.log("action", action.response);

      return {
        ...state,
        items: items,
        hasError: false,
        isFetching: false
      };

    case actions.WORK_DETAIL_RECEIVED:
      const current = (action.response && action.response) || {};
      console.log("action", action.response);
      return {
        ...state,
        hasError: false,
        isFetching: false,
        current: current
      };

    case actions.WORKS_FAILED:
      return {
        ...state,
        items: [],
        hasError: true,
        isFetching: false
      };

    case actions.WORK_DETAIL_FAILED:
      return {
        ...state,
        current: null,
        hasError: true,
        isFetching: false
      };

    default:
      return state;
  }
};

const getWorkDetails = function(item) {
  const url = `/api/work/` + item;
  return dispatch => {
    const onSuccess = result => {
      dispatch({ type: actions.WORK_DETAIL_RECEIVED, response: result });
    };
    const onError = error =>
      dispatch({ type: actions.WORK_DETAIL_FAILED, response: [] });

    dispatch({ type: actions.WORK_DETAIL_REQUEST });
    ApiClient.get(url, onSuccess, onError);
  };
};

const getAllWorks = function() {
  const url = `/api/works/all`;
  return dispatch => {
    const onSuccess = result => {
      dispatch({ type: actions.WORKS_RECEIVED, response: result });
    };
    const onError = error =>
      dispatch({ type: actions.WORKS_FAILED, response: [] });

    dispatch({ type: actions.WORKS_REQUEST });
    ApiClient.get(url, onSuccess, onError);
  };
};

export { initialState, actions, getWorkDetails, getAllWorks };
export default reducer;
