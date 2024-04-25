import React from "react";
import {BsInfoCircle} from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeader";

const Projects=()=>{
    return(
        <section id="projects" className="projects">
            <PageHeaderContent
            headerText = "My Projects"
            icon={<BsInfoCircle size={40}/>}
            />
        </section>
    )
}
export default Projects;