import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';

export default () => {
    return (
        <Switch>
            <Route path='/' exact={true} 
                component={() => <Login/>}
            ></Route>
            <Route path='/login' exact={true} 
                component={() => <Login enter/>}
            ></Route>
            <Route path='/about' exact={true} 
                component={() => <About/>}
            ></Route>
            <Route path='/home' exact={true} 
                component={() => <Home/>}
            ></Route>
            <Redirect to="/" />
        </Switch>
    )
}