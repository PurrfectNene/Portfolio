import "bootstrap/dist/css/bootstrap.css";
import { TypeAnimation } from "react-type-animation";
import "./Introduction.css"

export default function Home() {
  return (
    <div className="introduction">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Hi, my name is Irene",
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "I am a Full Stack Web Developer",
          2000,
          "Welcome to my website",
          6000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "500%", display: "inline-block", color: "#9f81f7", fontFamily: "hey-comic" }}
        repeat={Infinity}
      />

      <div>
        <img src="/Images/hello-cats.png" style={{ width: "50%" }} />
      </div>
    </div>
  );
}
