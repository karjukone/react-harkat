import {useLocation, useNavigate} from "react-router";
import Likes from "../components/Likes";

const imageOrVideo = (item) => {

  if (!item) {
    return null;
  }

  if (item.media_type == 'image/jpeg') {
    return <img src={item.thumbnail} alt={item.title} />;
  } else if (item.media_type == 'video/mp4') {
    return <video src={item.filename} controls></video>
  } else {
    return <div>Media type not supported</div>
  }
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
          <Likes mediaId={item.media_id}></Likes>

          <button onClick={() => navigate(-1)}>Go back</button>
        </dialog>
      )}
    </>
  );
};

Single.propTypes = {};

export default Single;