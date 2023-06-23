# Treinamento Ignite

Repositório para armazenar artefatos do treinamento Rocketseat Ignite.

<p align="center"><img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/></p>

##  :bulb: O Projeto
O objetivo do projeto é aplicar os conhecimentos adquiridos através do treinamento de React Rocketseat. O projeto foi desenvolvido foi executado durante aulas online na plataforma Ignite.

- Utilização do React + Vite como javascript bundle.
- Estruturação de projeto orientado a documentos.
- Estilização modular - Component Scoped.
- box modle css.

# Ferramentas

- NodeJs https://nodejs.org/en
- Node Package Manager N.
- Vite https://vitejs.dev/
- Tailwindcss - https://tailwindcss.com/
- Unplash (repositório de imagens free) - https://unsplash.com/
- Bilbioteca de icones Phosphor Icons - https://phosphoricons.com/

## :pushpin: Formatos e Renderizacao de Telas

SSR - Server Side Rendering. O Browser se comunica com o Back-end e esse retorna o conteúdo da página pronto (ex.: HTML, CSS, JS).

SPA - Single Page Application. O Browser se comunica com o Back-end e ele retorna os dados necessários para o cliente renderizar a página, normalmente em um formato comum a múltiplas plataformas (ex: JSON). Dessa forma, o mesmo JSON pode ser utilizado para renderizar uma página no Browser pelo ReactJS e uma tela nos aplicativos iOS/Android pelo React Native por exemplo.

Bundler - Ferramenta para a conversão de agrupamentos de arquivos javascript. Vitejs, Snowpack, Webpack.

O estado são variáveis que eu gostaria que o componente monitorasse. useState.

Programação Imperativa - É dito ao software o que deve ser realizado. Passo a Passo do que deve ser realizado.

Programação Declarativa - Ao invés de realizar o passo a passo é declarado as condições para alcançar o resultado esperado.

A única forma de realizar a comunicação entre componentes é através das suas propriedades. É possível passar função como propriedades e trabalhar de forma imutável com variáveis.

Sempre que uma informação for atualizada e depender do seu estado anterior é ideal e recomendado utilização de closures (função anonima).

	function handleLikeComment() { 	
		setLikeCount((state) => {
			return state + 1;
		})
	}
	
Momentos em que a renderização de tela ocorre no react:

1- Quando o estado altera.
2- Quando a propriedade do componente altera.
3- Quando um componente pai renderiza novamente.
4- Não utilizar indices de arrays como key de componentes. Utilize identificadores únicos para o componente ao invés.

# Principais comandos:

- Configurar strict ssl false --> npm set strict-ssl false 
- Configurar o projeto utilizando o Vite --> npm create vite@latest
- Instalar as dependências do projeto --> npm instal ou npm i
- Visualizar ou Executar a estrutura do projeto --> npm run dev
- Instalar o gerenciador de pacotes N --> npm install -g n
- Instalar a lib de icones Phosphor Icon --> npm install phosphor-react
- Instalar a lib Date-FNS para trabalhar com Date --> npm i date-fns






