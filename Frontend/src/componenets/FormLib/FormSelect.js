import { useField } from "formik";

import { StyledSelect, StyledLabel, ErrorMsg } from './FormElements';

export const Select = ({icon, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div style={{position: "relative"}}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            <StyledSelect 
                invalid={meta.touched && meta.error}
                {...field}
                {...props}>
                    <option value={props.value1}>{props.value1}</option>
                    <option value={props.value2}>{props.value2}</option>
            </StyledSelect>
            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ) : (
                <ErrorMsg style={{visibility:"hidden"}}>.</ErrorMsg>
            )}
        </div>
    );
}