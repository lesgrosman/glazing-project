import validateForm from  './validateForm';

function modalState(state) {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          height = document.querySelectorAll('#height'),
          width = document.querySelectorAll('#width'),
          glazingType = document.querySelectorAll('#view_type'),
          profileType = document.querySelectorAll('.checkbox');

    validateForm('#height');
    validateForm('#width');


    function bindModalState(element, event, prop) {

        element.forEach((item, i) => {
            item.addEventListener(event, () => {

                switch (item.nodeName) {
                    case 'SPAN': 
                        state[prop] = i;
                        break;
                    case 'INPUT': 
                        if (item.getAttribute('type') == 'checkbox') {
                            i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
                            element.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }             
                        break;
                    case 'SELECT':     
                        state[prop] = item.value;
                        break;                  
                }              
            });
        });
    }
    bindModalState(windowForm, 'click', "window form");
    bindModalState(height, 'input', "height");
    bindModalState(width, 'input', "width");
    bindModalState(glazingType, 'change', "glazing type");
    bindModalState(profileType, 'change', "profile type");  
}
export default modalState;