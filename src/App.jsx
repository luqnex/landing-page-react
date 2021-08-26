import React, { useState } from 'react'

import './App.css'

import Switch from 'react-switch'

import logo from './images/logo.png'
import man from './images/man.png'
import abajur from './images/abajur.png'
import planta from './images/planta.png'
import darkMode from './images/darkmode.png'
import lightMode from './images/ligthmode.png'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { darkTheme, ligthTheme } from './tema/themes'

export function App(props) {
    const [theme, setTheme] = useState(localStorage.getItem("tema"))

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    localStorage.setItem("tema", theme)

    return (
        <ThemeProvider theme={ theme === 'light' ? darkTheme : ligthTheme }>
            <GlobalStyle />
            <div className="content">
                <div className="center">
                    <header>
                        <img src={ logo } alt="digidiga" />
                        <div className="dados">
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Project</a></li>
                                <li><a href="#">Clients</a></li>
                            </ul>
                            {
                                theme === 'dark' ? 
                                <img 
                                onClick={toggleTheme} 
                                src={darkMode} alt="Escolha entre tema dark e light" /> :
                                
                                <img 
                                onClick={toggleTheme} 
                                src={lightMode} alt="Escolha entre tema dark e light" />  
                            }            
                        </div>
                       
                    </header>

                    <main>
                        <aside className="text">
                            <h1>We create digital products as your solution</h1>
                            <p>Web Design, Mobile Apps, IoT Solutions</p>
                            <button>Contact us</button>
                        </aside>

                        <aside className="content-images">
                            <div className="images">
                                <img id="abajur" src={ abajur } alt="abajur" />
                                <img id="man" src={ man } alt="Homem sentado" />
                                <img id="planta" src={ planta } alt="Vaso de planta" />
                            </div>
                        </aside>
                    </main>
                </div>
            </div>
        </ThemeProvider>
    )
}