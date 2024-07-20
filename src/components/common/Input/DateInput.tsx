import styled from 'styled-components';

type InputProps = {
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const DateInput = ({ name, label, value, onChange }: InputProps) => {
  return (
    <InputStyle>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputStyle>
  );
};

const InputStyle = styled.div``;

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
