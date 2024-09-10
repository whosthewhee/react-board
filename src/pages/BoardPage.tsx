import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Post } from "../types/Post";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const API_URL = "http://localhost:3000/posts";

const BoardPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    text: "",
  });

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>(API_URL);
      setPosts(response.data);
    } catch (error) {
      console.error("게시글을 불러오는 중 오류가 발생했습니다.", error);
    }
  };

  const createPost = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post<Post>(API_URL, formData);
      setPosts([...posts, response.data]);
      setFormData({ title: "", name: "", text: "" });
    } catch (error) {
      console.error("게시글을 추가하는 중 오류가 발생했습니다.", error);
    }
  };

  const deletePost = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("게시글을 삭제하는 중 오류가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">게시판</h1>

      {/* 게시글 목록 컴포넌트 */}
      <PostList posts={posts} deletePost={deletePost} />

      {/* 게시글 작성 폼 컴포넌트 */}
      <PostForm
        formData={formData}
        handleChange={handleChange}
        createPost={createPost}
      />
    </div>
  );
};

export default BoardPage;
