import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YoutubeRef from "./YoutubeRef";
import customeFeild from "./fields";

const Youtube = () => {
  const [isShow, invokeModal] = useState(false);
  const [channel, setChannel] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [postedDate, setPostedDate] = useState("");
  const [url, setURL] = useState("");
  const [date, setDate] = useState("");
  const [isValid, setIsValid] = useState(false);

  const referenceValue = {
    channel,
    year,
    title,
    postedDate,
    url,
    date,
  };

  // on form submission
  const onSubmit = (e) => {
    e.preventDefault();
    customeFeild.field.forEach((element) => {
      if (element.isRequired && element.value === "") {
        toast.warn(`${element.placeholder} is required`);
        setIsValid(false);
      } else if (element.name === "channel" && element.value !== "") {
        setChannel(element.value);
      } else if (element.name === "year" && element.value !== "") {
        setYear(element.value);
      } else if (element.name === "title" && element.value !== "") {
        setTitle(element.value);
      } else if (element.name === "uploadedDate" && element.value !== "") {
        setPostedDate(element.value);
      } else if (element.name === "url") {
        setURL(element.value);
      } else if (element.name === "date" && element.value !== "") {
        setDate(element.value);
        setIsValid(true);
      }
    });
  };

  // clear all
  const onClear = () => {
    setChannel("");
    setTitle("");
    setYear("");
    setPostedDate("");
    setURL("");
    setDate("");
    setIsValid(false);
    <YoutubeRef refValue={""} />;
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
                      element.isRequired
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

              {isValid ? <YoutubeRef refValue={referenceValue} /> : ""}
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
export default Youtube;
