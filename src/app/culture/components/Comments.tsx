// 댓글 길이, 컨탠츠: 댓글 내용
import React from "react";
import axios from "axios";
import {useAppSelector} from "@/lib/redux/store";

interface Props {
  ccbaKdcd: string;
  ccbaAsno: string;
  ccbaCtcd: string;
}
// 1. 로그인 되어 있을때
// 2. 로그인 안되어 있을떄
interface CommentType {
  _id: string;
  comment: string;
  createdAt: string;
  fullName: string;
}
export default function Comments({ccbaKdcd, ccbaAsno, ccbaCtcd}: Props) {
  const [cultureComments, setCultureComments] = React.useState<CommentType[]>([]);
  const { isAuth } = useAppSelector((state) => state.authReducer.value);
  const cultureDetailID = "67a1c46edd6897156803cd4b";

  React.useEffect(() => {
    (async () => {
      const getPostsIndex = await axios.get(`${process.env.NEXT_PUBLIC_BASIC_URL}/posts/channel/${cultureDetailID}`);

      getPostsIndex.data.forEach((e) => {
        const str = JSON.stringify({ccbaKdcd, ccbaAsno, ccbaCtcd});
        if(str === e.title) {
          const map: CommentType[] = e.comments.map((item) => {
            const createdArray = item.createdAt.split("-");
            return {
              _id: item._id,
              comment: item.comment,
              createdAt: `${createdArray[0]}년 ${createdArray[1]}월 ${createdArray[2].split("T")[0]}일 작성`,
              fullName: item.author.fullName
            }
          });
          setCultureComments(map);
          return true;
        }
      });
    })();
  }, []);
  const commentHandler = () => {

  }
  return (
    <div className="w-full">
      <div className="w-[80%] bg-white p-4 h-[450px] mt-[4.5vh] ml-20">
        <h1 className="text-[#FF5DAB] font-pretendard text-xl font-semibold tracking-extra-wide z-20 relative mt-2 ml-2">COMMENTS</h1>
        <h1 className="text-black text-4xl font-pretendard font-semibold mb-3 ml-2 mt-3">댓글 {cultureComments.length}개</h1>
        <div className="w-[100%] h-[1px] bg-gray-400 ml-1">

        </div>
        <div className="w-full p-2">
          {cultureComments.length !== 0 ? cultureComments.map((e) => {
            return (
              <div key={e._id} className="border-b">
                <p className="font-semibold text-xl mb-1.5">{e.fullName}</p>
                <p className="text-xl mb-1.5">{e.comment}</p>
                <p className="text-[10px] text-[#8E8E8E] mb-1.5">{e.createdAt}</p>
              </div>
            )
          }): <p>댓글이 없습니다...</p>}
        </div>
        <div className="top-[300px] relative">
          {isAuth ? <button>글 작성</button> : <p className="hover:cursor-pointer hover:text-blue-500">로그인하시면 댓글을 작성할 수 있어요</p>}
        </div>
      </div>
    </div>
  );
}