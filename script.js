const movies = [
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    image: './movie-posters/the-shawshank-redemption.jpg',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler', 'Clancy Brown', 'Gil Bellows']
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: 1972,
    genre: 'Crime',
    rating: 9.2,
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image: './movie-posters/the-godfather.jpg',
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Robert Duvall', 'Diane Keaton', 'John Cazale']
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: 1994,
    genre: 'Crime',
    rating: 8.9,
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    image: './movie-posters/pulp-fiction.jpg',
    actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis', 'Ving Rhames', 'Harvey Keitel']
  },
  {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    year: 1994,
    genre: 'Drama',
    rating: 8.8,
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
    image: './movie-posters/forrest-gump.jpg',
    actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise', 'Sally Field', 'Mykelti Williamson', 'Haley Joel Osment']
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    year: 2008,
    genre: 'Action',
    rating: 9.0,
    description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    image: './movie-posters/the-dark-knight.jpg',
    actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine', 'Maggie Gyllenhaal', 'Gary Oldman']
  },
  {
    title: 'Parasite',
    director: 'Bong Joon Ho',
    year: 2019,
    genre: 'Thriller',
    rating: 8.6,
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    image: './movie-posters/parasite.jpg',
    actors: ['Kang-ho Song', 'Sun-kyun Lee', 'Yeo-jeong Jo', 'Woo-sik Choi', 'Hye-jin Jang', 'So-dam Park']
  },
  {
    title: 'Batman Begins',
    director: 'Christopher Nolan',
    year: 2005,
    genre: 'Action',
    rating: 8.2,
    description: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
    image: './movie-posters/batman-begins.jpg',
    actors: ['Christian Bale', 'Michael Caine', 'Liam Neeson', 'Katie Holmes', 'Gary Oldman', 'Cillian Murphy']
  },
  {
    title: 'The Dark Knight Rises',
    director: 'Christopher Nolan',
    year: 2012,
    genre: 'Action',
    rating: 8.4,
    description: 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City.',
    image: './movie-posters/the-dark-knight-rises.jpg',
    actors: ['Christian Bale', 'Tom Hardy', 'Anne Hathaway', 'Gary Oldman', 'Joseph Gordon-Levitt', 'Marion Cotillard']
  },
  {
    title: 'The Godfather: Part II',
    director: 'Francis Ford Coppola',
    year: 1974,
    genre: 'Crime',
    rating: 9.0,
    description: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    image: './movie-posters/godfather-2.jpg',
    actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall', 'Diane Keaton', 'John Cazale', 'Talia Shire']
  },
  {
    title: 'Groundhog Day',
    director: 'Harold Ramis',
    year: 1993,
    genre: 'Comedy',
    rating: 8.0,
    description: 'A weatherman finds himself inexplicably living the same day over and over again.',
    image: './movie-posters/groundhog-day.jpg',
    actors: ['Bill Murray', 'Andie MacDowell', 'Chris Elliott', 'Stephen Tobolowsky', 'Brian Doyle-Murray', 'Marita Geraghty']
  },
  {
    title: 'Die Hard',
    director: 'John McTiernan',
    year: 1988,
    genre: 'Action',
    rating: 8.2,
    description: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party.',
    image: './movie-posters/die-hard.jpg',
    actors: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia', 'Reginald VelJohnson', 'Paul Gleason', 'William Atherton']
  },
  {
    title: 'Die Hard 2',
    director: 'Renny Harlin',
    year: 1990,
    genre: 'Action',
    rating: 7.2,
    description: 'John McClane attempts to avert disaster as rogue military operatives seize control of Dulles International Airport in Washington, D.C.',
    image: './movie-posters/die-hard-2.jpg',
    actors: ['Bruce Willis', 'Bonnie Bedelia', 'William Atherton', 'Reginald VelJohnson', 'Franco Nero', 'John Amos']
  },
  {
    title: 'Caddyshack',
    director: 'Harold Ramis',
    year: 1980,
    genre: 'Comedy',
    rating: 7.3,
    description: 'An exclusive golf course has to deal with a brash new member and a destructive dancing gopher.',
    image: './movie-posters/caddyshack.jpg',
    actors: ['Chevy Chase', 'Rodney Dangerfield', 'Ted Knight', 'Michael O\'Keefe', 'Bill Murray', 'Sarah Holcomb']
  },
  {
    title: 'Låt den rätte komma in',
    director: 'Tomas Alfredson',
    year: 2008,
    genre: 'Drama',
    rating: 7.9,
    description: 'Oskar, an overlooked and bullied boy, finds love and revenge through Eli, a beautiful but peculiar girl.',
    image: './movie-posters/lat-den-ratte-komma-in.jpg',
    actors: ['Kåre Hedebrant', 'Lina Leandersson', 'Per Ragnar', 'Henrik Dahl', 'Karin Bergquist', 'Peter Carlberg']
  },
  {
    title: 'Snabba Cash',
    director: 'Daniel Espinosa',
    year: 2010,
    genre: 'Action',
    rating: 6.7,
    description: 'When JW becomes a drug runner in order to maintain his double life, his fate becomes tied to two other men: Jorge, a fugitive on the run from both the Serbian mafia and the police, and mafia enforcer Mrado, who is on the hunt for Jorge.',
    image: './movie-posters/snabba-cash.jpg',
    actors: ['Joel Kinnaman', 'Matias Varela', 'Dragomir Mrsic', 'Lisa Henni', 'Mahmut Suvakci', 'Jones Danko']
  },
  {
    title: 'RoboCop',
    director: 'José Padilha',
    year: 2014,
    genre: 'Action',
    rating: 6.1,
    description: 'In 2028 Detroit, when Alex Murphy, a loving husband, father and good cop, is critically injured in the line of duty, the multinational conglomerate OmniCorp sees their chance for a part-man, part-robot police officer.',
    image: './movie-posters/robocop.jpg',
    actors: ['Joel Kinnaman', 'Gary Oldman', 'Michael Keaton', 'Abbie Cornish', 'Jackie Earle Haley', 'Michael K. Williams']
  }
];

function listMovies(movies) {
  const moviesDiv = document.getElementById('movies-container');
  moviesDiv.innerHTML = "";
  movies.forEach((movie) => {
    moviesDiv.innerHTML += 
      `<div class="card movie">
        <div class="card-title">
          <h3>${movie.title}</h3>
        </div>
        <div class="poster">
          <img class="poster" src="${movie.image}">
        </div>
        <div class="genres">
          <span class="genre">${movie.genre}</span>
        </div>
        <div class="rating">
          <span class="label">Rating:</span>${movie.rating}
        </div>        
        <div class="released">
          <span class="label">Released:</span>${movie.year}
        </div>
        <div class="actors">
          <span class="label">Actors:</span>${movie.actors}
        </div>
        <p class="description"><span class="label">Plot:</span>${movie.description}</p>
      </div>`
  })
}

const populateFilter = (movies, type) => {
  const element = document.getElementById(`filter-${type}`);
  let options = `<option value="">All</option>\n`;
  const optionsArray = movies.reduce((acc, movie) => {
    const movieItem = movie[type];
    if (Array.isArray(movieItem)) {
        movieItem.forEach((i) => {
            if (!acc.includes(i)) acc.push(i);
        });
    } else {
        if (!acc.includes(movieItem)) acc.push(movieItem);
    }
    return acc;
  }, []);
  optionsArray.sort();
  optionsArray.forEach((item) => options += `<option value="${item}">${item}</option>\n`)
  element.innerHTML = options;
}

populateFilter(movies, "genre");
populateFilter(movies, "year");
populateFilter(movies, "actors");
populateFilter(movies, "director");


const performFilter = (movies, type) => {
  const filterValue = document.getElementById(`filter-${type}`).value;
  if (filterValue) {
    return movies.filter((movie) => {
      if (Array.isArray(movie[type])) {
        return movie[type].includes(filterValue);
      }
      else {
        return movie[type] == filterValue;
      }
    }) || []  
  } else {
    // if we dont have a filtervalue there is no filter to apply and we return the movies parameter untouched. If for some reason the movies object is null or empty string we return an empty array
    return movies || []
  }
}

const filterMovies = () => {
  // we start with all movies
  let filteredMovies = movies;

  filteredMovies = performFilter(filteredMovies,"actors");
  filteredMovies = performFilter(filteredMovies,"genre");
  filteredMovies = performFilter(filteredMovies,"year");
  filteredMovies = performFilter(filteredMovies,"director");

  const sort = document.getElementById(`filter-sort`).value;

  switch(sort) {
    case "title":
      filteredMovies.sort((a,b) => a.title.localeCompare(b.title))
      break;

    case "rating":
      filteredMovies.sort((a,b) => a.rating - b.rating )
      break;
    
    case "year":
      filteredMovies.sort((a,b) => a.year - b.year )
      break;

    default:
  }

  if(document.getElementById(`filter-sort-reverse`).checked) filteredMovies.reverse();

  listMovies( filteredMovies );
}

// Lets set a eventListner to catch any changes
document.querySelectorAll(".filter").forEach((item) => item.addEventListener("change", filterMovies))

listMovies( movies );