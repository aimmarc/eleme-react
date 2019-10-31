import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import BasicRouter from './route';
// @ts-ignore
import {Provider} from "react-redux";
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <BasicRouter/>
        </Provider>
    );
}

export default App;
