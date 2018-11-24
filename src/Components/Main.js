import React,{Component} from 'react';
import Title from './Title';
import Photowall from './photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';



class Main extends Component{
    constructor(){
        super()
       
          }

    
    
    //only for rendering
    render(){
        console.log(this.props.posts)
        return (<div>
            
            <Route exact path='/' render={() => (
                
                <div>
                     <Title text='Photowall'/>
                    {/* <Photowall posts={this.state.posts} onRemovePhoto = {this.removePhoto} /> */}
                 </div>
                
            )}/>
            {/* <Route exact path='/AddPhoto' render = {({history})=>(
                <AddPhoto onAddPhoto = {(addedPost) =>{
                    this.addPhoto(addedPost)
                    history.push('/')
                }}/>
            )}
            />                   */}
        </div>
        )
        
    }
}

export default Main