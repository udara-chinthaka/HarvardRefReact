import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookRef from "./BookRef";
import customeFeild from "./Fields";

const BookTest = () => {
  const [isShow, invokeModal] = useState(false);
  const [author, setAuthor] = useState("");
  const [initial, setInitial] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [edition, setEdition] = useState("");
  const [publisher, setPublisher] = useState("");
  const [place, setPlace] = useState("");
  const [isValid, setIsValid] = useState(false);

  const referenceValue = {
    author,
    initial,
    year,
    title,
    edition,
    publisher,
    place,
  };

  // on form submission
  const onSubmit = (e) => {
    e.preventDefault();
    customeFeild.field.forEach((element) => {
      if (element.isRequired && element.value === "") {
        toast.warn(`${element.placeholder} is required`);
        setIsValid(false);
      } else if (element.name === "author" && element.value !== "") {
        setAuthor(element.value);
      } else if (element.name === "initial" && element.value !== "") {
        setInitial(element.value);
      } else if (element.name === "year" && element.value !== "") {
        setYear(element.value);
      } else if (element.name === "title" && element.value !== "") {
        setTitle(element.value);
      } else if (element.name === "edition") {
        setEdition(element.value);
      } else if (element.name === "publisher" && element.value !== "") {
        setPublisher(element.value);
      } else if (element.name === "place" && element.value !== "") {
        setPlace(element.value);
        setIsValid(true);
      }
    });
  };

  // clear all
  const onClear = () => {
    setAuthor("");
    setInitial("");
    setYear("");
    setTitle("");
    setEdition("");
    setPlace("");
    setPublisher("");
    setIsValid(false);
    <BookRef refValue={""} />;
    document.getElementById("Form").reset();

    customeFeild.field.forEach((element) => {
      element.value = "";
    });
  };

  function closeModalHandler() {
    invokeModal(false);
  }
  return (
    <>
      <Button
        variant="success"
        className="btn btn-info btnCommon"
        onClick={invokeModal}
      >
        Book Referance
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={closeModalHandler}>
          <Modal.Title>Please Fill the Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit} id="Form">
            <div className="form-group">
              {customeFeild.field.map((element) => {
                return (
                  <input
                    name={element.name}
                    onChange={(e) => (element.value = e.target.value)}
                    className={
                      element.isRequired && !author
                        ? `form-control ${element.className}`
                        : `form-control `
                    }
                    placeholder={element.placeholder}
                    type={element.inputType}
                    // value={element.value ? element.value : ""}
                    defaultValue={element.value ? element.value : ""}
                  ></input>
                );
              })}

              <Button
                className="btn btn-info btnCommon"
                type="submit"
                variant="info"
              >
                Generate
              </Button>

              {isValid ? <BookRef refValue={referenceValue} /> : ""}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="btn btnCommon" onClick={onClear}>
            Clear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookTest;
