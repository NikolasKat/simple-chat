import React, { useState } from "react";
import socket from "../socket";

export default function JoinMenu() {
   const [roomId, setRoomId] = useState("");
   const [userName, setUserName] = useState("");
   const [isLoading, setLoading] = useState(false);

   const onEnter = () => {
      console.log(roomId, userName);
   };

   return (
      <div className="join-block text-xl">
         <input
            type="text"
            className="w-full border border-solid border-gray-200 rounded-md"
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
         />
         <input
            type="text"
            className="w-full border border-solid border-gray-200 rounded-md"
            placeholder="Ваше имя"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
         />
         <button
            disabled={isLoading}
            onClick={onEnter}
            className="w-full bg-green-400 rounded-md text-gray-700"
         >
            {isLoading ? "ВХОД..." : "ВОЙТИ"}
         </button>
      </div>
   );
}
