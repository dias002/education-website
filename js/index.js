const tabHeaders = document.querySelectorAll('[data-tab]');

const contentBoxes = document.querySelectorAll('[data-tab-content]');
console.log(contentBoxes)
tabHeaders.forEach(function(item){
    item.addEventListener('click', function(){

       
        
        contentBoxes.forEach(function(item){
            item.classList.add('cards_hidden')
        })

        const contentBox = document.querySelector('#' + this.dataset.tab)
        contentBox.classList.remove('cards_hidden')
    })
})
