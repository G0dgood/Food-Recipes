import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from './Recipe';
import style from './recipes.module.css';

const App = () => {

  const APP_ID = "a7f5fb9d";
  const APP_KEY = "626314023f50a9fcf96dabb33ff81863	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
 

  useEffect(() =>{
    getResipes();
  },[query]);

const getResipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

  const data = await response.json();
  setRecipes(data.hits);
};

const updateSearch = e =>{
  setSearch(e.target.value);
};

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div className="App">
      <h1 className={style.recipe}>Perfect Recipes For Everyone!</h1>
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
       <button 
        className="search-button" type="submit">search
       </button>
     </form>
     <div className="recipes"> 
     {recipes.map(recipe =>(
       <Recipe 
       key={recipe.recipe.label}
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories} 
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients} />
     ))}
     </div>
    </div>
  );
};

export default App;
