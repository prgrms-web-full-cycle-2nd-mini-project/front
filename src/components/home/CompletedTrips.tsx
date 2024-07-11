import React, { useState } from 'react';
import { TripDetail } from '../../types/trip';
import styled from 'styled-components';
import { TripCard } from '../common/card/TripCard';
import { calculatePercent } from './OngoingTrips';
import Pagination from '../common/Pagination';
import { useTrip } from '../../hooks/useTrip';

export const CompletedTrips = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: completedTripsData, isLoading: isCompletedLoading } = useTrip(
    false,
    currentPage,
  );
  if (!completedTripsData) {
    return null;
  }

  if (isCompletedLoading) {
    return <p>일정을 가지고 오고 있습니다.</p>;
  }

  return (
    <>
      <SubCard>
        {completedTripsData.trips.map((trips) => {
          return (
            <TripCard
              key={trips.id}
              title={trips.title}
              location={trips.location}
              date={trips.date}
              tripId={trips.id}
              percent={calculatePercent({
                completedCount: trips.completedCount,
                totalCount: trips.totalCount,
              })}
            />
          );
        })}
      </SubCard>
      <Pagination
        totalPage={completedTripsData.pagination.totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

const SubCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 네 개의 열로 설정 */
  gap: 20px;
  flex-wrap: wrap;
`;
