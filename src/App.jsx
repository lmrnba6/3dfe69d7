import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header.jsx';

const App = () => {
    return (
        <div className='container'>
            <Header />
            <div className="container-view">Some activities should be here</div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

export default App;
