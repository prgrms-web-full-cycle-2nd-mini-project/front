import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

type InputProps = {
  name: string;
  label: string;
  apiKey: string;
};
const LocationInput = ({ label, name, apiKey }: InputProps) => {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="text"
        id={name}
        name={name}
        placeholder="어디로 떠나시나요?"
      />
      <MapContainer id="map"></MapContainer>
    </InputWrapper>
  );
};

export default LocationInput;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
`;
