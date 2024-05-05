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
        image: ImageOne,
        link : ""
    },
    {
        id: 2,
        name: "Predictive Analysis of Salary Classifications",
        image: ImageOne,
        link : ""
    },
    {
        id: 2,
        name: "ReScan",
        image: ImageOne,
        link : ""
    },
    {
        id: 3,
        name: "Donuts",
        image: ImageOne,
        link : ""
    },
    {
        id: 4,
        name: "Bruno Is Orange (Cover)",
        image: ImageOne,
        link : ""
    },
    {
        id: 4,
        name: "Over The Moon (Cover)",
        image: ImageOne,
        link : ""
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
    const [hovereredValue,setHoveredValue] = useState(null);

    function handleFilter(currentId){
        setFilteredValue(currentId)
    };

    function handleHover(index){
        setHoveredValue(index);
    }

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
                            <li className={item.filterId === filteredValue ? "active" : ""} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item,index)=>(
                            <div 
                            className="portfolio__content__cards__item" 
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={()=>handleHover(index)}
                            onMouseLeave={()=>handleHover(null)}
                            >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img alt="dummy data" src={item.image}/>
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hovereredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button>View More</button>
                                            </div>
                                        )
                                    }
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