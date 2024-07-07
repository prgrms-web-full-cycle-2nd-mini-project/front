import React from 'react';
import { TextInput } from '../common/Input/TextInput';
import { DateInput } from '../common/Input/DateInput';
import styled from 'styled-components';
import { AddButton } from '../common/AddButton';

export const AddTripForm = () => {
  return (
    <AddTripFormStyle>
      <div className="addTripForm">
        <TextInput
          placeholder="떠날 여행의 제목을 정해보세요"
          name="title"
          label="title"
          style={{ marginBottom: '24px' }}
        />
        <div className="locationDateWrapper">
          <TextInput
            placeholder="어디로 떠나시나요?"
            name="title"
            label="title"
          />
          <DateInput name="date" label="date" />
        </div>
      </div>
      <AddButton size="large" onClick={() => {}} />
    </AddTripFormStyle>
  );
};

const AddTripFormStyle = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  gap: 24px;
  .addTripForm {
    width: 85%;
    max-width: 500px;
  }
  .locationDateWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
`;
