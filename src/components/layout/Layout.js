import React from 'react';

import Sidebar from '../sidebar/Sidebar';
import Router from '../Router';

import {
    BrowserRouter,
    Route
} from 'react-router-dom';

function Layout() {
    return (
        <BrowserRouter>
            <Route render={(props) => {
                <div className="layout">
                    <Sidebar {...props} />
                </div>    
            }}/>
        </BrowserRouter>
    )
}

export default Layout
