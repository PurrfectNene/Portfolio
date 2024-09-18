import "bootstrap/dist/css/bootstrap.css";
import { TypeAnimation } from "react-type-animation";
import "./Introduction.css";
import { Footer } from "rsuite";

export default function Home() {
  return (
    <>
    <div className="introduction">
      <TypeAnimation
        sequence={[
          "Hi, my name is Irene",
          2000, 
          "I am a Full Stack Web Developer",
          2000,
          "Welcome to my website",
          6000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "500%",
          display: "inline-block",
          color: "#9f81f7",
          fontFamily: "hey-comic",
        }}
        repeat={Infinity}
      />
      </div>


        <img className="hello-cats" src="/Images/hello-cats.png" alt="hello-cats"/>
      
  </> 
  );
}
