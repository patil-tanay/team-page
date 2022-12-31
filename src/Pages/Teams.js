import React, { Component } from "react";
import "./../Assets/css/team.css";
import Ankur from "../Assets/img/demoo.jpg";
import linkedIn from "../Assets/img/linkedin.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default class Teams extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const FacultyCoordinator = [
      {
        name: "Prof. Narendra Pal Singh",
        role: "Faculty Coordinator",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/narendrapalsinghrathore",
      },
      {
        name: "Prof. Priyanka Jagande",
        role: "Faculty Coordinator",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/priyanka-jangde-2489741a",
      },
    ];

    const GDSCLead = [
      {
        name: "Khushi Gandhi",
        role: "GDSC Lead",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/khushigandhi27",
      },
      {
        name: "Moheshaa Bajpai",
        role: "GDSC Co-Lead",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/moheshaa-bajpai-9479311a9",
      },
    ];
    const Leads = [
      {
        name: "Ayush Pawar",
        role: "Web Developer Head",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/27-ayush-pawar",
      },
      {
        name: "Vaibhav Rathore",
        role: "Cloud Computing Head",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/vaibhavrathore11",
      },
      {
        name: "Priyansh Gupta",
        role: "Cyber Security Head",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/pg1411",
      },
      {
        name: "Sanidhya Jain",
        role: "Creatives Head",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/sanidhyajain0701",
      },
      {
        name: "Mehee Porwal",
        role: "AI/ML Head",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/mehee-porwal",
      },
      {
        name: "Umesh Tiwari",
        role: "Mobile Developer Head",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/umesh-tiwari-861826174",
      },
    ];
    
    const webteam = [
      {
        name: "Shailja Patil",
        role: "Web Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/shailja-patil-a09a96209",
      },
      {
        name: "Sandesh Ratnawat",
        role: "Web Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/sandesh-ratnawat",
      },
      {
        name: "Murtaza Bohra",
        role: "Web Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/murtazaabohra",
      },
      {
        name: "Ranak Agrawal",
        role: "Web Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/ranakagrawal",
      },
      {
        name: "Arjav Sethi",
        role: "Web Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/arjav-sethi-ba0340175",
      },
      {
        name: "Yuvraj Singh",
        role: "Web Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/yuvraj-singh-424b49212",
      },
    ];
    const appteam = [
      {
        name: "Tanishq Chawda",
        role: "Mobile Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/tanishq14developer",
      },
      {
        name: "Vishesh Suryavanshi",
        role: "Mobile Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/vishesh-07",
      },
      {
        name: "Tanu Jain",
        role: "Mobile Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/tanu-jain-63538a20b",
      },
      {
        name: "Shivam Patel",
        role: "Mobile Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/shivam-patel-798104248",
      },
      {
        name: "Ashwin Gorle",
        role: "Mobile Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "",
      },
    ];

    const creatives = [
      {
        name: "Rashi Jain",
        role: "Content Writer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/rashi-jain-459006206",
      },
      {
        name: "Anushka Pateriya",
        role: "Graphic Designer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/anushka-pateriya-86b671247",
      },
      {
        name: "Somnath Tyagi",
        role: "Graphic Designer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/somnath-tyagi-16473b1ab",
      },
      ,
      {
        name: "Kapil Rathore",
        role: "Graphic Designer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/kapilrathore101",
      },
    ];

    const aiml = [
      {
        name: "Jeevika Shrivastava",
        role: "AI/ML Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/jeevika-shrivastava-223745207",
      },
      {
        name: "Shadab Khan",
        role: "AI/ML Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/shadabmonu-khan",
      },
      {
        name: "Namrata Panwar",
        role: "AI/ML Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/namrata-panwar-453b75208",
      },
      {
        name: "Harshit Rathore",
        role: "AI/ML Developer",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/harshit-rathore-53107b20b",
      },
    ];

    const cloud = [
      {
        name: "Tanay Patil",
        role: "Cloud Computing",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/tanay-patil25",
      },
      {
        name: "Harshal Sanghvi",
        role: "Cloud Computing",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/harshalsanghvi",
      },
      {
        name: "Mahi Patel",
        role: "Cloud Computing",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/mahi-patel-509ab1247",
      },
    ];

    const cyber = [
      {
        name: "Shivdev Singh",
        role: "Cyber Security",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "",
      },
      {
        name: "Sumit Mandloi",
        role: "Cyber Security",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/sumitmandloi",
      },
      {
        name: "Rishi Raj Singh Chauhan",
        role: "Cyber Security",
        img: require("../Assets/img/demoo.jpg"),
        linkedIn: "https://www.linkedin.com/in/rishi-raj-singh-chauhan-a9ba4721b",
      },
    ];

    return (
      <div className="team">

        {/*left right section */}
        <div className="teamlanding"  data-aos-delay="600">
        
            <h2>
              <b>Meet Our Team 2022-2023</b>
            </h2>
        </div>
        {/*team section */}
        {/* Faculty Coordinators */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Faculty Coordinators</h1>
        </div>
        <div className="teamsCardContainer mt-5 col-md-9">
          {FacultyCoordinator.map((team, index) => (
            <div class="teamCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="teamImage" alt="" src={team.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {team.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {team.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={team.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* GDSC Lead */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>GDSC Lead</h1>
        </div>
        <div className="teamsCardContainer mt-5" data-aos="fade-up">
          <div class="teamCard">
            <div style={{ height: "40px" }}>
              <img class="teamImage" alt="" src={Ankur} />
            </div>
            <h5
              class="MuiTypography-root mt-5 jss7 MuiTypography-h4 team-heading MuiTypography-alignCenter"
              style={{ fontFamily: "GoogleSans-Bold" }}
            >
              Khushi Gandhi
            </h5>
            <span
              class="MuiTypography-root mt-2 jss7 MuiTypography-caption team-dept MuiTypography-alignCenter"
              sx="[object Object]"
              style={{ fontFamily: "GoogleSans-Light" }}
            >
              GDSC Lead
            </span>

            <div class="MuiCardActions-root MuiCardActions-spacing margin-2">
              <button class="connect-btn">
                <a href="https://www.linkedin.com/in/ankurg132" target="_blank">
                  <img src={linkedIn} className="connect-icon" />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="Heading text-center" data-aos="fade-up">
          <h1>GDSC Co-Lead</h1>
        </div>
        <div className="teamsCardContainer mt-5" data-aos="fade-up">
          <div class="teamCard">
            <div style={{ height: "40px" }}>
              <img class="teamImage" alt="" src={Ankur} />
            </div>
            <h5
              class="MuiTypography-root mt-5 jss7 MuiTypography-h4 team-heading MuiTypography-alignCenter"
              style={{ fontFamily: "GoogleSans-Bold" }}
            >
              Moheshaa Bajpai
            </h5>
            <span
              class="MuiTypography-root mt-2 jss7 MuiTypography-caption team-dept MuiTypography-alignCenter"
              sx="[object Object]"
              style={{ fontFamily: "GoogleSans-Light" }}
            >
              GDSC Co-Lead
            </span>

            <div class="MuiCardActions-root MuiCardActions-spacing margin-2">
              <button class="connect-btn">
                <a href="https://www.linkedin.com/in/ankurg132" target="_blank">
                  <img src={linkedIn} className="connect-icon" />
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Leads */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Leads</h1>
        </div>
        <div className="teamsCardContainer mt-5 col-md-9">
          {Leads.map((team, index) => (
            <div class="teamCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="teamImage" alt="" src={team.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {team.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {team.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={team.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/*---------------------WebTeam---------------------*/}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Web Team</h1>
        </div>
        <div className="teamsCardContainer mt-5 col-md-9">
          {webteam.map((team, index) => (
            <div class="teamCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="teamImage" alt="" src={team.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {team.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {team.role}
              </span>
              <br />

              <div class="MuiCardActions-root MuiCardActions-spacing">
                <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                  <button class="connect-btn">
                    <a href={team.linkedIn} target="_blank">
                      <img src={linkedIn} className="connect-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*---------------------appteam---------------------*/}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>App Team</h1>
        </div>
        <div className="teamsCardContainer mt-5 col-md-9">
          {appteam.map((team, index) => (
            <div class="teamCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="teamImage" alt="" src={team.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 team-heading margin-2 MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {team.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {team.role}
              </span>
              <br />
              <div class="MuiCardActions-root MuiCardActions-spacing">
                <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                  <button class="connect-btn">
                    <a href={team.linkedIn} target="_blank">
                      <img src={linkedIn} className="connect-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --------------------Creatives------------------------------- */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Creatives</h1>
        </div>
        <div className="teamsCardContainer mt-5 col-md-9">
          {creatives.map((team, index) => (
            <div class="teamCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="teamImage" alt="" src={team.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {team.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {team.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={team.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* ---------------------aimlTeam----------------------------- */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>AI/ML Team</h1>
        </div>
        <div className="teamsCardContainer mt-5 col-md-9">
          {aiml.map((team, index) => (
            <div class="teamCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="teamImage" alt="" src={team.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {team.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {team.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={team.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* ---------------------cloudTeam----------------------------- */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Cloud Team</h1>
        </div>
        <div className="teamsCardContainer mt-5 col-md-9">
          {cloud.map((team, index) => (
            <div class="teamCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="teamImage" alt="" src={team.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {team.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {team.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={team.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* ---------------------cyberTeam----------------------------- */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Cyber Team</h1>
        </div>
        <div className="teamsCardContainer mt-5 col-md-9">
          {cyber.map((team, index) => (
            <div class="teamCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="teamImage" alt="" src={team.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {team.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {team.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={team.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
