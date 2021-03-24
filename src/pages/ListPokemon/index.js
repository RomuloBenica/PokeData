import React, { useEffect, useState } from 'react';
import TableList from '../../components/TableList';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../../components/Card';

import Container from '../../components/Container';

import api from '../../services/api';


function ListPokemon(){

  const [namesPokemons, setNamesPokemons ] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [imgPokemon, setImgPokemon] = useState('');
  const [defense, setDefense] = useState('');
  const [life, setLife] = useState('');
  const [power, setPower] = useState('');
  const [name, setName] = useState('');
  const [abilities, setAbilities] = useState([])
  const [dataList, setDataList] = useState([]);

  const addNameList = (names) => {
    names.map((pokemon) => {
      setDataList([
        ...dataList,
        dataList.push({ name:pokemon.name})
      ]);
    })
  }

  const getNamesPokemon = () => {
    api.get('pokemon/?limit=800').then(res => {
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
      });
    }).catch(error => {
      console.log(`Erro ao pegar lista de pokemons ${error}`);
    })
  }
  
  const getInfosPokemon = (indexPokemon) => {
    api.get(`pokemon/${indexPokemon}`).then(res => {
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
    addNameList(namesPokemons);
  }, [namesPokemons]);

  return(
    <>
      <ToastContainer draggablePercent={60} />
      <Container>
        <TableList 
          key="tabreList" 
          value={dataList} 
          onClick={getInfosPokemon}
        ></TableList>
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