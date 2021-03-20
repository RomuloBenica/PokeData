import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import TableList from '../../components/TableList';
import { ToastContainer, toast } from 'react-toastify';

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
  const [namesPokemons, setNamesPokemons ] = useState([]);
  const [loadType, setLoadType] = useState(true);
  const [imgPokemons, setImgPokemons ] = useState('');
  const [typesPokemon, setTypesPokemon ] = useState([]);
  const [dataList, setDataList] = useState([]);

  const addNameList = () => {
    namesPokemons.map((pokemon, index) => {
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
      toast.info(`Lisatem de nome pokemons concluida !`, {
        position: "top-center",
        toastId: "loadingName",
        autoClose: false,
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
    console.log("data list >>>");
    console.log(dataList);
    console.log(typesPokemon.length)
    for(let i = 0; i < typesPokemon.length-1; i++){
      dataList[i].type = typesPokemon[i];
      console.log(typesPokemon[i])
    }
    setLoadType(false);//fica falso quando acaba de buscar o dados e criar nova lista, useEffect esta monitorando para atualizar lista com os types
    console.log(dataList);
  }

  const getTypesPokemon = async (qtd) => {
    console.log(parseInt(qtd));
    toast.info(`Verificando tipo de cada um...`, {
      position: "top-center",
      toastId: "loadingTypes",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    let type 
    for(let i = 0 ; i <= qtd+1; i++){
      await api.get(`pokemon/${i+1}`).then(res => {
        // setImgPokemons(res.data.sprites.front_default);
        console.log(res.data.sprites.front_default);
        console.log(res.data.types[0].type.name);
        console.log(res.data);
        type = res.data.types[0].type.name;
        setTypesPokemon(typesPokemon.push(res.data.types[0].type.name));
        console.log(typesPokemon.length);
      }).catch(error => {
        console.log(`Erro ao pegar informaçoes do pokemons ${error}`);
      })
      toast.update("loadingTypes", { 
        render: `Verificando tipo de cada um ${type} !`,
        type: toast.TYPE.SUCCESS,
        position: "top-center",
        autoClose: 4000,
      })
    }
    toast.update("loadingTypes", { 
      render: `Registrados com sucesso !`,
      type: toast.TYPE.SUCCESS,
      position: "top-center",
      autoClose: 4000,
    })
    if(parseInt(qtd) <= typesPokemon.length){
      console.log('e maior ou igual ******')
      console.log(parseInt(qtd), typesPokemon.length)
      createDataList();
    }
  }

  const getInfosPokemon = (indexPokemon) => {
    alert(indexPokemon);
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
    </>
  )
}

export default ListPokemon;