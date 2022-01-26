import "./experience.scss"
import logoUdemy from '../../assets/udemy.png'
import logoIfba from '../../assets/ifba.png'

export default function Contact() {
  return (
    <div className="experience" id="experience">
      <div className="left">
        <h2> Experiência </h2>
        <div className="itemContainer">
          <img src={logoIfba} alt="" />
          <h3> Protótipo de Visão Computacional para monitoramento automático de ambientes </h3>
          <h5> (Iniciação Científica) </h5>
        </div>
        <div className="itemDetails">
          <h4> Área: Programação </h4>
          <h4> Objetivo: Realizar a detecção automática de faces com capacete utilizando técnicas de
  processamento digital de imagens </h4>
          <h4> Instituição: Instituto Federal de Educação, Ciência e Tecnologia da Bahia – Campus Ilhéus </h4>
          <h4> Período: Julho de 2019 - Agosto de 2020 </h4>
        </div>      
      </div>
      <div className="right">
        <h2> Certificados </h2>
        <div className="itemContainer">
          <img src={logoUdemy} alt="" />
        </div>
        <div className="itemDetails">
          <h3> ASP.NET CORE MVC </h3>
          <h4> Data: 24 de agosto de 2021 </h4>
          <h4> Duração: 10 horas no total </h4>
          <h4> Instrutor: Filipe Tório Lopes Ruas Nhimi </h4>
          <a href="https://www.udemy.com/certificate/UC-a69bdffc-f4c8-4ba7-9b01-f879d20158ac/" target="_blank" rel="noreferrer"> <h4> Ver Crendencial </h4> </a>
        </div>
        <div className="itemDetails">
          <h3> API Restful Javascript com Node.js, Typescript, TypeORM etc </h3>
          <h4> Data: 6 de Janeiro de 2022 </h4>
          <h4> Duração: 26 horas no total </h4>
          <h4> Instrutor: Jorge Aluizio Alves de Souza </h4>
          <a href="https://www.udemy.com/certificate/UC-e57fd0b3-a9b6-4dfd-9199-357794b1e4e3/" target="_blank" rel="noreferrer"> <h4> Ver Crendencial </h4> </a>
        </div>
      </div>
    </div>
  )
}
