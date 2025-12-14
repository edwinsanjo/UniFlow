import { BrowserRouter } from  "react-router-dom";
import { HashLink as Link } from  "react-router-hash-link";

export default function OnePage1() {
  return (
    <BrowserRouter >
      <div className= "container " >
        {/* NAVIGATION */}
        <ol>
          <li>
            <Link smooth to= "#section1 " >
              First Section
            </Link >
          </li >
          <li >
            <Link smooth to= "#section2 " >
              Second Section
            </Link >
          </li >
          <li >
            <Link smooth to= "#section3 " >
              Third Section
            </Link >

          </li >
        </ol >

        {/* SECTIONS */}
        <section id= "section1 " style={sectionStyle} >
          <h1 >First Section</h1 >
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat
            nunc, auctor vel felis eget, elementum feugiat sem...
          </p >
        </section >

        <section id= "section2 " style={sectionStyle} >
          <h1 >Second Section</h1 >
          <p >
            Vivamus rutrum ultricies ligula, id sagittis purus tristique id.
            Proin accumsan, nunc et semper tincidunt...
          </p >
        </section >

        <section id= "section3 " style={sectionStyle} >
          <h1 >Third Section</h1 >
          <p >
            Mauris pretium sit amet risus eget varius. Phasellus gravida mi
            mauris, sit amet facilisis justo ultricies id...
          </p >
        </section >
      </div >
    </BrowserRouter >
  );
}

/* STYLE (Optional) */
const sectionStyle = {
  padding:  "50vh 20px ", // large vertical padding to demo scrolling
  borderBottom:  "1px solid #ddd ",
};