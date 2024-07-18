import React, { useEffect, useState } from 'react';
import { COLORS } from '../../../styles/colors';
import styled from 'styled-components';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import { TripData } from '../../../types/trip';

type InputProps = {
  name: string;
  label: string;
  value: string;
  validLocation?: boolean;
  setTripData: React.Dispatch<React.SetStateAction<TripData>>;
  setValidLocation: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const LocationInput = ({
  label,
  name,
  value,
  setTripData,
  validLocation,
  setValidLocation,
  inputValue,
  setInputValue,
}: InputProps) => {
  const [isList, setIsList] = useState(false);

  const { placesService, placePredictions, getPlacePredictions } =
    usePlacesService({
      apiKey: import.meta.env.VITE_APP_MAP_API_KEY,
      options: {
        componentRestrictions: { country: 'kr' },
        input: inputValue,
        types: ['(cities)'],
      },
    });

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (placePredictions.length) {
      setIsList(true);
    } else {
      setIsList(false);
    }
  }, [placePredictions]);

  const handleSelectPlace = (placeId: string) => {
    placesService?.getDetails({ placeId }, (placeDetails, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        placeDetails &&
        placeDetails.geometry &&
        placeDetails.geometry.location
      ) {
        const { lng, lat } = placeDetails.geometry.location;
        const formatted_address = placeDetails.formatted_address || '';
        const xCoordinate = lng ? lng() : 0;
        const yCoordinate = lat ? lat() : 0;

        setTripData((prevData) => ({
          ...prevData,
          location: formatted_address,
          xCoordinate,
          yCoordinate,
        }));

        setInputValue(formatted_address);
        setIsList(false);
        setValidLocation(true);
      } else {
        console.error('오류', status);
      }
    });
  };

  return (
    <InputWrapper>
      <SearchForm>
        <Label htmlFor={name}>{label}</Label>
        <Input
          value={inputValue}
          onChange={(evt) => {
            console.log(`validLocation: ${validLocation}`);
            setValidLocation(false);
            setInputValue(evt.target.value);
            getPlacePredictions({ input: evt.target.value });
          }}
          type="text"
          placeholder="도시 검색"
        />
        {isList && placePredictions.length > 0 && (
          <PlacesList>
            {placePredictions.map((item) => (
              <PlaceItem
                key={item.place_id}
                onClick={() => handleSelectPlace(item.place_id)}
              >
                {item.description}
              </PlaceItem>
            ))}
          </PlacesList>
        )}
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

const PlacesList = styled.ul`
  display: block;
  width: 100%;
  position: absolute;
  list-style: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  background-color: ${COLORS.white};
`;

const PlaceItem = styled.li`
  cursor: pointer;
  padding: 15px;
  border-bottom: 1px solid ${COLORS.gray30};
  &:last-child {
    border-bottom: none;
    padding: 30p 0;
  }
`;
