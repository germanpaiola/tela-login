import React from 'react';
import Card from '../components/card'
import {withRouter} from 'react-router-dom'
import PapelCard from '../components/papel-card';
import Axios from 'axios';

var user = JSON.parse(localStorage.getItem('_usuario_logado'))
var title = 'Papeis'
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
        if(JSON.parse(localStorage.getItem('_papeis_user')) != null){
            for(let i = 0; i < (JSON.parse(localStorage.getItem('_papeis_user'))).length; i++){
                buffer.push(
                    <div  key={i} value={i} onClick={((e) => this.selecionaPapel(e, i))} >
                        <PapelCard
                        nome={papeis[i].nome}
                        quantidade={papeis[i].quantidade}
                        valor={papeis[i].valor}>
                        </PapelCard>
                        <br></br>
                    </div>);
            }
        }else{
            this.props.history.push('')
        }
        return (
            buffer
        );
    }

    selecionaPapel = (e, i) => {
        localStorage.setItem('_papel', JSON.stringify(papeis[i]))
        this.props.history.push('/vender')
    }
    

    componentWillMount(){
        try {
            user = JSON.parse(localStorage.getItem('_usuario_logado'))
            papeis = JSON.parse(localStorage.getItem('_papeis_user'))
            title = 'Papeis - ' + user.nome;
            console.log(papeis)
        } catch (error) {
            this.props.history.push('')
        }

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