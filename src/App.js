import { NavLink, Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import WorkExperience from "./components/pages/workExperience/workExperience";
import GitHubProjectsContextProvider from "./components/pages/context/contextProvider";
import "./App.css";
import Api from "./components/pages/api/api";
import About from "./components/pages/about/about";
import Networks from "./components/pages/networks/networks";
import Projects from "./components/pages/projects";
import { useState, useEffect } from "react";

function App() {
  // Datos de experiencia laboral
  const experience = [
    {
      date: "04-2023 | 10-2023 Lima, Peru",
      title: "Wordpress Developer",
      description: "E-commerce Platform Developer using the Divi plugin. Editor and builder of web pages. Configuration and code improvements resulting in a 90% reduction in website crashes.",
      languages: "",
    },
    {
      date: "12-2021 | 12-2023 Florida, EE.UU",
      title: "Junior Agricultural Data Analyst",
      description: "Automation of data loading and analysis. Tickets management. Help Desk. Technical Support. Creation of statistics to enhance crop tracking. Identify and resolve issues. 30% reduction in data leakage.",
      languages: "N/A",
    },
    {
      date: "07-2022 | 07-2023 Florida, EE.UU",
      title: "CRM Lead Data Cleaning (B2B)",
      description: "Creation of an automated system for lead qualification. Team management. Expansion of potential client base by 20%. Identifying and resolving issues related to lead duplication in Odoo. Creation/modification/deletion of leads in Odoo.",
      languages: "N/A",
    },
  ];

  // Estado para almacenar los datos de GitHub
  const [gitHubData, setgitHubDataG] = useState([]);
  useEffect(() => {
    // Fetch de datos de GitHub
    fetch("https://api.github.com/users/davidleon220/repos")
      .then((response) => response.json())
      .then((result) => {
        const newResult = result.map((res) => ({
          name: res.name,
          description: res.description,
          language: res.language,
          url: res.html_url,
        }));
        setgitHubDataG(newResult);
      });
  }, []);

  return (
    <>
      <GitHubProjectsContextProvider initialValue={gitHubData}>
        <Router>
          <div className="menu">
            <nav>
              <ul className="ulcontainer">
                <li>
                  <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>About</NavLink>
                </li>
                <li>
                  <NavLink to="/workExperience" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Work Experience</NavLink>
                </li>
                <li>
                  <NavLink to="/networks" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Networks</NavLink>
                </li>
                <li>
                  <NavLink to="/api" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Api</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Projects</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="app-container">
            <Routes>
              {/* Redirige a la página de About por defecto */}
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<About />} />
              <Route path="/api" element={<Api />} />
              <Route path="/workExperience" element={<WorkExperience experience={experience} />} />
              <Route path="/networks" element={<Networks />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </Router>
      </GitHubProjectsContextProvider>
    </>
  );
}

export default App;
