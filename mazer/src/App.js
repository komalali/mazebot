import React, { Suspense } from 'react';
import Game from './components/Game';
import './App.css';

function App() {
    return (
        <div className="App">
            <Suspense fallback="Loading...">
                <Game />
            </Suspense>
        </div>
    );
}

export default App;
