import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import moment from 'moment';
import {CartContext} from "../../context/CartContext"
import {useContext} from "react"

const DatePicker2 = () => {

  const [value, setValue] = useState(new Date());
  const [value2, setValue2] = useState(new Date());
  const {differenceInDays, getDifferenceDays} = useContext(CartContext);

  const handleDateIn = (newValue) =>{
    setValue(newValue.$d);    
  }
  console.log("2 Este es value primer", value )
 
  const handleDateOut =  (newValue) =>{
    setValue2(newValue.$d);
  }
   
  console.log("Este es value2", value2)

  const diasDiferencia = getDifferenceDays(value, value2)
  console.log("Dias de Diferencia", diasDiferencia )
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-row ...">
      <div  className='mr-5'>
      <DatePicker
        label="Check in"
        value={value}
        selected={value}
        format='dd-MM-yyyy'
        placeholder='Enter date'
        onChange={handleDateIn}
        minDate={moment().format("YYYY/MM/DD kk:mm:ss")}
        renderInput={(params) => <TextField {...params} />}
      />
      </div>
      <div  className='ml-5 mr-5'>
      <DatePicker
        label="Check out"
        value={value2}
        selected={value2}
        onChange={handleDateOut}
        minDate={value}
        renderInput={(params) => <TextField {...params} />}
      />
      </div>
      
      </div>
    </LocalizationProvider>
  )
}
export default DatePicker2