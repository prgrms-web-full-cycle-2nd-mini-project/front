import React from 'react';
import styled from 'styled-components';

type InputProps = {
  placeholder: string;
  name: string;
  label: string;
  value: string;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const TextInput = ({
  placeholder,
  name,
  label,
  value,
  style,
  onChange,
}: InputProps) => {
  return (
    <InputStyle>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
      />
    </InputStyle>
  );
};

const InputStyle = styled.div`
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  visibility: hidden;
`;

const Input = styled.input`
  width: 100%;
  padding: 24px;
  border-radius: 50px;
  border: none;
`;
