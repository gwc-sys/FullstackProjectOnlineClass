import herobanner from './assets/images/hero-banner.png'
import aboutbanner from './assets/images/about-banner.png'
import service1 from './assets/images/service-1.png'
import service2 from './assets/images/service-2.png'
import service3 from './assets/images/service-3.png'
import service4 from './assets/images/service-4.png'

import './App.css'


function App() {

  return (
    <>
      <header className="header" data-header>
        <div className="container">

          <a href="#" className="logo">APTIMISM</a>

          <nav className="navbar" data-navbar>

            <div className="wrapper">
              <a href="#" className="logo">APTIMISM</a>

              <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">

              <li>
                <a href="#home" className="navbar-link" data-nav-link>Home</a>
              </li>

              <li>
                <a href="#about" className="navbar-link" data-nav-link>About</a>
              </li>

              <li>
                <a href="#services" className="navbar-link" data-nav-link>Services</a>
              </li>

              <li>
                <a href="#features" className="navbar-link" data-nav-link>Features</a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>Blog</a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>Contact Us</a>
              </li>

            </ul>

          </nav>

          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>

          <a href="#" className="btn-outline">Log In</a>

          <div className="overlay" data-nav-toggler data-overlay></div>

        </div>
      </header>
      
      

        <main>
          <article>

            {/*  - #HERO */}

            <section className="section hero" id="home" aria-label="hero">
              <div className="container">

                <div className="hero-content">

                  <p className="hero-subtitle has-before">Welcome to Aptitude World</p>

                  <h1 className="h1 hero-title"> Go for the smart way of learning Aptitude!</h1>

                  <p className="hero-text">
                    As an emerging Aptitude learning career portal, we help students to sharpen
                    their Aptitude skills to land their dream job.Aptitude is one of the most
                    important parts of competition exams and job interviews.
                  </p>

                  <div className="btn-group">
                    <a href="#" className="btn btn-primary">Get Started</a>

                    <button className="flex-btn">
                      <div className="btn-icon">
                        <ion-icon name="play" aria-hidden="true"></ion-icon>
                      </div>

                      <span className="span">How it works</span>
                    </button>
                  </div>

                </div>

                {/* <figure class="hero-banner has-before img-holder" style="--width: 650; --height: 650;"> */}
                <figure className="hero-banner has-before img-holder">
                  <img src={herobanner} width="650" height="650" alt="hero banner" className="img-cover" />
                </figure>

              </div>
            </section>

            {/* - #ABOUT */}


            <section className="section about" id="about" aria-label="about">
              <div className="container">

                <figure className="about-banner">
                  <img src={aboutbanner} width="802" height="654" loading="lazy" alt="about banner" className="w-100" />
                </figure>

                <div className="about-content">

                  <h2 className="h2-sm section-title">We create some things, Design for your success future.</h2>

                  <p className="section-text">
                    Lorem Ipsum is simply dumm of free available in market the way printing and typesetting industry has been
                    the industrys
                    standard dummy text ever.
                  </p>

                  <ul className="about-list">

                    <li className="has-before">
                      Best Learning Platform with 10000+ Courses
                    </li>

                    <li className="has-before">
                      Best Proffessors with 10+ years of Experience
                    </li>

                    <li className="has-before">
                      Get Certified with Certificate After completion of Course
                    </li>

                  </ul>

                  <div className="btn-group">
                    <a href="#" className="btn btn-primary">Enroll Now</a>

                    <button className="flex-btn">
                      <div className="btn-icon">
                        <ion-icon name="medal-outline" aria-hidden="true"></ion-icon>
                      </div>

                      <span className="span">10+ Years Experience</span>
                    </button>
                  </div>

                </div>

              </div>
            </section>






            {/* - #SERVICE */}


            <section className="section service" id="services" aria-label="service">
              <div className="container">

                <p className="section-subtitle text-center">-What We Offer-</p>

                <h2 className="h2 section-title text-center">Best Courses</h2>

                <p className="section-text text-center">
                  Get Certified in the most trending courses with Certificate.
                </p>

                <ul className="grid-list">

                  <li>
                    <div className="service-card has-after">

                      <figure className="card-icon">
                        <img src={service1} width="140" height="140" loading="lazy" alt="UI/UX Creative Design"
                          className="img" />
                      </figure>

                      <div className="card-content">

                        <h3 className="h3 card-title">Web Development</h3>

                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                          adipiscing elit.
                        </p>

                        <a href="#" className="btn-link">
                          <span className="span">Start</span>

                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="service-card has-after">

                      <figure className="card-icon">
                        <img src={service2} width="140" height="140" loading="lazy" alt="App Development"
                          className="img" />
                      </figure>

                      <div className="card-content">

                        <h3 className="h3 card-title">App Development</h3>

                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                          adipiscing elit.
                        </p>

                        <a href="#" className="btn-link">
                          <span className="span">Start</span>

                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="service-card has-after">

                      <figure className="card-icon">
                        <img src={service3} width="140" height="140" loading="lazy"
                          alt="Professional Content Writer" className="img" />
                      </figure>

                      <div className="card-content">

                        <h3 className="h3 card-title">Professional Content Writer</h3>

                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                          adipiscing elit.
                        </p>

                        <a href="#" className="btn-link">
                          <span className="span">Start</span>

                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="service-card has-after">

                      <figure className="card-icon">
                        <img src={service4} width="140" height="140" loading="lazy" alt="Graphic Design"
                          className="img" />
                      </figure>

                      <div className="card-content">

                        <h3 className="h3 card-title">Graphic Design</h3>

                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                          adipiscing elit.
                        </p>

                        <a href="#" className="btn-link">
                          <span className="span">Start</span>

                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                      </div>

                    </div>
                  </li>
                  <li>
                    <div className="service-card has-after">

                      <figure className="card-icon">
                        <img src={service4} width="140" height="140" loading="lazy" alt="Graphic Design"
                          className="img" />
                      </figure>

                      <div className="card-content">

                        <h3 className="h3 card-title">Graphic Design</h3>

                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                          adipiscing elit.
                        </p>

                        <a href="#" className="btn-link">
                          <span className="span">Start</span>

                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                      </div>

                    </div>
                  </li>
                  <li>
                    <div className="service-card has-after">

                      <figure className="card-icon">
                        <img src={service4} width="140" height="140" loading="lazy" alt="Graphic Design"
                          className="img" />
                      </figure>

                      <div className="card-content">

                        <h3 className="h3 card-title">Graphic Design</h3>

                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                          adipiscing elit.
                        </p>

                        <a href="#" className="btn-link">
                          <span className="span">Start</span>

                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                      </div>

                    </div>
                  </li>
                  <li>
                    <div className="service-card has-after">

                      <figure className="card-icon">
                        <img src={service4} width="140" height="140" loading="lazy" alt="Graphic Design"
                          className="img" />
                      </figure>

                      <div className="card-content">

                        <h3 className="h3 card-title">Graphic Design</h3>

                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                          adipiscing elit.
                        </p>

                        <a href="#" className="btn-link">
                          <span className="span">Start</span>

                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                      </div>

                    </div>
                  </li>
                  <li>
                    <div className="service-card has-after">

                      <figure className="card-icon">
                        <img src={service4} width="140" height="140" loading="lazy" alt="Graphic Design"
                          className="img" />
                      </figure>

                      <div className="card-content">

                        <h3 className="h3 card-title">Graphic Design</h3>

                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                          adipiscing elit.
                        </p>

                        <a href="#" className="btn-link">
                          <span className="span">Start</span>

                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                      </div>

                    </div>
                  </li>
                </ul>

                <a href="#" className="btn btn-primary" id="load-more">Load More</a>

              </div>
            </section>






            {/* - #FEATURES */}


            <section className="section features" id="features" aria-label="features">
              <div className="container">

                <p className="section-subtitle text-center">-Why Choose Us-</p>

                <h2 className="h2 section-title text-center">Reasons to Choose Us</h2>

                <p className="section-text text-center">
                  You will get Free and Paid Courses with or without Certificate.You can Link your certificate with your
                  Linkedin Profile.
                </p>

                <ul className="grid-list">

                  <li>
                    <div className="features-card">

                      <data className="card-number" value="01">01</data>

                      <h3 className="h3 card-title">Free 30 days Access</h3>

                      <p className="card-text">
                        Nullam ullamcorper condimentum urna eu accumsan.
                      </p>

                    </div>
                  </li>

                  <li>
                    <div className="features-card">

                      <data className="card-number" value="02">02</data>

                      <h3 className="h3 card-title">6 Month Of certification</h3>

                      <p className="card-text">
                        Nullam ullamcorper condimentum urna eu accumsan.
                      </p>

                    </div>
                  </li>

                  <li>
                    <div className="features-card">

                      <data className="card-number" value="03">03</data>

                      <h3 className="h3 card-title">Video content Available</h3>

                      <p className="card-text">
                        Nullam ullamcorper condimentum urna eu accumsan.
                      </p>

                    </div>
                  </li>

                  <li>
                    <div className="features-card">

                      <data className="card-number" value="04">04</data>

                      <h3 className="h3 card-title">Projects Completion</h3>

                      <p className="card-text">
                        Nullam ullamcorper condimentum urna eu accumsan.
                      </p>

                    </div>
                  </li>

                  <li>
                    <div className="features-card">

                      <data className="card-number" value="05">05</data>

                      <h3 className="h3 card-title">Basic To Advance</h3>

                      <p className="card-text">
                        Nullam ullamcorper condimentum urna eu accumsan.
                      </p>

                    </div>
                  </li>

                  <li>
                    <div className="features-card">

                      <data className="card-number" value="06">06</data>

                      <h3 className="h3 card-title">Affordable</h3>

                      <p className="card-text">
                        Nullam ullamcorper condimentum urna eu accumsan.
                      </p>

                    </div>
                  </li>

                </ul>

              </div>
            </section>





            {/* - #FAQ */}


            <section className="section faq" aria-label="frequently asked questions">
              <div className="container">

                <div className="title-wrapper">
                  <h2 className="h2 section-title">Discover Frequently Asked Questions?</h2>

                  <a href="#" className="btn btn-primary">Work Together</a>
                </div>

                <ul className="grid-list">

                  <li>
                    <div className="faq-card">

                      <button className="card-action" data-accordion-action>
                        <h3 className="h3 card-title">
                          01. Curious about how to build your own UX strategy? Here are five simple steps.
                        </h3>

                        <div className="action-icon">
                          <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                          <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                        </div>
                      </button>

                      <div className="card-content">
                        <p>
                          Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                          posuere semper, libero ex
                          hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                          amet condimentum
                          erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                          luctus. Nullam
                          tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                          Sed varius, diam
                          vitae posuere semper.
                        </p>
                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="faq-card">

                      <button className="card-action" data-accordion-action>
                        <h3 className="h3 card-title">
                          02. Where Could a Career in UX Take You? Agency vs. In-House vs. Freelance?
                        </h3>

                        <div className="action-icon">
                          <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                          <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                        </div>
                      </button>

                      <div className="card-content">
                        <p>
                          Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                          posuere semper, libero ex
                          hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                          amet condimentum
                          erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                          luctus. Nullam
                          tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                          Sed varius, diam
                          vitae posuere semper.
                        </p>
                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="faq-card">

                      <button className="card-action" data-accordion-action>
                        <h3 className="h3 card-title">
                          03. What Is a Problem Statement in UX? And How To Write One?
                        </h3>

                        <div className="action-icon">
                          <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                          <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                        </div>
                      </button>

                      <div className="card-content">
                        <p>
                          Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                          posuere semper, libero ex
                          hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                          amet condimentum
                          erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                          luctus. Nullam
                          tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                          Sed varius, diam
                          vitae posuere semper.
                        </p>
                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="faq-card">

                      <button className="card-action" data-accordion-action>
                        <h3 className="h3 card-title">
                          04. There are several techniques UX designers employ to arrive at a succinct?
                        </h3>

                        <div className="action-icon">
                          <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                          <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                        </div>
                      </button>

                      <div className="card-content">
                        <p>
                          Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                          posuere semper, libero ex
                          hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                          amet condimentum
                          erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                          luctus. Nullam
                          tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                          Sed varius, diam
                          vitae posuere semper.
                        </p>
                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="faq-card">

                      <button className="card-action" data-accordion-action>
                        <h3 className="h3 card-title">
                          05. What are the obstacles users are facing? What are they trying to do?
                        </h3>

                        <div className="action-icon">
                          <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                          <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                        </div>
                      </button>

                      <div className="card-content">
                        <p>
                          Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                          posuere semper, libero ex
                          hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                          amet condimentum
                          erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                          luctus. Nullam
                          tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                          Sed varius, diam
                          vitae posuere semper.
                        </p>
                      </div>

                    </div>
                  </li>

                </ul>

              </div>
            </section>

          </article>
        </main>

        {/* footer  */}

        <footer className="footer">

          <div className="footer-top section">
            <div className="container">

              <div className="footer-brand">

                <a href="#" className="logo">WebTutorial</a>

                <p className="footer-text">
                  Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </p>

                <form action="" className="newsletter-form">
                  <input type="email" name="email_address" placeholder="Enter your email" required className="email-field" />

                  <button type="submit" className="form-btn">
                    <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
                  </button>
                </form>

              </div>

              <ul className="footer-list">

                <li>
                  <p className="footer-list-title">Courses</p>
                </li>

                <li>
                  <a href="#" className="footer-link">Strategy & Research</a>
                </li>

                <li>
                  <a href="#" className="footer-link">Web Development</a>
                </li>

                <li>
                  <a href="#" className="footer-link">Web Solution</a>
                </li>

                <li>
                  <a href="#" className="footer-link">Digital Merketing</a>
                </li>

                <li>
                  <a href="#" className="footer-link">App Design</a>
                </li>

                <li>
                  <a href="#" className="footer-link">App Development</a>
                </li>

              </ul>

              <ul className="footer-list">

                <li>
                  <p className="footer-list-title">Company</p>
                </li>

                <li>
                  <a href="#" className="footer-link">About Company</a>
                </li>

                <li>
                  <a href="#" className="footer-link">Our Services</a>
                </li>

                <li>
                  <a href="#" className="footer-link">Our Portfolio</a>
                </li>

                <li>
                  <a href="#" className="footer-link">Our Blog</a>
                </li>

                <li>
                  <a href="#" className="footer-link">Latest News</a>
                </li>

                <li>
                  <a href="#" className="footer-link">Contact Us</a>
                </li>

              </ul>

              <ul className="footer-list">

                <li>
                  <p className="footer-list-title">Contact Us</p>
                </li>

                <li className="footer-item">
                  <ion-icon name="location" aria-hidden="true"></ion-icon>

                  <address className="contact-link address">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </address>
                </li>

                <li className="footer-item">
                  <ion-icon name="call" aria-hidden="true"></ion-icon>

                  <a href="tel:+7894631546876" className="contact-link">+7894631546876</a>
                </li>

                <li className="footer-item">
                  <ion-icon name="mail" aria-hidden="true"></ion-icon>

                  <a href="mailto:info@hoolix.com" className="contact-link">info@webtutorial.com</a>
                </li>

                <li className="footer-item">
                  <ul className="social-list">

                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-pinterest"></ion-icon>
                      </a>
                    </li>

                  </ul>
                </li>

              </ul>

            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">

              <p className="copyright">
                &copy; 2024 MR | All Rights Reserved by <a href="#" className="copyright-link">M R Devloper</a>
              </p>

              <ul className="footer-bottom-list">

                <li>
                  <a href="#" className="footer-bottom-link">Privacy Policy</a>
                </li>

                <li>
                  <a href="#" className="footer-bottom-link">Terms of Use</a>
                </li>

              </ul>

            </div>
          </div>

        </footer>
      
    </>
  )
}

export default App
