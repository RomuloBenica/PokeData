import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import LifeIcon from '../../assets/icons/coracao.png';
import AttackIcon from '../../assets/icons/battle.png';
import DefenseIcon from '../../assets/icons/escudo.png';

import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import './styles.css';
const dialogref = React.createRef()

const Image = styled.img`
  width:100px;
  height: 100px;

  border-radius: 30px
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;

`;

const DivData = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height:50px
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

`;

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function Card({open, name, img, defense, attack, life, abilities, onClose}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return( 
    <Dialog 
      open={open} 
      className="Dialog"
      ref={dialogref}
      fullScreen={fullScreen} 
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      hideBackdrop={true}
    >
      <DialogTitle id="draggable-dialog-title" style={{cursor:'move'}}>
        Pokemon {name}
      </DialogTitle>
        <DivContent>
          <Image src={img} />
          <DivData>
          <text>Ataque</text> <text><Icon src={AttackIcon} /> {attack}</text>
          </DivData>
          <DivData>
          <text>Vida</text> <text><Icon src={LifeIcon} /> {life}</text>
          </DivData>
          <DivData>
          <text>Defesa</text> <text><Icon src={DefenseIcon} />  {defense}</text>
          </DivData>
          <DivData>
            <text>Habilidades</text>
          </DivData>
          <DivData>
            <text>1 - {abilities[0]} </text>
          </DivData>
          <DivData>
            <text>2 - {abilities[1]} </text>
          </DivData>
        </DivContent>
        <DialogActions>
          <Button onClick={onClose} color="inherit">
            Sair
          </Button>
        </DialogActions>
    </Dialog>
  )
}


export default Card;