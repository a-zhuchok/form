import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";

export default function App() {
  const { register, handleSubmit, getValues, formState:{errors}} = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data)) ||  alert('Successfully Registered!');
  const [gender, setGender] = useState('male');
  const handleChange = (event) => {
    setGender(event.target.value)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width:'400px', margin:'auto', paddingTop:'30px'}}>
      <TextField {...register("userName", {required:"Enter your Name!"})}
          fullWidth
          label="Name"
          error={!!errors.userName}
          helperText={errors?.userName?.message}
          sx={{mb: 2}}
      />
      <TextField {...register("userEmail", {required:"Enter your Email!", pattern:{value:/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, message:"Enter the correct Email!"}})}
          fullWidth
          label="Email"
          error={!!errors.userEmail}
          helperText={errors?.userEmail?.message}
          sx={{mb: 2}}
      />
      <TextField {...register("userPassword", {required: "Enter your Password!",  pattern:{value:/((?=.*[A-Z]).{6})/, message:"Enter the correct Password!"}})}
          fullWidth
          label="Password"
          error={!!errors.userPassword}
          helperText={errors?.userPassword?.message}
          sx={{mb: 2}}
      />
      <TextField {...register("userPasswordConfirmation", {required:"Enter your Password Confirmation!", validate:(value) =>getValues('userPassword')===value || "Passwords do not match!" })}
          fullWidth
          label="Password Confirmation"
          error={!!errors.userPasswordConfirmation}
          helperText={errors?.userPasswordConfirmation?.message}
          sx={{mb: 2}}
      />
      <TextField {...register("userDateOfBirth", {required:"Enter your Date of Birth!",  pattern:{value:/(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20))\d\d/, message:"Enter the correct Date of Birth!"}})}
          fullWidth
          label="Date of Birth"
          error={!!errors.userDateOfBirth}
          helperText={errors?.userDateOfBirth?.message}
          sx={{mb: 2}}
      /> 
      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
          <Select {...register("userGender")}
            value={gender}
            label="Gender"
            onChange={handleChange}
            sx={{mb: 2}}>
            <MenuItem value={'male'}>male</MenuItem>
            <MenuItem value={'female'}>female</MenuItem>
          </Select>
      </FormControl>
      <TextField {...register("userPhoneNumber", {required:"Enter your Phone Number!", pattern:{value:/[1-9]/, message:"Enter the correct Phone Number!"}})}
          fullWidth
          label="PhoneNumber"
          error={!!errors.userPhoneNumber}
          helperText={errors?.userPhoneNumber?.message} 
          sx={{mb: 2}}
      />
      <Button  type='submit' fullWidth variant="contained">Sign Up</Button>
    </form>
  )}