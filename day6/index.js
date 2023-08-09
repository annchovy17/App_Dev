import React from 'react';
import ReactDOM from 'react-dom/client';
import yellowstone from './images/yellowstone.jpg'

// --- FUNCTION COMPONENT --- //
// content in the app
const App = function(){
    // create a constant variable
    const divText = 'I am a text in a variable';
    // create a style variable
    const styleJSX = {color: 'purple', fontFamily:'Algerian'};
    return(
        <div>
            <h1 style={{color:"magenta", textAlign:"center"}}>Welcome to ReactJS</h1>
            <p>Let's become familiar with JSX elements</p>
            <h2>Activity: Favorite fruits</h2>
            <ul>
                <li>Cherries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
                <li>Mangoes</li>
            </ul>

            <h2>Inline styling</h2>
            <label for="email" style={{color:"olive", padding:"0.5em 1em", fontWeight:"bolder"}}>Enter e-mail</label>
            <input id="email" type='text' placeholder="Type your email" style={{backgroundColor: 'rgb(230,230,230)', padding:'0.5em', borderRadius:'1em'}}/>
            <button style={{marginLeft:'1em', backgroundColor:'magenta',padding:'0.5em 1em', borderRadius:'0.5em', color:'whitesmoke'}}>Submit form</button>
            <figure>
                <img src={yellowstone} style={{width:'50%'}} alt="yellowstone national park"/>
            </figure>
            <p className='title'>Adding a class name to a JSX element</p>
            <p className='txtVar'>{divText}</p>
            <p style={styleJSX}>{divText}</p>
            <h2>Class activity</h2>
            <p>Image with at least two inline styles</p>
            <h2 style={{color:'darkgreen', textDecoration:'underline', textAlign:'center'}}>Yellowstone National Park</h2>
            <div className="imgCenter">
                <img src={yellowstone} style={{width:'75%', border:'13px ridge orange', boxSizing:'border-box', padding:'0.5em'}} alt="yellowstone national park"/>
            </div>
        </div>
    )
}

// rooting the app
const root =ReactDOM.createRoot(document.querySelector('#root'))
root.render(App())