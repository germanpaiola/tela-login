import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'



class Home extends React.Component{

    render(){
        return(
            <div className = "row">
                <div className = "col-md-6" style = {{position : 'relative', left : '300px'}}>
                    <Card title="Bem vindo!">
                    Bem vindo ao programa. Cadastre-se para começar.
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter (Home)