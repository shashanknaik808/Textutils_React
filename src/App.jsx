import './App.css';

let name = "<b>Heaven Destroyer<b/>"

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className='container'>
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci itaque atque culpa, officiis vel nesciunt assumenda provident quia pariatur cumque mollitia commodi odit ipsum aliquam recusandae saepe eius debitis!
        </p>
      </div>
    </>
  );
}

export default App;
