import React from 'react';
import Card from '../components/card'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';

var user = JSON.parse(localStorage.getItem('_usuario_logado'))

class Auth extends React.Component{

    buscaPapeis = () => {
        Axios.get('http://localhost:8080/api/papel/' + user.id).then(
            response => {
                localStorage.setItem('_papeis_user', JSON.stringify(response.data))
                console.log(user.id)
            }
        )
    }

    verPapeis = () => {
        this.props.history.push('/papeis')
    }

    render(){
        this.buscaPapeis();
        return(
            <div className = "row">
                <div className = "col-md-6" style = {{position : 'relative', left : '300px'}} onClick={this.verPapeis}>
                    Bem vindo! Clique aqui para visualizar os papéis!
                </div>
            </div>
        )
    }
}

export default withRouter(Auth)