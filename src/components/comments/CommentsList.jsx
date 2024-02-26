import Comment from "./Comment";

function CommentsList({ comments, onDelete }) {
  return comments.map((comment) => (
    <Comment key={comment.id} comment={comment} onDelete={onDelete} />
  ));
}

export default CommentsList;
