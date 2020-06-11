import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'
import PapelCard from '../components/papel-card';

var user = JSON.parse(localStorage.getItem('_usuario_logado'))
var title = 'Papeis do ' + user.nome;
console.log(user)
console.log(title)

class Papeis extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className = "col-md-6" style = {{position : 'relative', left : '300px'}}>
                    <Card title={title}>
                        <PapelCard nome={user.nome} 
                        quantidade={user.quantidade}
                        valor={user.valor}>
                        </PapelCard>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(Papeis)