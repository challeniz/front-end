import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const newId = comments.length + 1;
      const newCommentObj: Comment = { id: newId, text: newComment };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h2>후기</h2>
      <div>
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}>등록</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>{comment.text}</div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
