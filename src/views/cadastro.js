import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';


class Cadastro extends React.Component{

    state = {
        nome : "",
        email : "",
        senha : "",
        senha2 : ""
    }

    cadastrar = () => {
        Axios.post('http://localhost:8080/api/user', {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }).then( response => {
            console.log('salvo')
            this.props.history.push('/login')}
    )}

    cancelaCadastro = () => {
        this.props.history.push('/login')
    }

    render(){
        return(
            <div className = "row">
            <div className = "col-md-6" style = {{position : 'relative', left : '300px'}}>
            <Card title="Cadastro de Usuário">
                <div className="row"> 
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlfor="inputNome">
                                <input type="text"
                                id="inputNome"
                                className="form-control"
                                name="nome"
                                onChange={e => this.setState({nome : e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Email: *" htmlfor="inputEmail">
                                <input type="text"
                                id="inputEmail"
                                className="form-control"
                                name="email"
                                onChange={e => this.setState({email : e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlfor="inputSenha">
                                <input type="password"
                                id="inputSenha"
                                className="form-control"
                                name="senha"
                                onChange={e => this.setState({senha : e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Repita a Senha: *" htmlfor="inputSenha2">
                                <input type="password"
                                id="inputSenha2"
                                className="form-control"
                                name="senha2"
                                onChange={e => this.setState({senha2 : e.target.value})}/>
                            </FormGroup>
                            <button onClick={this.cadastrar} type="button" className="btn btn-outline-success">Confirma</button>
                            <button type="button" className="btn btn-outline-danger" onClick={this.cancelaCadastro}>Cancela</button>
                        </div>
                    </div>
                </div>
            </Card>
            </div>
            </div>
        )
    }
}

export default withRouter(Cadastro) 