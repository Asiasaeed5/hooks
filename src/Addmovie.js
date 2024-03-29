import Modal from 'react-modal'; // Corrected import statement
import { useState } from 'react';

const AddMovie = ({ addfilm }) => {
  let [show, setShow] = useState(false);
  let [name, setName] = useState("");
  console.log(name, "asia");
  let [desceiption, setDesceiption] = useState("");
  let [rating, setRating] = useState("");
  let [year, setYear] = useState("");
  let [duration, setDuration] = useState(""); // Corrected variable name
  let [image, setImage] = useState("");

  const handleShow = () => {
    setShow(!show);
  };

  const add = () => {
    const newmovie = {
      name,
      desceiption: desceiption,
      star: rating,
      year,
      duration,
      img: image,
      id: Math.random(),
    };
    console.log(newmovie, "test");
    addfilm(newmovie);
    handleShow();
  };

  return (
    <>
      <button onClick={handleShow}>Add Movie </button>
      <Modal // Changed from ReactModal to Modal
        className="Modal"
        isOpen={show}
      >
        <div>
          <label>Movie Name</label>
          <input type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>desceiption</label>
          <input type="text" onChange={(event) => setDesceiption(event.target.value)} />
        </div>
        <div>
          <label>rating</label>
          <input type="number" onChange={(event) => setRating(event.target.value)} />
        </div>
        <div>
          <label>year</label>
          <input type="number" onChange={(event) => setYear(event.target.value)} />
        </div>
        <div>
          <label>duration</label>
          <input type="text" onChange={(event) => setDuration(event.target.value)} />
        </div>
        <div>
          <label>image</label>
          <input type="text" onChange={(event) => setImage(event.target.value)} />
        </div>
        <div>
          <button onClick={add}>save</button>
          <button onClick={handleShow}>close</button>
        </div>
      </Modal>
    </>
  );
};

export default AddMovie;
