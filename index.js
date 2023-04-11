const themeButton = document.querySelector('.theme-button');
const root = document.querySelector(':root');

themeButton.onclick = () => {
  if (!themeButton.classList.contains('dark')) {
    document.documentElement.style.setProperty('--color-secondary', 'white');
    document.documentElement.style.setProperty('--color-primary', 'black');
    document.documentElement.style.setProperty('--input-bg', '#181818');
    document.documentElement.style.setProperty('--tab2-border', '1px solid rgba(255, 255, 255, 0.7)');
    document.documentElement.style.setProperty('--btn-border', '1px solid #FFFFFF');
    document.documentElement.style.setProperty('--shadow', '7px 13px 0px rgba(255, 255, 255, 0.75)');
    
    themeButton.classList.add('dark');
  } else {
    document.documentElement.style.setProperty('--color-secondary', 'black');
    document.documentElement.style.setProperty('--color-primary', 'white');
    document.documentElement.style.setProperty('--input-bg', '#E7E7E7');
    document.documentElement.style.setProperty('--tab2-border', '1px solid rgba(0, 0, 0, 0.7)');
    document.documentElement.style.setProperty('--btn-border', '1px solid #000000');
    document.documentElement.style.setProperty('--shadow', '7px 13px 0px rgba(0, 0, 0, 0.75)');
    

    themeButton.classList.remove('dark');
  }
};

const findInput = document.querySelector('.find-input');
const inputPlaceholder = document.querySelector('.find-input__placeholder');

findInput.addEventListener('focus', () => {
  inputPlaceholder.style.display = 'none';
});

findInput.addEventListener('blur', () => {
  if (!findInput.value) {
    inputPlaceholder.style.display = 'flex';
  }
});

inputPlaceholder.onclick = () => {
  findInput.focus();
};



const card=document.querySelector('.center-content')
const tabs=document.querySelectorAll('.tabs')

tabs.forEach((el)=>{
  el.onclick=()=>{
    card.style.background=window.getComputedStyle(el).background
  }
})

const buttons=document.querySelectorAll('.switch-button')
buttons.forEach((el)=>{

  el.onclick=()=>{
    buttons.forEach((el)=>{
      if (el.classList.contains('active')){
        el.classList.remove('active')
        el.querySelector('.simple-link').classList.remove('active')
      }
    })


    el.classList.add('active');
    el.querySelector('.simple-link').classList.add('active')
  }
})
