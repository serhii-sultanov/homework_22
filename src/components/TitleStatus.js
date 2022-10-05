import { useState } from "react";
import Title from "./Title";

const TitleStatus = () => {
  const [isShown, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevValue) => !prevValue);
  };

  if (isShown) {
    return (
      <>
        <Title name="Products" fontWeight="bold" />
        <button onClick={handleClick}>Hide Title</button>
      </>
    );
  }

  return <button onClick={handleClick}>Show Title</button>;
};

export default TitleStatus;
