//import { useContext } from 'react';
import { Link/*, Redirect */} from 'react-router-dom';
//import AppContext from '../AppContext';
//import request from '../utils/http';
import editpost from '../img/editpost.jpg';

function EditPost() {
  return (
    <div className="EditPost">
      <img className="EditPost-image" src={editpost} width="100%" alt="no load" />
      <Link to={process.env.PUBLIC_URL} className="EditPost-close"> 
        &#x274C;
      </Link> 
      <input 
        className="EditPost-input" 
        type="text" 
        name="text" 
        placeholder="Текст поста (обязательно для заполнения)"
        required
        onChange={null} />
      <div className="EditPost-save">
        <Link to={process.env.PUBLIC_URL} className="EditPost-save-button" onClick={null}>
          Сохранить
        </Link>
      </div>
    </div>
  );
}

export default EditPost;