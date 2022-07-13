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
$trending = d.querySelector('.trendingPreview_movieList'),
$categories = d.querySelector('.categoriesPreview_list'),
$template_trending = d.getElementById('movie_container').content,
$template_categories = d.getElementById('category_container').content,
$fragment = d.createDocumentFragment();


const getTrendingMoviesPrevoie = async () =>{
try {
  const {data} = await api('trending/movie/day'),
    movies = data.results;
  console.log(movies, data);

  movies.forEach(el => {
    $template_trending.querySelector('.movie_img').src = `https://image.tmdb.org/t/p/w300${el.poster_path}`;

    let $clone = d.importNode($template_trending, true);
    $fragment.appendChild($clone);
  });
  $trending.querySelector('div').appendChild($fragment);
} catch (error) {
  console.log(error);
}
}

getTrendingMoviesPrevoie()

const getCategoriesPrevoie = async () =>{
  try {
    const {data} = await api('genre/movie/list'),
      categories = data.genres;
    console.log(categories, data);
  
    categories.forEach(el => {
      $template_categories.querySelector('.category_title').textContent = el.name;
      $template_categories.querySelector('.category_title').id = `id${el.id}`;
  
      let $clone = d.importNode($template_categories, true);
      $fragment.appendChild($clone);
    });
    $categories.querySelector('div').appendChild($fragment);
  } catch (error) {
    console.log(error);
  }
}

getCategoriesPrevoie();