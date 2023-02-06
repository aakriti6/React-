import './App.css';

let name="Harry"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="containner">
        <h1>Hello {name}</h1>
        <p>
          Welcome to the react website
        </p>
      </div>
    </>
  );
}

export default App;
