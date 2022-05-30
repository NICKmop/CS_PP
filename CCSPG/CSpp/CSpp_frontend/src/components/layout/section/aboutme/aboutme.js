import React from "react";
import ReactWordcloud from 'react-wordcloud';
import './aboutme.css';

const callbacks = {
    // getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log
    // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
  const options = {
    rotations: 1,
    rotationAngles: [0, 0],
    fontSizes: [95,95],
    padding: 10,
    transitionDuration: 500
  };
  const size = [650, 800];
  const words = [
        {
            text: 'React',
            value: 128,
        },
        {
            text: 'Html',
            value: 128,
        },
        {
            text: 'Css',
            value: 128,
        },
        {
            text: 'Js',
            value: 128,
        },
        {
            text: 'Java',
            value: 128,
        },
        {
            text: 'Python',
            value: 128,
        },
        {
            text: 'Jquery',
            value: 128,
        },
        {
            text: 'SQL',
            value: 128,
        },
        {
            text: 'Json',
            value: 128,
        },
    ];

function SimpleWordcloud() {
    return (
        <ReactWordcloud
            callbacks={callbacks}
            options={options}
            size={size}
            words={words}
        />
    )
};

const Aboutme = () => {
    return (
        <section id="aboutmeContent">
            <div className="aboutmeContent_main">
                <div className="textZone">
                    <h1>With My Self & I </h1>
                    <h5>저는 프론트엔드 개발자가 되기 위해 항상 자기개발 및 현재 기술동향에<br/> 있어 뒤쳐지는 일없이
                        공부하며 원하는 형태로 구현이 가능 하게 하여      
                    </h5>
                </div>
                <div className="wordCloud">
                    <SimpleWordcloud/>
                </div>
            </div>
        </section>
    )
}
export default Aboutme;