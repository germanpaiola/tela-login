import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from '../views/login'
import Cadastro from '../views/cadastro'
import Home from '../views/home'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="" component={Home}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas