import MediaRow from './MediaRow';
import SingleView from './SingleView';
import {useState} from 'react';

const mediaArray = [
  {
    media_id: 8,
    user_id: 5,
    filename: 'https://placehold.co/600x400/orange/white',
    thumbnail: 'https://placehold.co/600x400/orange/white',
    filesize: 170469,
    media_type: 'image/jpeg',
    title: 'Picture 1',
    description: 'This is a placeholder picture.',
    created_at: '2024-01-07T20:49:34.000Z',
  },
  {
    media_id: 9,
    user_id: 7,
    filename: 'https://place-hold.it/800x600.jpg&text=Pic2&fontsize=72',
    thumbnail: 'https://placehold.co/600x400/pink/white',
    filesize: 1002912,
    media_type: 'image/jpeg',
    title: 'Pic 2',
    description: '',
    created_at: '2024-01-07T21:32:27.000Z',
  },
  {
    media_id: 17,
    user_id: 2,
    filename:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4',
    thumbnail: 'https://placehold.co/600x400/tomato/white',
    filesize: 1236616,
    media_type: 'video/mp4',
    title: 'Bunny',
    description: 'Butterflies fly around the bunny.',
    created_at: '2024-01-07T20:48:13.000Z',
  },
];


const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
   let isImg = true;

 if (selectedItem == "video/npm") {
  isImg = true; 
  }
  else{
    isImg = false;
  }

  return (
    <>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} isImg={isImg}/>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
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
