document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.getElementsByClassName('faq__questions__item')

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultarElementoDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    function ocultarElementoDoHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden')
    }

    function exibeElementosDoHeader () {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden')
    }

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (botao) => {

            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            console.log(abaAlvo)
            hideAllTabs();

            aba.classList.add('shows__list--is-active');

            removeBotaoAtivo();

            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active')
        }
    }

    function hideAllTabs() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active')
        }
    }


    //Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function () {
            questions[i].classList.toggle('faq__questions__item--is-open')
        })
    }
})
