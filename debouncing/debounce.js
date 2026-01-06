function debounce(fnc,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fnc(...args);
        },delay)   }

}
