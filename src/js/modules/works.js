function works() {
    const images = document.querySelectorAll('.works img');

    images.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            const imageWindow = document.createElement('div');
            imageWindow.style.cssText=`
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9;
                background-color: rgba(0, 0, 0, 0.8);
            `;
            imageWindow.classList.add('show');
            document.body.append(imageWindow);

            const copyImage = document.createElement('img');
            copyImage.setAttribute('src', el.getAttribute('src'));
            copyImage.style.cssText=`
                display: block;
                margin: auto;
                margin-top: 80px;
                width: 40%;

            `; 
            imageWindow.append(copyImage);
            document.body.style.overflow = 'hidden';

            window.addEventListener('click', (e)=> {
                if (e.target && imageWindow === e.target) {
                    imageWindow.classList.remove('show');
                    document.body.style.overflow = '';
                }
            });


        
        });
    });
}

export default works;