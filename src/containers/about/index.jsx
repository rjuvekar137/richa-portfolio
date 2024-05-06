import React from "react";
import { BsInfoCircle } from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeader";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";


const personalDetails = [
    {
        label: "Name:",
        value: "Richa Juvekar",
    },
    {
        label: "Location:",
        value: "Boston, MA"
    },
    {
        label: "Email:",
        value: "juvekar.r@northeastern.edu",
    },
    {
        label: "Graduation Date:",
        value: "May 2026",
    },
    {
        label: "Linkedin:",
        value: "https://www.linkedin.com/in/richajuvekar/ ",
    },
    {
        label: "GitHub:",
        value: "https://github.com/rjuvekar137 ",
    }
]

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircle size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: "translateX(-900px)",
                        }}
                        end={{
                            transform: "translate(0px)",
                        }}
                    >
                        <h3>Richa Juvekar</h3>
                        <p>
                            <div>
                                Hello, I'm Richa! I'm a sophomore student at Northeastern University, majoring in Computer Science and
                                Marketing Analytics and pursuing two minors in Music Industry and Immersive Media.
                            </div>
                            <div>
                                I am dedicated to leveraging my skills in computer science to make meaningful contributions to a
                                variety of fields, especially within the artistic industries. My academic journey reflects my commitment
                                to bridging the gap between technology and the arts, creating a unique blend of skills that I believe will
                                drive innovation and creativity in the digital landscape.
                            </div>
                            <div>
                            I hope to bring my technical skills with me in future endeavors and develop solutions to challenging problems.
                            I look forward to the exciting opportunities that lie at the intersection of technology and creativity!
                            </div>
                        </p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translate(0px)",
                        }}
                    >
                        <h3 className="contactInfo"> Personal Info</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translate(0px)",
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>

    )
}
export default About;