import React from 'react';
import '../style/Home.css';
import mainImg from '../assets/images/main_img.JPG';


const Home: React.FC = () => {
    return (
        <section id='home' className="section home">
            <div className="content">
                <div className="text">
                    <h2>Hello :)</h2>
                    <h1>I'm Ido Nice</h1>
                    <h4>Software Developer</h4>
                    <p>
                        I'm developing well-designed, smart and innovative applications.
                    </p>
                </div>
                <div className="image-container">
                    <img src={mainImg} alt="Ido Nice" />
                </div>
            </div>
        </section>
    );
};

export default Home;
