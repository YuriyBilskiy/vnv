import '../components/Header.css'
import logoImage from '../image/logo_vnv.png'
import backgroundVideo from '../video/background.mp4'

export const Header = () => {
  return (
    <header className="header">
      <video className="backgroundVideo" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImage} alt="Логотип VNV" />
          </div>

          <div className="header__nav">

            <ul className="header__nav-list">
              <li className="header__nav-link">
                <a
                  className="header__nav-btn"
                  href="https://vnv.solutions/our-services.html"
                  target="_blank"
                >
                  services
                </a>
              </li>

              <li className="header__nav-link">
                <a
                  className="header__nav-btn"
                  href="https://vnv.solutions/our-team.html"
                  target="_blank"
                >
                  projects
                </a>
              </li>

              <li className="header__nav-link">
                <a
                  className="header__nav-btn"
                  href="https://vnv.solutions/our-team.html"
                  target="_blank"
                >
                  team
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div className="header__titleOne">
          <h1 className="header__title">
            Easy, quality, IT - winning solutions for your business
          </h1>

          <div className="header__about">

            <p className="header__paragraph">/ it company</p>

            <div className="header__subtitle">
              
              <div className="header__btn">contact us</div>
              <div className="header__arrow-wrapper">
                <a className="header__arrow" href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
