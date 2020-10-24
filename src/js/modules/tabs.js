function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {

    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          tabContent = document.querySelectorAll(contentSelector);

    function closeTabContent() {
        tabContent.forEach(elem => {
            elem.style.display = 'none'
        });               
        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function openTabContent(i = 0) {
        tabContent[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    header.addEventListener('click', (e) => {
        const target = e.target;

        if ( target.classList.contains(tabSelector.replace('.', '')) || 
        target.parentElement.classList.contains(tabSelector.replace('.', ''))) {

            tabs.forEach((tab, i) => {
                if (target === tab || target.parentElement === tab) {
                    closeTabContent();
                    openTabContent(i);
                }
            });
        }
    });   
}
export default tabs;