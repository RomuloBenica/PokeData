import styled from 'styled-components';

const Button = styled.button`
  width: 70px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  border: none;
  border-radius: 8px;
  display:flex;
  background: rgba(255, 255, 255, 0.708);
  margin: 0px 0px 0px 10px;
  color: black;  
  cursor: pointer;
  
  :hover{
    background: rgba(205, 245, 235, 0.708);
  }
`;

export default Button;