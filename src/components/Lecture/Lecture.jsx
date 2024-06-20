import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LectureRef from "./LectureRef";
import customeFeild from "./Fields";

const Lecture = () => {
  const [isShow, invokeModal] = useState(false);
  const [surName, setSurName] = useState("");
  const [initial, setInitial] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [lecture, setLecture] = useState("");
  const [module, setModule] = useState("");
  const [university, setUniversity] = useState("");
  const [date, setDate] = useState("");
  const [isValid, setIsValid] = useState(false);

  const referenceValue = {
    surName,
    initial,
    year,
    title,
    lecture,
    module,
    university,
    date,
  };

  // on form submission
  const onSubmit = (e) => {
    e.preventDefault();
    customeFeild.field.forEach((element) => {
      if (element.isRequired && element.value === "") {
        toast.warn(`${element.placeholder} is required`);
        setIsValid(false);
      } else if (element.name === "surname" && element.value !== "") {
        setSurName(element.value);
      } else if (element.name === "initial" && element.value !== "") {
        setInitial(element.value);
      } else if (element.name === "year" && element.value !== "") {
        setYear(element.value);
      } else if (element.name === "title" && element.value !== "") {
        setTitle(element.value);
      } else if (element.name === "module") {
        setModule(element.value);
      } else if (element.name === "university" && element.value !== "") {
        setUniversity(element.value);
      } else if (element.name === "date" && element.value !== "") {
        setDate(element.value);
        setIsValid(true);
      }
    });
  };
  // clear all
  const onClear = () => {
    setSurName("");
    setInitial("");
    setYear("");
    setTitle("");
    setLecture("");
    setModule("");
    setUniversity("");
    setDate("");
    setIsValid(false);
    <LectureRef refValue={""} />;
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
        Lecture Reference
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
              {/* <input
                name="surname"
                value={surName !== "" ? surName : ""}
                onChange={(e) => setSurName(e.target.value)}
                className={
                  surName ? "form-control" : "form-control blueBoarder"
                }
                placeholder="Author Surname"
              ></input>
              <input
                name="initial"
                value={initial !== "" ? initial : ""}
                onChange={(e) => setInitial(e.target.value)}
                className={
                  initial ? "form-control" : "form-control blueBoarder"
                }
                placeholder="Author Initial"
              ></input>
              <input
                name="year"
                maxLength={4}
                value={year !== "" ? year : ""}
                onChange={(e) => setYear(e.target.value)}
                className={
                  year
                    ? "date-own form-control"
                    : "date-own form-control blueBoarder"
                }
                type="number"
                placeholder="Year of publication"
              ></input>
              <input
                name="title"
                value={title !== "" ? title : ""}
                onChange={(e) => setTitle(e.target.value)}
                className={
                  title
                    ? "form-control titile"
                    : "form-control blueBoarder titile"
                }
                placeholder="Title"
              ></input> */}

              <div class="">
                <select
                  class="form-control"
                  id="floatingSelect"
                  onChange={(e) => setLecture(e.target.value)}
                >
                  <option value="Lecture">Lecture</option>
                  <option value="Presantation">Presantation</option>
                </select>
              </div>
              {/* <input
                name="module"
                value={module !== "" ? module : ""}
                onChange={(e) => setModule(e.target.value)}
                className={module ? "form-control" : "form-control blueBoarder"}
                placeholder="Module Name"
                type="text"
              ></input>
              <input
                name="unversity"
                value={university !== "" ? university : ""}
                onChange={(e) => setUniversity(e.target.value)}
                className={
                  university ? "form-control" : "form-control blueBoarder"
                }
                placeholder="University Name"
                type="text"
              ></input>
              <input
                name="date"
                value={date !== "" ? date : ""}
                onChange={(e) => setDate(e.target.value)}
                className={date ? "form-control" : "form-control blueBoarder"}
                placeholder="Date"
                type="date"
              ></input> */}

              <Button
                className="btn btn-info btnCommon"
                type="submit"
                variant="info"
              >
                Generate
              </Button>

              {isValid ? <LectureRef refValue={referenceValue} /> : ""}
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

export default Lecture;
