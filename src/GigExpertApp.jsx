import { useState } from "react";
import { AddCategory,GifGrid  } from "./components";

export const GigExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);
  const addNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={addNewCategory}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
