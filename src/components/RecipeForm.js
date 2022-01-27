import React, { useState } from 'react';

function RecipeForm() {
    const [name, setName] = useState('');
    const [prepType, setPrepType] = useState('');
    const [prepTime, setPrepTime] = useState(0);
    const [isHeated, setIsHeated] = useState(false);
    const [ingredients, setIngredients] = useState('');
    const [measurements, setMeasurements] = useState('');
    const [instructions, setInstructions] = useState('');
    const [source, setSource] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted')
      }

    return(
        <div id='form'>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type='text' 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    placeholder='Name...'
                /><br />
                <br />
                <label>Image</label>
                <input type='text' value={image} placeholder='Image URL...' /><br />
                    <br />
                <label>Prep Type</label>
                <input type='text' value={prepType} placeholder='Dropdown or Radios?' /><br />
                    <br />
                <label>Prep Time</label>
                <input type='text' value={prepTime} placeholder='Ex: 5 minutes' /><br />
                    <br />
                <label>Better hot?</label>
                <input type='radio' value={isHeated} />
                <label>Better cold?</label>
                <input type='radio' value={isHeated} /><br />
                    <br />
                <label>Ingredients</label>
                <input type='text' value={ingredients} placeholder='Dropdown per? More button?' /><br />
                {/* <input type='radio' value={ingredients} /><br /> */}
                <label>Measurements</label>
                <input type='text' value={measurements} placeholder='Group with Ingredient'/><br />
                    <br />
                <label>Instructions</label>
                <input 
                    type='text' 
                    value={instructions}
                    placeholder='One per step? Add button?'
                    onChange={e => setInstructions(e.target.value)}
                /><br />
                <br />
                <label>Source</label>
                <input 
                    type='text' 
                    value={source} 
                    placeholder="Credit where it's due..."
                    onChange={e => setSource(e.target.value)}
                /><br />
                <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default RecipeForm;