import React, {useState,useEffect} from 'react'
import axios from 'axios'
//import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

const Generos =() =>{
    const [data,setData] = useState([])
    useEffect(() => {
    axios
    .get('genres/')
    .then(res=>{
    setData(res.data.data)
    })
},[])
 const deleteGenero = id =>{
axios.delete('genres/'+ id)
.then(res =>{
const filtrado = data.filter(item=> item.id!==id)
setData(filtrado)
})
 }
const renderizalinha = record =>{

return(
  
     <tr key={record.id}>
      <th scope="row">{record.id}</th>
      <td>{record.name}</td>
      <td><button className='btn btn-danger' onClick= {()=>deleteGenero(record.id)}>Remover</button></td>
      <Link to={'/generos/' + record.id} className= 'btn btn-warning'>Editar</Link>
    </tr>
)
}
//if(data.length===0){
 // return(
 //<div className= 'container'>
 //   <h1> Generos </h1>
  //  <div className='alert alert-warning' role ='alert'>
  //    A simples warning alart-check it out!
  //</div>
//</div>
//)
//}
 

    return (
    <div className= 'container'>
    <h1> Generos </h1>
    <div><Link to='/generos/novo'  className='btn btnprimary'>Novo </Link> </div>
     <table className='table table-dark'>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Açoes</th>
    </tr>
  </thead>
  <tbody>
     {data.map(renderizalinha)}
    </tbody>
     </table>
    </div>
    )
}
    export default Generos