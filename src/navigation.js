import  {
  getTrendingMoviesPreview,
  getCategegoriesPreview
} from './main.js'

$searchFormBtn.addEventListener('click', () => location.hash = '#search=');
$trendingBtn.addEventListener('click', () => location.hash = '#trends=');
$arrowBtn.addEventListener('click', () => location.hash = '#home');

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  console.log({ location });
  
  location.hash.startsWith('#trends')    ? trendsPage()       :
  location.hash.startsWith('#search=')   ? searchPage()       :
  location.hash.startsWith('#movie=')    ? movieDetailsPage() :
  location.hash.startsWith('#category=') ? categoriesPage()   :
  homePage()

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

}

function searchPage() {
  console.log('Search!!');

  $headerSection.classList.remove('header_container--long');
  $headerSection.style.background = '';
  $arrowBtn.classList.remove('inactive');
  $arrowBtn.classList.remove('header_arrow--white');
  $headerTitle.classList.add('inactive');
  $headerCategoryTitle.classList.remove('inactive');
  $searchForm.classList.remove('inactive');

  $trendingPreviewSection.classList.add('inactive');
  $categoriesPreviewSection.classList.add('inactive');
  $genericSection.classList.remove('inactive');
  $movieDetailSection.classList.add('inactive');

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

}


