function Tags(props) {

  const tag = props.tag

    return (
      <>
          <div className="tags">
            <span>{tag.status}</span>
            <span>{tag.especies}</span>
            <span>{tag.origin}</span>
          </div>
      </>
    )
  }
  
  export default Tags