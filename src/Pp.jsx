import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';

class Pp extends Component {
    state = {
        username: '',
        password: '',
        email:'',
        items: []
    }
            
    onChange = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        console.log("state", this.state);
        const items = [...this.state.items];

        items.push({
            username: this.state.username,
            password: this.state.password,
            email:this.state.email
        });

        localStorage.setItem('item', JSON.stringify(items));

        this.setState({
            items,
            username: '',
            password: '',
            email:''
        })
    }
    render() {
        const { username, password,email, items } = this.state;
        return (
            <div class='AA'>
                  
            
                <form onSubmit={this.onSubmit}>
                    <label htmlFor='username'>Enter Your Name:</label><br/>
                   <input type='text' name='username' value={username} onChange={this.onChange} /><br />
                   <label htmlFor='password'>Enter Your password:</label><br/>
                    <input type='text' name='password' value={password} onChange={this.onChange} /><br />
                    <label htmlFor='email'>Enter Your Email:</label><br/>
                    <input type= 'text' name='email' value={email} onChange={this.onChange}/><br/>
                    <br/>
                     <label htmlFor='submit'>

                    <button type='submit' onClick={this.onSubmit}><Link to='/Table'>Submit</Link></button><br/>
                     </label>
                </form>
                
                <br/>
                <div class='AA' style={{display:items.length === 0 ?'none' :'block'}}>
                    <table style={{ margin: 'auto', width: '50%', border: '2px solid red' }} >
                        <tr>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Email</th>

                        </tr>
                        {
                            items.map((curElem) => {
                                return (
                                    <tr>
                                        <td>
                                            <p>{curElem.username}</p>
                                        </td>
                                        <td>
                                            <p>{curElem.password}</p>
                                        </td>
                                        <td>
                                            <p>{curElem.email   }</p>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </table>
                </div>
               
                        
            </div>

        )

    }

}



export default Pp;
