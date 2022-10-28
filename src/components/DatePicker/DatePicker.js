import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

  
const selectionRange = {
    startDate: new Date(2022,10,25)
}

const DatePicker = () => {

  return (
    <DateRangePicker ranges={[selectionRange]} />
  )
}
export default DatePicker