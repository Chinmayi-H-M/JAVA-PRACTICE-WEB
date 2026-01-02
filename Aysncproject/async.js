fetch("https://randomuser.me/api/?results=3")
.then(raw => raw.json())
.then((data) => console.log(data.res))
