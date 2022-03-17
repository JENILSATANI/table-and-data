import React, { useState } from 'react';

const Form = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [gender,setGender]=useState('')

    const [allEntry,setAllEntry] =useState([])
    const submitForm =(e) =>{
        e.preventDefault();
   
    const newEntry={ email:email,password:password,gender:gender}

    setAllEntry([...allEntry,newEntry])
    console.log(allEntry);
    }

  return (
        <>
        <div class='AB'>
        <form action='' onSubmit={submitForm}>
            <div class='A'>
                <lable htmlFor='email'> Email  </lable>
                <input type='text' name='email' id='email'autoComplete='off'
                 value={email} onChange={(e)=> setEmail(e.target.value)}/>

            </div>
            <br/>
            <br/>
            <div class='B'>
                <lable htmlFor='password'>Password  </lable>
                <input type='text' name='password' id='password'autoComplete='off' 
                value={password} onChange={(e)=> setPassword(e.target.value)}/>
                
            </div>
            <br/>
            <br/>
            <div class='D'>
            <div className="form-check form-check-inline" >
  <input className="form-check-input" type="radio" id="male" value="male" name='gender'
  onChange={(e)=> setGender(e.target.value)}/>
  <label className="form-check-label" htmlfor="male">male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" id="female" value="female" name='gender'
  onChange={(e)=> setGender(e.target.value)} />
  <label className="form-check-label" htmlFor="female">female</label>
</div>
<div className="form-check form-check-inline">
  <input clasName="form-check-input" type="radio" id="other" value="other" name='gender'
  onChange={(e)=> setGender(e.target.value)} />
  <label className="form-check-label" htmlFor="other">other</label>
</div>
</div>
            <br/>
            <br/>
            <div class='C'>
        <button type ="submit"> Login</button>
        </div>
        </form>
        <div>
            {
                allEntry.map((curElem)=>{
                        return(
                            <div className='showDataStyles'>
                                <p>{curElem.email}     {curElem.password}     {curElem.gender}</p>
                                
                                </div>
                        )
                })
            }
        </div>
        </div>
          </>
  )
}

export default Form;