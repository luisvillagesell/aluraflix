import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header `
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 180px;
    }
`

const Cabecera = ()=>{
    return <HeaderEstilizado>
        <img src="../public/img/logo.png" alt="logo de aluraflix" />
        <CampoTexto />
    </HeaderEstilizado>
}

export default Cabecera;