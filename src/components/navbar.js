import React from 'react'
import NavItem from '../components/navitem'

function Navbar(){
    return(
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Aplicativo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
        <NavItem label = "Home" link="#"/>
        <NavItem label = "Login" link="#/login"/>
        <NavItem label = "Cadastro" link="#/cadastro"/>

        </ul>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</div>
    )
}

export default Navbar