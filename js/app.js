const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key": "5e930324f4msh190b9c7b3089ebep18f957jsn6d27f958a739",
    },
};

fetch(
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman",
    options
)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        const arrayMovies = data.d;
        arrayMovies.map((movie) => {
            // console.log(movie);
            const title = movie.l;
            const image = movie.i.imageUrl;
            const cast = movie.s;

            const poster = `
                <div class="poster">
                    <img src="${image}" alt="${title}">
                    <h2 class="title">${title}</h2>
                    <small class="cast">${cast}</small>
                </div>
            `;
            document.querySelector("#container").innerHTML += poster;
        });
    })
    .catch((err) => console.error(err));
