import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import GitHub from "./components/GitHub"
import Projects from "./components/Projects"
import Career from "./components/Career"
import NavigationBar from "./components/NavigationBar"

export default function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path = "AboutMe" element = { <AboutMe /> } />
                <Route path = "Skills" element = { <Skills /> } />
                <Route path = "Projects" element = { <Projects /> } />
                <Route path = "GitHub" element = { <GitHub /> } />
                <Route path = "Career" element = { <Career /> } />
            </Routes>
        </Router>
    )
}