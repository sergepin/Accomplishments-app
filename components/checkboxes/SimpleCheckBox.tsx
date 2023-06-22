import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

type CheckboxProps = {
  label: string,
  defaultChecked: boolean
}

export default function SimpleCheckBox(props: CheckboxProps) {

  const { label, defaultChecked } = props

  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked={defaultChecked} />} label={label} />
      </FormGroup>
    </div>
  );
}