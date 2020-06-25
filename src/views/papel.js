import React from 'react';
import Card from '../components/card'
import {withRouter} from 'react-router-dom'
import PapelCard from '../components/papel-card';
import Axios from 'axios';

var user = JSON.parse(localStorage.getItem('_usuario_logado'))
var title = 'Papeis do ' + user.nome;
var papeis = [];
var buffer = [];


class Papeis extends React.Component{

    papel = {
        nome : "",
        quantidade : "",
        valor : ""
    }

    imprimePapeis() {
        buffer = []
        for(var i = 0; i < (JSON.parse(localStorage.getItem('_papeis_user'))).length; i++){
            buffer.push(
                <div  key={i} >
                    <PapelCard
                    nome={papeis[i].nome}
                    quantidade={papeis[i].quantidade}
                    valor={papeis[i].valor}>
                    </PapelCard>
                    <br></br>
                </div>);
        }
        return (
            buffer
        );
    }

    componentWillMount(){
        user = JSON.parse(localStorage.getItem('_usuario_logado'))
        papeis = JSON.parse(localStorage.getItem('_papeis_user'))
        title = 'Papeis do ' + user.nome;
        console.log(papeis)
    }


    render(){
        return(
            <div className='row'>
                <div className = "col-md-6" style = {{position : 'relative', left : '300px'}} >
                    <Card title={title}>
                        <div>
                            {this.imprimePapeis()}
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(Papeis)