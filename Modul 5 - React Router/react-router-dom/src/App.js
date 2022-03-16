import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

// export default function BasicExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//         <il>
//             <Link to="/">Home</Link>
//           </il>
//           <il>
//             <Link to="/about">About</Link>
//           </il>
//           <il>
//             <Link to="/dashboard">Dashboard</Link>
//           </il>
//         </ul>
//         <hr/>

//         <Switch>
//           <Route exact patch="/">
//             <Home />
//           </Route>
//           <Route exact patch="/about">
//             <About />
//           </Route>
//           <Route exact patch="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

function Home() {
  return(
    <div>
      <h2>Home</h2>
    </div>
  );
}

// function About() {
//   return(
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return(
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
        
//         <Switch>
//           <Route path="/:id" children={<Child/>}/>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

export default function NestingExample(){
  return(
    <Router>
      <div>
        <ul>
        <il>
            <Link to = "/">Home</Link>
          </il>
          <il>
            <Link to = "/topics">Topics</Link>
          </il>
        </ul>
        <hr/>

        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  let {path, url} = useRouteMatch();
  return(
    <div>
      <h2>Topics</h2>
      <ul>
      <li>
          <Link to={`${url}/Sate, Nasi Goreng`}>Kuliner</Link>
        </li>
        <li>
          <Link to={`${url}/Wisata Alam, Museum`}>Travelling</Link>
        </li>
        <li>
          <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route exact path={`${path}/:tipicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let {topicId} = useParams();

  return(
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}