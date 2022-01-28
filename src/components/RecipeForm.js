import { IntegrationInstructions } from '@mui/icons-material';
import React, { useState } from 'react';

const API = 'http://localhost:9292/recipes'

function RecipeForm({ onAddRecipe }) {
    const [formData, setFormData] = useState({
        name: "",
        prep_type: "",
        is_heated: false,
        prep_time: "",
        source: "",
        image: "",
        instructions: [''],
        ingredients: [
            {
                ingred_name: "",
                is_garnish: false,
                measurements: ""
            }
        ]
    });

    function handleFieldChange(e) {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name

        if (['ingred_name', 'is_garnish', 'measurements'].includes(name)) {
            let ingredients = [...formData.ingredients];
            ingredients[e.target.id][e.target.name] = value;
            setFormData({ 
                ...formData, 
                ingredients, 
            });
        } else if (name === 'instructions') {
            let instructions = [...formData.instructions];
            instructions[e.target.id] = value;
            setFormData({ 
                ...formData, 
                instructions, 
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    function handleAddIngredient(e) {
        e.preventDefault()
        
        setFormData({
            ...formData,
            ingredients: [
                ...formData.ingredients,
                { ingred_name: '', is_garnish: '', measurements: '' }
            ]
        });
    };

    function handleAddInstructions(e) {
        e.preventDefault()
        
        setFormData({
            ...formData,
            instructions: [
                ...formData.instructions,
                ""
            ]
        });
        console.log(formData)
    };
    
    function handleSubmit(e) {
        e.preventDefault();

        let newRecipe = { ...formData, };
        //   const newBeer = {
        //     ...formData,
        //   };
    
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe),
        })
        .then((r) => r.json())
        .then(onAddRecipe);

        setFormData({
            name: "",
            prep_type: "",
            is_heated: false,
            prep_time: "",
            source: "",
            image: "",
            instructions: [''],
            ingredients: [
                {
                    ingred_name: "",
                    is_garnish: false,
                    measurements: ""
                }
            ]
          });
        } 

    return(
        <div id='form-container'>
            <form id='recipe-form' onSubmit={handleSubmit}>
                <label>Name</label>
                <br/>
                <input 
                    type='text' 
                    label='Recipe Name'
                    placeholder='Recipe Name'
                    name="name"
                    value={formData.name} 
                    rules={[{ required: true }]}
                    onChange={handleFieldChange}
                />
                <br/>
                <label>Image</label>
                <br/>
                <input 
                    type='text'
                    label='Image'
                    placeholder='Image URL' 
                    name='image'
                    value={formData.image}
                    onChange={handleFieldChange}
                />
                <br/>
                <label>Prep Type</label>
                <br/>
                <select name='prep_type' onChange={handleFieldChange} value={formData.prep_type}>
                    <option value='none'>Select Option</option>
                    <option value='coarse'>Coarse</option>
                    <option value='medium coarse'>Medium Coarse</option>
                    <option value='medium'>Medium</option>
                    <option value='medium fine'>Medium Fine</option>
                    <option value='fine'>Fine</option>
                    <option value='extra eine'>Extra Fine</option>
                    <option value='espresso'>Espresso</option>
                </select>
                <br/>
                <label>Prep Time</label>
                <br/>
                <input 
                    type='text'
                    label='Prep Time' 
                    placeholder='Ex: 5 minutes'
                    name='prep_time'
                    value={formData.prep_time} 
                    rules={[{ required: true }]}
                    onChange={handleFieldChange}
                />
                <br/>
                <label>Heated?</label>
                <input 
                    type='checkbox'
                    label='Heated?'
                    id='is_heated'
                    name='is_heated'
                    checked={formData.is_heated}
                    onChange={handleFieldChange}
                />
                <br/>

                {formData.ingredients.map((ingredient, index) => {
                    return (
                        <div key={index}>
                            <label>Ingredient Name</label>
                            <input 
                                type='text' 
                                id={index}
                                name='ingred_name' 
                                value={ingredient.ingred_name} 
                                onChange={handleFieldChange}
                            />
                            <br/>

                            <label>Is this ingredient a garnish?</label>
                            <input 
                                type='checkbox' 
                                id={index}
                                name='is_garnish' 
                                value={formData.ingredients.is_garnish} 
                                onChange={handleFieldChange}
                            />
                            <br/>
                            
                            <label>Measurement</label>
                            <br/>
                            <input 
                                type='text' 
                                id={index}
                                name='measurements' 
                                value={ingredient.measurements} 
                                onChange={handleFieldChange}
                            />
                        </div>
                    );
                })}
                <br/>
                <button onClick={handleAddIngredient} className='add-btn'>Add Ingredient</button>
                <br/>
                <br/>

                {formData.instructions.map((instruction, index) => {
                    return (
                        <div key={index}>
                            <label>Instructions by Step</label>
                            <br/>
                            <input 
                                type='text' 
                                id={index}
                                name='instructions' 
                                value={instruction} 
                                onChange={handleFieldChange}
                            />
                        </div>
                    )
                })}
                <button onClick={handleAddInstructions} className='add-btn'>Add Instruction Step</button>
                <br/>

                <label>Source</label>
                <br/>
                <input 
                    type='text' 
                    label='Source'
                    name='source'
                    value={formData.source} 
                    onChange={handleFieldChange}
                />
                <br/>

                <button type='submit' className='form-btn'>Submit</button>
                <button type='reset' className='form-btn'>Reset</button>
            </form>
        </div>
    )
}

export default RecipeForm;