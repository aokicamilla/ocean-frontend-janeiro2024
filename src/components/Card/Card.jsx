import Tags from './Tag'

function Card(props) {

  const item = props.item

  return (
    <>
      <div className="card">
        <h2>{item.name}</h2>

          <Tags/>

        <img src={item.image} />
      </div>
    </>
  )
}

export default Card