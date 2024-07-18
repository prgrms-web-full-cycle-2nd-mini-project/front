import React from 'react';
import styled from 'styled-components';
import { AddButton } from '../button/AddButton';

type InputProps = {
  placeholder: string;
  name: string;
  label: string;
  value: string;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  button?: boolean;
};

export const TextInput = ({
  placeholder,
  name,
  label,
  value,
  style,
  onChange,
  button = false,
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
      {button && (
        <div className="button">
          <AddButton size="small" type="button" />
        </div>
      )}
    </InputStyle>
  );
};

const InputStyle = styled.div`
  position: relative;
  width: 100%;
  .button {
    position: absolute;
    right: 0;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }
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
