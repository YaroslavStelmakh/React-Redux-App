import React from 'react'
import {connect} from "react-redux";
import {createPost} from "../redux/actions";

class PostForm  extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            note: ''
        }
    }

    submitHandler = e => {
        e.preventDefault();

        const {note} = this.state;

        if (!note.trim()){
            return
        }
        const newPost = {
            note ,id: Date.now().toString()
        };
        console.log(newPost);
        this.props.createPost(newPost);
        this.setState({note:''})
    };

    changeInputHandler = (e) => {
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    };

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <div className="input-group flex-nowrap">
                    <input type="text"
                           className="form-control"
                           placeholder="Note"
                           value={this.state.note}
                           name="note"
                           onChange={this.changeInputHandler.bind(this)}
                    />
                    <button type="submit" className="btn btn-light">Add</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
};

export  default connect(null, mapDispatchToProps)(PostForm)