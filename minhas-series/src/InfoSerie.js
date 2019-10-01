import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Badge} from 'reactstrap'

const InfoSerie = ({match}) => {
 const[form,SetForm]= useState({
  name:'' 
 })
 const[success,setSuccess]= useState(false)
 const[data,setData]= useState({})
 const [mode,setMode] =useState ('INFO')
 const[genres,setGenres] = useState([])
 const[genreId, setGenreId]= useState('')
useEffect(()=> {
 
axios.
  get('/series/' + match.params.id)
 .then(res=>{

     setData(res.data)
     SetForm(res.data)
    })
 
},[match.params.id])

useEffect(() => {

axios.
get('/genres')
.then(res=> {
setGenres(res.data.data)
const genres = res.data.data
const encontrado = genres.find(value=> data.genre=== value.name)
if(encontrado){
setGenres(encontrado.id)
}
})
},[data])

//custom
const masterHeder ={
 height: '50vh',
 minHeight: '500px',
 backgroundImage:`url('${data.background}')`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 bacckgroundRepeat: 'no-repeat'
}

const onChangeGenre = evt =>{

setGenreId(evt.target.value)

}




const onChange = field => evt=> {
SetForm({
    ...form,
     [field]: evt.target.value
})
    
}

const seleciona = value => () =>{
SetForm({
   ...form,
   status: value


})


}



const save = () =>{
axios
.put('/series/' + match.params.id,{
  ...form,
  genre_id: genreId
})
.then(res => {
setSuccess(true)
})
}
if  (success){
return <Redirect to ='/series'/>
}

return(
   <div>
   <header style= {masterHeder} >
        <div className='h-100' style={{backgroud: 'rgba(0,0,0,0,0,7)}'}}>
            <div className='h-100 container'>
          <div className='row h-100 align-items-center'>
            <div className='col-3'>
          <img alt={data.name} className='img-fluid img-thumbnail' src={data.poster}/>
         </div>
         <div className='col-8'> 
             <h1 className='font-weigth-light text-white'>{data.name}</h1>
             <div className = 'lead text-white'>
            { data.status === 'ASSISTIDO' && <Badge color= 'success'> Assistido</Badge>}
             {data.status === 'PARA_ASSISTIR' && <Badge color= 'warning'> Para assitir</Badge>} 
             Gênero:{data.genre}
             </div>
          <div>
            </div>
          </div>
          </div> 
       </div>   
   </div>
     </header>
     <div className= 'container'> 
        <button className ='btn btn-primary' onClick= {()=> setMode('EDIT')}>Editar</button>
 </div>
     {
     mode === 'EDIT' &&
  <div className='container'>
    <h1> Editar Série </h1>
   
    <button className ='btn btn-primary'  onClick= {()=> setMode('INFO')}>Cancelar</button>
<form>
<div className="form-group">
    <label htmlfor='name'>Nome</label>
    <input type="text" value= {form.name} onChange={onChange('name')}class="form-control" id='Nome do Gênero'/>
 </div>
 <div className="form-group">
    <label htmlfor='name'>Cometário</label>
    <input type="text" value= {form.comments} onChange={onChange('comments')}class="form-control" id='Nome do Gênero'/>
 </div>

 <div class='form-group'>
    <label for='exampleFormControlSelect1'>Gêneros</label>
    <select class='form-control' onChange={onChangeGenre} value={genreId} >
     {genres.map(genre=> <option key={genre.id} value={genres.id}>{genre.name}</option>)}
    
    </select>
       </div>
       <div class="form-check">
  <input class="form-check-input" type="radio" checked={form.status==='ASSISTIDO'} name="status" id="assistido" value="ASSISTIDO"  onChange={seleciona('ASSISTIDO')}/>
  <label class="form-check-label" htmFor="Assistido">
   Assistido
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" checked={form.status==='PARA_ASSISTIR'} name="status" id="paraAssistir" value="PARA_ASSISTIR"  onChange={seleciona('PARA_ASSISTIR')} />
  <label class="form-check-label" htmlFor="paraAssisir">
   Para Assistir
  </label>
</div>

<button type='button' onClick={save} className ='btn btn-primary'>Salvar </button> 

 </form>
</div>
     }
     </div>
)
}

export default InfoSerie