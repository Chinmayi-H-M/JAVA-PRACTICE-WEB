function createToaster(config){
    return function (str){
        let div = document.createElement("div");
        div.textContent = str;
        div.className = "inline-block bg-gray-800 text-white px-5 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300";

        document.querySelector(".parent").appendChild(div);
        setTimeout(()=>{
            document.querySelector(".parent").removeChild(div);
        }, config.duration);
    }
}

let toaster=createToaster({
    position:"right",
    positionY:"top",
    theme:"dark",
    duration:3000,
});
toaster("Download done!!");

