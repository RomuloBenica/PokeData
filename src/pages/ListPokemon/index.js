import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import TableList from '../../components/TableList';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../../components/Card';

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

  const getInfosPokemon = async (indexPokemon) => {
    await api.get(`pokemon/${indexPokemon}`).then(res => {
      // setImgPokemons(res.data.sprites.front_default);
      console.log(res.data.sprites.front_default);
      console.log(res.data.types[0].type.name);
      // console.log(res.data.sprites.front_default);
      // console.log(res.data.stats[3].base_stat);
      // console.log( res.data.stats[0].base_stat);
      console.log(res.data);
      setImgPokemon(res.data.sprites.front_shiny);
      setDefense(res.data.stats[3].base_stat);
      setLife(res.data.stats[0].base_stat);
      setPower(res.data.stats[1].base_stat);
      setAbilities([res.data.abilities[0].ability.name, res.data.abilities[1].ability.name])
      setName(indexPokemon);

      console.log(abilities[0], abilities[1]);
      console.log(`Vida: ${life}  Poder: ${power}  Defesa: ${defense}`);
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