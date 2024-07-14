import { styled } from 'styled-components';
import tags from './tags.json'

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: black;
    font-size: 24px;
    border: 2px solid transparent;
    padding: 8px 16px;
    margin: 0;
    border-radius: 20px;
    &:hover{
        border-color: black;
        color: #092013;
        background: rgba(179, 17, 179, 0.5);
    }
`;

const Tag = styled.button`
    font-size: 24px;
    color: black;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    text-shadow: 
    0 0 5px rgba(0, 255, 255, 0.5), 
    0 0 15px rgba(0, 255, 255, 0.5), 
    0 0 25px rgba(0, 255, 255, 0.5), 
    0 0 45px rgba(0, 255, 255, 0.5), 
    0 0px 90px rgba(0, 255, 255, 0.5);
    border: 2px solid transparent;
    &:hover {
      border-color: #120818;
      background: rgba(179, 17, 179, 0.5);
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = () => {
    return <TagsContainer>
        <TagTitulo>Busque por Categorias:</TagTitulo>
        <Div>
            {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
        </Div>
    </TagsContainer>
}

export default Tags