// const API_KEY = "86783762237ff3e97be67f3473685c59";
// const BASE_PATH = "https://api.themoviedb.org/3";

// const searchForm = document.getElementById("searchForm");
// const searchInput = document.getElementById("searchInput");
// const searchResults = document.getElementById("searchResults");

// searchForm.addEventListener("submit", async function (event) {
// 	event.preventDefault();
// 	const searchTerm = searchInput.value.trim();
// 	if (searchTerm !== "") {
// 		const results = await searchFilm(searchTerm);
// 		displayResults(results);
// 	}
// });

// async function searchFilm(query) {
// 	try {
// 		const response = await fetch(`${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${query}`);
// 		const data = await response.json();
// 		return data.results;
// 	} catch (error) {
// 		console.error("Error searching for film:", error);
// 		return [];
// 	}
// }

// function displayResults(results) {
// 	searchResults.innerHTML = "";
// 	if (results.length === 0) {
// 		searchResults.textContent = "No results found.";
// 		return;
// 	}
// 	results.forEach(movie => {
// 		const movieDiv = document.createElement("div");
// 		movieDiv.classList.add("movie");

// 		const title = document.createElement("h3");
// 		title.textContent = movie.title;

// 		const img = document.createElement("img");
// 		img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
// 		img.alt = movie.title;

// 		movieDiv.appendChild(img);
// 		movieDiv.appendChild(title);
// 		searchResults.appendChild(movieDiv);
// 	});
// }

const API_KEY = "86783762237ff3e97be67f3473685c59";
const BASE_PATH = "https://api.themoviedb.org/3";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", async function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
        const results = await searchFilm(searchTerm);
        displayResults(results);
    } else {
        // Clear the search results if the search input is empty
        searchResults.innerHTML = "";
    }
});

async function searchFilm(query) {
    try {
        const response = await fetch(`${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${query}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error searching for film:", error);
        return [];
    }
}

function displayResults(results) {
    searchResults.innerHTML = "";
    if (results.length === 0) {
        searchResults.textContent = "No results found.";
        return;
    }
    results.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = movie.title;

        movieDiv.appendChild(img);
        movieDiv.appendChild(title);
        searchResults.appendChild(movieDiv);
    });
}