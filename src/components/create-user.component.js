import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "Name",
            email: "email",
            age: 0
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            "username": this.state.username,
            "email": this.state.email,
            "age": this.state.age
        }

        console.log(user);
        alert("Congrats! User "+ this.state.username + " has been created.");

        axios.post('http://localhost:5000/user/add', user)
            .then(res => console.log(res.data));

        
        window.location = "/create/user";
    }
    render() {
        return (
        <div>
            <h1>Create New User</h1>
            <br></br>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername} />
                </div>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail} />
                </div>

                <div className="form-group">
                    <label>Age: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.age}
                        onChange={this.onChangeAge} />
                </div>

                <div className="form-group">
                    <input type="submit" value="Create New User" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}