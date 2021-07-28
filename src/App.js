// lifting state up to app.js
import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  // wrapped categories in [] b/c useState is a fucntion that always returns an array
  const [categories] = useState([
    {
        name: "commercial",
        description: "Photos of grocery store, food trucks, and other commercial projects"
    },

    {
        name: "portraits",
        description: "Portraits of people in my life"
    },

    {
        name: "food",
        description: "Delicious delicacies"
    },

    {
        name: "landscape",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature"
    }
  ]);

  // react hooks
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      {/* need to pass in these in as attributes on the JSX and not in the parentheses of the nav component function, these are the props being passed into nav component */}
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>      
    </div>
  );
}

export default App;
