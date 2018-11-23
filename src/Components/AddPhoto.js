import React,{Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const imgLink = event.target.elements.link.value
        const desc = event.target.elements.desc.value
        const post = {
            id : Number(new Date()),
            description : desc ,
            imageLink : imgLink
        }
        if(desc && imgLink){
            this.props.onAddPhoto(post)
        }
    }
    render(){
        return (
        <div>
        <h1>Photowall</h1>
        <div className ='form'>
        <form onSubmit={this.handleSubmit}>
            <input name='link' type='text' placeholder='Link'/>
            <input name= 'desc' type='text' placeholder='Description'/>
            <button>Post</button>
        </form>
        </div>
        </div>
        )
    }
}
export default AddPhoto