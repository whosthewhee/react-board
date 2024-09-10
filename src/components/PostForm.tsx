import React, { ChangeEvent, FormEvent } from "react";

interface PostFormProps {
  formData: { title: string; name: string; text: string };
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  createPost: (event: FormEvent) => void;
}

const PostForm: React.FC<PostFormProps> = ({
  formData,
  handleChange,
  createPost,
}) => {
  return (
    <form onSubmit={createPost} className="bg-white p-6 shadow-md rounded-md">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          제목
        </label>
        <input
          type="text"
          name="title"
          placeholder="제목"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          작성자
        </label>
        <input
          type="text"
          name="name"
          placeholder="작성자"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-700"
        >
          내용
        </label>
        <textarea
          name="text"
          placeholder="내용"
          value={formData.text}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
      >
        작성
      </button>
    </form>
  );
};

export default PostForm;
