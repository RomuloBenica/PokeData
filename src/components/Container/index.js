import styled from 'styled-components'


import imgBackground from '../../assets/img/21019.jpg';

const Container = styled.div`
width: 100%;
height: 100vh;

display:flex;
flex-direction:column;
background: url(${imgBackground});
background-size: auto;

background-color: #cccccc;
`;

export default Container;