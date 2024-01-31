import './App.css'
import Card from './components/Card/Card'
import Tags from './components/Card/Tag'

function App() {

  //Carregamento de dados via código
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const item2 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }

  const itens = [item1, item2, item3]

  async function carregarDadosApi() {
  //carregamento de dados via API
  const UrlApi = 'https://rickandmortyapi.com/api/character/'

  //preparar a requisição
  const response = await fetch(UrlApi)

  // console.log(response)

  const body = await response.json()

  console.log(body)

  //Extrair a propriedade results do  Body
  //Essa propriedade contém a lista de itens
  const results = body.results;
  }

  carregarDadosApi()

 

  return (
    <>
    <div className="cards">
      {/* <Card item={item1}>
      </Card>
      <Card item={item2} />
      <Card item={item3} />
    </div> */}
    {itens.map((item,i) => <Card item={item} key={i} />)}
    </div>
    </>
  )
}

export default App