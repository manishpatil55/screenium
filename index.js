let appendSearchedCard = document.getElementById("appendSearchedCard");
let movieName = document.getElementById("movieName");
var Documentary = document.getElementById('Documentaries');
var horror = document.getElementById('Horror');
var action = document.getElementById('Action');
var baseUrl = 'https://api.themoviedb.org/3';
var bannerUrl = 'https://image.tmdb.org/t/p/original';
var imageUrl = 'https://image.tmdb.org/t/p/w300';
let searchMovies = document.getElementById("searchMovies");
let moviePosterImage = document.getElementById("moviePosterImage");

let moviebgheading = document.getElementById("moviebgheading");
let moviebgplot = document.getElementById("moviebgplot");
let moviebgimdb = document.getElementById("moviebgimdb");
let moviebgduration = document.getElementById("moviebgduration");
let moviebgyear = document.getElementById("moviebgyear");
let moviebguhd = document.getElementById("moviebguhd");

let WatchLater = document.getElementById('WatchLater');
let WatchHistory = document.getElementById('WatchHistory');

var request = {
    fetchNetflixTrending: `${baseUrl}/trending/all/week?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`,
    fetchNetflixOriginals: `${baseUrl}/trending/all/week?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`,
    fetchActionMovies: `${baseUrl}/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=28`,
    fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=27`,
    fetchDocumentaries: `${baseUrl}/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=99`,
    fetchComedyMovies: `${baseUrl}/trending/all/week?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`,

}

function appendEachActionMovies(allActionMovies) {
    var {
        release_date,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        original_language


    } = allActionMovies;

    var actionCard = document.createElement('div');
    actionCard.className = "cd m-4";
    actionCard.innerHTML = `<div style="overflow:hidden;">
                                <img class="food1 imgge" src="${imageUrl + poster_path}" />
                            </div>
                            <div class="overlay d-flex flex-column justify-content-end">
                                <div class="d-flex flex-row justify-content-between">
                                    <div>
                                        <h4 class="spots" style="color:white;cursor:pointer;">${original_title}</h4>
                                        
                                    </div>
                                    <div class="pr-3">
                                        <h5 class="places" style="color:white;cursor:pointer;">${release_date}</h5>
                                    </div>
                                </div>
                            </div>`;

    actionCard.addEventListener('click', () => {
        if (!watchHistoryList.includes(allActionMovies)) {
            watchHistoryList.push(allActionMovies);
            appendWatchHistory(allActionMovies);
            saveWatchLaterAndHistory();
        }

        moviebgimdb.textContent = vote_average;
        moviebgplot.textContent = overview;
        moviebgheading.textContent = original_title;
        moviebgyear.textContent = release_date;
        moviePosterImage.style.backgroundImage = "url(" + bannerUrl + backdrop_path + ")";
        moviebguhd.textContent = original_language;




    });

    actionCard.addEventListener('dblclick', () => {
        if (!watchLaterListList.includes(allActionMovies)) {
            watchLaterListList.push(allActionMovies);
            appendWatchLater(result);
            saveWatchLaterAndHistory();
        }
    })

    action.appendChild(actionCard);




}


function appendEachHorrorMovie(allHorrorMovies) {

    var {
        release_date,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        original_language

    } = allHorrorMovies;

    var horrorCard = document.createElement('div');
    horrorCard.className = "cd m-4";
    horrorCard.innerHTML = `<div style="overflow:hidden;">
                                <img class="food1 imgge" src="${imageUrl + poster_path}"  />
                            </div>
                            <div class="overlay d-flex flex-column justify-content-end">
                                <div class="d-flex flex-row justify-content-between">
                                    <div>
                                        <h4 class="spots" style="color:white;cursor:pointer;">${original_title}</h4>
                                    </div>
                                    <div class="pr-3">
                                        <h5 class="places" style="color:white;cursor:pointer;">${release_date}</h5>
                                    </div>
                                </div>
                            </div>`;

    horrorCard.addEventListener('click', () => {
        if (!watchHistoryList.includes(allHorrorMovies)) {
            watchHistoryList.push(allHorrorMovies);
            appendWatchHistory(allHorrorMovies);
            saveWatchLaterAndHistory(allHorrorMovies);
        }
        moviebgimdb.textContent = vote_average;
        moviebgplot.textContent = overview;
        moviebgheading.textContent = original_title;
        moviebgyear.textContent = release_date;
        moviePosterImage.style.backgroundImage = "url(" + bannerUrl + backdrop_path + ")";
        moviebguhd.textContent = original_language;




    });

    horrorCard.addEventListener('dblclick', () => {
        if (!watchLaterList.includes(allHorrorMovies)) {
            watchLaterList.push(allHorrorMovies);
            appendWatchLater(allHorrorMovies);
            saveWatchLaterAndHistory();
        }
    });
    horror.appendChild(horrorCard);
}

function appendEachDocumantries(allDocumantries) {
    var {
        release_date,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        original_language

    } = allDocumantries;

    var documCard = document.createElement('div');
    documCard.className = "cd m-4";
    documCard.innerHTML = `<div style="overflow:hidden;">
                                <img class="food1 imgge" src="${imageUrl + poster_path}"  />
                            </div>
                            <div class="overlay d-flex flex-column justify-content-end">
                                <div class="d-flex flex-row justify-content-between">
                                    <div>
                                        <h4 class="spots" style="color:white;cursor:pointer;">${original_title}</h4>
                                    </div>
                                    <div class="pr-3">
                                        <h5 class="places" style="color:white;cursor:pointer;">${release_date}</h5>
                                    </div>
                                </div>
                            </div>`;

    documCard.addEventListener('click', () => {
        if (!watchHistoryList.includes(allDocumantries)) {
            watchHistoryList.push(allDocumantries);
            appendWatchHistory(allDocumantries);
            saveWatchLaterAndHistory();
        }
        let searchSuggestiondoc = `https://omdbapi.com/?t=${original_title}&apikey=14dc6453`;

        var fetchDoc = async () => {
            try {
                var fetchUrlDoc = await fetch(searchSuggestiondoc);
                var responseDoc = await fetchUrlDoc.json();



                if (responseDoc.Response === "True") {


                    moviebgimdb.textContent = vote_average;
                    moviebgplot.textContent = overview;
                    moviebgheading.textContent = original_title;
                    moviebgyear.textContent = release_date;
                    moviePosterImage.style.backgroundImage = "url(" + bannerUrl + backdrop_path + ")";
                    moviebguhd.textContent = original_language;

                } else {
                    appendSearchedCard.innerHTML = `<p style='color: red;'>No movies found for "${movieNameValue}".</p>`;
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                appendSearchedCard.innerHTML = "<p style='color: red;'>Something went wrong. Please try again later.</p>";
            }
        };
        fetchDoc();

    });

    documCard.addEventListener('dblclick', () => {
        if (!watchHistoryList.includes(allDocumantries)) {
            watchHistoryList.push(allDocumantries);
            appendWatchHistory(allDocumantries);
            saveWatchLaterAndHistory();
        }
    });
    Documentary.appendChild(documCard);
}


function displayEachHorrorMovie(hmovies) {
    hmovies.forEach((hmovie) => {
        appendEachHorrorMovie(hmovie);
    });
}

function displayEachActionMovie(Amovies) {
    Amovies.forEach((Amovie) => {

        appendEachActionMovies(Amovie);

    });
}

function displayEachDocumantry(docm) {
    docm.forEach((doc) => {
        appendEachDocumantries(doc);
    });
}

function getActionMovies() {
    action.innerHTML = "";

    var callACtionMovies = async () => {
        var fetchActionMovies = await fetch(request.fetchActionMovies);
        var responseActionMovies = await fetchActionMovies.json();

        var {
            results
        } = responseActionMovies;
        displayEachActionMovie(results);
    };

    callACtionMovies();
}

function getHorrorMovies() {

    horror.innerHTML = "";

    var callHorrorMovies = async () => {

        var fetchHorrorMovies = await fetch(request.fetchHorrorMovies);
        var responseHorrorMovies = await fetchHorrorMovies.json();

        var {
            results
        } = responseHorrorMovies;
        displayEachHorrorMovie(results);
    };

    callHorrorMovies();
}

function getDocumantries() {

    Documentary.innerHTML = "";
    var callDocumatries = async () => {

        var fetchDocumentaries = await fetch(request.fetchDocumentaries);
        var responseDocumantries = await fetchDocumentaries.json();
        var {
            results
        } = responseDocumantries;
        displayEachDocumantry(results);
    };

    callDocumatries();
}

let clearWatchHistory = document.getElementById('clearWatchHistory');
let watchLaterList = JSON.parse(localStorage.getItem('wl')) || [];
let watchHistoryList = JSON.parse(localStorage.getItem('hl')) || []



function saveWatchLaterAndHistory() {
    localStorage.setItem('wl', JSON.stringify(watchLaterList))
    localStorage.setItem('hl', JSON.stringify(watchHistoryList))
}

function loadWatchLaterList() {
    WatchLater.innerHTML = ''
    watchLaterList.forEach((res) => {
        appendWatchLater(res)
    })

    WatchHistory.innerHTML = ''
    watchHistoryList.forEach((res) => {
        appendWatchHistory(res)
    })
}

clearWatchHistory.addEventListener('click', () => {
    watchHistoryList = []
    saveWatchLaterAndHistory()
    loadWatchLaterList()
});

function appendWatchLater(result) {
    let {
        Year,
        Poster,
        Title
    } = result;
    let wlm = document.createElement('div');
    wlm.className = "cd m-4";
    wlm.innerHTML = `
        <div style="overflow:hidden;">
            <img class="food1 imgge" src="${Poster}" alt="Movie Poster" />
        </div>
        <div class="overlay d-flex flex-column justify-content-end">
            <div class="d-flex flex-row justify-content-between">
                <div>
                    <h4 class="spots" style="color:white;cursor:pointer;">${Title}</h4>
                </div>
                <div class="pr-3">
                    <h5 class="places" style="color:white;cursor:pointer;">${Year}</h5>
                </div>
            </div>
        </div>`;

    wlm.addEventListener('contextmenu', () => {
        watchLaterList = watchLaterList.filter((post) => post !== result)
        saveWatchLaterAndHistory();
        loadWatchLaterList();
    })

    WatchLater.appendChild(wlm)
}

function appendWatchHistory(result) {
    let {
        Year,
        Poster,
        Title
    } = result;

    let card = document.createElement('div')
    card.className = 'cd m-4'
    card.innerHTML = `<div style="overflow:hidden;">
                            <img class="food1 imgge" src="${Poster}" alt="Movie Poster" />
                        </div>
                        <div class="overlay d-flex flex-column justify-content-end">
                            <div class="d-flex flex-row justify-content-between">
                                <div>
                                    <h4 class="spots" style="color:white;cursor:pointer;">${Title}</h4>
                                </div>
                                <div class="pr-3">
                                    <h5 class="places" style="color:white;cursor:pointer;">${Year}</h5>
                                </div>
                            </div>
                        </div>`
    WatchHistory.appendChild(card)

    card.addEventListener('contextmenu', () => {
        watchHistoryList = watchHistoryList.filter((post) => post !== result)
        saveWatchLaterAndHistory();
        loadWatchLaterList()
    })

}

function appendEachCard(result) {
    let {
        Year,
        Poster,
        Title
    } = result;

    let card = document.createElement("div");
    card.className = "cd m-4";
    card.innerHTML = `
        <div style="overflow:hidden;">
            <img class="food1 imgge" src="${Poster}" alt="Movie Poster" />
        </div>
        <div class="overlay d-flex flex-column justify-content-end">
            <div class="d-flex flex-row justify-content-between">
                <div>
                    <h4 class="spots" style="color:white;cursor:pointer;">${Title}</h4>
                </div>
                <div class="pr-3">
                    <h5 class="places" style="color:white;cursor:pointer;">${Year}</h5>
                </div>
            </div>
        </div>`;

    // Add click listener to the card
    card.addEventListener("dblclick", () => {
        if (!watchLaterList.includes(result)) {
            watchLaterList.push(result)
            appendWatchLater(result)
            saveWatchLaterAndHistory()
        } else {
            alert("already")
        }
    });

    card.addEventListener('click', () => {
        if (!watchHistoryList.includes(result)) {
            watchHistoryList.push(result)
            appendWatchHistory(result)
            saveWatchLaterAndHistory()

        }

        let searchSuggestion3 = `https://omdbapi.com/?t=${Title}&apikey=14dc6453`;

        const fetchMovies1 = async () => {
            try {
                let fetchUrl1 = await fetch(searchSuggestion3);
                let response1 = await fetchUrl1.json();



                if (response1.Response === "True") {


                    // Set additional movie info

                    moviebgplot.textContent = response1.Plot || "N/A";
                    moviebgimdb.textContent = response1.imdbRating || "N/A";
                    moviebgduration.textContent = response1.Runtime || "N/A";
                    watchMovie.href = `https://vidsrc.xyz/embed/${response1.imdbID}`
                    moviebguhd.textContent = response1.Rated || "N/A";

                } else {
                    appendSearchedCard.innerHTML = `<p style='color: red;'>No movies found for "${movieNameValue}".</p>`;
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                appendSearchedCard.innerHTML = "<p style='color: red;'>Something went wrong. Please try again later.</p>";
            }
        };
        fetchMovies1()


        moviebgheading.textContent = Title;
        moviebgyear.textContent = Year;
        moviePosterImage.style.backgroundImage = `url(${Poster})`;

    })

    appendSearchedCard.appendChild(card);
}

function displayItems(results) {
    results.forEach((result) => {
        appendEachCard(result);
    });
}

let watchMovie = document.getElementById('watchMovie');

function getMovies(event) {
    if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")) {
        let movieNameValue = movieName.value.trim();
        if (movieNameValue === "") {
            appendSearchedCard.innerHTML = "<p style='color: red;'>Please enter a movie name!</p>";
            return;
        }

        appendSearchedCard.innerHTML = ""; // Clear previous results
        // Hide poster image

        var searchSuggestion = `https://omdbapi.com/?s=${movieNameValue}&apikey=14dc6453`;
        let searchSuggestion2 = `https://omdbapi.com/?t=${movieNameValue}&apikey=14dc6453`;

        const fetchMovies = async () => {
            try {
                let fetchUrl = await fetch(searchSuggestion);
                let response = await fetchUrl.json();

                let fetchUrl2 = await fetch(searchSuggestion2);
                let response2 = await fetchUrl2.json();

                if (response.Response === "True") {
                    let {
                        Search
                    } = response;
                    displayItems(Search);

                    // Set additional movie info
                    moviebgheading.textContent = response2.Title || "N/A";
                    moviebgplot.textContent = response2.Plot || "N/A";
                    moviebgimdb.textContent = response2.imdbRating || "N/A";
                    moviebgduration.textContent = response2.Runtime || "N/A";
                    moviebgyear.textContent = response2.Year || "N/A";
                    moviebguhd.textContent = response2.Rated || "N/A";
                    watchMovie.href = `https://vidsrc.xyz/embed/${response2.imdbID}`
                    moviePosterImage.style.backgroundImage = `url(${response2.Poster})`;
                } else {
                    appendSearchedCard.innerHTML = `<p style='color: red;'>No movies found for "${movieNameValue}".</p>`;
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                appendSearchedCard.innerHTML = "<p style='color: red;'>Something went wrong. Please try again later.</p>";
            }
        };

        fetchMovies();
    }
}

movieName.addEventListener("keydown", getMovies);
searchMovies.addEventListener("click", getMovies);



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 3,
    centerSlide: 'true',
    fade: true,
    grabCursor: 'true',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 100, // Adjust transition speed in milliseconds
    effect: 'slide', // Options: 'slide', 'fade', 'cube', 'coverflow', 'flip'
    autoplay: {
        delay: 4000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        }
    }
});




let openedSearch = document.getElementById('openedSearch')
let openSearchBar = document.getElementById('openSearchBar');
openSearchBar.addEventListener('click', () => {
    openedSearch.classList.toggle('varity1')
    v33.classList.remove('varity1');
    v.classList.remove('varity1');
})
let variety = document.getElementById('variety');
let v = document.getElementById('v');
variety.addEventListener('click', () => {
    openedSearch.classList.remove('varity1')
    v33.classList.remove('varity1');
    v.classList.toggle('varity1');
});

let v33 = document.getElementById('v33');
let signup = document.getElementById('signup');
signup.addEventListener('click', () => {
    openedSearch.classList.remove('varity1')
    v.classList.remove('varity1');
    v33.classList.toggle('varity1');
});


let animationPart = document.getElementById('animationPart')
let homePage = document.getElementById('homePage');
let hide = document.getElementById('hide')
let spin = document.getElementById('spin')
setTimeout(() => {
    spin.classList.remove('spin')
    setTimeout(() => {
        hide.style.display = 'none';
        homePage.style.display = 'block'
    }, 3000)
}, 12000);

let latestMovies = [{
        moviebghead: "THE AVENGERS",
        movieP: "Marvel makes cinematic history as the Super Hero team of a lifetime assemble for the first time ever in this action-packed blockbuster! Packed with spectacular visual effects, Marvel's The Avengers will blow your mind!",
        movied: '2 h 24 min',
        movieim: 'iMDB 8.24',
        movieyear: '2012',
        movieuhd: 'UHD',
        trailerSrc: 'https://s3-dub-2.cf.trailer.row.aiv-cdn.net/bfc0/9560/886e/4ff7-a0a6-5f5004a07170/f1e3f891-8be5-42f7-aee3-94a912c4c841_video_900_audio_aaclc_128.mp4?Expires=1737962604&amp;Signature=ggMWfOpMTreI24njpa~B4ciFGP5Mrm4Z4rlKsXGQY4ndhaNIFSvHRfZc~UyBLQtlscVSJ7zWF1GkV80dxzGhKZJM5XFkG77RN7MUrvm-3Le82RiGxzO1kLGMC~qe9nQWGDkNWu0nPXIu9cNeBRRaus2XKjSDb~BgolXjQoNY3Vux6WYxxGGceR55Nw318fCyC0d-FOoEmXhQfHkYI5v8VjXZBbz08CW~UcJXcuh9NgnIrcx1hBq99pNwS47JLfeaafXdIz-9GYPrEPYClC~veFM6ON6S4-8aCPDZkmY559UBpxb-iWrilPG8o0WcznYCFKdufUDzQqAsVYtkWny1aQ__&amp;Key-Pair-Id=APKAJIYEUF5P2E3CCYTA',
        backim: "https://wallpapers.com/images/hd/avengers-infinity-war-hd-superheroes-s7k1afnrbbfqa2un.jpg"
    },
    {
        moviebghead: "The Dark Knight Rises",
        movieP: "In this epic conclusion to the Dark Knight trilogy, the emergence of Bane, a masked terrorist with ruthless plans for Gotham, drives Batman out of his self-imposed exile.",
        movied: '2 h 44 min',
        movieim: 'IMDb 8.4',
        movieyear: '2012',
        movieuhd: 'UHD',
        trailerSrc: 'https://s3-iad-2.cf.trailer.row.aiv-cdn.net/1812/cf3f/7519/4100-8a74-9be84c1c57f5/5664152f-16ec-48d4-bc63-96538650bef2_video_900_audio_aaclc_128.mp4?Expires=1737946245&amp;Signature=S1Txc0gb31~saE35ObzwqR-ZBn5KuV6PMSs21P0zonmEEXRMv9SJjUkfxJG2aWsFcw3CZHTX~FHpQgzR13PRly6a8niAnU0Xcr4Gj1ZVOlDHm84YEJkQNFYcNeqPHzyr5dpyMYZ8l3m6g~TgK20CdCIZs8pmAn5RoCQIhi6vjv3YfEcMehCnkZXc10Zd7DvfoOrqH6dILwmV5cRepJB1dQ9v9tdK0KMFOAs~36G8y2Y8a~5uYQDAGbtrVeFa1aR1JxowGAs0Qicuo1nxOIoKmsN4dYqPSTg2CLb36mUAjmk8-XqHOskQxKyf5dsOhxqApcm7HaZKHGwvgLdYAS-GZA__&amp;Key-Pair-Id=APKAJIYEUF5P2E3CCYTA',
        backim: "https://images6.alphacoders.com/334/334287.jpg"
    },
    {
        moviebghead: "Dune",
        movieP: "“Dune” tells the story of Paul Atreides, a gifted young man born into a great destiny, who must travel to the most dangerous planet in the universe to ensure the future of his people.",
        movied: '2 h 29 min',
        movieim: 'IMDb 8.0',
        movieyear: '2021',
        movieuhd: 'UHD',
        trailerSrc: 'https://s3-iad-2.cf.trailer.row.aiv-cdn.net/9eb6/79f6/a984/4da3-8832-1fc03b647037/7d7a6356-5a30-4b73-b25d-609fa5cb18f9_video_900_audio_aaclc_128.mp4?Expires=1737959750&amp;Signature=KWZOWVTOM9Z6FLEhmwqoEYqDqxZKNGfTYlMH9Rcju~iMkM~1~VrUOJeagpX8aOWcMoEShUuxGZKOYhTFc26zwCOCIrHxRPfC1RGHj7VW0MKzj7nCa2WVHxR0dyINaDzGhADNK-S~7n~gZbB~~3pJ56XLP2h7Ot5g6vDRHyHdxo22pk-YhVv3HKScTktkK~7dmt5zrupEGHhjSC4SzdDayxxHPop-cpF93KZtUFhYyB5Rxv04kZJTDNHLEvb9mZkybC1RfoMQvgUMP3BCxcmH~ceLLKO2nXRCiLKtg9mLZfqsLtEc3Vqn7nRyco6mZM7kxdSqvXnUVhaVp9glmzGLuA__&amp;Key-Pair-Id=APKAJIYEUF5P2E3CCYTA',
        backim: "https://images5.alphacoders.com/135/thumb-1920-1353685.jpeg"
    }
];

function loadNewMovieBg() {
    if (!Array.isArray(latestMovies) || latestMovies.length === 0) {
        console.error("No movies available in latestMovies.");
        return;
    }

    let noOfObj = latestMovies.length;
    let randomObj = Math.floor(Math.random() * noOfObj);

    // Ensure randomObj exists

    moviebgheading.textContent = latestMovies[randomObj].moviebghead;
    moviebgplot.textContent = latestMovies[randomObj].movieP;
    moviebgimdb.textContent = latestMovies[randomObj].movieim;
    moviebgduration.textContent = latestMovies[randomObj].movied;
    moviebgyear.textContent = latestMovies[randomObj].movieyear;
    moviebguhd.textContent = latestMovies[randomObj].movieuhd;

    moviePosterImage.style.backgroundImage = 'url(' + latestMovies[randomObj].backim + ')';

    // Update video source dynamically and ensure it is valid

}

window.onload = loadWatchLaterList

document.addEventListener('DOMContentLoaded', () => {
    loadNewMovieBg(); // Initial movie background load
    getActionMovies();
    getDocumantries();
    getHorrorMovies()

});
