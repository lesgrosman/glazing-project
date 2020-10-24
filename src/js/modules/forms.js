import postData from '../services/services';
import {showModal, hideModal, calcScroll} from './modals';
import validateForm from './validateForm';

function forms(state) {

    const forms = document.querySelectorAll('form');

    validateForm('input[name="user_phone"]') ;

    const messages = {
        success: 'Thank you, we will call you back!',
        loading: 'Loading...',
        failure: 'Something is wrong'
    };

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.shown'),
              scroll = calcScroll();

        if (prevModalDialog) {
            hideModal('.shown');
        }
        
        const modalDialog = document.querySelector('.popup_dialog');
        modalDialog.classList.add('hide');
        showModal('.popup', scroll);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('popup_dialog');
        thanksModal.innerHTML = `
            <div class="popup_content text-center">
                <button type="button" class="popup_close"><strong>&times;</strong></button>
                <div class="popup_form">
                    <form class="form" action="#">
                        <h2><span>${message}</span></h2>
                    </form>
                </div>
            </div>
        `;
        document.querySelector('.popup').append(thanksModal);
    
        setTimeout(()=> {
            thanksModal.remove();  
            modalDialog.classList.remove('hide');  
            hideModal('.popup');
        }, 2000);
    }

    forms.forEach(form => {

        form.addEventListener('submit', (e)=> {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = messages.loading;
            form.append(statusMessage);

            const formData = new FormData(form); 
            
            let obj = {};

            formData.forEach((val, key) => {
                obj[key] = val;            
            });

            if (form.hasAttribute('final-form')) {
                obj = {...obj, ...state};
            }

             
            const json = JSON.stringify(obj);
        
            postData(' http://localhost:3000/requests', json)
                .then(data=> {
                    console.log(data);   
                    showThanksModal(messages.success);                 
                })
                .catch(()=> {
                    console.log('Error');
                    showThanksModal(messages.failure);
                })
                .finally(() => {
                    form.reset();
                    statusMessage.remove();
                });                 
        });
    }); 
}

export default forms;   