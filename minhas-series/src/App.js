
import React  from 'react'
import NovoGenero from './NovoGenero'
import Generos from './Generos'
import EditarGenero from './EditarGenero'
import Header from  './Header'
import Series from './Series'
import NovaSerie from './NovaSerie'
import {
BrowserRouter as Router,
Route,Switch
} from 'react-router-dom'
import InfoSerie from './InfoSerie'



const Home =() =>{
return <h1> Home </h1>
}



//const Generos =() => {
 // return <h1> Generos </h1>
 // }

function App() {

  return(
    <Router>
    <div>
  
    <Header/>
    <Switch>
      <Route path='/' exact component={Home} />
        <Route path='/generos' exact component={Generos} />
        <Route path='/generos/novo' exact component={NovoGenero} />
        <Route path='/generos/:id' exact component={EditarGenero} />
        <Route path='/series' exact component={Series}/>
        <Route path='/series/novo' exact component={NovaSerie}/>
        <Route path='/series/:id' exact component={InfoSerie} />
       </Switch>
      </div>
    </Router>
  )
}

export default App;
