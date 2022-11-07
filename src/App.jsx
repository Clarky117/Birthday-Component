import './App.css';
import data from './data';
import List from './List';

function App() {
  return (
    <main>
      <section className="container">
        <h3>No Birthdays Today</h3>
        <List/>
        <button onClick={() => console.log('Clicked!')}>Clear</button>
      </section>
    </main>
  );
}

export default App;
