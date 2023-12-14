import React, {useState} from 'react';

import { useField } from "formik";

import { StyledTextInput, StyledLabel, ErrorMsg } from './FormElements';

export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div style={{position: "relative"}}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            {props.type !== "password" && (<StyledTextInput 
                invalid={meta.touched && meta.error}
                {...field}
                {...props}/>)}

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ) : (
                <ErrorMsg style={{visibility:"hidden"}}>.</ErrorMsg>
            )}
        </div>
    );
}