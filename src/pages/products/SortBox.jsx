import { Box, Radio, RadioGroup, FormControlLabel, FormControl, useTheme } from '@mui/material';
import { useState } from "react";

const SortBox = () => {
    const [value, setValue] = useState('بدون فلتره');
    const theme = useTheme()

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // Array of objects
    const options = [
        { value: 'بدون فلتره', label: 'بدون فلتره' },
        { value: 'من الاقل  الي الاعلي', label: 'من الاقل  الي الاعلي' },
        { value: 'من الاعلي الي الاقل', label: 'من الاعلي الي الاقل' },
    ];
    return (
        <Box pt={{xs :"5px" , md :'15px' }} >
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    sx={{
                        ".css-ahj2mt-MuiTypography-root": { fontSize: { xs: "15px", sm: "22px" }, fontWeight: 500 },

                        ".css-1yq3e2k-MuiButtonBase-root-MuiRadio-root.Mui-checked": { color: theme.palette.infoColor.main }
                    }}
                >
                    {options.map((option) => (
                        <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                            sx={{ py: "4px" }}


                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default SortBox;
