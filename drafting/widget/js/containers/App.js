import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Home from '../components/Home';
import {renderDevTools} from '../utils/devTools';

const store = configureStore();

export default React.createClass({
  render() {
    /* jshint ignore:start */
    return (

          <div id="main">

            {/* <Home /> is your app entry point */}
            <Provider store={store}>
              <Home />
            </Provider>

            {/* only renders when running in DEV mode */
              renderDevTools(store)
            }
          </div>
    );
    /* jshint ignore:end */
  }
});
