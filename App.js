// // import React from 'react';
// // import Jeux from './components/Jeux'; // Ajustez le chemin si nécessaire

// // function App() {
// //   return (
// //     <div className="App">
// //       <Jeux cach={2} />
// //     </div>
// //   );
// // }

// // export default App;

// // import React,{components} from "react";
// // import {Routes,Route,Link} from 'react-router-dom';

// // class App extends components{
// //   render(){
// //     return(
// // <div><ul>
// //       <li><Link to="/">HOME</Link></li>
// //       <li><Link to="/about">ABOUT</Link></li>
// //       <li><Link to="/blog">BLOG</Link></li>
// //   </ul>
// // <div className="main-router-place">
// //   <Routes>
// //     <Route path="/" element={<Home/>}/>
// //     <Route path="/about" element={<About/>}/>
// //     <Route path="/blog" element={<Blog/>}/>

// //   </Routes>

// // </div>
// //   </div>);}}

// // class Home extends React.Component{
// //   render(){
// //     return(
// //       <div><h2>Home</h2></div>
// //     );
// //   }
// // }

// // class About  extends React.Component{
// //   render(){
// //     return(
// //       <div><h2>About</h2></div>
// //     );
// //   }
// // }

// // class Blog extends React.Component{
// //   render(){
// //     return(
// //       <div><h2>Blog</h2></div>
// //     );
// //   }

// import React from "react";
 import './App.css';

// import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// const LaravelOverview = () => <h2>Vue d'ensemble de Laravel</h2>;
// const LaravelDocs = () => <h2>Documentation de Laravel</h2>;
// const LaravelVersion = () => {
//   const { version } = useParams();
//   return <h2>Laravel - Version : {version}</h2>;
// };


// const ReactOverview = () => <h2>Vue d'ensemble de React</h2>;
// const ReactHooks = () => <h2>Les Hooks React</h2>;
// const ReactVersion = () => {
//   const { version } = useParams();
//   return <h2>React - Version : {version}</h2>;
// };


// const UMLOverview = () => <h2>Vue d'ensemble d'UML</h2>;
// const UMLDiagrams = () => <h2>Diagrammes UML</h2>;
// const UMLDiagramType = () => {
//   const { type } = useParams();
//   return <h2>Type de diagramme UML : {type}</h2>;
// };


// const Laravel = () => (
//   <div>
//     <h1>Section Laravel</h1>
//     <ul>
//       <li><Link to="overview">Vue d'ensemble</Link></li>
//       <li><Link to="docs">Documentation</Link></li>
//       <li><Link to="version/8">Version 8</Link></li>
//     </ul>
//     <Routes>
//       <Route path="overview" element={<LaravelOverview />} />
//       <Route path="docs" element={<LaravelDocs />} />
//       <Route path="version/:version" element={<LaravelVersion />} />
//     </Routes>
//   </div>
// );

// const ReactSection = () => (
//   <div>
//     <h1>Section React</h1>
//     <ul>
//       <li><Link to="overview">Vue d'ensemble</Link></li>
//       <li><Link to="hooks">Hooks</Link></li>
//       <li><Link to="version/18">Version 18</Link></li>
//     </ul>
//     <Routes>
//       <Route path="overview" element={<ReactOverview />} />
//       <Route path="hooks" element={<ReactHooks />} />
//       <Route path="version/:version" element={<ReactVersion />} />
//     </Routes>
//   </div>
// );

// const UML = () => (
//   <div>
//     <h1>Section UML</h1>
//     <ul>
//       <li><Link to="overview">Vue d'ensemble</Link></li>
//       <li><Link to="diagrams">Diagrammes</Link></li>
//       <li><Link to="diagram-type/class">Type Class</Link></li>
//     </ul>
//     <Routes>
//       <Route path="overview" element={<UMLOverview />} />
//       <Route path="diagrams" element={<UMLDiagrams />} />
//       <Route path="diagram-type/:type" element={<UMLDiagramType />} />
//     </Routes>
//   </div>
// );


// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li><Link to="/laravel">Laravel</Link></li>
//           <li><Link to="/react">React</Link></li>
//           <li><Link to="/uml">UML</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/laravel/*" element={<Laravel />} />
//         <Route path="/react/*" element={<ReactSection />} />
//         <Route path="/uml/*" element={<UML />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// // Pages
// const Home = () => <h1>Accueil</h1>;
// const Login = ({ onLogin }) => (
//   <div>
//     <h1>Connexion</h1>
//     <button onClick={onLogin}>Se connecter</button>
//   </div>
// );
// const ProtectedPage = () => <h1>Page protégée : Bienvenue !</h1>;

// // Route protégée
// const ProtectedRoute = ({ isAuthenticated, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// // Application principale
// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => setIsAuthenticated(true);
//   const handleLogout = () => setIsAuthenticated(false);

//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li><Link to="/">Accueil</Link></li>
//           <li><Link to="/protected">Page protégée</Link></li>
//         </ul>
//         {isAuthenticated ? (
//           <button onClick={handleLogout}>Se déconnecter</button>
//         ) : (
//           <Link to="/login"><button>Se connecter</button></Link>
//         )}
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route
//           path="/protected"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <ProtectedPage />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

// Composants
const Home = () => <h1>Accueil</h1>;

const ContactList = ({ contacts }) => (
  <div>
    <h1>Liste des contacts</h1>
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <Link to={`/contacts/${index}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
    <Link to="/contacts/new"><button>Ajouter un contact</button></Link>
  </div>
);

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts[id];
  return contact ? (
    <div>
      <h1>Détails du contact</h1>
      <p>Nom : {contact.name}</p>
      <p>Email : {contact.email}</p>
    </div>
  ) : (
    <h1>Contact introuvable</h1>
  );
};

const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (name && email) {
      onAddContact({ name, email });
      navigate("/contacts");
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div>
      <h1>Ajouter un contact</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={handleAdd}>Ajouter</button>
      </form>
    </div>
  );
};

// Application principale
const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contacts"
          element={<ContactList contacts={contacts} />}
        />
        <Route
          path="/contacts/new"
          element={<AddContact onAddContact={addContact} />}
        />
        <Route
          path="/contacts/:id"
          element={<ContactDetail contacts={contacts} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
