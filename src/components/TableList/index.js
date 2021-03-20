import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContainerList from '../ContainerList';
import ListBody from '../ListBody';
import ListHeader from '../ListHeader';
import ListRows from '../ListRows';
import ListCell from '../ListCell';
import Input from '../Input';
import Label from '../Label';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPageOutlined';

import './styles.css';

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

const useStyles2 = makeStyles({
  table: {
    width: '95%',
    height: '95%',
    maxWidth: 450,
  },
});

export default function TableList(props) {
  const classes = useStyles2();
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState(props.value);
  const [valueFilter, setValueFilter] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [dataList, setDataList] = useState([]);
  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, pokemons.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setDataList(pokemons)
    // valueFilter convertido para low case para melhorar a usabilidade de quem acessar por celular
    let filter = dataList.filter(logs => (logs.name === valueFilter.toLowerCase() || logs.type === valueFilter.toLowerCase()));
    if(filter != ''){
      setDataList(filter)
    }
  }, [valueFilter, props.loadType])

  return (
    <ContainerList component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <ListBody>
          <ListHeader>
            <Label >Filtrar :</Label>
            <Input 
              type="text" 
              value={valueFilter}
              placeholder="Pokemon/Tipo"
              onChange={e => setValueFilter(e.target.value)}  
            ></Input>
          </ListHeader>
          {(rowsPerPage > 0 && rowsPerPage <= dataList.length
            ? dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : dataList
          ).map((log, index) => (
            <ListRows id={`row${log.name}`} key={`${index}rows`} onClick={() =>  props.onClick(log.name)}>
              <ListCell key={`${index}cell1`}>
                {log.name}
              </ListCell>
              <ListCell key={`${index}cell2`}>
                {log.type}
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
              className='TablePagination'
              rowsPerPageOptions={[7, 25, 50, 100 , { label: 'Todos', value: -1 }]}
              colSpan={3}
              count={dataList.length}
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