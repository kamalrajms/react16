import React, { useRef, useState, useEffect } from "react";

export default function UseRefhooh() {
  //ex1
  const inputref = useRef();
  const focusint = () => {
    inputref.current.focus();
  };
  //ex2

  const [sec, setsec] = useState(0);
  const intervalref = useRef();

  useEffect(() => {
    intervalref.current = setInterval(() => {
      setsec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalref.current);
  }, []);
  //ex3
  const [newProductimg, setNewProductImg] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const inputImgRef = useRef(0);

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProductImg(false);
    }
    // console.log(imageURL);
  };

  return (
    <div>
      {/* //ex1 */}
      <input type="text" placeholder="enter name" ref={inputref} />
      <button onClick={focusint}>Focus input</button>
      {/* //ex2 */}
      <p>timer :{sec}</p>
      <button onClick={() => clearInterval(intervalref.current)}>Stop</button>
      {/* //ex3 */}
      <input
        type="file"
        accept="image/*"
        ref={inputImgRef}
        hidden
        onClick={handleImg}
      />
      {newProductimg ? (
        <div className="cointaine" onClick={() => inputImgRef.current.click()}>
          Updating image...
        </div>
      ) : (
        <img
          className="image-box"
          src={imageURL}
          onClick={() => inputImgRef.current.click()}
        />
      )}
    </div>
  );
}
