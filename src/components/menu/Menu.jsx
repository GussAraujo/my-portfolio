import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <a href="#intro">
          <li onClick={()=>setMenuOpen(false)}>
            Intro
          </li>
        </a>
        <a href="#portfolio">
          <li onClick={()=>setMenuOpen(false)}>
            Portifólio
          </li>
        </a>
        <a href="#skills">
          <li onClick={()=>setMenuOpen(false)}>
            Habilidades
          </li>
        </a>
        <a href="#experience">
          <li onClick={()=>setMenuOpen(false)}>
            Experiência e Certificados
          </li>
        </a>
        <a href="#contact">
          <li onClick={()=>setMenuOpen(false)}>
            Contato
          </li>
        </a>
      </ul>
    </div>
  )
}
