import { useState, useEffect } from "react";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import {
  sistemaPortfolio,
  chatPortfolio,
  apiNodePortfolio,
  apiAspPortfolio,
} from './data'

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
      id: "api_node",
      title: "API Node.Js"
    },
    {
      id: "api_Asp",
      title: "API Asp.Net"
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
      case "api_node":
        setData(apiNodePortfolio);
      break;
      case "api_Asp":
        setData(apiAspPortfolio);
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
          <a href={d.site} target="_blank">
            <div className="item">
              <img
                src={d.img}
                alt=""
              />
              <h3> {d.title} </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
