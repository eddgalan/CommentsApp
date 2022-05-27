import logo from './logo.svg';
import './App.css';
import './bootstrap/bootstrap.min.css';
import Comment from './components/comments/comments';

function App() {
  return (
    <div className="app">
      <div className="text-center">
        <h1 className="text-center mt-5"> Comments </h1>
        <div className="p-5">
          <Comment name="Edson Galan" position="Fullstack Developer" company="Alpha Team" img="user-00.png"
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
          <Comment name="Juan Pérez" position="Backend Developer" company="Amazon" img="user-00.png"
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
          <Comment name="Luis García" position="Frontend Developer" company="Uber" img="user-00.png"
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
      </div>
    </div>
  );
}

export default App;
