document.addEventListener("DOMContentLoaded", () => {
    let currentNum = 0;
    const gnb = document.querySelectorAll('.gnb a');
    const contents = document.querySelectorAll('.contents');

    gnb.forEach((select, i) => {
        select.num = i;
        select.addEventListener('click', (e) => {
            e.preventDefault();
            const num = e.currentTarget.num;
            if (currentNum !== num) {
                gnb[currentNum].className = "";
                contents[currentNum].style.display = "none";

                gnb[num].className = "on";
                contents[num].style.display = "block";

                currentNum = num;
            }
        })

    })
})