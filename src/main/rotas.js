import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from '../views/login'
import Cadastro from '../views/cadastro'
import Papeis from '../views/papel'
import Home from '../views/home'
import Auth from '../views/auth'
import Vender from '../views/vender'
import Comprar from '../views/comprar'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/papeis" component={Papeis}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/vender" component={Vender}/>
                <Route path="/comprar" component={Comprar}/>
                <Route path="" component={Home}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas