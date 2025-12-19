import { useState, useRef } from "react";
import Message from "./Message";
import "./Letter.css";

const initalState = {
  name: "",
  letter: "3",
  text: "",
  isCorrect: null,
};
export default function Letter() {
  const [user, setUser] = useState(initalState);
  const messageRef = useRef();
  let cssMail = "backgroundLetter ";

  function onChange(e) {
    let name = e.target.value;
   const {letter, isCorrect} = checkUserMessage(name);
    setUser({ ...user, name: name, letter: letter, isCorrect: isCorrect });
  }

  function checkUserMessage(name) {
    const nameTrimLower = name.trim().toLowerCase();
    if (
      nameTrimLower === "dany" ||
       nameTrimLower === "dani"||
      nameTrimLower ==="daniele"
    ) {
      return {letter: 0, isCorrect: true};
    } else if (
      nameTrimLower === "dodo" ||
      nameTrimLower === "dorian"
    ) {
      return {letter: 1, isCorrect: true};
    } else if (
      nameTrimLower === "アレッサンドラ" ||
      nameTrimLower === "reze"
    ) {
      return {letter: 2, isCorrect: true};
    } else {
      return {letter: 3, isCorrect: false};}
  }

  function openMessage() {
   
    if(messageRef.current){messageRef.current.showModal();}
    
  }
  function closeMessage() {
    if(messageRef.current){messageRef.current.close();}
    
  }
  function resetState() {
    setUser(initalState);
  }
  return (
    <>
      <Message
        ref={messageRef}
        closeMessage={closeMessage}
        letterNumber={user.letter}
        nameUser={user.name}
        resetState={resetState}
      />

      <div className="flex">
        <div className="flex items-center justify-center flex-col">
          <label
            className="text-black font-bold font-serif"
            htmlFor="name"
          >
            Inserisci il tuo nome qui sotto per aprire la lettera!
          </label>
          <div className="flex justify-center items-center">
            <input
              className="w-1/2  bg-white text-black font-serif border-2 rounded-xl p-0.5 pl-2"
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={onChange}
            />
            <button disabled={!user.isCorrect}
              onClick={openMessage}
              className={` bg-red-500 border-2 border-red-500 font-serif text-2xl p-2 text-black rounded-xl ${user.isCorrect ? 'pulse correct' : ''}`}
            >
              Apri!
            </button>
          </div>
        </div>
      </div>

      <div className="container-letter  flex flex-col justify-end items-end">
        <div className={`${cssMail} ${user.isCorrect ? "open" : ""} `}></div>
      </div>
    </>
  );
}
