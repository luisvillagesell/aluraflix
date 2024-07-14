import { styled } from "styled-components"
import Titulo from "../../Titulo"

import fotos from './fotos-populares.json'

const ColumnaFotos = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Imagen = styled.img`
    width: 180%;
    max-width: 212px;
    border-radius: 60px;
    display: flex;
    justify-content: right;
    padding-right: 0;
`

const Boton = styled.button`
    display: flex;
    justify-content: center;
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 20px 20px;
    font-size: 40px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
    gap: 10px;
`;


const Populares = () => {
    return (
        <section>
            <Titulo $align='center'>Los más vistos</Titulo>
            <ColumnaFotos>
                        {fotos.map(foto => 
                        <Imagen key={foto.id} src={foto.path} alt={foto.alt} /> )}
            </ColumnaFotos>
            <Boton>Ver más</Boton>
        </section>
    )
}

export default Populares