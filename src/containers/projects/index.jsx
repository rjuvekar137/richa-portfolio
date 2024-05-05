import React, {useState} from "react";
import { BsInfoCircle } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import ImageOne from "../../images/coder.jpeg";
import "./style.scss";

const projectData = [
    // id 1 is all types of projects
    // id 2 is dev project
    // id 3 is art/design project
    // id 4 is music project
    {
        id: 2,
        name: "Ola's Nightmare",
        image: ImageOne
    },
    {
        id: 2,
        name: "Predictive Analysis of Salary Classifications",
        image: ImageOne
    },
    {
        id: 2,
        name: "ReScan",
        image: ImageOne
    },
    {
        id: 3,
        name: "Donuts",
        image: ImageOne
    },
    {
        id: 4,
        name: "Bruno Is Orange (Cover)",
        image: ImageOne
    },
    {
        id: 4,
        name: "Over The Moon (Cover)",
        image: ImageOne
    }
]

const filterData = [
    {
        filterId: 1,
        label: "All"
    },
    {
        filterId: 2,
        label: "Development"
    },
    {
        filterId: 3,
        label: "Design"
    },
    {
        filterId: 4,
        label: "Music"
    }
]

const Projects = () => {

    const [filteredValue,setFilteredValue] = useState(1);

    function handleFilter(currentId){
        setFilteredValue(currentId)
    };

    const filteredItems = filteredValue === 1 ? projectData : projectData.filter(item=>item.id === filteredValue)

    return (
        <section id="projects" className="projects">
            <PageHeaderContent
                headerText="My Projects"
                icon={<BsInfoCircle size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map((item) => (
                            <li onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item)=>(
                            <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}>
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img alt="dummy data" src={item.image}/>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Projects;