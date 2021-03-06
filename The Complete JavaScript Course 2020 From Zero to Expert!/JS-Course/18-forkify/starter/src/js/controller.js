import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { FADEDELAY } from './config.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    //0: update call
    resultsView.update(model.getSearchResultsPage());
    //update bookmarks view
    //1:Loading recipe
    await model.loadRecipe(id);
    //2: rendering recipe

    recipeView.render(model.state.recipe);
    //updating the bookmark view
    bookmarksView.update(model.state.bookmarks);
  } catch (err) {
    // console.log(err);
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //1. get search query
    const query = searchView.getQuery();
    if (!query) return;
    //2. Load search results
    await model.loadSearchResults(query);
    // console.log(model.state.search);
    //Render search results
    console.log('Search results', model.getSearchResultsPage());
    resultsView.render(model.getSearchResultsPage());
    //render pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
const controlPagination = function (goToPage) {
  //Render new search results
  resultsView.render(model.getSearchResultsPage(goToPage));
  //render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings state
  model.updateServings(newServings);
  //update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
const controlAddBookmark = function () {
  //Add/Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  //update recipe view
  recipeView.update(model.state.recipe);
  //render bookmarks
  bookmarksView.render(model.state.bookmarks);
};
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};
const controlAddRecipe = async function (newRecipe) {
  try {
    //render spinner
    addRecipeView.renderSpinner();
    //Upload the data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    //render the recipe
    recipeView.render(model.state.recipe);
    //success message
    addRecipeView.renderMessage();
    //render bookmark view
    bookmarksView.render(model.state.bookmarks);
    //change id in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    //close form window
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, FADEDELAY);
  } catch (err) {
    console.log(err);
    addRecipeView.renderError(err);
  }
};
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
