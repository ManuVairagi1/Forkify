import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//spinner loading

const controlRecipe = async function () {
  const id = window.location.hash.slice(1);
  console.log(id);
  recipeView.renderSpinner();

  if (!id) return;

  //1. Loading Recipe
  await model.loadRecipe(id);

  //2. Rendering Recipe
  recipeView.render(model.state.recipe);

  // const recipeView = new recipeView(modal.state.recipe);
};

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
//Imagine having so many event Listeners for the same event handler function , so I think that we should loop over to all of them from a array
// [('hashchange', 'load')].forEach(ev => {
//   window.addEventListener(ev, controlRecipe);
// });
