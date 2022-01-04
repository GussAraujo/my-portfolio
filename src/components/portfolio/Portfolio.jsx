import { useState, useEffect } from "react";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import {
  sistemaPortfolio,
  chatPortfolio,
  apiPortfolio,
  mobilePortfolio
} from '../../data'

export default function Portfolio() {

  const [selected, setSelected] = useState("sistema");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "sistema",
      title: "Sistema"
    },
    {
      id: "chat",
      title: "Web Chat"
    },
    {
      id: "api",
      title: "API Node.Js"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "sistema":
        setData(sistemaPortfolio);
      break;
      case "chat":
        setData(chatPortfolio);
      break;
      case "api":
        setData(apiPortfolio);
      break;
      case "mobile":
        setData(mobilePortfolio);
      break;
    
      default:
        setData(sistemaPortfolio);
      break;
    }
  }, [selected])
 
  return (
    <div className="portfolio" id="portfolio">
      <h1> Portifólio </h1>
      <ul>
        {list.map(item=>(
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3> {d.title} </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
