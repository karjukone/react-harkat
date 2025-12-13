import { useEffect, useState } from "react";
import { useLike } from "../hooks/apiHooks";
import { useUserContext } from "../hooks/contextHook";

const Likes = ({ mediaId }) => {
  const { user } = useUserContext();
  const {
    postLike,
    deleteLike,
    getLikeCountByMediaId,
    getLikeByUser,
  } = useLike();

  const [likeCount, setLikeCount] = useState(0);
  const [userLike, setUserLike] = useState(null);

  useEffect(() => {
    const fetchLikes = async () => {
      const count = await getLikeCountByMediaId(mediaId);
      setLikeCount(count.count);

      if (user) {
        const userLikeData = await getLikeByUser(mediaId);
        setUserLike(userLikeData);
      }
    };

    fetchLikes();
  }, [mediaId, user]);

  const handleLike = async () => {
    if (!user) return;

    if (userLike) {
      await deleteLike(userLike.like_id);
      setUserLike(null);
      setLikeCount((prev) => prev - 1);
    } else {
      const newLike = await postLike(mediaId);
      setUserLike(newLike);
      setLikeCount((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center gap-3 mt-4">
      <button
        onClick={handleLike}
        disabled={!user}
        className={`px-4 py-2 rounded-full font-medium transition
          ${
            userLike
              ? "bg-pink-400 text-white"
              : "bg-pink-200 text-pink-800 hover:bg-pink-300"
          }
          ${!user && "opacity-50 cursor-not-allowed"}
        `}
      >
        {userLike ? "♥ Liked" : "♡ Like"}
      </button>

      <span className="text-pink-700">
        {likeCount} {likeCount === 1 ? "like" : "likes"}
      </span>
    </div>
  );
};

export default Likes;