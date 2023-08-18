import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';



InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  // const {errors, formState} = form;
  // const hasError = formState.touched[name] && errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render = {({ field })=> (
        <TextField {...field}
            fullWidth
            label={label}
            disabled={disabled}
            
        />
    )}
      // error={!!hasError}
      // helperText={errors[name]?.message}
    >
         
    </Controller>
  );
}

export default InputField;
