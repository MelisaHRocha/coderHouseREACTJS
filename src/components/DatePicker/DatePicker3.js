import React, { Component } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';

const DatePicker3 = () => {

    const handleSelect=(date)=>{
        console.log(date); // native Date object
      }

      const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }

      const handleSelect2=(ranges)=>{
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
      }
    
    return (
        <>
            <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={{ start: 'Check-in', end: 'Check-out' }}
                    >
                <Calendar
                const date={new Date()}
                onChange={handleSelect}
                />
                <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect2}
            />
            </LocalizationProvider>

       </>
    )
}
export default DatePicker3 