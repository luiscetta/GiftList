import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import GiftList from './Pages/GiftList';
import Presence from './Pages/Presence';
import Contact from './Pages/Contact';


export const Routes = () => (
    <Router>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/GiftList" component={GiftList} />
                <Route path="/Presence" component={Presence} />
                <Route path="/Contact" component={Contact} />
        </Switch>
    </Router>
);