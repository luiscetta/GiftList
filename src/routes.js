import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import GiftList from './Pages/GiftList';
import Presence from './Pages/Presence';
import Contact from './Pages/Contact';
import Address from './Pages/Address';


export const Routes = () => (
    <Router>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gift-list" component={GiftList} />
                <Route path="/presence" component={Presence} />
                <Route path="/contact" component={Contact} />
                <Route path="/address" component={Address} />
        </Switch>
    </Router>
);