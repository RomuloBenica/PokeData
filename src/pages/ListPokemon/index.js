import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import TableList from '../../components/TableList';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../../components/Card';

import Container from '../../components/Container';

import api from '../../services/api';


function ListPokemon(){

  const [namesPokemons, setNamesPokemons ] = useState([]);
  const [loadType, setLoadType] = useState(true);
  const [openCard, setOpenCard] = useState(false);
  const [imgPokemon, setImgPokemon] = useState('');
  const [defense, setDefense] = useState('');
  const [life, setLife] = useState('');
  const [power, setPower] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [abilities, setAbilities] = useState([])
  const [typesPokemon, setTypesPokemon ] = useState([]);
  const [dataList, setDataList] = useState([]);

  const addNameList = () => {
    namesPokemons.map((pokemon) => {
      setDataList([
        ...dataList,
        dataList.push({ name:pokemon.name, type:''})
      ]);
    })
  }
  
  const getNamesPokemon = async () => {
    await api.get('pokemon/?limit=800').then(res => {
      console.log(res.data.results.length);
      setNamesPokemons(res.data.results);
      toast.info(`Listagem de nomes concluida !`, {
        position: "top-center",
        toastId: "loadingName",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        autoClose: 3000,
        onClose: () => getTypesPokemon(res.data.results.length)
      });
      
    }).catch(error => {
      console.log(`Erro ao pegar lista de pokemons ${error}`);
    })
  }
  
  const createDataList = () => {
    for(let i = 0; i < dataList.length; i++){
      dataList[i].type = typesPokemon[i];
    }
    setLoadType(false);//fica falso quando acaba de buscar o dados e criar nova lista, useEffect esta monitorando para atualizar lista com os types
  }

  const getTypesPokemon = async (qtd) => {
    toast.info(`Verificando tipo de cada pokemon ...`, {
      position: "top-center",
      toastId: "loadingTypes",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    let type;
    for(let i = 0 ; i <= qtd+1; i++){
      await api.get(`pokemon/${i+1}`).then(res => {
        type = res.data.types[0].type.name;
        setTypesPokemon(typesPokemon.push(res.data.types[0].type.name));
      }).catch(error => {
        console.log(`Erro ao pegar informaçoes do pokemons ${error}`);
      })
      toast.update("loadingTypes", { 
        render: `Verificando tipo de cada pokemon ...${type} !`,
        type: toast.TYPE.INFO,
        position: "top-center",
        autoClose: 4000,
      })
    }
    toast.update("loadingTypes", { 
      render: `Registrados com sucesso !`,
      type: toast.TYPE.INFO,
      position: "top-center",
      autoClose: 4000,
    })
    if(parseInt(qtd) <= typesPokemon.length){
      createDataList();
    }
  }

  const getInfosPokemon = async (indexPokemon) => {
    await api.get(`pokemon/${indexPokemon}`).then(res => {
      setImgPokemon(res.data.sprites.front_shiny);
      setDefense(res.data.stats[3].base_stat);
      setLife(res.data.stats[0].base_stat);
      setPower(res.data.stats[1].base_stat);
      setAbilities([res.data.abilities[0].ability.name, res.data.abilities[1].ability.name])
      setName(indexPokemon);
      setOpenCard(true);
    }).catch(error => {
      console.log(`Erro ao pegar lista de pokemons ${error}`);
    })
  }

  const handleCloseCard = () => {
    return setOpenCard(false);
  }
  useEffect(() => {
    getNamesPokemon();
  }, []);
  
  useEffect(() => {
    addNameList();
  }, [namesPokemons]);

  return(
    <>
      <ToastContainer draggablePercent={60} />
      <Container>
        <TableList key="tabreList" value={dataList} loadType={loadType} onClick={getInfosPokemon}></TableList>
      </Container>
      <Card 
        open={openCard}
        img={imgPokemon}
        name={name}
        abilities={abilities}
        defense={defense}
        attack={power}
        life={life}
        onClose={handleCloseCard}></Card>
    </>
  )
}

export default ListPokemon;