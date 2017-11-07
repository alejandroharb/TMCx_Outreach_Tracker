import react from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
  return(
    <Provider store={store}>
      <div>
        Boiler Plate React App
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
