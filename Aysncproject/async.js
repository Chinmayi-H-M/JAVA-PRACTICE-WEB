function getUsers(){
    
fetch("https://randomuser.me/api/?results=3")
    .then(raw => raw.json())
    .then((data) => {
        document.querySelector(".cards").innerHTML="";
        data.results.forEach((function (user) {
            // parent container
            const app = document.createElement("div");
            app.className = "rounded-lg p-6 max-w-sm w-full";


            const card = document.createElement("div");
            card.className =
                "flex items-center space-x-4";

            // avatar
            const avatar = document.createElement("img");
            avatar.className = "w-14 h-14 rounded-full";
            avatar.src=user.picture.large;
            avatar.alt = "User Photo";

            // info wrapper
            const info = document.createElement("div");

            // name
            const name = document.createElement("h3");
            name.className = "text-sm font-semibold text-gray-900";
            name.textContent = user.name.first+" "+user.name.last;

            // email
            const email = document.createElement("p");
            email.className = "text-xs text-gray-500";
            email.textContent = user.email;

            // status
            const status = document.createElement("span");
            status.className =
                "inline-block mt-1 text-xs text-white bg-indigo-600 px-3 py-0.5 rounded-full";
            status.textContent = "Active";

            // append text elements
            info.appendChild(name);
            info.appendChild(email);
            info.appendChild(status);

            // append avatar + info to card
            card.appendChild(avatar);
            card.appendChild(info);

            // append card to app
            app.appendChild(card);
            document.querySelector(".cards").appendChild(app);
        }));

    })
}
getUsers();

let button = document.getElementById("refreshBtn").addEventListener("click", function(){
    getUsers();
})

