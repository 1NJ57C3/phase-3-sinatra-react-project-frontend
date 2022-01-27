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
                <br/>
                <label>Image</label>
                <input 
                    type='text' 
                    value={image}
                    onChange={e => setImage(e.target.value)} 
                />
                <br/>
                <label>Prep Type</label>
                <input 
                    type='text' 
                    value={prepType} 
                    onChange={e => setPrepType(e.target.value)}
                />
                <br/>
                <label>Prep Time</label>
                <input 
                    type='text' 
                    value={prepTime} 
                    onChange={e => setPrepTime(e.target.value)}
                />
                <br/>
                <label htmlFor="isHeated">Heated?</label>
                <input 
                    type='checkbox'
                    id='isHeated'
                    checked={isHeated}
                    onChange={e => setIsHeated(e.target.value)}
                />
                <br/>
                <label>Ingredients</label>
                <input 
                    type='text' 
                    value={ingredients} 
                />
                <br/>
                <label>Measurements</label>
                <input 
                    type='text' 
                    value={measurements} 
                />
                <br/>
                <label>Instructions</label>
                <input 
                    type='text' 
                    value={instructions}
                    onChange={e => setInstructions(e.target.value)}
                />
                <br/>
                <label>Source</label>
                <input 
                    type='text' 
                    value={source} 
                    onChange={e => setSource(e.target.value)}
                />
                <br/>
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </form>
        </div>
    )
}

export default RecipeForm;