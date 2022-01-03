import React, { useState } from 'react'
import "./contact.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact() {

  const [message, setMesage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMesage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contato.</h2>
        <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href='https://www.linkedin.com/in/gustavo-ara%C3%BAjo-504601214/'> Gustavo Araújo </a>
        </div>
        <div className="itemContainer">
            <GitHubIcon className="icon" />
            <a href='https://github.com/GussAraujo'> GussAraujo </a>
        </div>
        <div className="itemContainer">
            <InstagramIcon className="icon" />
            <a href='https://www.instagram.com/gus.js/'> @gus.js </a>
        </div>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder='Email' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Menssagem'></textarea>
          <button type="submit"> Enviar </button>
          {message && <span> Obrigado, responderei em breve... </span>}
        </form> */}
      </div>
    </div>
  )
}
