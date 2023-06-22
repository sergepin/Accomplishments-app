import * as React from 'react';
import Button from '@mui/material/Button';

type ButtonProps = {
    variant: "contained" | "outlined" | "text",
    color: "inherit" | "primary" | "secondary" | "success" | "warning" | "error" ,
    size: "small" | "medium" | "large",
    buttonText: string
}

export default function BasicButton(props: ButtonProps) {

    const {variant, color, size, buttonText} = props

    return (

            <Button
                variant={variant}
                color={color}
                size={size}
            >{buttonText}</Button>

    );
}