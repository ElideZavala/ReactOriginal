import Select from './components/Select'
import Card from './components/Card';



function App() {
  const [dog, setDog] = useState(initalDog)

  return (
    <div className="app">
      <Select/>
      <Card/>
    </div>
  );
}

export default App;
