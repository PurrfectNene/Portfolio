import "bootstrap/dist/css/bootstrap.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div>
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
        style={{ fontSize: "35px", display: "inline-block", color: "purple" }}
        repeat={Infinity}
      />

      <div>
        <img src="/Images/cats-hello.jpg" style={{ width: "40%" }} />
      </div>
    </div>
  );
}
