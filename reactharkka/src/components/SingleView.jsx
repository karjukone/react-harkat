const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  return (
    <>
      {item && (
        <dialog open>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.username}</div>
          {/* TODOO (jos kuva niin laitetaan kuva, video, niin video) */}
          <button onClick={() => setSelectedItem('')}>Close Dialog</button>
        </dialog>
      )}
    </>
  );
};
export default SingleView;