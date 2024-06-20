import React from "react";
import refTypes from "./RefTypes";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <>
      <div className="container">
        <div class="accordion" id="accordionExample">
          {refTypes.map((element) => {
            return (
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class={`accordion-button ${element.btnClass}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${element.id}`}
                    aria-expanded={element.expanded}
                    aria-controls={element.id}
                  >
                    {element.title}
                  </button>
                </h2>
                <div
                  id={element.id}
                  class={`accordion-collapse collapse ${element.bodyClass}`}
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>{element.description}</strong> <br />
                    <p>{element.note}</p>
                    {element.refFormat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Main;
