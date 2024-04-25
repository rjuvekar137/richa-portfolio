import React from "react";
import { TypeAnimation } from 'react-type-animation';
import "./style.scss"

const Home=()=>{
    return(
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                     Hi, I'm Richa Juvekar
                     <br/>
                     <TypeAnimation
                        sequence={[
                            'A Programmer',
                            1000,
                            'A Musician',
                            1000,
                            'An Artist',
                            1000,
                            'A Student',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '8rem', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
            </div>
        </section>
    )
}
export default Home;