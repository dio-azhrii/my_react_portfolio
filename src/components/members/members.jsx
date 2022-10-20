import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">DioAzhari</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
            Hello my name is Dio Alfikih Azhari. I'm 19 years old. I'm student at SMAN 8 BandarLampung, Lampung.
            I have experience in UI/UX Creator Bot Whatsapp and mobile programming.
            I work as a UI / UX Programming in one of the start-up which is said to be a beginner,
             DevJect.
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>  
    </div>
  );
};

export default Members;
