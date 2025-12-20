import { useState } from "react";

export default function Form({isEnd, setIsEnd, closeMessage,nameUser }) {
  const [postSend, setPostSend] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = "https://eoufqhtidhjgd24.m.pipedream.net";

  function sendMessage() {
    const send = async () => {
      if (!postSend) return; // Evita l'invio se postSend è vuoto
      setLoading(true);
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          body: JSON.stringify({ name: nameUser, text: postSend , time : new Date()}),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const textResponse = await response.text();

        try {
          // Prova a parsarlo come JSON solo se possibile
          const data = JSON.parse(textResponse);
          console.log("Dati JSON ricevuti:", data);
        } catch (jsonError) {
          // Se non è JSON (come spesso accade con Pipedream), stampa il testo semplice
          console.log(
            "Il server ha risposto con testo semplice:",
            textResponse
          );
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    send();
    isEnd()
    closeMessage();
  }

  function onChangeV(e) {
    setPostSend(e.target.value);
  }

  return (
    <>
      <form
        className="flex gap-2 justify-center items-center flex-col"
        method="#"
      >
        <textarea
          className="bg-white w-3/4 text-black border-2 border-red-500 p-1 mt-3"
          placeholder="Inserisci qui il tuo testo"
          value={postSend}
          onChange={onChangeV}
        />
        <button
          className="hover:bg-red-500 bg-red-300 text-xl  text-black p-2 border-1 border-black rounded-xl"
          type="button"
          onClick={() => sendMessage()}
        >
          {loading ? "Invio in corso..." : "Invia"}
        </button>
      </form>
    </>
  );
}
