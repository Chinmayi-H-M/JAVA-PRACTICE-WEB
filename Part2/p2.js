const users = [
  {
    name: "Sharan",
    pic: "https://images.unsplash.com/photo-1761839257870-06874bda71b5?q=80&w=1169&auto=format&fit=crop",
    bio: "Humble guy"
  },
  {
    name: "Aarav",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop",
    bio: "Tech enthusiast"
  },
  {
    name: "Megha",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop",
    bio: "Creative designer"
  },
  {
    name: "Rohan",
    pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=987&auto=format&fit=crop",
    bio: "Fitness freak"
  },
  {
    name: "Ananya",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=987&auto=format&fit=crop",
    bio: "Dream chaser"
  },
  {
    name: "Karthik",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=987&auto=format&fit=crop",
    bio: "Problem solver"
  },
  {
    name: "Pooja",
    pic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=987&auto=format&fit=crop",
    bio: "Loves storytelling"
  },
  {
    name: "Nikhil",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
    bio: "Explorer at heart"
  },
  {
    name: "Sneha",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=987&auto=format&fit=crop",
    bio: "Minimalist thinker"
  },
  {
    name: "Vikram",
    pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=987&auto=format&fit=crop",
    bio: "Always learning"
  }
];

function showUsers(arr){
arr.forEach(function (user){
  const card = document.createElement("div");
  card.classList.add("card");

  // image
  const img = document.createElement("img");
  img.src = user.pic;
  img.classList.add("bg-img");

  const blurredLayer=document.createElement("div");
  blurredLayer.style.backgroundImage = `url(${user.pic})`;
  blurredLayer.classList.add("blurred-layer");

  const content = document.createElement("div");
  content.classList.add("content");

  // name
  const name = document.createElement("h3");
  name.textContent = user.name;

  // bio
  const bio = document.createElement("p");
  bio.textContent = user.bio;
   
  content.appendChild(name);
content.appendChild(bio);



  card.appendChild(img);
  card.appendChild(blurredLayer);
card.appendChild(content);

  document.querySelector(".cards").appendChild(card);
});
}
showUsers(users);


