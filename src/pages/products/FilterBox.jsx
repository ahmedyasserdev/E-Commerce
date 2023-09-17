import { Box, Radio, RadioGroup, FormControlLabel, FormControl, } from '@mui/material';
import { useState } from "react";
import { useTheme } from '@mui/material';

const FilterBox = () => {
  const [value, setValue] = useState('بدون فلتره');
  const theme =  useTheme()
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const options = [
    { value: 'بدون فلتره', label: 'بدون فلتره' },
    { value: 'لابتوب', label: 'لابتوب' },
    { value: 'موبايل', label: 'موبايل' },
  ];

  return (
    <Box pt = {'15px'} >
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          sx ={{
            ".css-ahj2mt-MuiTypography-root" : {fontSize  :{xs: "15px" , sm : "22px" } , fontWeight : 500 } ,
            ".css-1yq3e2k-MuiButtonBase-root-MuiRadio-root.Mui-checked" : {color : theme.palette.infoColor.main}
          }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
              sx = {{py :"4px" ,}}


              />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default FilterBox;
