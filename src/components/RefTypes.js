import Article from "./Article/Article";
import Site from "./site/Site";
import Lecture from "./Lecture/Lecture";
import BookTest from "./book/Book";
import Youtube from "./YouTube/Youtube";

let refTypes = [
  {
    id_: 1,
    id: "collapseOne",
    btnClass: "",
    bodyClass: "show",
    title: "Book Reference - Printed",
    description: "Sample Reference:",
    note: "Hasler, E 2018,The built environment, Liverpool University Press, Liverpool.",
    expanded: true,
    refFormat: <BookTest />,
  },
  {
    id_: 2,
    id: "collapseTwo",
    btnClass: "collapsed",
    bodyClass: "",
    title: "Journal Article Reference - Printed",
    description: "Sample Reference:",
    note: "Gray, L 2018, 'Exploring how and why young people use social networking sites', Educational Psychology in Practice, vol. 34, no. 2, pp. 175-194. ",
    expanded: false,
    refFormat: <Article />,
  },
  {
    id_: 3,
    id: "collapseThree",
    btnClass: "collapsed",
    bodyClass: "",
    title: "Site Reference",
    description: "Sample Reference:",
    note: "Matthews, M. (2001) A Short Course in Soil and Rock Slope Engineering. [Online] London,Thomas Telford Publishing. Available from: http://www.myilibrary.com?ID=93941 [Accessed 18th June 2008].",
    expanded: false,
    refFormat: <Site />,
  },
  {
    id_: 4,
    id: "collapseFour",
    btnClass: "collapsed",
    bodyClass: "",
    title: "Lecture/presentation",
    description: "Sample Reference:",
    note: "Wagner, G. (2006) Structural and functional studies of protein interactions in gene expression. [Lecture] Imperial College London, 12th December",
    expanded: false,
    refFormat: <Lecture />,
  },
  {
    id_: 5,
    id: "collapseFive",
    btnClass: "collapsed",
    bodyClass: "",
    title: "YouTube",
    description: "Sample Reference:",
    note: "TEDx Talks (2014) You are a simulation & physics can prove It: George Smoot at TEDxSalford. 12 February. Available at: https://www.youtube.com/watch?v=Chfoo9NBEow (Accessed: 24 September 2020).",
    expanded: false,
    refFormat: <Youtube />,
  },
  {
    id_: 6,
    id: "collapseSix",
    btnClass: "collapsed",
    bodyClass: "",
    title: "News Paper",
    description: "Sample Reference:",
    note: "TEDx Talks (2014) You are a simulation & physics can prove It: George Smoot at TEDxSalford. 12 February. Available at: https://www.youtube.com/watch?v=Chfoo9NBEow (Accessed: 24 September 2020).",
    expanded: false,
    refFormat: <Youtube />,
  },
];

export default refTypes;
