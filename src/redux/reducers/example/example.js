import {handleActions} from 'redux-actions';
import {
  fetchExampleStart,
  fetchExampleSuccess,
  fetchExampleError,
} from '../../actions/example';

const ExampleInitialState = {
  exampleData: null,
  fetchExampleIsLoading: false,
  fetchExampleError: null,
};

export default handleActions(
  {
    [fetchExampleStart]: (state) => ({
      ...state,
      fetchExampleIsLoading: true,
      fetchExampleError: null,
    }),
    [fetchExampleSuccess]: (state, action) => ({
      ...state,
      exampleData: action.payload,
      fetchExampleIsLoading: false,
    }),
    [fetchExampleError]: (state, action) => ({
      ...state,
      fetchExampleError: action.error,
      fetchExampleIsLoading: false,
    }),
  },
  ExampleInitialState,
);
