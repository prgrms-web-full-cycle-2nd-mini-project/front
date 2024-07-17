import React, { useEffect, useState } from 'react';
import { COLORS } from '../../../styles/colors';
import styled from 'styled-components';
import useTripForm from '../../../hooks/useTripForm';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

type InputProps = {
  name: string;
  label: string;
  value: string;
};
const LocationInput = ({ label, name, value }: InputProps) => {
  const [isList, setIsList] = useState(false);
  const { tripData, setTripData } = useTripForm();

  const { placesService, placePredictions, getPlacePredictions } =
    usePlacesService({
      apiKey: import.meta.env.VITE_APP_MAP_API_KEY,
      options: {
        input: value,
        types: ['(cities)'],
      },
    });

  useEffect(() => {
    if (placePredictions.length) {
      setIsList(true);

      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        },
        (placeDetails) => console.log(placeDetails),
      );
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
        const { lat, lng } = placeDetails.geometry.location;
        setTripData((prevData) => ({
          ...prevData,
          location: placeDetails.formatted_address || '',
          xCoordinate: lat ? lat() : 0,
          yCoordinate: lng ? lng() : 0,
        }));
        setIsList(false);
        console.log(tripData);
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
          onChange={(evt) => {
            getPlacePredictions({ input: evt.target.value });
          }}
          type="text"
          placeholder="도시 검색"
        />
        {placePredictions.length > 0 && (
          <PlacesList $isList={isList}>
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

const PlacesList = styled.ul<{ $isList: boolean }>`
  display: ${(props) => (props.$isList ? 'block' : 'none')};
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
