import React from 'react';
import { COLORS } from '../../../styles/colors';
import { Place } from '../../../hooks/usePlacesSearch';
import { usePlacesWidget } from 'react-google-autocomplete';
import styled from 'styled-components';
import useTripForm from '../../../hooks/useTripForm';

type InputProps = {
  name: string;
  label: string;
};
const LocationInput = ({ label, name }: InputProps) => {
  const { tripData, setTripData } = useTripForm();
  const { ref: locationRef } = usePlacesWidget<HTMLInputElement>({
    apiKey: import.meta.env.VITE_APP_MAP_API_KEY,
    onPlaceSelected: (place) => {
      const location = place.geometry?.location;
      if (location) {
        setTripData({
          ...tripData,
          location: place.formatted_address || '',
          xCoordinate: location.lat(),
          yCoordinate: location.lng(),
        });
      } else {
        setTripData({
          ...tripData,
          location: '',
          xCoordinate: 0,
          yCoordinate: 0,
        });
      }
    },
    options: {
      types: ['(cities)'],
    },
  });

  return (
    <InputWrapper>
      <SearchForm>
        <Label htmlFor={name}>{label}</Label>
        <Input ref={locationRef} type="text" placeholder="도시 검색" />
      </SearchForm>
    </InputWrapper>
  );
};

export default LocationInput;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchForm = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 24px;
  border-radius: 30px;
  border: none;
`;
