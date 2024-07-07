import React from 'react';
import { useTripStore } from '../../stores/tripStore';

const OngoingTrips = () => {
  const trips = useTripStore((state) => state.trips);
  console.log(trips);
  return <div>OngoingTrips</div>;
};

export default OngoingTrips;
