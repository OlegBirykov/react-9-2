import { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AppContext from '../AppContext';
import Post from './Post';

function ViewPost(props) {
  const { id } = props.match.params;
  const { data } = useContext(AppContext);
  
  if (!data.length) {
    return <Redirect to={process.env.PUBLIC_URL} />
  }
  
  const post = data.find(item => item.id === +id);
  
  const editPost = () => {
    return;
  }
  
  const deletePost = () => {
    return;
  }
    
  return (
    <div className="ViewPost">
      <Post content={post.content} created={post.created}>
        <Link to={process.env.PUBLIC_URL} className="ViewPost-close" onClick={editPost}> 
          &#x274C;
        </Link>
        <div className="ViewPost-modify">
          <Link 
            to={{
              pathname: process.env.PUBLIC_URL + '/posts/' + id,
              state: { isEdit: true }
            }} 
            className="ViewPost-edit"
          >
            Изменить
          </Link>
          <Link to={process.env.PUBLIC_URL} className="ViewPost-delete" onClick={deletePost}>
            Удалить
          </Link>
        </div>   
      </Post>
    </div>
  );
}

export default ViewPost;
