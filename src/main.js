import { API_KEY } from "./secrets.js";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers:{
    'content-type': 'application/json; charset=utf-8',
  },
  params:{
    'api_key': API_KEY,
  }
});

const d = document, 
//$trending = d.querySelector('.trendingPreview_movieList'),
//$categories = d.querySelector('.categoriesPreview_list'),
$template_trending = d.getElementById('movie_container').content,
$template_categories = d.getElementById('category_container').content,
$fragment = d.createDocumentFragment();

//util
const createMovies = (movies,container) =>{

  movies.forEach(el => {
    $template_trending.querySelector('.movie_img').src = `https://image.tmdb.org/t/p/w300${el.poster_path}`;
    $template_trending.querySelector('.movie_img').dataset.id =el.id;

    let $clone = d.importNode($template_trending,  true);
    $fragment.appendChild($clone);
  });
  container.innerHTML ="",
  container.appendChild($fragment);

}

const createCategories = (categories, container) =>{
  categories.forEach(el => {
    $template_categories.querySelector('.category_title').textContent = el.name;
    $template_categories.querySelector('.category_title').id = `id${el.id}`;
    $template_categories.querySelector('.category_title').dataset.id=el.id;
    $template_categories.querySelector('.category_title').dataset.name=el.name;


    let $clone = d.importNode($template_categories, true);
    $fragment.appendChild($clone);
  });
  
  container.innerHTML ="",
  container.appendChild($fragment);
}

// algoritmos 
const getTrendingMoviesPreview = async () =>{
try {
  const {data} = await api('trending/movie/day'),
    movies = data.results;
  console.log(movies, data);

  createMovies(movies, $trending);
} catch (error) {
  console.log(error);
}
}


const getCategegoriesPreview = async () =>{
  try {
    const {data} = await api('genre/movie/list'),
    categories = data.genres;
    console.log(categories, data);
    
    createCategories(categories,$categories);
    
  } catch (error) {
    console.log(error);
  }
}



d.addEventListener('click', async e => {
  if(e.target.matches('.category_title')){
    location.hash = `#category=${e.target.dataset.id}-${e.target.dataset.name}`;
  }
})

d.addEventListener('click', async e => {
  if(e.target.matches('.movie_img')){
    location.hash = `#movie=${e.target.dataset.id}`;
  }
})

const getMoviesByCategory = async (id) =>{
  try {
    let options={
      params: {
        with_genres: id,
      }
    }
    const {data} = await api('discover/movie', options),
      movies = data.results;
    console.log(movies);
  
    createMovies(movies, $genericSection);

    /* movies.forEach(el => {
      $template_trending.querySelector('.movie_img').src = `https://image.tmdb.org/t/p/w300${el.poster_path}`;
      
      let $clone = d.importNode($template_trending,  true); 
      $fragment.appendChild($clone);
    });
    $genericSection.innerHTML ="";
    $genericSection.appendChild($fragment); */

  } catch (error) {
    console.log(error);
  }
  }

const getMoviesBySearch = async (query) => {
  try {
    let options={
      params: {
        query,
      }
    }
    const {data} = await api('search/movie', options),
      movies = data.results;
    console.log(movies);
  
    createMovies(movies, $genericSection);

  } catch (error) {
    console.log(error);
  }
}  


const getTrendingMovies = async () =>{
  try {
    const {data} = await api('trending/movie/day'),
      movies = data.results;
    console.log(movies, data);
  
    createMovies(movies, $genericSection);
  } catch (error) {
    console.log(error);
  }
  }

const getMovieByID = async (id) =>{
  try {
    const {data: movie} = await api(`movie/${id}`);
      
    const movieImgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    $headerSection.style.background = `
    linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.35) 19.27%, 
      rgba(0, 0, 0, 0) 29.17%),
    url(${movieImgURL})`;

    $movieDetailTitle.textContent =movie.title
    $movieDetailDescription.textContent =movie.overview
    $movieDetailScore.textContent =movie.vote_average

    createCategories(movie.genres, $movieDetailCategoriesList)
    getRelatedMoviesId(id);
    } catch (error) {
      console.log(error);
    }
}
  

const getRelatedMoviesId = async (id) =>{
  try {
    const {data} = await api(`movie/${id}/similar`),
      relatedMovies = data.results;

    createMovies(relatedMovies,$relatedMoviesContainer);
    relatedMoviesContainer.scrollTo(0, 0);

  } catch (error) {
    console.log(error);
  }
}


export {
  getTrendingMoviesPreview,
  getCategegoriesPreview,
  getMoviesByCategory,
  getMoviesBySearch,
  getTrendingMovies,
  getMovieByID,
  getRelatedMoviesId
}