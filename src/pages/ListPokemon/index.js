import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
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


function createData(name, type) {
  return { name, type};
}

function ListPokemon(){
  let listNames = []
  const [pokemons, setPokemons ] = useState([]);
  const [imgPokemons, setImgPokemons ] = useState('');
  const [dataList, setDataList] = useState([{name:'Nome', type:'Tipo'}]);

  const addNameList = () => {
    pokemons.map((pokemon, index) => {
      setDataList([
        ...dataList,
        dataList.push({ name:pokemon.name, type:index})
      ]);
    })
  }
  
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
    getImgPokemon();
  }, []);
  
  useEffect(() => {
    addNameList();
  }, [pokemons]);

  return(
    <Container>
        <TableList key="tabreList" value={dataList}></TableList>
    </Container>
  )
}

export default ListPokemon;