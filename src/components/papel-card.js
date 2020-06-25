import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'

class PapelCard extends React.Component{
    render(){
        return(
            <div className='card md-3'>
                <div className='row' style={{position: 'relative', left: '15px'}}>
                    <h5 className='col=md-1' style = {{position: 'relative'}}>
                        Nome: 
                    </h5>
                    <h5 className='col=md-2' style = {{position: 'relative', left: '20px'}}>
                        {this.props.nome}
                    </h5>
                </div>
                <div className='row' style={{position: 'relative', left: '15px'}}>
                    <h5 className='col=md-1' style = {{position: 'relative'}}>
                        Quantidade: 
                    </h5>
                    <h5 className='col=md-2' style = {{position: 'relative', left: '20px'}}>
                        {this.props.quantidade}
                    </h5>
                </div>
                <div className='row' style={{position: 'relative', left: '15px'}}>
                    <h5 className='col=md-1' style = {{position: 'relative'}}>
                        Valor: 
                    </h5>
                    <h5 className='col=md-2' style = {{position: 'relative', left: '20px'}}>
                        {this.props.valor} 
                    </h5>
                </div> 
                <div>
                    <button type="button" className="btn btn-outline-success" onClick={this.autentica}>Comprar</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.prepareCadastrar}>Vender</button>
                </div>
            </div>
        )
    }
}

export default PapelCard;