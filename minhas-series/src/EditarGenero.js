import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


const EditarGenero = ({match}) => {
 const[name,setName]= useState('')
 const[success,setSuccess]= useState(false)

 useEffect(() =>{

axios
.get('genres/' + match.params.id)
.then(res => {
    setName(res.data.name)
})
 }, [match.params.id])
const onChange = evt=> {
setName(evt.target.value)
}
const save = () =>{
axios.put('api/genres/' + match.params.id,{
name
})

.then(res => {
setSuccess(true)
})
}
if  (success){
return <Redirect to ='/generos'/>
}

return(
<div className= 'container'>
    <h1> editar Genero </h1>
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

export default EditarGenero