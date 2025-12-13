import MediaRow from "../components/MediaRow";
import SingleView from "../components/SingleView";
import { useState } from "react";
import { useMedia } from "../hooks/apiHooks";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { mediaArray } = useMedia([]);

  return (
    <>
      {mediaArray && (
        <>
          <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />

          <h2 className="text-xl font-semibold mb-2">My Home</h2>
          <div className="w-full overflow-x-hidden">
            <table className="w-full table-fixed border-collapse">
              <thead className="hidden md:table-header-group">
                <tr className="[&>th]:px-2 [&>th]:py-1 text-left border-b">
                <th className="w-24">Thumbnail</th>
                <th className="w-40">Title</th>
                <th className="w-64">Description</th>
                <th className="w-36">Created</th>
                <th className="w-24">Size</th>
                <th className="w-24">Type</th>
                <th className="w-32">Owner</th>
                <th className="w-40">Actions</th>
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
          </div>
        </>
      )}
    </>
  );
};

export default Home;
