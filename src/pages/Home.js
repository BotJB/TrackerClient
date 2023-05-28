import React,{useEffect,useState} from 'react'
const Home = () => {
const [pokemon,setPokemon]=useState({
  name:'',
  img:'',
  abilites:[],
  height:'',
  weight:''
})
//to setup the search Item
const [search,setSearch]=useState('')

//function to handle 
const handleChange=(e)=>{
  setSearch(prev=>({
    [e.target.name]:e.target.value
  }))
}


const getData=async()=>{
  const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${search.search}`)
  const json=await response.json()
  console.log(json.abilities[0].ability.name)
  setPokemon({
    name:json.name,
    img:json.sprites.other.dream_world.front_default,
    abilities:json.abilities,
    height:json.height,
    weight:json.weight
  })
  console.log(json.abilities)
}

if(localStorage.getItem('user')){
  return (
    <div className='container'>
       <div className="search-bar">
   <input type="text" name="search" onChange={handleChange} />
   <input type="Submit" onClick={getData} />
   </div>
      
      <div className="wrapper">
     <div className="pokemon-container">
  <div className="pokemon-intro">
  <img src={pokemon.img} alt="" />
    <h3>Name:{pokemon.name}</h3>
    <p>Abilities:{pokemon.abilities?.map(item=>{
      return(
        <span>{item.ability.name}</span>
        
      )
    })}</p>
  </div>
    <div className="pokemon-info">
     <h4>More Info</h4>
     <p>Height: {pokemon.height}</p>
     <p>Weight:{pokemon.weight}</p>
     </div>
    </div>
   </div>
     
    </div>
  )
}
else {
  return(
    <h2>You need to Login first to access or incorrect login detials</h2>
  )
}





  
}

export default Home