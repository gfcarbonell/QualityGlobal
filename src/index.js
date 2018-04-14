import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
//Main Store Redux
import {rootStore} from './js/redux/root/stores';
import {WebPortal} from './js/redux/web-portal/components/web-portal';
import "./css/index.css"


ReactDOM.render(
    <Provider store={rootStore}>
        <BrowserRouter>
            <WebPortal/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
