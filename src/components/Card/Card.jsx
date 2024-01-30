function Card() {
  return (
    <>
      <div className='card'>
        <h2 className="NomePersonagem">Ricky Sanchez 1</h2>
        <div className="tags">
          <span>Status:Vivo</span>
          <span>Espécie: Humana</span>
          <span>Origem: Terra C-137</span>
        </div>
        <img className="imagemPersonagem" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="imagem de personagem" />
      </div>
    </>
  )
}

export default Card