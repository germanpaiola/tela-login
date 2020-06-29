import React from 'react';
import Card from '../components/card'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';
import PapelCard from '../components/papel-card';
import FormGroup from '../components/form-group'
import login from './login';

class Comprar extends React.Component{

    state = {
        id: JSON.parse(localStorage.getItem('_usuario_logado')).id,
        nome: '',
        quantidade: '',
        valor: '',
        mensagem: '',
        mensagemErro: ''
    }

    cancela = () => {
        this.props.history.push('/papeis')
    }

    compraPapel = () => {
        Axios.post('http://localhost:8080/api/papel/comprar', {
            user: this.state.id,
            nome: this.state.nome,
            quantidade: this.state.quantidade,
            valor: this.state.valor
        }).then( response => {
            Axios.get('http://localhost:8080/api/papel/' + JSON.parse(localStorage.getItem('_usuario_logado')).id).then(
                response => {
                    localStorage.setItem('_papeis_user', JSON.stringify(response.data))
                }
            )
            this.setState({mensagem: 'Comprado com sucesso'})
            setTimeout( () => {
                this.props.history.push('/papeis')}, 2000)  
        }).catch(erro => {
            this.setState({mensagemErro: 'erro inesperado'})
        })
    }

    render(){
        return(
            <div className='row'>
                <div className = "col-md-6" style = {{position : 'relative', left : '300px'}} >
                    <Card title='Comprar novos papéis'>
                        <FormGroup label="Nome">
                            <input type="text"
                            placeholder="Nome do papel"
                            id="inputNome"
                            className="form-control"
                            name="nome"
                            onChange={(e) => this.setState({nome : e.target.value})}/>
                        </FormGroup>
                        <FormGroup label="Quantidade">
                            <input type="number"
                            placeholder="Quantidade de papéis"
                            id="inputQuant"
                            className="form-control"
                            name="quantidade"
                            onChange={(e) => this.setState({quantidade : e.target.value})}/>
                        </FormGroup>
                        <FormGroup label="Valor">
                            <input type="number"
                            placeholder="Valor de cada papel"
                            id="inputValor"
                            className="form-control"
                            name="valor"
                            onChange={(e) => this.setState({valor : e.target.value})}/>
                        </FormGroup>
                        <div className = "row" style = {{position: 'relative', left : '5px', padding: '10px'}}>
                            <span className="badge badge-danger">{this.state.mensagemErro}</span>
                            <span className="badge badge-warning">{this.state.mensagem}</span>
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-success" onClick={this.compraPapel}>Confirma</button>
                            <button type="button" className="btn btn-outline-danger" onClick={this.cancela}>Cancela</button>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(Comprar)