import Tags from './Tag'

function Card(props) {
  const tag1 = {
    status: 'Alive',
    especies: 'Human',
    origin: 'Earth (C-137)'
  }

  const tag2 = {
    status: 'Alive',
    especies: 'Human',
    origin: 'Earth (C-137)'
  }


  const item = props.item

  return (
    <>
      <div className="card">
        <h2>{item.name}</h2>
          <Tags tag={tag1}/>
        <img src={item.image} />
      </div>
    </>
  )
}

export default Card