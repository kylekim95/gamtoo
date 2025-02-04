import axios from "axios";

export type quizInfo = {
  id: string;
  name: string;
  highScore : number;
}

const Breakpoints = {
  10 : ['#FF2222', 'border-[#FF2222]'],
  20 : ['#22FF22', 'border-[#22FF22]'],
  30 : ['#2222FF', 'border-[#2222FF]'],
  40 : ['#FFFF22', 'border-[#FFFF22]'],
  50 : ['#FF22FF', 'border-[#FF22FF]'],
  100 :['#222222', 'border-[#222222]']
}

export default async function GetUserRankColor(userId : string) : Promise<[string, string]> {
  const quizChannelId = (await axios.get(`${process.env.NEXT_PUBLIC_BASIC_URL}/channels/quiz`)).data._id;
  const quizChannelPosts = (await axios.get(`${process.env.NEXT_PUBLIC_BASIC_URL}/posts/channel/${quizChannelId}`)).data;
  const allUserData : quizInfo[] = []
  quizChannelPosts.map((post)=>{
    const data : {
      id: string;
      highScore : string;
      scores : [string, string][];
      errRate_Correct : [string, string][];
      errRate_Total : [string, string][];
      name : string;
    } = JSON.parse(post.title);
    const intData : quizInfo = {
      id : data.id,
      name: data.name,
      highScore: parseInt(data.highScore),
    };
    allUserData.push(intData);
  });
  allUserData.sort((a, b)=>b.highScore - a.highScore);
  const uInd = allUserData.findIndex((elem)=>elem.id===userId);
  const position = (uInd + 1) / allUserData.length;
  for(let i = 0; i < Object.entries(Breakpoints).length; i++){
    if(position * 100 <= parseInt(Object.entries(Breakpoints)[i][0])){
      return [
        Object.entries(Breakpoints)[i][1][0], 
        Object.entries(Breakpoints)[i][1][1]
      ];
    }
  }
  return ['#222222', 'border-[#FFFFFF00]'];
}