import "./Letter.css";
export default function Letter() {
  let cssMail = "backgroundLetter ";
  return (
    <>
      <div className="flex">
        <div className="flex items-center justify-center flex-col">
          <label
            className="text-black text-4xl font-bold font-serif"
            htmlFor="name"
          >
            Inserisci il tuo nome qui sotto per aprire la lettera!
          </label>
          <div className="flex justify-center items-center">
            <input
              className="w-1/2 text-3xl bg-white text-black font-serif border-2 rounded-xl p-1"
              type="text"
              name="name"
              id="name"
            />
            <button className="bg-red-300 hover:bg-red-500 font-serif text-3xl p-2 text-black rounded-xl">
              Apri!
            </button>
          </div>
        </div>
      </div>

      <div className="container-letter  flex flex-col justify-end items-end">
        <div className={`${cssMail} `}></div>
      </div>
    </>
  );
}
