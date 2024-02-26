/* eslint-disable react/prop-types */

import { useState } from "react";

import commentsData from "../../data/commentsData";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const SESSION_STORAGE_KEY = "nested-comments";

function NestedComments() {
  const [comments, setComments] = useState(
    () =>
      JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY)) ?? commentsData
  );

  const handleAddComment = (comment) => {
    const commentPayload = {
      id: Date.now(),
      name: "Guest User",
      comment,
      replies: [],
    };

    const commentsToAdd = [commentPayload, ...comments];
    setComments(commentsToAdd);
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(commentsToAdd));
  };

  const handleDelete = (commentId) => {
    const cloneComments = [...comments];

    const findAndDelete = (commentId) => {
      cloneComments.map((comment) => {
        if (comment.id === commentId) {
          const index = cloneComments.indexOf(comment);
          cloneComments.splice(index, 1);
        } else if (cloneComments.replies && cloneComments.replies.length > 0) {
          findAndDelete(comment.replies, commentId);
        }
      });
    };
    findAndDelete(commentId);

    setComments(cloneComments);
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(cloneComments));
  };

  return (
    <div className="p-12">
      <AddComment onAdd={handleAddComment} />
      <CommentsList comments={comments} onDelete={handleDelete} />
    </div>
  );
}

export default NestedComments;
