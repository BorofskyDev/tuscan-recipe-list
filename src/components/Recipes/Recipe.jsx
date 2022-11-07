import { useContext } from 'react'
import IngredientList from '../Ingredients/IngredientList'
import { RecipeContext } from '../../App'

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)
  const { id, name, cookTime, servings, instructions, ingredients } = props

  return (
    <div className='recipe'>
      <div className='recipe__header'>
        <h2 className='recipe__title'>{name}</h2>
        <div className='recipe__btns'>
          <button
            onClick={() => handleRecipeSelect(id)}
            className='btn btn--primary mr-1'
          >
            Edit
          </button>
          <button onClick={() => handleRecipeDelete(id)} className="btn btn--danger">
            Delete
          </button>
        </div>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Cook Time: </span>
        <span className='recipe__value'>{cookTime}</span>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Servings: </span>
        <span className='recipe__value'>{servings}</span>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Instructions: </span>
        <span className='recipe__value recipe__instructions reipe__value--indented'>
          {instructions}
        </span>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Ingredients: </span>
        <div className='recipe__value'>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}
