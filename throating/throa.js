//debounce = we will give a dela, when that delay happens we will get reaction for action

//throttle->interval par chalunga, action agar hota raha and aapne ek interval bataya tio utne interval me aapka event
// 

function throttle(fnc,delay){
    let timer =0;
    return function(...args){
        let now = Date.now();
        if(now-timer>=delay){
            time = now;
            fnc(...args);
        }
    }
    
}

document.querySelector("input").addEventListener("input",throttle(function(){
    console.log(ran);
},1000
))
