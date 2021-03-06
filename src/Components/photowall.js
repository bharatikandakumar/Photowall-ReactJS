import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
function photowall(props){
    return <div>
        <Link  className='addIcon' to ='/AddPhoto' ></Link>
         {/* <button onClick = {props.onNavigate} className='addIcon'></button>  */}
        <div className = 'photo-grid'>
            {props.posts.sort(function(x,y){
                return y.id - x.id
            })
            .map((post,index) => <Photo key={index} 
            post={post} 
            onRemovePhoto = {props.onRemovePhoto}/>)}
        </div>
    </div>
}
photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}
// class photowall extends Component{
//     render(){
        
//     }

// }
export default photowall