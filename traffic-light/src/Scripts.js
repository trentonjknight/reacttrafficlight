import React from 'react';

    let red = document.querySelector('.red')[0]
    let yellow = document.querySelector('.yellow')[0]
    let green = document.querySelector('.green')[0]
    green.style.opacity=1;

function Work(){
    return(

    setTimeout(function(){
        red.style.opacity=1;
        yellow.style.opacity=.3;
        green.style.opacity=.3;
    });
    setTimeout(function(){
        red.style.opacity=.3;
        yellow.style.opacity=1;
        green.style.opacity=.3;
    });
    setTimeout(function(){
        red.style.opacity=.3;
        yellow.style.opacity=.3;
        green.style.opacity=1;
    });

    )
}
export default Work;