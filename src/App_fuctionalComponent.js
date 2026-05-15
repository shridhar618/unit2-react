import './App.css';

const HelloWorld = (props) => {
  return (
    <div title="outer div">
        <h1>{props.message}</h1>
    </div>
  )
};


function App() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>Functional Component</h1>
        </header>
      <HelloWorld message="Welcome to React Fuctional Component" />
    </div>
  );
}


export default App;