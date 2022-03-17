import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Table extends Component {
    state = {
        username: '',
        password: '',
        email:'',
        items: []
    }

        items = JSON.parse(localStorage.getItem('item'));
            
    onChange = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        const items = this.items;
        console.log("------------", items);
     
        return (
            <div class='AA'>
                   
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



export default Table;

