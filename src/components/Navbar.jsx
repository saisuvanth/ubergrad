import styles from "../assets/css/Navbar.module.css";
import { useEffect,useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { FaBars } from "react-icons/fa";
import {GiCrossMark} from 'react-icons/gi';

const breakpoint = 960;

const NewNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const locData = useLocation();
  useEffect(() => {
    console.log(locData);
    setIsActive(false);
  }, [locData.pathname]);
  // const navRef = useRef();
  const [colorChange, setColorchange] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const changeNavbarColor = () => {
    if (window.scrollY >= 0) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(()=>{
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${styles.aniBottomToTop}`);
          return;
        }
        entry.target.classList.remove(`${styles.aniBottomToTop}`);
      });
    });
    const check1 = document.getElementById("nav_text1");

    observer3.observe(check1);
  },[])

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    window.addEventListener("scroll", changeNavbarColor);
  }, []);
  return (
    <header>
      <div className={styles.container}>
        <nav
          className={`${colorChange ? styles.scroll : ""} ${
            isActive ? styles.active : " "
          }`}
          id='nav_text1'
        >
          <div
            className={`${styles["menu-icons"]} menu-iconss`}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <FaBars
              className={`${styles.menuicon}`}
              aria-hidden="true"
            />
            <GiCrossMark
              className={`${styles.closeicon}`}
              aria-hidden="true"
            />
          </div>
          <HashLink smooth to="/" className={styles.logo}>
            <img src={logo} width={"200px"} />
          </HashLink>
          <ul className={styles["nav-list"]}>
            <li>
              <HashLink smooth to="/about-us">
                Countries
              </HashLink>
              <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/before-after">
                    Study in USA
                  </HashLink>
                </li>
				 <li>
                  <HashLink smooth to="/before-after">
                    Study in UK
                  </HashLink>
                </li>
				<li>
                  <HashLink smooth to="/before-after">
                    Study in Canada
                  </HashLink>
                </li>
				<li>
                  <HashLink smooth to="/before-after">
                    Study in Australia
                  </HashLink>
                </li>
				<li>
                  <HashLink smooth to="/before-after">
                    Study in New Zealand
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="/services">
                Universities
              </HashLink>
              <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/before-after">
                    Universities in the USA
                  </HashLink>
                </li>
				 <li>
                  <HashLink smooth to="/before-after">
                    Universities in the UK
                  </HashLink>
                </li>
				<li>
                  <HashLink smooth to="/before-after">
                    Universities in Canada
                  </HashLink>
                </li>
				<li>
                  <HashLink smooth to="/before-after">
                    Universities in Australia
                  </HashLink>
                </li>
				<li>
                  <HashLink smooth to="/before-after">
                    Universities in New Zealand
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="/warranty">
                Exams
              </HashLink>
			  <ul className={styles["sub-menu"]}>
                <li>
                  <HashLink smooth to="/before-after">
					  All about GRE
                  </HashLink>

                </li>
				 <li>
                  <HashLink smooth to="/before-after">
					  All about IELTS
                  </HashLink>

                </li>
				<li>
                  <HashLink smooth to="/before-after">
					  All about TOEFL
                  </HashLink>

                </li>
				<li>
                  <HashLink smooth to="/before-after">
					  All about GMAT
                  </HashLink>

                </li>
				<li>
                  <HashLink smooth to="/before-after">
					  All about PTE
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink smooth to="/new-patients">
                Events
              </HashLink>
            </li>
            <div className={styles.leftnavlist}>

            <li className={`${styles["move-right"]}`}>
              <div className={styles["btn"]}>
                <HashLink smooth to="/contact-us#">
                  Talk to Ubergrad Counsellor
                </HashLink>
              </div>
            </li>
            <li>

<HashLink smooth to="/new-patients">
        Login
      </HashLink>
        </li>
<span style={{fontSize:'25px',fontWeight:'bolder'}}>/
  </span>
<li>

<HashLink smooth to="/new-patients">
        Sign Up
      </HashLink>
</li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NewNavbar;