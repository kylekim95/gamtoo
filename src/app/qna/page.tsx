
export default function QnaPage(){
    const posts = [
        {
          id: 1,
          title: '첫 번째 게시글',
          content: '이것은 첫 번째 게시글의 내용입니다.',
          author: '작성자1',
          date: '2023-10-01',
        },
        {
          id: 2,
          title: '두 번째 게시글',
          content: '이것은 두 번째 게시글의 내용입니다.',
          author: '작성자2',
          date: '2023-10-02',
        },
        {
          id: 3,
          title: '세 번째 게시글',
          content: '이것은 세 번째 게시글의 내용입니다.',
          author: '작성자3',
          date: '2023-10-03',
        },
      ];
  return (
   <>
 <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-12">
      <div className="flex flex-col items-center gap-6">
                <h3 className="text-3xl tracking-wide font-light"> <span className="font-semibold">총 <span className="text-[#B23742]">9</span>개</span>의 글이 등록되어 있습니다.</h3>
                <div className=" flex gap-3 justify-center w-full items-center">
                    <div className=" grow-0"><select  className=" bg-[#F7F7F7] p-3 box-border w-80 h-12 rounded-md" >
                    <option value="">제목</option>
                    </select>
                  
                    </div>
                    <div className="w-full grow"><input placeholder="검색어를 입력해주세요" className=" bg-[#F7F7F7] p-3 box-border h-12 w-full rounded-md" type="text"/></div>
                    <div ><button className=" w-24 py-3 rounded-lg text-white h-full bg-[#B23742] "> 검색</button></div>
                </div>
            </div>
        <div className="space-y-6">
        {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.content}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">작성자: {post.author}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <div className="mt-4 flex items-center">
                <button
                  
                  className="flex items-center text-gray-500 hover:text-red-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="ml-1">3</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      </>
  );
}
