import React, { useState } from "react";
import axios from "axios";
import socket from "../socket";

export default function JoinMenu({ onLogin }) {
   const [roomId, setRoomId] = useState("");
   const [userName, setUserName] = useState("");
   const [isLoading, setLoading] = useState(false);

   const onEnter = async () => {
      if (!roomId || !userName) {
         return alert("Неверные данные");
      }

      const obj = {
         roomId,
         userName,
      };

      setLoading(true);
      await axios.post("/rooms", obj);
      onLogin(obj);
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
