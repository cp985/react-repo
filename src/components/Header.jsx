import "./Header.css";
export default function Header() {
  let cssClassH1 = "christmas christmas-wave";
 
  const h1Text = `Happy${`\u2009`}Christmas`;
  const h1TextArray = h1Text.split("");
  
  return (
    <header>
      <h1 className={`${cssClassH1} m-0 text-red-500`}>
      {h1TextArray.map((letter, index) => (
        <span style={{ animationDelay: `${index * 0.1}s`}} key={index}>{letter}</span>
      ))}
      
      </h1>
    </header>
  );
}
