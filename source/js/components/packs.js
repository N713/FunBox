const ENTER_KEYCODE = 13;
const SPACE_KEYCODE = 32;
const packs = document.body.querySelectorAll('.pack');

const selectPack = (item) => {
    item.classList.toggle('pack--selected');

    if (item.classList.contains('pack--selected')) {
        item.classList.add('pack--no-hover');
    }
}

const setPacks = () => {
    packs.forEach((pack) => {
        pack.querySelector('.pack__main').addEventListener('click', () => {
            selectPack(pack);
        });

        pack.querySelector('.pack__text a').addEventListener('click', (evt) => {
            evt.preventDefault();
            selectPack(pack);
        });

        pack.addEventListener('mouseenter', () => {
            pack.classList.remove('pack--no-hover');
        });

        pack.addEventListener('keydown', (evt) => {
            if(evt.keyCode === SPACE_KEYCODE || evt.keyCode === ENTER_KEYCODE) {
                pack.classList.toggle('pack--selected');
            }
        });
    });
}

export { setPacks }
