/* coucou! */

/* io dark-theme*/
var theme = document.getElementById("theme");

theme.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        theme.src = "img/sun.PNG";
    } else{
        theme.src = "img/moon.PNG";
    }
}

/*io effect js - tour - */
let tour = document.getElementById('tour');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        
        window.addEventListener('scroll',function(){
            let value = window.scrollY;
            tour.style.top = value * 0 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            text.style.marginBottom = value * 4 + 'px';
            btn.style.marginTop = value * 0.6 + 'px';
        })

/* -- portfolio mini levelmind -- */
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for( let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }

    })
}