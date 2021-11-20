import './intro.scss'
import './intro-animation-cursor.scss'

import {init} from 'ityped'
import {useEffect, useRef} from 'react'

export default function Intro() {
  
  const textRef = useRef(); // you add the event to the element you add this as ref="textRef"

  useEffect(() => { 
    // init if a function from ityped.js it is copy and paste. there are more properties
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Content Creator'],

    })
  },[]);



  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="iconContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Safak Kocaoglu</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>

      </div>
    </div>
  )
}
