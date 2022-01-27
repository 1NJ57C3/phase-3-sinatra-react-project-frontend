import React, { useState } from 'react';

const API = 'http://localhost:9292/recipes'

function RecipeForm({ onAddRecipe }) {
    const [formData, setFormData] = useState({
        name: "",
        prep_type: "",
        is_heated: "",
        prep_time: "",
        instructions: "",
        source: "",
        image: "",
        ingredients: ""
      });
    
      function handleChange(e) {
          console.log(e.target.checked)
          console.log(e.target.name)

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name

        console.log('VALUE: ', value)
        console.log('NAME: ', name)

        setFormData({
          ...formData,
          [name]: value,
        });
        console.log({formData})
      }
    
      function handleSubmit() {

        const newRecipe = {
          ...formData,
        };
    
        fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRecipe),
        })
          .then((r) => r.json())
          .then(onAddRecipe);
        // window.location.pathname = "/thanks";
      } 

    return(
        <div id='form'>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br/>
                <input 
                    type='text' 
                    name="name"
                    value={formData.name} 
                    onChange={handleChange}
                    rules={[{ required: true}]}
                />
                <br/>
                <label>Image</label>
                <br/>
                <input 
                    type='text' 
                    name='image'
                    placeholder='Image URL...'
                    value={formData.image}
                    onChange={handleChange} 
                />
                <br/>
                <label>Prep Time</label>
                <br/>
                <input 
                    type='text' 
                    name='prep_time'
                    placeholder='Ex: 5 minutes'
                    value={formData.prepTime} 
                    onChange={handleChange}
                />
                <label htmlFor="is_heated">Heated?</label>
                <br/>
                <input 
                    type='checkbox'
                    id='is_heated'
                    name='is_heated'
                    checked={formData.is_heated}
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <label>Ingredients</label>
                <br/>
                <textarea 
                    type='text' 
                    name='ingredients'
                    value={formData.ingredients} 
                    onChange={handleChange}
                />
                <br/>
                <label>Source</label>
                <br/>
                <input 
                    type='text' 
                    name='source'
                    value={formData.source} 
                    onChange={handleChange}
                />
                <br/>

                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </form>
        </div>
    )
}

export default RecipeForm;