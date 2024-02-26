/* eslint-disable react/prop-types */

import { useState } from "react";
import AddComment from "./AddComment";

function Comment({ comment, onDelete, onReply, onEdit }) {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleReply = (parentId, comment) => {
    const commentPayload = {
      id: Date.now(),
      name: "Guest User",
      comment,
      replies: [],
    };
    onReply(parentId, commentPayload);
  };

  const handleEdit = (commentId, comment) => {
    onEdit(commentId, comment);
    setIsEditing(false);
  };

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

        {!isEditing && (
          <>
            <div className="pl-10">
              <p className="text-sm">{comment.comment}</p>
            </div>

            <div className="pl-10 space-x-2 text-xs mt-1">
              <button
                type="submit"
                onClick={() => setIsEditing(!isEditing)}
                className="text-blue-500 font-semibold hover:underline"
              >
                Edit
              </button>
              <button
                type="submit"
                onClick={() => setIsReplying(!isReplying)}
                className="text-blue-500 font-semibold hover:underline"
              >
                Reply
              </button>
              <button
                type="submit"
                onClick={() => onDelete(comment.id)}
                className="text-red-500 font-semibold hover:underline"
              >
                Delete
              </button>
            </div>
          </>
        )}

        {isEditing && (
          <div className="ml-10 my-2">
            <AddComment
              onEdit={handleEdit}
              onClose={() => setIsReplying(false)}
              showCancel={true}
              defaultText={comment.comment}
              commentId={comment.id}
            />
          </div>
        )}

        {isReplying && (
          <div className="ml-10 my-2">
            <AddComment
              onReply={handleReply}
              onClose={() => setIsReplying(false)}
              showCancel={true}
              parentId={comment.id}
            />
          </div>
        )}

        <div className="ml-10 mt-5">
          {comment.replies.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onDelete={onDelete}
              onReply={onReply}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comment;
