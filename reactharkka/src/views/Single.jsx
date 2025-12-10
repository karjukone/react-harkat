import {useLocation, useNavigate} from "react-router";
const imageOrVideo = (item) => {

  if (!item) return null;
  

  if (item.media_type == 'image/jpeg') return <img src={item.thumbnail} alt={item.title} />;

  else if (item.media_type == 'video/mp4') return <video src={item.filename} width={'80%'}controls></video>

  else return <div>Media type not supported</div>
};

const Single = () => {
  const {state} = useLocation();
  const item = state;
  const navigate = useNavigate();

  return (
    <>
    <h2>Single item</h2>
      {item && (
        <dialog open>
          <div>{item.title}</div>
          <div>{item.description}</div>
          {imageOrVideo(item)}

          <button onClick={() => navigate(-1)}>Go back</button>
        </dialog>
      )}
    </>
  );
};


export default Single;