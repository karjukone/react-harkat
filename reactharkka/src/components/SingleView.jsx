const imageOrVideo = (item) => {

  if (!item) {
    return null;
  }

  if (item.media_type == 'image/jpeg') {
    return <img src={item.thumbnail} alt={item.title} />;
  } else if (item.media_type == 'video/mp4') {
    return <video src={item.filename} width={'600'}controls></video>
  } else {
    return <div>Not supported</div>
  }
};

const SingleView = (props) => {
  
  const {item, setSelectedItem} = props;

  return (
    <>
      {item && (
        <dialog open>
          <div>{item.title}</div>
          <div>{item.description}</div>
          {imageOrVideo(item)}

          <button onClick={() => setSelectedItem('')}>Close dialog</button>
        </dialog>
      )}
    </>
  );
};

export default SingleView;