import React from 'react';
import 'bootswatch/dist/cosmo/bootstrap.css'
import Rotas from './rotas'
import Navbar from '../components/navbar'


class App extends React.Component {

  render(){
    return(
      <>
      <Navbar />
      <div className="container" style ={{paddingTop : 20}}>
        <Rotas />
      </div>
      </>
    )
  }
}

export default App;
