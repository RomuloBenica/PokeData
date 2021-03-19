import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';

import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPageOutlined';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(3.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('dev-01', 305),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('romulo', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('deve-01', 437),
  createData('deve-01', 237),
  createData('deve-01', 375),
  createData('deve-01', 518),
  createData('deve-01', 392),
  createData('deve-01', 318),
  createData('deve-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('deve-01', 318),
  createData('deve-01', 360),
  createData('deve-01', 437),
  createData('deve-01', 452),
  createData('deve-01', 262),
  createData('deve-01', 159),
  createData('deve-01', 356),
  createData('deve-01', 408),
  createData('deve-01', 237),
  createData('deve-01', 375),
  createData('deve-01', 518),
  createData('deve-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('devo-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('devo-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('devo-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 452),
  createData('dev-01', 262),
  createData('dev-01', 159),
  createData('dev-01', 356),
  createData('dev-01', 408),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
  createData('dev-01', 237),
  createData('dev-01', 375),
  createData('dev-01', 518),
  createData('dev-01', 392),
  createData('dev-01', 318),
  createData('dev-01', 360),
  createData('dev-01', 437),
];

const useStyles2 = makeStyles({
  table: {
    width: '95%',
    height: '95%',
    maxWidth: 450,
  },
});

const ContainerList = styled.div`
  width: 450px;
  height:80%;
  max-height: 750px;

`;

const ListBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: #092CDC;
  border-radius: 8px;
  margin: 5px;
`;

const ListRows = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;

  width: 97%;
  height: 55px;
  border: 1px solid #092CDC;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
  overflow: hidden;
  box-shadow: 8px 3px 10px white;

  :hover{
    box-shadow: 0px 3px 5px white;
  }
  
`;

const ListCell = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  max-width:150px;
  height: 100%;
  color: white;
  font-weight: bolder;
`;

const InputTeste = styled.input`
  width: 100px;
  height: 25px;
  border: none;
  border-radius: 8px;
  margin: 0px 0px 0px 10px;
  color: #cccccc;
`;
const Label = styled.label`
  color: #fff;;
  margin: 5px;
  font-weight: bolder;
`;


export default function TableList(props) {
  const classes = useStyles2();
  const [page, setPage] = useState(0);
  const [valueFilter, setValueFilter] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [logs, setLogs] = useState(rows);
  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, logs.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setLogs(rows)
    console.log(valueFilter);
    let filtro = logs.filter(logs => logs.name == valueFilter);

    if(filtro != ''){
      setLogs(filtro)
      console.log(filtro)
    }
  }, [valueFilter])

  return (
    <ContainerList component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <ListBody>
          <ListHeader>
            <Label >Filtrar</Label>
            <InputTeste 
              type="text" 
              value={valueFilter}
              onChange={e => setValueFilter(e.target.value)}  
            ></InputTeste>
          </ListHeader>
          {(rowsPerPage > 0 && rowsPerPage <= rows.length
            ? logs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : logs
          ).map((log) => (
            <ListRows>
              <ListCell >
                {log.name}
              </ListCell>
              <ListCell >
                {log.calories}
              </ListCell>
            </ListRows>
          ))}

          {emptyRows > 0 && (
            <ListRows >
              <TableCell colSpan={6} />
            </ListRows>
          )}
        </ListBody>
        <TableFooter>
          <ListRows>
            <TablePagination
              style={{'color':'#fff'}}
              rowsPerPageOptions={[10, 50, 100 , { label: 'Todos', value: -1 }]}
              colSpan={3}
              count={logs.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                native: false,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </ListRows>
        </TableFooter>
      </Table>
    </ContainerList>
  );
}