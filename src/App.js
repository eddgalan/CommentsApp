import logo from './logo.svg';
import './App.css';
import './bootstrap/bootstrap.min.css';
import Comment from './components/comments/comments';

function App() {
  return (
    <div className="app">
      <div className="text-center">
        <h1 className="text-center"> Comments </h1>
        <div className="p-5">
          <Comment/>
        </div>
      </div>
    </div>
  );
}

export default App;
