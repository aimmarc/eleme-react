import React from 'react';
import {Route} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/index';
import Order from '../pages/Order/index';
import My from '../pages/My/index';


export const ChildRouter = (props: any) => (
    <MainLayout {...props}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/index" component={Home}/>
        <Route path="/index/home" component={Home}/>
        <Route path="/index/order" component={Order}/>
        <Route path="/index/my" component={My}/>
    </MainLayout>
);

