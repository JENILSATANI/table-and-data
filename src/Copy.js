import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import AddIcon from '@mui/icons-material/Add';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WcTwoToneIcon from '@mui/icons-material/WcTwoTone';
import TextField from '@material-ui/core/TextField';


const Copy = () => {
    const [Fristname, setFristname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [select, setSelect] = useState('')
    const [agree, setAgree] = useState('')
    const [Birthday,setBirthday] = useState('')

//  this is err validation add in From
    const [FirstnameErr, setFristnameErr] = useState({});
    const [emailErr, setemailErr] = useState({})


    const [allEntry, setAllEntry] = useState([])

    const [show, setshow] = useState(false)
    // const Icon =(
    //     <VisibilityOffIcon icon ={show ? 'visibilityIcon' : "VisibilityOffIcon"}/>
    // )
    // const InputeType = VisibilityIcon ? "text" :"password";
    // // return[ InputeType,Icon]

    const submitForm = (e) => {
        e.preventDefault();
        const isValid = formValidation()

        const newEntry = { Fristname, email, password, gender, select,Birthday, agree }

        if (isValid) {
            setAllEntry([...allEntry, newEntry])
            setFristname('');
            setEmail('')
            setPassword('')
            setGender('')
            setSelect('')
            setAgree('')
            setBirthday('')
        }

    }
    // const [passwordShown, setPasswordShown] = useState(false);
    // const togglePassword = () => {

    //     setPasswordShown(!passwordShown);
    // };

    const setpasswordshow = () => {
        console.log("Hello");
        setshow(true);
    }

    const setpasswordhide = () => {
        setshow(false);
    }

    const formValidation = () => {
        const FirstnameErr = {};
        //  const emailValid= {emailValid}
        //  const value={value}
        const emailErr = {};
        let isValid = true;

        if (Fristname.trim().length < 5) {
            FirstnameErr.Firstname = "Frist Name is Not Valid"
            isValid = false;
        }
        if (!email.includes("@  ")) {
            // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            emailErr.email = "@ must have in email";
            isValid = false;
        }

        setFristnameErr(FirstnameErr)
        setemailErr(emailErr)
        return isValid

    }

    return (

        <>


            <p class="oo" ><span>Information Form</span></p>

            <form class="MM" onSubmit={submitForm}>
                <div class="bb">
                    <label htmlfor='Fristname'>Enter Your FullName:</label>
                    <input required type='text' name='Fristname' value={Fristname} onChange={(e) => setFristname(e.target.value)}></input>
                    <br />
                    {Object.keys(FirstnameErr).map((key) => {
                        return <div style={{ color: 'red' }}>{FirstnameErr[key]}</div>
                    })}
                </div>
                <br />
                <div class='A'>
                    <lable htmlFor='email'> Email:  </lable>
                    <input required type='text' name='email' autoComplete='off'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    {Object.keys(emailErr).map((key) => {
                        return <div style={{ color: 'red' }}>{emailErr[key]}</div>
                    })}
                </div>
                <br />
                <div class='B'>
                    <label htmlFor="Password" name=" password">Password :</label>

                    <input type={show ? "text" : "password"} />
                    {/* <button onClick={togglePassword}><VisibilityIcon /><VisibilityOffIcon /></button> */}

                </div>
                <i class="far fa-eye" id="togglePassword" style={{ cursor: 'pointer', display: show === true ? 'none' : 'contents' }} onClick={setpasswordshow}>
                        < VisibilityOffIcon />
                    </i>
                    <i class="far fa-eye" id="togglePassword" style={{
                        cursor: 'pointer',
                        display: show === true ? 'contents' : 'none'

                    }} onClick={setpasswordhide}>
                        < VisibilityIcon />
                    </i>



                <br />
                <div class='D'>
                    <label htmlFor='Select Gender'>Select the Gender<WcTwoToneIcon className='bg-danger' />
                        <br />
                        <div className="form-check form-check-inline" >

                            <input className="form-check-input" type="radio" value="male" name='gender'
                                onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label" htmlfor="male">male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="female" name='gender'
                                onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label" htmlFor="female">female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input clasName="form-check-input" type="radio" value="other" name='gender'
                                onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label" htmlFor="other">other</label>
                        </div>
                    </label>
                </div>
                <br />
                <Button type='button' class='btn btn-success'>
                    <select class="custom-select" value={select} onChange={(e) => setSelect(e.target.value)}>
                        <option selected style={{ background: "red" }}>Select your state</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bihar">Bihar</option>
                    </select>

                </Button>
                <br />
                <br />
                <h3>Choose Your Birthdate</h3>
                <label htmlFor='Birthday'></label>
                <TextField class="UU"
                    id="date"
                    value={Birthday} onChange={(e) => setBirthday(e.target.value)}
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br/>  
                <br/> 
                <div class='ABC'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" value="agree" onChange={(e) => setAgree(e.target.value)} />
                        <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
                    </div>
                </div>
                <br />
                <Button type='button' class='btn btn-success'>
                    <button style={{ background: 'gold' }} type='submit'><AddIcon /></button>
                </Button>
            </form>
            <br />
            <div class='AS'>
                <div className='showDataStyles'>
                    <div style={{ display: allEntry.length === 0 ? 'none' : 'block' }}>
                        <table class="table-danger" style={{ margin: 'auto', width: '50%', border: '2px solid red' }}  >
                            <tr style={{ border: '2px solid red ' }} >
                                <th>Name</th>
                                <th> email </th>
                                <th> password</th>
                                <th> gender</th>
                                <th>City</th>
                                <th>Birthdate</th>
                                <th> T and C</th>
                            </tr>
                            {
                                allEntry.map((curElem) => {
                                    return (
                                        <tr>
                                            <td>
                                                <p>{curElem.Fristname}</p>
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
                                                <p> {curElem.select} </p>
                                            </td>
                                            <td>
                                                <p> {curElem.Birthday} </p>
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


export default Copy;
