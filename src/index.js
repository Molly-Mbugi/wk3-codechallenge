document.addEventListener("DOMContentLoaded", function() {
    // Make GET request to fetch movie data
    fetch("http://localhost:3000/films")
      .then(response => response.json())
      .then(data => {
    
    // Function to update movie information
    function information(data) {
        document.getElementById('poster')
        poster.src = data.poster;
        document.getElementById('title')
        title.textContent = data.title;
        document.getElementById('runtime')
        runtime.textContent = `${data.runtime} minutes`;
        document.getElementById('film-info').textContent = data.description;
        document.getElementById('showtime')
        showtime.textContent = data.showtime;
        const remainingTickets = data.capacity - data.tickets_sold;
        document.getElementById('ticket-num').textContent = remainingTickets;
    }
    // Add event listener to each movie item
    filmlist.addEventListener("click", () => {
        information(movie);
      });
      // Creating list item for each movie
      const filmlist = document.createElement("li");
      filmlist.textContent = movie.title;
      list.appendChild(filmlist);

    // Populate the list of movies
        const list = document.getElementById("films");
        for (let i = 0; i < data.length; i++) {
          const movie = data[i];
          
          
          
          
        }
      });
});

