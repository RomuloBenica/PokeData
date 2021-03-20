import styled from 'styled-components';

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
export default ListRows;