    function scrollAction() {
        const scrollVal = document.documentElement.scrollTop
        headerScrollAction(scrollVal)
        fadeInOutGreeting(scrollVal)
        fadeInOutAbout(scrollVal)
        fadeInOutPortfolio(scrollVal)
        console.log(this.scrollY)
    }

    function headerScrollAction(scrollVal) {
        const header = document.querySelector('.header')
        const mainLogo = document.querySelector('.main-logo')

        if (scrollVal > 50) {
            mainLogo.classList.add('sm');
            header.classList.add('sm');
        } else {
            mainLogo.classList.remove('sm');
            header.classList.remove('sm');
        };
    }

    function fadeInOutGreeting(scrollVal) {
        const greetingTxt = document.querySelector('.greeting-text')
      
        if (scrollVal > 940 && scrollVal < 1571) {
            greetingTxt.style.opacity = '0'
        } else {
            greetingTxt.style.opacity = '1'
        }
    }

    function fadeInOutAbout(scrollVal){
      const aboutTxt = document.querySelector(".about-text-box")
      console.log(about.offsetTop)
      if (scrollVal > 900) {
          aboutTxt.style = 'transform: translateY(0); opacity: 1;'
        }else{
          aboutTxt.style = 'transform: translateY(100px); opacity: 0;' 
      }
    }

    function fadeInOutPortfolio(scrollVal) {
      const portfolio = document.querySelector('#portfolio')

      const trigger = portfolio.offsetTop - (portfolio.clientHeight / 2)
      const portfolioTxt = document.querySelector('.portfolio-text')
    console.log(portfolio.clientHeight)
      if (scrollVal > trigger ) {
        portfolioTxt.style.opacity = '1'
      } else {
        portfolioTxt.style.opacity = '0'
      }
  }

    window.addEventListener('scroll', scrollAction)