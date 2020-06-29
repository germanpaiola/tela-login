import React from 'react';
import Card from '../components/card'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';
import PapelCard from '../components/papel-card';
import FormGroup from '../components/form-group'

class Vender extends React.Component {

    state = {
        id: JSON.parse(localStorage.getItem('_papel')).id,
        nome: JSON.parse(localStorage.getItem('_papel')).nome,
        quantidade: '',
        valor: '',
        mensagem: '',
        mensagemErro: ''
    }

    vendePapel = () => {
        Axios.delete('http://localhost:8080/api/papel/' + this.state.id, {
            nome: this.state.nome,
            quatidade: this.state.quantidade,
            valor: this.state.valor
        }).then(
            response => {
                Axios.get('http://localhost:8080/api/papel/' + JSON.parse(localStorage.getItem('_usuario_logado')).id).then(
                    response => {
                        localStorage.setItem('_papeis_user', JSON.stringify(response.data))
                    }
                )
                setTimeout( () => {
                    this.setState({mensagem: 'carregando'})
                    this.props.history.push('/papeis')}, 2000)  
            }
        ).catch(erro => {
            this.setState({mensagemErro: erro.response.data.message})
        })
    }

    cancela = () => {
        this.props.history.push('/papeis')
    }

    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-6" style = {{position : 'relative', left : '300px'}}>
                        <Card title={(JSON.parse(localStorage.getItem('_papel'))).nome}>
                            <div>
                                Quantidade:
                                <input type="number"
                                    placeholder="Digite a quantidade que deseja vender"
                                    id="inputEmail"
                                    className="form-control"
                                    name="email"
                                    onChange={(e) => this.setState({quantidade : e.target.value})}/>
                            </div>
                            <div>
                                Valor:
                                <input type="number"
                                    placeholder="Digite o valor que deseja vender"
                                    id="inputEmail"
                                    className="form-control"
                                    name="email"
                                    onChange={(e) => this.setState({valor : e.target.value})}/>
                            </div>
                            <div className = "row" style = {{position: 'relative', left : '5px', padding: '10px'}}>
                                <span className="badge badge-danger">{this.state.mensagemErro}</span>
                                <span className="badge badge-warning">{this.state.mensagem}</span>
                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-success" onClick={this.vendePapel}>Confirma</button>
                                <button type="button" className="btn btn-outline-danger" onClick={this.cancela}>Cancela</button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Vender)