import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Search from './components/Search';


function App() {
    const handleSearch = (query) => {
        // Here I need to add an API call to get search results
        console.log("Searching for:", query);
    };

    return (
        <div>
            <NavBar />
            {/* You can add routing or conditional rendering to load specific sections */}
            <div className="container">
                <Search onSearch={handleSearch} />
                <div className="container mt-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit auctor quam non mollis. Curabitur efficitur, magna in vestibulum pharetra, massa libero consequat metus, non imperdiet libero justo eget nisi. Nulla facilisi. Donec in eros eget nunc cursus semper eu eu urna. Fusce sit amet nunc nec erat efficitur luctus.</p>
                    <p>Phasellus lacinia velit a libero efficitur, eget ullamcorper nisi fringilla. Ut eget eros mollis, egestas magna sed, maximus ligula. Aliquam erat volutpat. Aenean vehicula velit sit amet justo fermentum, at consequat ex condimentum. Nulla nec orci a odio vestibulum tincidunt. Sed tristique luctus enim. Mauris vehicula leo nec ex dictum, sed ullamcorper lorem dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et pellentesque dolor, vitae tincidunt sapien.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit auctor quam non mollis. Curabitur efficitur, magna in vestibulum pharetra, massa libero consequat metus, non imperdiet libero justo eget nisi. Nulla facilisi. Donec in eros eget nunc cursus semper eu eu urna. Fusce sit amet nunc nec erat efficitur luctus.</p>
                    <p>Phasellus lacinia velit a libero efficitur, eget ullamcorper nisi fringilla. Ut eget eros mollis, egestas magna sed, maximus ligula. Aliquam erat volutpat. Aenean vehicula velit sit amet justo fermentum, at consequat ex condimentum. Nulla nec orci a odio vestibulum tincidunt. Sed tristique luctus enim. Mauris vehicula leo nec ex dictum, sed ullamcorper lorem dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et pellentesque dolor, vitae tincidunt sapien.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit auctor quam non mollis. Curabitur efficitur, magna in vestibulum pharetra, massa libero consequat metus, non imperdiet libero justo eget nisi. Nulla facilisi. Donec in eros eget nunc cursus semper eu eu urna. Fusce sit amet nunc nec erat efficitur luctus.</p>
                    <p>Phasellus lacinia velit a libero efficitur, eget ullamcorper nisi fringilla. Ut eget eros mollis, egestas magna sed, maximus ligula. Aliquam erat volutpat. Aenean vehicula velit sit amet justo fermentum, at consequat ex condimentum. Nulla nec orci a odio vestibulum tincidunt. Sed tristique luctus enim. Mauris vehicula leo nec ex dictum, sed ullamcorper lorem dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et pellentesque dolor, vitae tincidunt sapien.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit auctor quam non mollis. Curabitur efficitur, magna in vestibulum pharetra, massa libero consequat metus, non imperdiet libero justo eget nisi. Nulla facilisi. Donec in eros eget nunc cursus semper eu eu urna. Fusce sit amet nunc nec erat efficitur luctus.</p>
                    <p>Phasellus lacinia velit a libero efficitur, eget ullamcorper nisi fringilla. Ut eget eros mollis, egestas magna sed, maximus ligula. Aliquam erat volutpat. Aenean vehicula velit sit amet justo fermentum, at consequat ex condimentum. Nulla nec orci a odio vestibulum tincidunt. Sed tristique luctus enim. Mauris vehicula leo nec ex dictum, sed ullamcorper lorem dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et pellentesque dolor, vitae tincidunt sapien.</p>
                    <p>Phasellus lacinia velit a libero efficitur, eget ullamcorper nisi fringilla. Ut eget eros mollis, egestas magna sed, maximus ligula. Aliquam erat volutpat. Aenean vehicula velit sit amet justo fermentum, at consequat ex condimentum. Nulla nec orci a odio vestibulum tincidunt. Sed tristique luctus enim. Mauris vehicula leo nec ex dictum, sed ullamcorper lorem dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et pellentesque dolor, vitae tincidunt sapien.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit auctor quam non mollis. Curabitur efficitur, magna in vestibulum pharetra, massa libero consequat metus, non imperdiet libero justo eget nisi. Nulla facilisi. Donec in eros eget nunc cursus semper eu eu urna. Fusce sit amet nunc nec erat efficitur luctus.</p>
                    <p>Phasellus lacinia velit a libero efficitur, eget ullamcorper nisi fringilla. Ut eget eros mollis, egestas magna sed, maximus ligula. Aliquam erat volutpat. Aenean vehicula velit sit amet justo fermentum, at consequat ex condimentum. Nulla nec orci a odio vestibulum tincidunt. Sed tristique luctus enim. Mauris vehicula leo nec ex dictum, sed ullamcorper lorem dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et pellentesque dolor, vitae tincidunt sapien.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit auctor quam non mollis. Curabitur efficitur, magna in vestibulum pharetra, massa libero consequat metus, non imperdiet libero justo eget nisi. Nulla facilisi. Donec in eros eget nunc cursus semper eu eu urna. Fusce sit amet nunc nec erat efficitur luctus.</p> 
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
