import styled from "styled-components"

const ItemListaEstilizado= styled.li`
    font-size:25px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: left;
    gap:16px;
    color: ${props => props.$activo ? "#000000" : "#07701e"};
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};
    text-shadow: 
    0 0 5px rgba(0, 255, 255, 0.5), 
    0 0 15px rgba(0, 255, 255, 0.5), 
    0 0 25px rgba(0, 255, 255, 0.5), 
    0 0 45px rgba(0, 255, 255, 0.5), 
    0 0px 90px rgba(0, 255, 255, 0.5);
`

const ItemNavegacion=({children, iconoActivo, iconoInactivo, activo=false})=>{
    return <ItemListaEstilizado $activo={activo}>
    <img src={activo ? iconoActivo : iconoInactivo} />
    {children}
    </ItemListaEstilizado>
} 


export default ItemNavegacion