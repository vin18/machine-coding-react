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

  const handleEdit = (commentId, commentToEdit) => {
    const cloneComments = [...comments];

    const findAndEdit = (cloneComments, commentId) => {
      cloneComments.map((comment) => {
        if (comment.id === commentId) {
          comment.comment = commentToEdit;
        } else if (comment.replies.length > 0) {
          findAndEdit(comment.replies, commentId);
        }
      });
    };
    findAndEdit(cloneComments, commentId);

    setComments(cloneComments);
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(cloneComments));
  };

  const handleDelete = (commentId) => {
    const cloneComments = [...comments];

    const findAndDelete = (cloneComments, commentId) => {
      cloneComments.map((comment) => {
        if (comment.id === commentId) {
          const index = cloneComments.indexOf(comment);
          cloneComments.splice(index, 1);
        } else if (comment.replies.length > 0) {
          findAndDelete(comment.replies, commentId);
        }
      });
    };
    findAndDelete(cloneComments, commentId);

    setComments(cloneComments);
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(cloneComments));
  };

  const handleReply = (parentId, commentPayload) => {
    const cloneComments = [...comments];

    const findAndReply = (cloneComments, parentId) => {
      cloneComments.map((comment) => {
        if (comment.id === parentId) {
          comment.replies.push(commentPayload);
        } else if (comment.replies.length > 0) {
          findAndReply(comment.replies, parentId);
        }
      });
    };
    findAndReply(cloneComments, parentId);

    setComments(cloneComments);
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(cloneComments));
  };

  return (
    <div className="p-12">
      <AddComment onAdd={handleAddComment} />
      <CommentsList
        comments={comments}
        onDelete={handleDelete}
        onReply={handleReply}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default NestedComments;
