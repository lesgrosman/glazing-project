
function hideModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
    modal.classList.remove('shown');
}

function showModal(modalSelector, scroll) {
    const modal = document.querySelector(modalSelector);

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll}px`;

    modal.classList.add('shown');
}

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth  = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

function modals() {

    function bindModalBtn(openSelector, modalSelector, closeSelector, closeOverlayModal=false) {
        const openModal = document.querySelectorAll(openSelector),
              modal = document.querySelector(modalSelector),
              closeModal = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        openModal.forEach((btn)=> {
            btn.addEventListener('click', ()=> {

                windows.forEach(item => {
                    item.style.display = 'none';
                    document.body.style.marginRight = `0px`;
                    item.classList.remove('shown');
                });

                showModal(modalSelector, scroll);      
    
                closeModal.addEventListener('click', ()=> {

                    windows.forEach(item => {
                        item.style.display = 'none';
                        document.body.style.overflow = '';
                        document.body.style.marginRight = `0px`;
                        modal.classList.remove('shown');
                    });
                });
    
                window.addEventListener('click', (e)=> {
                    if (e.target && modal === e.target && !closeOverlayModal) {
                        hideModal(modalSelector);
                    }
                });   
            });
        });
    }

    bindModalBtn('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModalBtn('.phone_link', '.popup', '.popup .popup_close'); 
    bindModalBtn('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModalBtn('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', true);
    bindModalBtn('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', true);

}

export default modals;
export {hideModal};
export {showModal};
export {calcScroll};