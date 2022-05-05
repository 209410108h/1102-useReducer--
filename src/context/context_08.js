import React, { useReducer, useContext, useEffect } from "react";
import { SEARCH_ITEM, START_LOADING, SET_ITEM, END_LOADING } from "./action_08";
import reducer_08 from "./reducer_08";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const initialState = {
  loading: true,
  searchTerm: "a",
  cocktails: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_08, initialState);

  const setSearchTerm = (searchInput) => {
    dispatch({ type: SEARCH_ITEM, payload: searchInput });
  };

  const fetchDrinks = async () => {
    try {
      dispatch({ type: START_LOADING });
      const response = await fetch(`${url}${state.searchTerm}`);
      const data = await response.json();
      console.log("data", data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        dispatch({ type: SET_ITEM, payload: newCocktails });
      } else {
        dispatch({ type: SET_ITEM, payload: [] });
      }
      dispatch({ type: END_LOADING });
    } catch (err) {
      console.log(err);
      dispatch({ type: END_LOADING });
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [state.searchTerm]);

  return (
    <AppContext.Provider value={{ ...state, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
