import Comment from "./Comment";

function CommentsList({ comments, onDelete, onReply }) {
  return comments.map((comment) => (
    <Comment
      key={comment.id}
      comment={comment}
      onDelete={onDelete}
      onReply={onReply}
    />
  ));
}

export default CommentsList;
