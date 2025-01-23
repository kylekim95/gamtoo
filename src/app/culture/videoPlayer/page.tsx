import React from 'react';

export default function Video() {
    return (
        <div className="min-h-screen flex flex-col"> 
            <div className="relative w-full h-[120vh]">
                <img
                    src="https://cdn.pixabay.com/photo/2022/08/05/05/59/korea-7366036_1280.jpg"
                    alt="CultureImage"
                    className="w-full h-72 object-cover"
                />
                     <div className="absolute top-0 left-0 w-full h-72 bg-black bg-opacity-50"></div>
                
                <div className="absolute top-[37vh] left-[15%] w-[70vw] h-[75vh] bg-white border-2 border-solid border-black p-4">
                </div>
            </div>
        </div>
    );
}
