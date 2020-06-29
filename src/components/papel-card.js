import React from 'react';

class PapelCard extends React.Component{
    render(){
        return(
            <div className='card border-warning mb-3'>
                <div className='row' style={{position: 'relative', left: '15px'}}>
                    <h5 className='col=md-1' style = {{position: 'relative'}}>
                    </h5>
                    <h5 className='col=md-2' style = {{position: 'relative', textTransform: 'uppercase', fontWeight: ''}}>
                        {this.props.nome}
                    </h5>
                </div>
                <table className="table table-hover">
                    <tr className="table-light">
                        <td>Quantidade: </td>
                        <td>{this.props.quantidade}</td>
                        <td>Cotação: </td>
                        <td>0,00</td>
                    </tr>
                    <tr className="table-light">
                        <td>Valor: </td>
                        <td>{this.props.valor}</td>
                        <td>Total: </td>
                        <td>0,00</td>
                    </tr>
                </table>
            </div> 
        )
    }
}

export default PapelCard;