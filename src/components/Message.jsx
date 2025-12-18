import { createPortal } from "react-dom";
import { forwardRef } from "react";
import dbLetters from "../../dbLetters.js";
import "./Message.css";
const Message = forwardRef(function Message(
  { closeMessage, letterNumber, resetState },
  ref
) {
  return createPortal(
    <dialog
      className="message"
      onClose={() => {
        resetState();
        closeMessage();
      }}
      ref={ref}
    >
      <p>{dbLetters[letterNumber].text}</p>
      <form method="dialog">
        <textarea />
        <button type="submit">Invia</button>
      </form>
    </dialog>,

    document.getElementById("dialog")
  );
});

export default Message;
