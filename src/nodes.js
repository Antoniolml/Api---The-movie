const $ = (id) => document.querySelector(id);
//section
const $headerSection = $('#header'),
  $trendingPreviewSection = $('#trendingPreview'),
  $categoriesPreviewSection = $('#categoriesPreview'),
  $genericSection = $('#genericList'),
  $movieDetailSection = $('#movieDetail');

// Lists & containers

const $searchForm = $('#searchForm'),
  $trending = $('.trendingPreview_movieList'),
  $categories = $('.categoriesPreview_list'),
  $movieDetailCategoriesList = $('#movieDetail .categories_list'),
  $relatedMoviesContainer = $('.relatedMovies_scrollContainer');


// Elements

const $headerTitle = $('.header_title'),
  $arrowBtn = $('.header_arrow'),
  $headerCategoryTitle = $('.header_title--categoryView'),
  $searchFormInput = $('#searchForm input'),
  $searchFormBtn = $('#searchBtn'),
  $trendingBtn = $('.trendingPreview_btn'),
  $movieDetailTitle = $('.movieDetail_title'),
  $movieDetailDescription = $('.movieDetail_description'),
  $movieDetailScore = $('.movieDetail_score');