import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

class ArticleRef extends React.Component {
  constructor(props) {
    super(props);
    this.textContent = null;
    this.state = {
      copied: false,
    };
  }

  copyToClipboard = () => {
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(this.textContent);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    this.setState({ copied: true });

    Swal.fire({
      title: "Copied",
      text: "Your reference was copied to clipboard.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  initRef = (c) => (this.textContent = c);

  render() {
    return (
      <>
        {this.props.refValue.surName === "" ? null : (
          <p
            id="ref"
            className="finalReference"
            onClick={this.copyToClipboard}
            ref={this.initRef}
          >
            {this.props.refValue.surName},{this.props.refValue.initial}.{" "}
            {`(${this.props.refValue.year})`}{" "}
            {`'${this.props.refValue.titleOfArticle}'`},
            <em>{this.props.refValue.titleOfJournal},</em>
            {this.props.refValue.volume ? `${this.props.refValue.volume},` : ""}
            {this.props.refValue.issueNumber
              ? `${this.props.refValue.issueNumber},`
              : ""}
            {this.props.refValue.pageNumber}.
          </p>
        )}

        <Button
          variant="dark"
          className="copy btnCommon"
          onClick={this.copyToClipboard}
        >
          Copy
        </Button>
      </>
    );
  }
}

export default ArticleRef;
