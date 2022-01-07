import "./contact.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contato.</h2>
        <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href='https://www.linkedin.com/in/gustavo-ara%C3%BAjo-504601214/' target="_blank"> Gustavo Araújo </a>
        </div>
        <div className="itemContainer">
            <GitHubIcon className="icon" />
            <a href='https://github.com/GussAraujo' target="_blank"> GussAraujo </a>
        </div>
        <div className="itemContainer">
            <InstagramIcon className="icon" />
            <a href='https://www.instagram.com/gus.js/' target="_blank"> @gus.js </a>
        </div>
      </div>
    </div>
  )
}
