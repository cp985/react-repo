import { createPortal } from "react-dom";
import { forwardRef, useState, useEffect, useRef } from "react";
import dbLetters from "../../dbLetters.js";
import Form from "./Form";
import "./Message.css";
const Message = forwardRef(function Message(
  {isEnd, isOpen, closeMessage, letterNumber, resetState, nameUser },
  ref
) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const messagesEndRef = useRef(null);
  // Ref per il contenitore scrollabile
  const scrollContainerRef = useRef(null);
  // Recuperiamo il testo in modo sicuro dall'oggetto passato come prop o da un fallback
  const fullText = dbLetters?.[letterNumber]?.text || "Messaggio non trovato.";
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Reset dell'animazione quando cambia la lettera
  useEffect(() => {
    if (isOpen) {
      setDisplayedText("");
      setIndex(0);
    }
  }, [letterNumber, fullText,isOpen]);

  // Logica Typewriter
  useEffect(() => {
    if (!fullText || !isOpen) return;

    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 80); // Velocità di scrittura (ms)
      scrollToBottom();
      return () => clearTimeout(timeout);
    }
  }, [index, fullText,isOpen]);
  return createPortal(
    <dialog
      className="message"
      onClose={() => {
        resetState();
        closeMessage();
      }}
      ref={ref}
    >
      <div
        ref={scrollContainerRef}
        className="overflow-y-auto p-1 flex-grow"
        style={{ scrollBehavior: "smooth" }}
      >
        <p className="font-mono">
          {displayedText}
          {index < fullText.length && <span className="custom-cursor" />}
        </p>
        <div ref={messagesEndRef} />
      </div>
      {index === fullText.length && (
        <Form isEnd={isEnd} closeMessage={closeMessage} nameUser={nameUser} />
      )}
    </dialog>,

    document.getElementById("dialog")
  );
});

export default Message;
