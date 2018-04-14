import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
//Main Store Redux
import {rootStore} from './stores';


const rootRouter = (
    <Provider store={rootStore}>
        <BrowserRouter>
           
        </BrowserRouter>
    </Provider>
)

export default {rootRouter}