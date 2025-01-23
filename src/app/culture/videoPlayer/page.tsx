import React from 'react';

export default function Video() {
    return (
        <div className="min-h-screen flex flex-col"> {/* 최소 화면 높이를 보장하고, 콘텐츠들이 세로로 배치될 수 있도록 설정 */}
            <div className="relative w-full h-[120vh]"> {/* 부모 요소에 h-auto를 적용하여 자식 박스의 크기 변화에 맞게 늘어나도록 설정 */}
                <img
                    src="https://cdn.pixabay.com/photo/2022/08/05/05/59/korea-7366036_1280.jpg"
                    alt="CultureImage"
                    className="w-full h-72 object-cover"
                />
                <div className="absolute top-[37vh] left-[15%] w-[70vw] h-[75vh] bg-white border-2 border-solid border-black p-4">
                </div>
            </div>
        </div>
    );
}
