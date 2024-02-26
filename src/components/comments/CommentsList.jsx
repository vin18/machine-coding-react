import Comment from "./Comment";

function CommentsList({ comments, onDelete, onReply, onEdit }) {
  return comments.map((comment) => (
    <Comment
      key={comment.id}
      comment={comment}
      onDelete={onDelete}
      onReply={onReply}
      onEdit={onEdit}
    />
  ));
}

export default CommentsList;
