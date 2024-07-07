import React, { useEffect, useState } from 'react';
import { fetchMainTrips } from '../../apis/fetchMainTrips.api';

export const TripList = () => {
  const [mainTrips, setMainTrips] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMainTrips(true);
    };

    fetchData();
  }, []);
  return <div>TripList</div>;
};
