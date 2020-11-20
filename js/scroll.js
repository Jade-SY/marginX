    function scrollAction() {
        var scrollVal = document.documentElement.scrollTop
        headerScrollAction(scrollVal)
        fadeInOut(scrollVal)
        skillSectionScrollAction(scrollVal)
        portfolioSectionScrollAction(scrollVal)
        // console.log(this.scrollY)
    }

    function headerScrollAction(scrollVal) {
        var header = document.querySelector('.header')
        var mainLogo = document.querySelector('.main-logo')

        if (scrollVal > 50) {
            mainLogo.classList.add('sm');
            header.classList.add('sm');
        } else {
            mainLogo.classList.remove('sm');
            header.classList.remove('sm');
        };
    }

    function fadeInOut(scrollVal) {
        var greetingText1 = document.querySelector('#hero .greeting-text')
        var about = document.querySelector("#about")

        if (scrollVal > 900) {
            about.style.opacity = '1'
        }
        if (scrollVal > 940 && scrollVal < 1571) {
            greetingText1.style.opacity = '0'
        } else {
            greetingText1.style.opacity = '1'
        }
    }

    function skillSectionScrollAction(scrollVal) {
        var skillCss = document.querySelector('.skill-css')
        var skillHtml = document.querySelector('.skill-html')
        var skillJs = document.querySelector('.skill-js')
        var skillVue = document.querySelector('.skill-vue')

        if (scrollVal > 3236 && scrollVal < 4540) {
            skillCss.style.top = -1070 + Math.floor(scrollVal * 0.4) + 'px'
            skillHtml.style.bottom = -1590 + Math.floor(scrollVal * 0.5) + 'px'
            skillJs.style.top = Math.floor(scrollVal * 0.06) + 'px'
            skillVue.style.top = Math.floor(scrollVal * 0.13) + 'px'
        }
    }

    function portfolioSectionScrollAction(scrollVal) {
        var portfolioTitle = document.querySelector('.portfolio-title')

        if (scrollVal > 5036 && scrollVal < 5900) {
            portfolioTitle.style.top = -3526 + Math.floor(scrollVal * 0.7) + 'px'
        }
    }
    window.addEventListener('scroll', scrollAction)