import React from "react";
import { Post } from "../types/Post";

interface PostListProps {
  posts: Post[];
  deletePost: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, deletePost }) => {
  return (
    <ul className="space-y-6 mb-10">
      {posts.map((post) => (
        <li
          key={post.id}
          className="bg-white p-6 shadow-md rounded-md transition hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-4">작성자: {post.name}</p>
          <p className="text-gray-700">{post.text}</p>
          <button
            onClick={() => deletePost(post.id)}
            className="mt-4 text-red-500 hover:text-red-700"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
