import {React,useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

 import AppBar from '@mui/material/AppBar';
const Form = () => {
    const [input,setInput]=useState({
        name:"",
        email:"",
        password:"",
        courses:"",
        terms:false,
        gender:""
    })
  
    const handleChange=(e)=>{
       setInput((prev)=> {
        return {...prev, [e.target.name]:[e.target.value]}
        })
    }
    console.log(input);
    console.log(input.email)
    console.log(input.password)
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(input)
    
    }
  return (
    <>
   <div>
    <AppBar>

    </AppBar>
      <form onSubmit={handleSubmit}>
        <TextField name="name" onChange={handleChange}
         value={input.name} type="text" variant="outlined"
          placeholder='Enter name' sx={{margin:"20px"}}/><br></br>

        <TextField name="email" onChange={handleChange} value={input.email}type="email"
         variant="outlined" placeholder='Enter email' 
         sx={{margin:"20px"}}/><br></br>

        <TextField name="password" onChange={handleChange} value={input.password}
         type="password" variant="outlined" placeholder='Enter password'
          sx={{margin:"20px"}}/><br></br>
          
          <FormControl fullWidth>
            <InputLabel id="menu-list" label="courses">Courses</InputLabel>
            <Select name='courses' value={input.courses} label="courses" onChange={handleChange}>
            <MenuItem value={"mongodb"}>Mongodb</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>
            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
            </Select>
          </FormControl>
        <br></br>
        <FormGroup>
          <FormControlLabel label="I Agree T&C"
           control={<Checkbox onChange={()=>{setInput(prevState=>({...prevState,terms:!input.terms}))}}/>}></FormControlLabel>
        </FormGroup>
        <br></br>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name='gender'
           defaultValue={"male"}
            onChange={handleChange} >
           <FormControlLabel value={'female'} label="Female"
            control={<Radio />}/>
             <FormControlLabel value={'male'} label="Male"
            control={<Radio />}/>
             <FormControlLabel value={'other'} label="Other"
            control={<Radio />}/>
          </RadioGroup>
        </FormControl>
          <Button type='submit' variant='outlined'>Submit</Button>
      </form>
   </div>
    </>
  )
}

export default Form
