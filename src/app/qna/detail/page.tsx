"use client";

import React, { useState } from "react";

const QnaDetailPage = () => {
  const [comments, setComments] = useState([
    { id: 1, author: "무기말똥", text: "좋아요!", likes: 3 },
    { id: 2, author: "무기참배", text: "멋져요!", likes: 5 },
  ]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() === "") return;
    const newId =
      comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
    setComments([
      ...comments,
      { id: newId, author: "익명", text: newComment, likes: 0 },
    ]);
    setNewComment("");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-16">
      <div className="flex flex-col ">
        <h1 className="text-2xl font-bold">문화재</h1>
        <p className="text-gray-500 pb-3 pt-1 border-b text-sm">
          작성자: 무기력 / 2022.09.19.17:36
        </p>
        <div className="mt-4 bg-[#F6F6F6] p-4 rounded-lg">
          <p className="text-gray-700">
            오픈API란 누구나 사용할 수 있도록 공개된 API를 말합니다. 데이터들을
            포함하고 프로그래밍의 일부 소프트웨어 개발자나 사용자들과 공유하는
            프로그램입니다.
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex border-b gap-4">
          <h5 className="text-md text-[#3D3D3D]  py-2 font-semibold">
            댓글 <span className="text-[#B23742]">{comments.length}</span>{" "}
          </h5>
          <h5 className="text-md text-[#3D3D3D]  py-2 font-semibold">
            좋아요 <span className="text-[#B23742]">{comments.length}</span>{" "}
          </h5>
        </div>
        <ul>
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="border-b border-gray-200 py-4 flex items-center justify-start gap-4"
            >
              <div>
                <div className="w-9 h-9 bg-gray-50 border rounded-full"></div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-gray-800">{comment.author}</p>
                  <p className="text-gray-600 ">{comment.text}</p>
                </div>
                <div className="flex gap-2 text-xs">
                  <p className="text-[#959595] font-medium">4분전</p>
                  <span className=" text-[#B23742] font-medium" >답글</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6">
            <div className=" flex gap-4">
        <div className="w-9 h-9 bg-gray-50 border rounded-full"></div>
          <textarea
            className="w-full border border-gray-300  p-2 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력해주세요..."
          ></textarea>
          </div>
          <div className=" w-full flex justify-end">
          <button
            onClick={addComment}
            className="mt-2 px-10 py-2 bg-[#B23742] text-sm text-white  hover:bg-red-600"
          >
            등록
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnaDetailPage;
