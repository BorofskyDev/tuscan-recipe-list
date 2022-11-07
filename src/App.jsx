import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from './components/Recipes/RecipeEdit'
import RecipeList from './components/Recipes/RecipeList'
import './styles/App.scss'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'recipeCreator.recipes'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  )

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [{ id: uuidv4(), name: '', amount: '' }],
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <div>
        <RecipeList recipes={recipes} />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </div>
    </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'Drip Beef Roast',
    servings: 4,
    cookTime: '6 hours',
    instructions:
      'Put roast in a crock-pot and stab it with a knife. Put the oregano, garlic salt, seasoned salt, pepper, and kitchen bouquet on it. Pour water over the roast. Cook on low for about 8-10 hours (medium/high takes 4-6 hours, but this is not recommended). Roast should be pulled apart with fork.',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Marble Roast',
        amount: '3 pounds',
      },
      {
        id: uuidv4(),
        name: 'Oregano',
        amount: '1/4 Tbs',
      },
      {
        id: uuidv4(),
        name: 'Garlic Salt',
        amount: '1 Tbs',
      },
      {
        id: uuidv4(),
        name: 'Seasoned Salt',
        amount: '1 Tbs',
      },
      {
        id: uuidv4(),
        name: 'Pepper',
        amount: '1/2 Tbs',
      },
      {
        id: uuidv4(),
        name: 'Beef Bullion',
        amount: '2 cubes',
      },
      {
        id: uuidv4(),
        name: 'Warm Water',
        amount: '2/3 Cups',
      },
      {
        id: uuidv4(),
        name: 'Kitchen Bouquet',
        amount: '1 Tbsp',
      },
    ],
  },
]

export default App
{
  /* <a target="_blank" href="https://icons8.com/icon/rR430TkIyuJu/food">Food</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
