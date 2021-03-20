import styled from 'styled-components';

const ContainerList = styled.div`
  width: 450px;
  height:95%;
  max-width: 100vw;
  max-height: 95vh;
  overflow: scroll;
  margin-top:20px;

  ::-webkit-scrollbar-track {
      display:none;  
    }
    ::-webkit-scrollbar {
        width: 10px;
        background: none;
    }
    ::-webkit-scrollbar-thumb {
        background: #092CDC;
        width: 6px;
        border-radius: 50px;
    }
`;

export default ContainerList;