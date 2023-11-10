
import './App.css';
import Navbar from './compoinents/Navbar';
import TextForm from './compoinents/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/>
    {/* <Navbar /> */}
    <div className="container my-3">
     <TextForm heading="Enter the text to analyze bellow"/> 
    </div>
    
    </>
  );
}

export default App;
