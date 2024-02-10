export default function AboutSection() {
  return(
    <section id="sobre" className="js-section">
      <div className="container">
        <div className="banner">
          <div className="intro">
            <div className="title">
              <h1></h1> 
              <span></span>
              <p></p>
            </div>
            
            <div className="actions">
                <a href="assets/cv/cv-rhuanbello.pdf" download>Download CV</a>
                <a href="mailto:rhuambello@gmail.com" target="_blank">Entrar em contato</a>
            </div>
          </div>
            
          <div className="profile">
            <img src="assets/avatar2.png" alt="avatar"/>
          </div>
        </div>

        <div className="about">
          <h2>Sobre mim</h2>
          <p> 22 anos, Bacharelado em Sistemas de Informação e Técnico em Software. 
              Cursando uma formação de Desenvolvimento Full-Stack com especialização em Front-End na Digital House Brasil, através de uma bolsa de estudos. 
              Atuando como Desenvolvedor Front-end, onde lido com aplicações Web em React.js. 
              Possuo conhecimentos sólidos em: HTML5, CSS3, JavaScript, SASS, Figma, Bootstrap, Git e MySQL.
              Busco futuramente ingressar no mundo do desenvolvimento de aplicações nativas. 
          </p>
        </div>
      </div>
  </section>
  )
}