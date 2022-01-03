import "./intro.scss"
import avatar from "../../assets/avatar.png"
import down from "../../assets/down.png"

export default function Intro() {
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
          <h3> Desenvolvedor <span>Full Stack </span> </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt=""></img>
        </a>
      </div>
    </div>
  )
}
