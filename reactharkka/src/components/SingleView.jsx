const SingleView = (props) => {
  const {item, setSelectedItem, isImg} = props;




  
  return (
    <>
      {item && (
        <dialog open>
          <div>
            {isImg ? (<img src={item.thumbnail} alt={item.title} />)
            : (<video src={item.thumbnail}/>)}
          </div>
          
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.username}</div>
          <button onClick={() => setSelectedItem('')}>Close Dialog</button>
        </dialog>
      )}
    </>
  );
};
export default SingleView;