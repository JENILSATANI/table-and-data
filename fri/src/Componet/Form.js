
import React, { useState } from 'react';
// import { DropdownButton } from 'react-bootstrap';
// import FormValidation from './B';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import VisibilityIcon from '@material-ui/icons/Visibility';


const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [agree, setAgree] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [fullname, setFullName] = useState('')

    const [place, setPlace] = useState('')

    const [fullnameErr, setfullnameErr] = useState('')
    const [phonenumberErr, setphonenumberErr] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // <VisibilityOffIcon icon ={ passwordShown? 'visibilityIcon' : "VisibilityOffIcon"}/>

        setPasswordShown(!passwordShown);
    };


    // const[show,setshow]=useState(false);
    // const Icon =(
    //     <VisibilityOffIcon icon ={show ? 'visibilityIcon' : "VisibilityOffIcon"}/>)

    const [allEntry, setAllEntry] = useState([])
    const submitForm = (e) => {
        e.preventDefault();
        const isValid = FormValidation()

        const newEntry = { fullname: fullname, phonenumber: phonenumber, email: email, password: password, gender: gender, place: place, agree: agree }

        setAllEntry([...allEntry, newEntry])
        console.log(allEntry);

    }
    const FormValidation = () => {
        const fullnameErr = {};
        const phonenumberErr = {};


        let isValid = true;

        if (fullname.trim().length < 5) {
            fullnameErr.fullnameErr = 'this is invalid name'
            isValid = false;
        }
        if (phonenumber.trim().length < 5) {
            phonenumberErr.phonenumberErr = 'this is invalid name'
            isValid = false;
        }

        setfullnameErr(fullnameErr)
        setphonenumberErr(phonenumberErr)
        return isValid
    }
    // const setpasswordshow = () => {
    //     console.log("Hello");
    //     setshow(true);
    // }

    // const setpasswordhide = () => {
    //     setshow(false);
    // }




    return (
        <>
            <div class='AB'>
                <p class='LL'><span style={{ fontSize: '50px' }}>Form</span></p>
                <br />
                <form action='' onSubmit={submitForm}>
                    <div class='A'>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name :</label>
                            <input type="text" name='fullname' id="fullname" autoComplete='off' value={fullname}
                                onChange={(e) => setFullName(e.target.value)} />
                            {Object.keys(fullnameErr).map((key)  => {
                              
                                return <div style={{ color: 'red' }}> {fullnameErr[key]}</div>
                            })}
                        </div>
                        <br />


                        <div className="form-group">
                            <label htmlFor="phone">Phone Number :</label>
                            <input type="number" name='phonenumber' id="phone" autoComplete='off' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            {Object.keys(phonenumberErr).map((key)   => 
                             {
                                return <div style={{ color: 'red' }}> {phonenumberErr[key]}</div>
                            })}
                        </div>
                        <br />


                        <lable htmlFor='email'> Email : </lable>
                        <input type='email' name='email' id='email' autoComplete='off'
                            value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <br />

                    <div class='B'>
                        <label htmlFor="Password" name=" password">Password :</label>

                        <input type={passwordShown ? "text" : "password"} />
                        <button onClick={togglePassword}></button>

                    </div>
                    <br />

                    <div class='D'>
                        <div style={{ textAlign: 'center' }}>  Select Your Gender</div>
                        <div className="form-check form-check-inline" >
                            <input className="form-check-input" type="radio" id="male" value="male" name='gender'
                                onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label" htmlfor="male">male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="female" value="female" name='gender'
                                onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label" htmlFor="female">female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="other" value="other" name='gender'
                                onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label" htmlFor="other">other</label>
                        </div>



                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <select class="custom-select" onChange={(e) => setPlace(e.target.value)}>
                            <option selected>Select your state</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Gujarat">Gujarat</option>
                        </select>
                    </div>


                    <br />

                    <div class='A'>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="terms" value="agree" onChange={(e) => setAgree(e.target.value)} />
                            <label >I agree all terms and conditons</label>
                        </div>
                    </div>
                    {/* <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="updates" />
                        <label class="form-check-label" htmlFor="updates">send me latest Bootstrap updates</label>
                    </div> */}
                    <br />

                    <div class='C'>
                        <button type="submit"> Login</button>
                    </div>


                </form>


                <div className='showDataStyles'>
                    <div class='table' >
                        <table class="table-primary" style={{ margin: 'auto' }}>
                            <tr>
                                <th> Full Name</th>
                                <th>  Phone Number</th>
                                <th> email </th>
                                <th> password</th>
                                <th> gender</th>
                                <th> Place </th>
                                <th> T & C</th>
                            </tr>
                            {
                                allEntry.map((curElem) => {
                                    return (
                                        <tr>
                                            <td>
                                                <p> {curElem.fullname}</p>
                                            </td>
                                            <td>
                                                <p> {curElem.phonenumber}</p>
                                            </td>

                                            <td>
                                                <p>   {curElem.email}  </p>
                                            </td>
                                            <td>
                                                <p> {curElem.password}</p>
                                            </td>
                                            <td>
                                                <p> {curElem.gender} </p>
                                            </td>
                                            <td>
                                                <p>  {curElem.place}</p>
                                            </td>
                                            <td>
                                                <p> {curElem.agree}</p>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Form;