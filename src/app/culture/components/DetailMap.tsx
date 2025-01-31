export default function DetailMap(){

  return(

     <div>
     <div className="w-full p-6 mt-6 overflow-x-auto">
     <h1 className="text-[#eee047] text-xl mb-3 font-pretendard tracking-extra-wide font-semibold ml-[80]">LOCATION</h1>            
     <h1 className="text-black text-4xl font-pretendard font-semibold mb-3 ml-20">국가유산 위치</h1>
     <div className="w-[92%] h-[1px] bg-gray-400 ml-20 mb-5"/>
     
     <div className="w-[89vw] h-80 ml-[4%] flex items-center justify-center max-w-full">
  <img src="/DetailMapExample.png" alt="지도" className="object-cover w-full h-full" />
</div>

   </div>
   </div>
  )
}