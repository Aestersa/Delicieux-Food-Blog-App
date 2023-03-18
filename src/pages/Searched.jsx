import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`
    );
    console.log(data);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search.toLowerCase());
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => (
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
