if(document.querySelector('.main_collapse')){
    const collapseBBlock = document.querySelectorAll('[data-collapse-buttons] button[data-target]')
    // const collapseCBlock = document.querySelectorAll('[data-collapse-content]')

    collapseBBlock.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.querySelector('.active').classList.remove('active')
            item.classList.add('active')
            const collapseCBlock = item.closest("[data-collapse]").querySelector('[data-collapse-content]')
            collapseCBlock.querySelector('.active').classList.remove('active')
            collapseCBlock.querySelector(`#${item.dataset.target}`).classList.add('active')
            
        })
    })

}

if( document.querySelector('[data-dropdown]')){
   const dropdownDOM = document.querySelectorAll('[data-dropdown]')

   dropdownDOM.forEach(item => {
    item.querySelector('.dropdown_button').addEventListener('click', () => {
        item.querySelector('.dropdown_button').classList.toggle('active')
        item.querySelector('.dropdown_content').classList.toggle('active')
       })
   })
   
}