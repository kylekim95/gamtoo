import React from 'react';

export default function Detail() {
    return (
        <div>
            {/* 상단 배경 이미지 */}
            <div className="bg-slate-300 w-full h-72" />
            
            {/* 두 개의 div를 flex로 2/3과 1/3 비율로 나누기 */}
            <div className="relative w-full flex">
                {/* 국가유산 설명 (2/3 화면) */}
                <div className="w-2/3 bg-white border-2 border-solid border-black p-4">
                    <h1 className="text-black text-4xl font-semibold">국가유산 설명</h1>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique, quo quasi hic, tempora debitis iusto laborum eaque officiis exercitationem recusandae! Provident, est incidunt accusantium magni fugit dignissimos culpa odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique, quo quasi hic, tempora debitis iusto laborum eaque officiis exercitationem recusandae! Provident, est incidunt accusantium magni fugit dignissimos culpa odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique, quo quasi hic, tempora debitis iusto laborum eaque officiis exercitationem recusandae! Provident, est incidunt accusantium magni fugit dignissimos culpa odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique, quo quasi hic, tempora debitis iusto laborum eaque officiis exercitationem recusandae! Provident, est incidunt accusantium magni fugit dignissimos culpa odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique, quo quasi hic, tempora debitis iusto laborum eaque officiis exercitationem recusandae! Provident, est incidunt accusantium magni fugit dignissimos culpa odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique, quo quasi hic, tempora debitis iusto laborum eaque officiis exercitationem recusandae! Provident, est incidunt accusantium magni fugit dignissimos culpa odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique, quo quasi hic, tempora debitis iusto laborum eaque officiis exercitationem recusandae! Provident, est incidunt accusantium magni fugit dignissimos culpa odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique, quo quasi hic, tempora debitis iusto laborum eaque officiis exercitationem recusandae! Provident, est incidunt accusantium magni fugit dignissimos culpa odit.</p>
                    
                </div>

                {/* 국가유산 정보 (1/3 화면) */}
                <div className="w-1/3 bg-white border-2 border-solid border-black p-4">
                    <h1 className="text-black text-4xl font-semibold">국가유산 정보</h1>
                </div>
            </div>

            {/* 나머지 글자들은 2개의 div 밖에 배치 */}
            <h1 className="mt-4 ml-[3vh] text-black text-4xl font-semibold">국가유산 위치</h1>
            <h1 className="mt-4 text-black text-4xl font-semibold">댓글</h1>
            <h1 className="mt-4 text-black text-4xl font-semibold">관련 영상보기</h1>
            <h1 className="mt-4 text-black text-4xl font-semibold">이미지 더보기</h1>
        </div>
    );
}
