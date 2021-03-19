import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Button from '../../components/Button';
import TableList from '../../components/TableList';

import imgBackground from '../../assets/img/21019.jpg';
import api from '../../services/api';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display:flex;
  flex-direction:column;
  background: url(${imgBackground});
  background-size: auto;
  
  background-color: #cccccc;
`;

// const DivList = styled.div`
//   width: 400px;
//   height: 600px;
//   overflow: hidden;
//   background-color: #cccccc;
//   margin:50px 0 0 60vw;
// `;


function ListPokemon(){
  const [pokemons, setPokemons ] = useState([]);
  const [imgPokemons, setImgPokemons ] = useState('');

  const getPokemon = async () => {
    await api.get('pokemon').then(res => {
      console.log(res.data.results);
      setPokemons(res.data.results);
    }).catch(error => {
      console.log(`Erro ao pegar lista de pokemons ${error}`);
    })
  }
  
  const getImgPokemon = async (index) => {
    await api.get(`pokemon/150/`).then(res => {
      console.log(res.data.sprites.front_default);
      setImgPokemons(res.data.sprites.front_default);
    }).catch(error => {
      console.log(`Erro ao pegar lista de pokemons ${error}`);
    })
  }

  useEffect(() => {
    getPokemon();
    getImgPokemon()
  }, []);

  return(
    <Container>
        {/* {
          pokemons.map((pokemon, index) => {
            console.log(pokemon.name);
            return ( 
            <div>
              <text>{pokemon.name}</text>
              <img src={imgPokemons}></img>
            </div>)
          })
        } */}
        <TableList value={pokemons}></TableList>
    </Container>
  )
}

export default ListPokemon;