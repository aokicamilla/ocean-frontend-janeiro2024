const Card = ({ item }) => {
  return (
    <div className="card">
      <h2>{item.name}</h2>
      <div className="tags">
        {item.status && <span>Status: {item.status}</span>}
        {item.species && <span>Species: {item.species}</span>}
        {item.origin && item.origin.name && <span>Origin: {item.origin.name}</span>}
      </div>
      <img src={item.image} alt={item.name} />
    </div>
  );
};

export default Card