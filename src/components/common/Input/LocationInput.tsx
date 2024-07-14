import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Typography from '../Typography';
import { AddButton } from '../button/AddButton';
import { COLORS } from '../../../styles/colors';

export interface Place {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

type InputProps = {
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onPlaceSelect: (place: Place) => void;
  places: Place[];
};

const LocationInput = ({
  label,
  name,
  value,
  onChange,
  onPlaceSelect,
  places,
}: InputProps) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    value && setIsListVisible(!isListVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsListVisible(false);
    }
  };

  useEffect(() => {
    if (isListVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isListVisible]);

  return (
    <InputWrapper ref={wrapperRef}>
      <SearchForm>
        <Label htmlFor={name}>{label}</Label>
        <Input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="어디로 떠나시나요?"
          $isListVisible={isListVisible}
        />
        <ButtonWrapper>
          <AddButton
            size="small"
            type="button"
            onClick={() => setIsListVisible(true)}
          />
        </ButtonWrapper>
      </SearchForm>
      {isListVisible && places.length > 0 && (
        <PlacesList>
          {places.map((place, index) => (
            <PlaceItem
              key={index}
              onClick={() => {
                onPlaceSelect(place);
                setIsListVisible(false);
              }}
            >
              {place.place_name}
            </PlaceItem>
          ))}
        </PlacesList>
      )}
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

const Input = styled.input<{ $isListVisible: boolean }>`
  width: 100%;
  padding: 24px;
  border-radius: ${({ $isListVisible }) =>
    $isListVisible ? '30px 30px 0 0' : '30px'};
  border: none;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;

const PlacesList = styled.ul`
  width: 100%;
  position: absolute;
  list-style: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 30px 30px;
  background-color: ${COLORS.white};
`;

const PlaceItem = styled.li`
  cursor: pointer;
  padding: 15px;
  border-bottom: 1px solid ${COLORS.gray30};
  &:last-child {
    border-bottom: none;
    padding-bottom: 30px;
  }
`;
