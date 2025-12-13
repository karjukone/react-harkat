import { Link } from "react-router";
import { useUserContext } from "../hooks/contextHook";

const MediaRow = ({ item }) => {
  const { user } = useUserContext();

  const isOwner = user && user.user_id === item.user_id;
  const isAdmin = user && user.role === "admin";
  const canModify = user && (isOwner || isAdmin);

  return (
    <tr className="block md:table-row border-b w-full mb-2 md:mb-0">
      <td className="block md:table-cell w-full px-2 py-1">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full max-w-xs md:w-20 md:h-20 object-cover rounded"
        />
      </td>

      <td className="px-2 py-1 truncate">
        {item.title}
      </td>

      <td className="block md:table-cell w-full px-2 py-1">
         <p className="truncate text-sm text-gray-600">
          {item.description}
        </p>
      </td>

      <td className="block md:table-cell w-full px-2 py-1">
        <span className="md:hidden font-semibold">Created: </span>
        {new Date(item.created_at).toLocaleString("fi-FI")}
      </td>

      <td className="block md:table-cell w-full px-2 py-1">
        {item.filesize}
      </td>

      <td className="block md:table-cell w-full px-2 py-1">
        {item.media_type}
      </td>

      <td className="px-2 py-1 truncate">
        {item.username}
      </td>

      <td className="block md:table-cell w-full px-2 py-1">
        <div className="flex flex-wrap gap-2">
          <Link
            to="/single"
            state={item}
            className="px-3 py-1 rounded-full bg-pink-300 hover:bg-pink-400 text-white font-medium shadow-sm transition"
          >
            View
          </Link>

          {canModify && (
            <>
              <button
                className="px-3 py-1 rounded-full bg-blue-300 hover:bg-blue-400 text-white font-medium shadow-sm transition"
                onClick={() => console.log("modify", item)}
              >
                Modify
              </button>

              <button
                className="px-3 py-1 rounded-full bg-red-300 hover:bg-red-400 text-white font-medium shadow-sm transition"
                onClick={() => console.log("delete", item)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default MediaRow;



