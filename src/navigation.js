import  {
  getTrendingMoviesPreview,
  getCategegoriesPreview,
  getMoviesByCategory,
  getMoviesBySearch,
  getTrendingMovies,
  getMovieByID,

} from './main.js'

$searchFormBtn.addEventListener('click', () =>{ 
  location.hash = '#search=' + $searchFormInput.value; 
});

$trendingBtn.addEventListener('click', () => location.hash = '#trends=');
$arrowBtn.addEventListener('click', () => {
  // location.hash = window.history.back()
  const stateLoad = window.history.state ? window.history.state.loadUrl : '';
    if (stateLoad.includes('#')) {
        window.location.hash = '';
    } else {
        window.history.back();
    }
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
window.addEventListener(
  'DOMContentLoaded',
  () => {
      navigator();
      // Agregando un estado de carga inical
      window.history.pushState({ loadUrl: window.location.href }, null, '');
  },
  false,
);





function navigator() {
  console.log({ location });
  
  location.hash.startsWith('#trends')    ? trendsPage()       :
  location.hash.startsWith('#search=')   ? searchPage()       :
  location.hash.startsWith('#movie=')    ? movieDetailsPage() :
  location.hash.startsWith('#category=') ? categoriesPage()   :
  homePage()

  function smoothscroll(){
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo (0,currentScroll - (currentScroll/5));
    }
  };

  smoothscroll();
  
}


function homePage() {
  console.log('Home!!');

  $headerSection.classList.remove('header_container--long');
  $headerSection.style.background = '';
  $arrowBtn.classList.add('inactive');
  $arrowBtn.classList.remove('header_arrow--white');
  $headerTitle.classList.remove('inactive');
  $headerCategoryTitle.classList.add('inactive');
  $searchForm.classList.remove('inactive');

  $trendingPreviewSection.classList.remove('inactive');
  $categoriesPreviewSection.classList.remove('inactive');
  $genericSection.classList.add('inactive');
  $movieDetailSection.classList.add('inactive');


  getCategegoriesPreview();
  getTrendingMoviesPreview();
}
function categoriesPage() {
  console.log('categories!!');

  $headerSection.classList.remove('header_container--long');
  $headerSection.style.background = '';
  $arrowBtn.classList.remove('inactive');
  $arrowBtn.classList.remove('header_arrow--white');
  $headerTitle.classList.add('inactive');
  $headerCategoryTitle.classList.remove('inactive');
  $searchForm.classList.add('inactive');

  $trendingPreviewSection.classList.add('inactive');
  $categoriesPreviewSection.classList.add('inactive');
  $genericSection.classList.remove('inactive');
  $movieDetailSection.classList.add('inactive');

  const [_,categoryData] = location.hash.split('=');
  const [categoryId, categoryName] = categoryData.split('-');
  $headerCategoryTitle.innerHTML = categoryName;

  getMoviesByCategory(categoryId);


}

function movieDetailsPage() {
  console.log('Movie!!');

  
  $headerSection.classList.add('header_container--long');
  //$headerSection.style.background = '';
  $arrowBtn.classList.remove('inactive');
  $arrowBtn.classList.add('header_arrow--white');
  $headerTitle.classList.add('inactive');
  $headerCategoryTitle.classList.add('inactive');
  $searchForm.classList.add('inactive');

  $trendingPreviewSection.classList.add('inactive');
  $categoriesPreviewSection.classList.add('inactive');
  $genericSection.classList.add('inactive');
  $movieDetailSection.classList.remove('inactive');


  
  const [_,movieId] = location.hash.split('=');
  getMovieByID(movieId);

}

function searchPage() {
  console.log('Search!!');

  $headerSection.classList.remove('header_container--long');
  $headerSection.style.background = '';
  $arrowBtn.classList.remove('inactive');
  $arrowBtn.classList.remove('header_arrow--white');
  $headerTitle.classList.add('inactive');
  $headerCategoryTitle.classList.add('inactive');
  $searchForm.classList.remove('inactive');

  $trendingPreviewSection.classList.add('inactive');
  $categoriesPreviewSection.classList.add('inactive');
  $genericSection.classList.remove('inactive');
  $movieDetailSection.classList.add('inactive');

  const [_,query] = location.hash.split('=');
  getMoviesBySearch(query);

}

function trendsPage() {
  console.log('TRENDS!!');

  $headerSection.classList.remove('header_container--long');
  $headerSection.style.background = '';
  $arrowBtn.classList.remove('inactive');
  $arrowBtn.classList.remove('header_arrow--white');
  $headerTitle.classList.add('inactive');
  $headerCategoryTitle.classList.remove('inactive');
  $searchForm.classList.add('inactive');

  $trendingPreviewSection.classList.add('inactive');
  $categoriesPreviewSection.classList.add('inactive');
  $genericSection.classList.remove('inactive');
  $movieDetailSection.classList.add('inactive');


  $headerCategoryTitle.innerHTML = 'Tendencias';

  getTrendingMovies();
}


