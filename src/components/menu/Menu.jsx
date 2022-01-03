import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro"> Início </a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio"> Portifólio </a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works"> Trabalhos </a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials"> Depoimentos </a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact"> Contato </a>
        </li>
      </ul>
    </div>
  )
}
