import "./about.css";
import Award from "../../img/award.jpg";
import face from "../../img/face.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src= {face}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I recently graduated from university with a bachelor's degree in computer science. 
        I'm currently on the search for potential opportunities. Be my guest.
        </p>
        <p className="a-desc">
        I've always had an interest in computers. Machines are capable of a wide range of tasks 
        when properly programmed. I aspire to be a part of this historic technological journey. I am currently specializing
         in Python programming. Python's popularity stems from its wide range of applications, 
         which include network programming, web development, computer vision, game development, and data science.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title"> A bit of photography... </h4>
            <p className="a-award-desc">
            Photography and dance are two of my other interests. 
            On the left pane, you can see a photo of a flower I took a while ago.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
