import React, { useRef, useEffect } from "react";
import ReactWordcloud from 'react-wordcloud';
import './aboutme.css';


const callbacks = {
    // getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log,
    // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
  const options = {
    rotations: 1,
    rotationAngles: [0, 0],
    fontSizes: [95,95],
    padding: 10,
    transitionDuration: 500
  };
  const size = [600, 600];
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

//hoisting
function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
        savedCallback.current();
    }
    if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }
}, [delay])};

function SimpleWordcloud() {
        // <ReactWordcloud
        //     callbacks={callbacks}
        //     options={options}
        //     size={size}
        //     words={words}
        // />
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
                    <h5>제 소개를 시작 하도록 하겠습니다</h5>
                </div>
                <div className="wordCloud">
                    <SimpleWordcloud/>
                </div>
            </div>
        </section>
    )
}
export default Aboutme;