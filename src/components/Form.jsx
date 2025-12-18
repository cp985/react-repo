import { useState, useEffect } from "react";

export default function Form() {
  const [timeIsEnd, setTimeEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeEnd(true);
    }, 5000);
  }, []);

  return (
    <>
      {timeIsEnd ? (
        <form
          className="flex gap-2 justify-center items-center flex-col"
          method="dialog"
        >
          <textarea className="bg-white w-3/4 text-black border-2 border-red-500 p-1 mt-3" placeholder="Inserisci qui il tuo testo" />
          <button className="hover:bg-red-500 bg-red-300 text-xl  text-black p-2 border-1 border-black rounded-xl" type="submit">
            Invia
          </button>
        </form>
      ) : null}
    </>
  );
}
