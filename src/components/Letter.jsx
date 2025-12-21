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
  const [isOpen, setIsOpen] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const messageRef = useRef();
  let cssMail = "backgroundLetter ";
  let pupazzo = "pupazzo";

  function onChange(e) {
    let name = e.target.value;
    const { letter, isCorrect } = checkUserMessage(name);
    setUser({ ...user, name: name, letter: letter, isCorrect: isCorrect });
  }

  function handlingIsEnd() {
    setIsEnd(true);
  }

  function checkUserMessage(name) {
    const nameTrimLower = name.trim().toLowerCase();
    if (
      nameTrimLower === "dany" ||
      nameTrimLower === "dani" ||
      nameTrimLower === "daniele"
    ) {
      return { letter: 0, isCorrect: true };
    } else if (nameTrimLower === "dodo" || nameTrimLower === "dorian") {
      return { letter: 1, isCorrect: true };
    } else if (
      nameTrimLower === "アレッサンドラ" ||
      nameTrimLower === "reze" ||
      nameTrimLower === "알레산드라"
    ) {
      return { letter: 2, isCorrect: true };
    } else {
      return { letter: 3, isCorrect: false };
    }
  }

  // function openMessage() {
  //   if(document.activeElement){document.activeElement.blur()}
  //  setTimeout(() => {
  //        if (messageRef.current) {
  //     messageRef.current.showModal();
  //     setIsOpen(true);
  //   }
  //  },1)

  // }
  function openMessage() {
    // 1. Forza la chiusura della tastiera su mobile
    if (document.activeElement) {
      document.activeElement.blur();
    }

    // 2. Reset dello scroll per Safari
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 3. Delay per permettere a iOS di processare la chiusura della tastiera
    setTimeout(() => {
      if (messageRef.current) {
        setIsOpen(true);
        messageRef.current.showModal();
        
        // 4. Ri-forziamo il posizionamento dopo l'apertura
        window.scrollTo(0, 0);
      }
    }, 250);
  }
  function closeMessage() {
    if (messageRef.current) {
      messageRef.current.close();
      setIsOpen(false);
    }
  }
  function resetState() {
    setUser(initalState);
    setIsOpen(false);
  }
  return (
    <>
      <Message
        ref={messageRef}
        closeMessage={closeMessage}
        letterNumber={user.letter}
        nameUser={user.name}
        resetState={resetState}
        isOpen={isOpen}
        isEnd={handlingIsEnd}
      />

      <div className="flex">
        <div className="flex items-center justify-center flex-col">
          {!isEnd ? (
            <>
              <label className="text-black font-bold font-serif" htmlFor="name">
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
                <button
                  disabled={!user.isCorrect}
                  onClick={openMessage}
                  className={` bg-red-500 border-2 border-red-500 font-serif text-2xl p-2 text-black rounded-xl ${
                    user.isCorrect ? "pulse correct" : ""
                  }`}
                >
                  Apri!
                </button>
              </div>
            </>
          ) : (
            <div>
              <h2 className="text-black font-bold font-serif text-2xl">
                Grazie per aver risposto! A breve riceverai un regalo!
                &#59;&#41;
              </h2>
            </div>
          )}
        </div>
      </div>

      <div
        className={`${
          !isEnd ? `container-letter` : "container-pupazzo"
        }  flex flex-col justify-end items-end`}
      >
        {!isEnd ? (
          <div className={`${cssMail} ${user.isCorrect ? "open" : ""} `}></div>
        ) : (
          <div className={`${pupazzo}`}></div>
        )}
      </div>
    </>
  );
}
