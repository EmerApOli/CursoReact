import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


const NovaSerie = () => {
 const[name,setName]= useState('')
 const[success,setSuccess]= useState(false)
const onChange = evt=> {
setName(evt.target.value)
}
const save = () =>{
axios.post('/series/',{
name
})

.then(res => {
setSuccess(true)
})
}
if  (success){
return <Redirect to ='/series'/>
}

return(
<div className= 'container'>
    <h1> Novo Genero </h1>
<form>
<div className="form-group">
    <label htmlfor='name'>Nome</label>
    <input type="text" value= {name} onChange={onChange}class="form-control" id='Nome do Gênero'/>
 </div>
<button type='button' onClick={save} className ='btn-btn-primary'>Salvar </button> 

 </form>


</div>
)
}

export default NovaSerie