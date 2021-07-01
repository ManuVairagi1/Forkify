import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;

  //spinner loading
  recipeView.renderSpinner();

  //1. Loading Recipe
  await model.loadRecipe(id);

  //2. Rendering Recipe
  recipeView.render(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};

init();
//Imagine having so many event Listeners for the same event handler function , so I think that we should loop over to all of them from a array
// ['hashchange', 'load'].forEach(ev => {
//   window.addEventListener(ev, controlRecipe);
// });
