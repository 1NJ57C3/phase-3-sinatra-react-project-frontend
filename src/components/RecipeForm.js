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
                />
                <label>Image</label>
                <input type='text' value={image} />

                <label>Prep Type</label>
                <input type='text' value={prepType} />

                <label>Prep Time</label>
                <input type='text' value={prepTime} />

                <label>Is it heated?</label>
                <input type='radio' value={isHeated} />

                <label>Ingredients</label>
                <input type='radio' value={ingredients} />

                <label>Measurements</label>
                <input type='text' value={measurements} />

                <label>Instructions</label>
                <input 
                    type='text' 
                    value={instructions}
                    onChange={e => setInstructions(e.target.value)}
                />

                <label>Source</label>
                <input 
                    type='text' 
                    value={source} 
                    onChange={e => setSource(e.target.value)}
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default RecipeForm;