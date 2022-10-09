import { useState } from "react";
import Title from "./components/Title";

function App() {
  const [isShown, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevValue) => !prevValue);
  };
  return (
    <>
      {isShown && <Title name="Products" fontWeight="bold" />}
      <button onClick={handleClick}>
        {!isShown ? "Show Title" : "Hide Title"}
      </button>
    </>
  );
}

export default App;
