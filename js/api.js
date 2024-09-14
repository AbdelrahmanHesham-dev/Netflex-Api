const apiKey = 'api_key=2b25563f7d119f43b3c99b93e7e19cdc';
const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'http://image.tmdb.org/t/p/original/';
console.log(apiKey)

const requests = {
    fetchTrending: `${baseUrl}/trending/all/week?${apiKey}&language=en-US`,
    fetchComedyMovie: `${baseUrl}/discover/movie?${apiKey}&with_genres=35`,
    fetchHorrorMovies: `${baseUrl}/discover/movie?${apiKey}&with_genres=27`,
    fetchNetflixOrignals: `${baseUrl}/discover/tv?${apiKey}&with_networks=213`,
    fetchRomanceMovies: `${baseUrl}/discover/tv?${apiKey}&with_genres=10749`,
}

fetch(requests.fetchTrending)
.then((response)=> response.json())
.then((data)=>{
   let bannermovie=data.results[Math.floor(Math.random()*data.results.length-1)]
   
   
   document.getElementById("title").innerHTML=bannermovie.name ? bannermovie.name:bannermovie.title;
   document.getElementById("desc").innerHTML=bannermovie.overview.slice(0, 300)
   document.getElementById("fsec").style.backgroundImage=`url(${imgUrl + bannermovie.backdrop_path})`
   document.getElementById("fsec2").style.backgroundImage=`url(${imgUrl + bannermovie.poster_path})`
})

// #####################
fetch(requests.fetchNetflixOrignals)
.then((response)=> response.json())
.then((data)=>{
    data.results.forEach((movie) => {
        const movieSlider=document.getElementById("OriginalsMovies");
        const div = document.createElement("div");
        div.classList.add('swiper-slide');
        movieSlider.appendChild(div);
        div.innerHTML = `
            <img src=${
                imgUrl + movie.poster_path
            } alt ="" class="movieimg" >
            <div class="detailsDiv">
            <div class="detailss">
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0,200)}</p>
            </div>
            </div>
            `;
    });
});
// #####################
fetch(requests.fetchHorrorMovies)
.then((response)=> response.json())
.then((data)=>{
    data.results.forEach((movie) => {
        const movieSlider=document.getElementById("Trending");
        const div = document.createElement("div");
        div.classList.add('swiper-slide');
        movieSlider.appendChild(div);
        div.innerHTML = `
            <img src=${
                imgUrl + movie.poster_path
            } alt ="" class="movieimg" >
            <div class="detailsDiv">
            <div class="detailss">
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0,200)}</p>
            </div>
            </div>
            `;
    });
});

// #####################
fetch(requests.fetchRomanceMovies)
.then((response)=> response.json())
.then((data)=>{
    data.results.forEach((movie) => {
        const movieSlider=document.getElementById("RomanceMovies");
        const div = document.createElement("div");
        div.classList.add('swiper-slide');
        movieSlider.appendChild(div);
        div.innerHTML = `
            <img src=${
                imgUrl + movie.poster_path
            } alt ="" class="movieimg" >
            <div class="detailsDiv">
            <div class="detailss">
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0,200)}</p>
            </div>
            </div>
            `;
    });
});
// #####################
fetch(requests.fetchComedyMovie)
.then((response)=> response.json())
.then((data)=>{
    data.results.forEach((movie) => {
        const movieSlider=document.getElementById("ComedyMovie");
        const div = document.createElement("div");
        div.classList.add('swiper-slide');
        movieSlider.appendChild(div);
        div.innerHTML = `
            <img src=${
                imgUrl + movie.poster_path
            } alt ="" class="movieimg" >
            <div class="detailsDiv">
            <div class="detailss">
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0,200)}</p>
            </div>
            </div>
            `;
    });
});

// #############swiper###################

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10
        },
    }
  });
