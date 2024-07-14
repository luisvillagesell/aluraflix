import { styled } from "styled-components"
import search from './search.png'
const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;
const CampoTextoEstilizado = styled.input`
    height: 56px;
    margin-right: 20px;
    padding: 12px 16px;
    border-radius: 30px;
    border: 2px solid;
    border-color: #371150;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #0a0101;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`
const IconoLupa = styled.img`
    color: black;
    position: absolute;
    top: 10px;
    margin-right: 20px;
    right: 10px;
    width: 38px !important;
    height: 38px;
`;
const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="Buscar" {...props} />
            <IconoLupa src={search} alt="ícono de lupa" />
        </ContainerEstilizado>
    )
}
export default CampoTexto