const toggleBtnIcons = document.querySelector('.toggle-icon');
const toggleBtntimes = document.querySelector('.times');
const toggleBtnBars = document.querySelector('.bars');


const linksContainer = document.querySelector('.links-container');



function toggleIcons() {
    linksContainer.classList.toggle('active');
    toggleBtnBars.style.display = toggleBtnBars.style.display === 'block' ? 'none' : 'block';
    toggleBtntimes.style.display = toggleBtntimes.style.display === 'block' ? 'none' : 'block';
}

toggleBtnIcons.addEventListener('click', toggleIcons);

// Part 2 starts here

//selcect all the link
const links = document.querySelectorAll('.link')

links.forEach(function (linksItem){
    linksItem.addEventListener('click', function (item){
        linksContainer.style.height = 0;
        toggleBtntimes.style.height = "block";
        toggleBtnBars.style.height = "none";
    })
})


// add functionality to the rolling ball animation

const myself = document.querySelector('.myself')
const switchBtn = document.querySelector('.switch-btn')
const playBall = document.querySelector('.play')
const stopBall= document.querySelector('.pause')

playBall.addEventListener('click', () => ('play'));
stopBall.addEventListener('click', () => ('stop'));

const myFunc = (state) => {
    if(state === 'play'){
        myself.classList.add('animatee');
        playBall.style.display = 'none';
        stopBall.style.display = 'block';
    } else if(state === 'stop'){
        myself.classList.remove('animation');
        playBall.style.display = 'block';
        stopBall.style.display = 'none';
    } 
}