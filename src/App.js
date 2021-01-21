import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PostsList from './components/PostsList';
import NewPost from './components/NewPost';
//import EditPost from './components/EditPost';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <Router>
      <div className="posts-app">
        <div className="posts-app-container">
          <Route path="/" component={PostsList} exact />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:id" component={ViewPost} />            
        </div>
      </div>
    </Router>
  );
}

export default App;
