document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
       const posicaoAtual = window.scrollY;

       if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
       } else {
            exibeElementosDoHeader();
       }
    });

    //Seção de atrações, programação das abas
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            event.target.classList.add('shows__tabs__button--is-active');
        });
    });

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

    function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;
        elementoPai.classList.toggle(classe);
    }

    function removeBotaoAtivo() {
        buttons.forEach(button => {
            button.classList.remove('shows__tabs__button--is-active');
        });
    }

    function escondeTodasAbas() {
        tabsContainer.forEach(tab => {
            tab.classList.remove('shows__list--is-active');
        });
    }
});

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}