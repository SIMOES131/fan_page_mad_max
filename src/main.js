document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

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
