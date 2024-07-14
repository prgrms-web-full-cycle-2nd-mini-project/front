import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Typography from '../Typography';
import { AddButton } from '../button/AddButton';

interface Place {
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
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  places: Place[];
};

const LocationInput = ({
  label,
  name,
  keyword,
  setKeyword,
  places,
}: InputProps) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsListVisible(!isListVisible);
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
    <InputStyle ref={wrapperRef}>
      <SearchForm>
        <Label htmlFor={name}>{label}</Label>
        <Input
          type="text"
          id={name}
          name={name}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="어디로 떠나시나요?"
        />
        <div className="button">
          <AddButton size="small" type="submit" onClick={handleButtonClick} />
        </div>
      </SearchForm>
      {isListVisible && places.length > 0 && (
        <PlacesList>
          {places.map((place, index) => (
            <PlaceItem key={index}>
              {place.place_name}
              <Typography $variant={'caption1'}>
                {place.address_name}
              </Typography>
            </PlaceItem>
          ))}
        </PlacesList>
      )}
    </InputStyle>
  );
};

export default LocationInput;

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

const SearchForm = styled.div`
  position: relative;
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
  padding: 24px;
  border-radius: 50px;
  border: none;
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PlacesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.3s ease-out;
  background-color: white;
`;

const PlaceItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;
