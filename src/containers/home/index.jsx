import React from "react";
import { TypeAnimation } from 'react-type-animation';
import "./style.scss"

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hi, I'm Richa Juvekar
                    <br />
                    <TypeAnimation
                        className="type-animation"
                        sequence={[
                            'A Developer',
                            1000,
                            'A Creative Thinker',
                            1000,
                            'A Musician',
                            1000,
                            'An Artist',
                            1000,
                            'A Life-Long Learner',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: 'inherit' }} 
                        repeat={Infinity}
                    />

                </h1>
            </div>
        </section>
    )
}
export default Home;