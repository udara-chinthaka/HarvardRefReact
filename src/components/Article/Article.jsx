import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticleRef from "./ArticleRef";
import customeFeild from "./Fields";

const Article = () => {
  const [isShow, invokeModal] = useState(false);
  const [surName, setSurName] = useState("");
  const [initial, setInitial] = useState("");
  const [year, setYear] = useState("");
  const [titleOfArticle, setTitleOfArticle] = useState("");
  const [titleOfJournal, setTitleOfJournal] = useState("");
  const [volume, setVolume] = useState("");
  const [issueNumber, setIssueNumber] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  function closeModalHandler() {
    invokeModal(false);
  }

  const referenceValue = {
    surName,
    initial,
    year,
    titleOfArticle,
    titleOfJournal,
    volume,
    issueNumber,
    pageNumber,
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
      } else if (element.name === "titleOfArticle" && element.value !== "") {
        setTitleOfArticle(element.value);
      } else if (element.name === "titleOfJournal") {
        setTitleOfJournal(element.value);
      } else if (element.name === "volume" && element.value !== "") {
        setVolume(element.value);
      } else if (element.name === "issueNumber" && element.value !== "") {
        setIssueNumber(element.value);
      } else if (element.name === "pageNumber" && element.value !== "") {
        setPageNumber(element.value);
        setIsValid(true);
      }
    });
  };

  // clear all
  const onClear = () => {
    setSurName("");
    setInitial("");
    setYear("");
    setTitleOfArticle("");
    setTitleOfJournal("");
    setVolume("");
    setIssueNumber("");
    setPageNumber("");
    setIsValid(false);
    <ArticleRef refValue={""} />;
    document.getElementById("Form").reset();

    customeFeild.field.forEach((element) => {
      element.value = "";
    });
  };

  return (
    <>
      <Button
        variant="success"
        className="btn btn-info btnCommon"
        onClick={invokeModal}
      >
        Journal Article Referance - Printed
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

              {isValid ? <ArticleRef refValue={referenceValue} /> : ""}
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

export default Article;
