import React from "react";
import {BsInfoCircle} from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeader";

const Skills=()=>{
    return(
        <section id="skills" className="skills">
            <PageHeaderContent
            headerText = "My Skills"
            icon={<BsInfoCircle size={40}/>}
            />
        </section>
    )
}
export default Skills;