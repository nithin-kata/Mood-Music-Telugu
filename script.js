const songs = {
  happy: [
    { title: "Butta Bomma", url: "https://www.youtube.com/embed/zXWJLEE7LeI?autoplay=1" },
    { title: "Life of Ram", url: "https://www.youtube.com/embed/_Fh6L2FzL0g?autoplay=1" }
  ],
  sad: [
    { title: "Priyathama Priyathama", url: "https://www.youtube.com/embed/BpINyS4k7Uw?autoplay=1" },
    { title: "Samajavaragamana", url: "https://www.youtube.com/embed/Mw9QBhc8_KQ?autoplay=1" },
    { title: "Emitemitemo", url: "https://www.youtube.com/embed/wKbd0_o9Vko?autoplay=1" }
  ],
  romantic: [
    { title: "Vachindamma", url: "https://www.youtube.com/embed/I8t0VJjEffk?autoplay=1" },
    { title: "Chuttamalle", url: "https://www.youtube.com/embed/CCeGNK2L2JI?autoplay=1" },
    { title: "Inkem Inkem Inkem Kaavaale", url: "https://www.youtube.com/embed/I3qH6yZj2jI?autoplay=1" }
  ],
  energetic: [
    { title: "Naatu Naatu", url: "https://www.youtube.com/embed/OsU0CGZoV8E?autoplay=1" },
    { title: "Oo Antava Oo Oo Antava", url: "https://www.youtube.com/embed/u_wB6byrl5k?autoplay=1" },
    { title: "Ramulo Ramula", url: "https://www.youtube.com/embed/3D6DjjH2nOU?autoplay=1" }
  ]
};

function playSong(url) {
  document.getElementById("player").innerHTML = `
    <iframe width="560" height="315"
      src="${url}"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
  `;
}

function showSongs(mood) {
  const listDiv = document.getElementById("songList");
  listDiv.innerHTML = `<h3>${mood.charAt(0).toUpperCase() + mood.slice(1)} Songs</h3>`;
  
  songs[mood].forEach(song => {
    const btn = document.createElement("button");
    btn.innerText = song.title;
    btn.onclick = () => playSong(song.url);
    listDiv.appendChild(btn);
  });
}
