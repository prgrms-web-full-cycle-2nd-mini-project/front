import { TripDetail } from '../../types/trip';
import styled from 'styled-components';

import { TripCard } from '../common/card/TripCard';
import { TripMainCard } from '../common/card/TripMainCard';
import Typography from '../common/Typography';
import { useTrip } from '../../hooks/useTrip';

export const calculatePercent = ({
  totalCount,
  completedCount,
}: {
  totalCount: number;
  completedCount: number;
}): number => {
  return totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
};

export const OngoingTrips = () => {
  const { data: ongoingTripsData, isLoading: isOngoingLoading } = useTrip(
    true,
    1,
  );

  if (isOngoingLoading) {
    return (
      <Typography $variant={'title1'}>일정을 가지고 오고 있습니다.</Typography>
    );
  }

  if (!ongoingTripsData || ongoingTripsData.trips.length === 0) {
    return (
      <EmptyBox>
        <Image src="/front/assets/empty.png" alt="empty" />
        <Typography $variant={'title1'} $color="gray50">
          계획 중인 여행이 없습니다.
        </Typography>
      </EmptyBox>
    );
  }

  const mainTrip = ongoingTripsData.trips[0];
  const { id, completedCount, totalCount, title, location, date } = mainTrip;
  const subTrips = ongoingTripsData.trips.slice(1, 5);

  return (
    <div>
      <div>
        <TripMainCard
          title={title}
          location={location}
          date={date}
          percent={calculatePercent({ completedCount, totalCount })}
          tripId={id}
        />
      </div>
      <SubCard>
        {subTrips.map((trips) => {
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
    </div>
  );
};

const SubCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  flex-wrap: wrap;
`;

const EmptyBox = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 100px;
  opacity: 0.3;
`;
