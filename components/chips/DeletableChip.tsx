import * as React from 'react';
import Chip from '@mui/material/Chip';

type ChipProps = {
    variant: "filled" | "outlined",
    color: "primary" | "success",
}

export default function DeletableChip(props: ChipProps) {

    const { variant, color } = props

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <Chip label="Deletable" color={color} variant={variant} onDelete={handleDelete} />
    );
}