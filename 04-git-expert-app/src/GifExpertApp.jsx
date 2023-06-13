import { useState } from "react";
import { GifGrid , AddCategory } from "./components";

export const GifExpertApp = () => {
  const [Categories, setCategories] = useState(['saitama']);

  const onAddCategory = (newCategory) => {
    if (Categories.includes(newCategory)) return;

    console.log(newCategory);
    // Categories.push( newCategory )
    setCategories([newCategory, ...Categories]);
  };

  return (
    <>
      <h1> GifExpertApp </h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
        {
          Categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        }
    </>
  );
};