import React from 'react';
//import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PropTypes from 'prop-types';
import InputField from 'components/form-controls/InputField';
  

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        name: yup.string()
            .required('Please enter title')
            .min(5, 'Title is too short'),
      });

    const form = useForm({
        defaultValues: {
            name: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    }

    return(
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            
            <InputField name="name" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;