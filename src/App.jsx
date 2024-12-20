import Navbar from './Navbar.jsx';
import { useEffect } from 'react';
import './App.css';

export default function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className="name">
                <h1>Hey, </h1>
                <h1>I'm Daniel</h1>
                <p onLoad="scroller()"></p>
            </div>
        </>
    );
}


