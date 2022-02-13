import "./intro.scss"
import { useEffect, useRef }from 'react'
import { init } from "ityped"
import avatar from "../../assets/eu2.jpeg"
import down from "../../assets/down.png"

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 80,
      showCursor: true,
      strings: ["Back-End", "Node.Js", "Asp.Net"] })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img src={avatar} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Olá, eu sou </h2>
          <h1> Gustavo Araújo </h1>
          <h3> Desenvolvedor <span ref={textRef}> </span> </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt=""></img>
        </a>
      </div>
    </div>
  )
}
