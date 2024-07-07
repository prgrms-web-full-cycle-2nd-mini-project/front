import React from 'react';
import { TextInput } from '../common/Input/TextInput';
import { DateInput } from '../common/Input/DateInput';
import styled from 'styled-components';

export const AddTripForm = () => {
  return (
    <AddTripFormStyle>
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
    </AddTripFormStyle>
  );
};

const AddTripFormStyle = styled.div`
  .locationDateWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
`;
