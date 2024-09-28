const hideShowButton = document.getElementById('hideShow') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

hideShowButton.addEventListener('click', ()=>{
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});
