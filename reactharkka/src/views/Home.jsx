import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData.js';
import { useMedia } from '../hooks/apiHooks.js';


const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {mediaArray} = useMedia([]);
  


  return (
    <>{mediaArray &&
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
              {mediaArray
              .filter(item => item)
              .map((item) => (
                <MediaRow
                  key={item.media_id}
                  item={item}
                  setSelectedItem={setSelectedItem}
                />
              ))}
            </tbody>
          </table>

      </>
      
            } 
        
    </>
  );
};

export default Home;