import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


let name = "Harry3";

function App() {
  return (
    <>
      <div>
        <Navbar title="TextUtils" about="Descriptions"></Navbar>
      </div>git a
      <div className='container my-3'>
       <TextForm heading="Enter the text to analyze"></TextForm>
      </div>
    </>

  );
}

export default App;
