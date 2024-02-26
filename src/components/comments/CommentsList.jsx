import Comment from "./Comment";

function CommentsList({ comments, onDelete, onEdit }) {
  return comments.map((comment) => (
    <Comment
      key={comment.id}
      comment={comment}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ));
}

export default CommentsList;
