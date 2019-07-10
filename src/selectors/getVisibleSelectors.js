const getVisibleRecipies = (recipies, filters) => {
  if (filters.cooktime) {
    return recipies.filter(recipie => {
      console.log("cooktimefilter");
      const cooktimefilter = recipie.cooktime === filters.cooktime;
      return cooktimefilter;
    });
  } else if (filters.title) {
    return recipies.filter(recipie => {
      console.log("titl filter");
      const recipieTitle = recipie.title.toLowerCase();
      const filtertitle = filters.title.toLowerCase();
      const titleMatch = recipieTitle.includes(filtertitle);
      return titleMatch;
    });
  } else if (filters.text) {
    return recipies.filter(recipie => {
      console.log("text filter");
      const recipieIngredients = recipie.ingredients.toLowerCase();
      const filterstext = filters.text.toLowerCase();
      const textMatch = recipieIngredients.includes(filterstext);
      return textMatch;
    });
  } else if (filters.sortBy) {
    return recipies.sort((a, b) => {
      if (filters.sortBy === "cooktime") {
        return a.cooktime > b.cooktime ? 1 : -1;
      }
    });
  } else {
    return recipies;
  }
};

export default getVisibleRecipies;
