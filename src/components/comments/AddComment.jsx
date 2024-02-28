/* eslint-disable react/prop-types */
import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

function AddComment({
  onAdd,
  onEdit,
  onReply,
  onClose,
  showCancel,
  parentId,
  commentId,
  defaultText = "",
}) {
  const [comment, setComment] = useState(defaultText);

  const handleAddComment = (event) => {
    event.preventDefault();

    if (!comment) {
      return alert(`Please add a comment!`);
    }

    onAdd && onAdd(comment);
    onEdit && onEdit(commentId, comment);
    onReply && onReply(parentId, comment);
    onClose && onClose();

    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          placeholder="Post a comment.."
          className="bg-gray-200 px-3 h-9 rounded w-64"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button
          type="submit"
          className={`text-sm bg-purple-700 text-purple-100 px-4 h-9 rounded ml-2 hover:bg-purple-800`}
        >
          Comment
        </button>
        {showCancel && (
          <button
            onClick={onClose}
            className={`text-sm bg-gray-200 text-gray-800 px-4 py-2 rounded ml-2 hover:bg-gray-300`}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default AddComment;
