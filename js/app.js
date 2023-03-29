const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key": "5e930324f4msh190b9c7b3089ebep18f957jsn6d27f958a739",
    },
};

const showMovies = async () => {
    try {
        const response = await fetch(
            "https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman",
            options
        );
        const data = await response.json();
        const arrayMovies = data.d;

        arrayMovies.map((movie) => {
            // console.log(movie);
            const title = movie.l;
            const image = movie.i ? movie.i.imageUrl : '';
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
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener("DOMContentLoaded", showMovies);
