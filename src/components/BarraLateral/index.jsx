import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"
const ListaEstilizada = styled.ul`
   margin: 60px;
   padding: 10px;
   list-style: none;
   width: 10%;
   
`

const BarraLateral = () => {
    return (
        <aside> 
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion 
                        iconoActivo= "/iconos/home.svg" 
                        iconoInactivo="/iconos/home-outline.svg"
                        activo={true}
                    >
                        Inicio
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="/iconos/eye.svg" 
                        iconoInactivo="/iconos/eye-outline.svg"
                    >
                       Más Populares
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="/iconos/add-circle.svg" 
                        iconoInactivo="/iconos/add-circle-outline.svg"
                    >
                        Series
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="/iconos/videocam.svg" 
                        iconoInactivo="/iconos/videocam-outline.svg"
                    >
                        Películas
                    </ItemNavegacion>
                    <ItemNavegacion 
                        iconoActivo="/iconos/film.svg" 
                        iconoInactivo="/iconos/film-outline.svg"
                    >
                        Recien Agregados
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral