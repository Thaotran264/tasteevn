import { useEffect, useRef, useState } from "react";

const ScrollComponent = () => {
  const [color, setColor] = useState("border-dark w-75 h-50");
  const test = useRef();
  useEffect(() => {
    const handleScroll = (event) => {
      console.log("window.scrollY", window.scrollY);
      console.log("window", test.current.offsetTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        border: "3px solid black",
        width: "400px",
        height: "100rem",
      }}
    >
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <div ref={test}></div>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
};

export default ScrollComponent;
