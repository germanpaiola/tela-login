import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';



class Login extends React.Component{

    state = {
        nome : "",
        senha : "",
        email : "",
        mensagemErro: null
    }

    user = {
        nome : "user",
        senha : "123",
        email : "user@email.com"
    }

    autentica = async () => {
            Axios.post('http://localhost:8080/api/user/autenticar', {
                email: this.state.email,
                senha: this.state.senha
            }).then( response => {
                localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
                this.props.history.push('/papeis')
            }).catch(erro => {
                this.setState({mensagemErro: erro.response.data})
            })
    }

    limpa = () => {
        
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro')
    }

    render(){
        return(
            <div className = "row">
                <div className = "col-md-6" style = {{position : 'relative', left : '300px'}}>
                    <Card title="Login">
                        <FormGroup label="Email" htmlFor="exampleInputEmail">
                            <input type="text"
                                placeholder="exemplo@email.com"
                                id="inputEmail"
                                className="form-control"
                                name="email"
                                onChange={(e) => this.setState({email : e.target.value})}/>
                        </FormGroup>
                        <FormGroup label="Senha" htmlFor="exampleInputPassword">
                            <input type="password"
                                placeholder="digite sua senha"
                                id="inputSenha"
                                className="form-control"
                                name="senha"
                                onChange={(e) => this.setState({senha : e.target.value})}/>
                        </FormGroup>
                        <div className = "row" style = {{position: 'relative', left : '5px', padding: '10px'}}>
                        <span class="badge badge-danger">{this.state.mensagemErro}</span>
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-success" onClick={this.autentica}>Confirma</button>
                            <button type="button" className="btn btn-outline-danger" onClick={this.prepareCadastrar}>Cadastrar</button>
                        </div>
                        
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)