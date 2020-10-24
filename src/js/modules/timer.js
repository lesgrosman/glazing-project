function timer() {

    const deadline = new Date('2020-12-31').getTime();

    function countRemainingTime(deadline) {
        const currentDate = new Date().getTime();

        const seconds = parseInt(Math.floor(((deadline - currentDate) / 1000) % 60)),
              minutes = parseInt(Math.floor(((deadline - currentDate) / 1000 / 60) % 60)),
              hours = parseInt(Math.floor(((deadline - currentDate) / 1000 / 60 / 60) % 24)),
              days = parseInt(Math.floor((deadline - currentDate) / 1000 / 60 / 60 / 24));

        return [
            days,
            hours,
            minutes,
            seconds
        ];
    }

    function setZero(item) {
        if (item < 10) {
            return `0${item}`;
        } else {
            return item;
        }
    }

    function pushTimer(deadline) {
        const time = countRemainingTime(deadline);
        const timer = document.querySelectorAll('.container1 span');

        timer.forEach((el, i) => {
            el.textContent = setZero(time[i]);
        });
    }
    
    setInterval(() => {
        pushTimer(deadline);
    }, 1000); 
}

export default timer;