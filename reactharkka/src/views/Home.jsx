import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData.js';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API + '/users/';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaData = await fetchData(MEDIA_API + '/media');
        console.log(mediaData);

        const newArray = await Promise.all(
          mediaData.map(async (item) => {
            const user = await fetchData(AUTH_API + item.user_id);
            console.log(user);
            return { ...item, username: user.username };
          })
        );

        setMediaArray(newArray);
      } catch (e) {
        console.log('Error:', e);
      }
    };

    getMedia();
  }, []);


  return (
    <>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />

      <h2>My Home</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Owner</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;