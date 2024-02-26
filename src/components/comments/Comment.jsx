/* eslint-disable react/prop-types */

function Comment({ comment, onDelete }) {
  const imageId = Math.floor(Math.random() * 5);

  return (
    <div>
      <div className="mb-5">
        <div className="flex items-center space-x-2">
          <div>
            <img
              src={`https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${imageId}.png`}
              alt="User profile picture"
              className="w-8 rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold">{comment.name}</p>
          </div>
        </div>

        <div className="pl-10">
          <p className="text-sm">{comment.comment}</p>
        </div>

        <div className="pl-10 space-x-2 text-xs mt-1">
          <button
            type="submit"
            onClick={() => onDelete(comment.id)}
            className="text-red-500 font-semibold hover:underline"
          >
            Delete
          </button>
        </div>

        <div className="ml-10 mt-5">
          {comment.replies.map((comment) => (
            <Comment key={comment.id} comment={comment} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comment;
