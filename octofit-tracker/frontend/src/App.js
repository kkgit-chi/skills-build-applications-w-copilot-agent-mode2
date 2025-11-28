


import logo from './logo.svg';

function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
        <NavLink className="navbar-brand text-white d-flex align-items-center" to="/">
          <img src={logo} alt="Octofit Logo" className="octofit-logo" />
          Octofit Tracker
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link text-white" to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={
          <div className="card text-center">
            <div className="card-body">
              <h1 className="card-title display-4">Welcome to Octofit Tracker!</h1>
              <p className="card-text">Track your fitness activities, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
              <NavLink to="/activities" className="btn btn-success m-2">View Activities</NavLink>
              <NavLink to="/leaderboard" className="btn btn-info m-2">Leaderboard</NavLink>
              <NavLink to="/teams" className="btn btn-warning m-2">Teams</NavLink>
              <NavLink to="/users" className="btn btn-secondary m-2">Users</NavLink>
              <NavLink to="/workouts" className="btn btn-primary m-2">Workouts</NavLink>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
