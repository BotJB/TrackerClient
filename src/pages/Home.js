import React,{useEffect,useState} from 'react'

const Home = () => {
const [pokemon,setPokemon]=useState({
  name:'',
  img:'',
  abilites:[],
  height:'',
  weight:''
})


useEffect(()=>{
const getData=async()=>{
  const response=await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  const json=await response.json()
  console.log(json)
  setPokemon({
    name:json.name,
    img:json.sprites.other.dream_world.front_default,
    abilites:json.abilities,
    height:json.height,
    weight:json.weight
  })
}
getData()
},[])
console.log(pokemon)
  return (
    <div>

     
    </div>
  )
}

export default Home