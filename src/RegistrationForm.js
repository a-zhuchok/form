import { useForm, Controller} from "react-hook-form";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";


export default function App() {
  const methods = useForm()
  const { register, handleSubmit, control, formState:{errors}} = useForm()
  const onSubmit = (data) => console.log(JSON.stringify(data))
  const [Gender, setGender] = useState('male');
 

  const handleChange = (event) => {
    setGender(event.target.value)
  };

  return (

    <form  onSubmit={handleSubmit(onSubmit)}  autoComplete="off" style={{width: '400px', margin: 'auto', paddingTop:"30px"}}>
       
        <TextField {...register("userName", { required: "Enter your Name!" })}
          fullWidth
          id="user-name"
          label="Name"
          error={!!errors.userName}
          helperText={errors?.userName?.message}
          sx={{ mb: 2 }}
        />
        <TextField {...register("userEmail", { required: "Enter your Email!",  pattern:{value:/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, message:"Enter the correct email."}})}
          fullWidth
          id="user-email"
          label="Email"
          error={!!errors.userEmail}
          helperText={errors?.userEmail?.message}
          sx={{ mb: 2 }}
        />
        <TextField   {...register("userPassword", { required: "Enter your Password!",  pattern:{value:/((?=.*[A-Z]).{6})/, message:"Enter the correct password."}})}
          fullWidth
          id="user-password"
          label="Password"
          error={!!errors.userPassword}
          helperText={errors?.userPassword?.message}
          sx={{ mb: 2 }}
        />
        <TextField  {...register("userPasswordConfirmation", { required: "Enter your Password!"} )}
          fullWidth
          id="user-passwordconfirmation"
          label="Password Confirmation"
          error={!!errors.userPasswordConfirmation}
          helperText={errors?.userPasswordConfirmation?.message}
          sx={{ mb: 2 }}
        />
        <TextField  {...register("userDateOfBirth", { required: "Enter your Date of Birth!",  pattern:{value:/(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20))\d\d/, message:"Enter the correct Date of Birth."}})}
          fullWidth
          label="Date of Birth"
          id="user-dateofbirth"
          error={!!errors.userDateOfBirth}
          helperText={errors?.userDateOfBirth?.message}
          sx={{ mb: 2 }}
        />
      <FormControl fullWidth >
  <InputLabel id="user-gender" {...register("userGender", { required: "Enter your Date of Birth!"})}>Gender</InputLabel>
  <Select
    value={Gender}
    label="Gender"
    onChange={handleChange}
    sx={{ mb: 2 }}
  >
    <MenuItem value={'male'}>male</MenuItem>
    <MenuItem value={'female'}>female</MenuItem>
  </Select>
</FormControl>
<TextField {...register("userPhoneNumber", { required: "Enter your PhoneNumber!" })}
          fullWidth
          id="user-phonenumber"
          label="PhoneNumber"
          error={!!errors.userPhoneNumber}
          helperText={errors?.userPhoneNumber?.message} 
          sx={{ mb: 2 }}
        />
      <Button  type='submit' fullWidth variant="contained">Contained</Button>

    </form>
  )
}