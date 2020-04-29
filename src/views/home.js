import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'



class Home extends React.Component{

    render(){
        return(
            <Card title="Bem vindo!">
            Bem vindo ao programa. Cadastre-se para começar.
            </Card>
        )
    }
}

export default Home