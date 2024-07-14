import { styled } from 'styled-components';

const PieEstilizado = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 100px;
	background-color: #5f2f2f;
	padding: 22px;
	box-sizing: border-box;
`;

const IconoContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: inline-block;
    	margin-right: 32px;
	}
`;

const Icono = styled.img`
	width: 32px;
`

const PieTexto = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
`;

function Pie() {
	return (
    	<PieEstilizado>
        	<IconoContainer>
				<li>
                	<a href="www.linkedin.com/in/luis-gomez11">
                    	<Icono src="/img/redes/linkedin.png" alt="" />
                	</a>
            	</li>
				<li>
                	<a href="https://www.facebook.com/luisvillagesell" target='blanc'>
                    	<Icono src="/img/redes/facebook.svg" alt="" />
                	</a>
            	</li>
				<li>
                	<a href="https://github.com/luisvillagesell">
                    	<Icono src="/img/redes/github.png" alt="" />
                	</a>
            	</li>
            	<li>
                	<a href="https://x.com/luchogesell">
                    	<Icono src="/img/redes/x.png" alt="" />
                	</a>
            	</li>
            	<li>
                	<a href="https://www.instagram.com/luigi112277/">
                    	<Icono src="/img/redes/instagram.png" alt="" />
                	</a>
            	</li>
        	</IconoContainer>
        	<PieTexto>LUIS GÓMEZ</PieTexto>
        	<PieTexto>ALUMNO DE ALURA</PieTexto>
    	</PieEstilizado>
	);
}

export default Pie
