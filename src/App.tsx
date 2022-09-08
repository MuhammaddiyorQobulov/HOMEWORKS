import React from 'react'
import TicTacToe from './components/tic-tac-toe/tic-tac-toe'
import { Switch, Route, Link } from 'react-router-dom'
import Movies from './components/movies/movies'
interface AppProps {}

const App: React.FC<AppProps> = () => (
  <div>
    <div
      className="navbar d-flex bg-dark text-light justify-content-center"
      style={{ gap: '30px' }}
    >
      <Link to="/tic-tac-toe">Tic Tac Toe</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/favourites">Favourites</Link>
    </div>
    <Switch>
      <Route
        exact
        path="/movies"
        component={(props: any) => <Movies {...props} />}
      />

      <Route
        exact
        path="/tic-tac-toe"
        component={(props: any) => <TicTacToe {...props} />}
      />
    </Switch>
  </div>
)

export default App
