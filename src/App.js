import { useState } from "react";
import Title from "./components/Title";

function App() {
  const [isShown, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevValue) => !prevValue);
  };
  return (
    <>
      {isShown && <Title name="Products" type="bold" />}
      <button onClick={handleClick}>
        {isShown ? "Hide Title" : "Show Title"}
      </button>
    </>
  );
}

export default App;
