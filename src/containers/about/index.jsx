import React from "react";
import {BsInfoCircle} from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeader";

const About=()=>{
    return(
        <section id="about" className="about">
            <PageHeaderContent
            headerText = "About Me"
            icon={<BsInfoCircle size={40}/>}
            />
        </section>
    )
}
export default About;