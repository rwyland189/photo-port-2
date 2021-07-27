import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// nav is a child of app.js (where state was lifted to, the parent component), so pass props from app to nav component
function Nav(props) {
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">About Me</a>
                    </li>

                    <li>
                        <span>Contact Me</span>
                    </li>

                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => {setCurrentCategory(category)}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;