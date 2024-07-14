import { useState } from 'react';
import { TripData } from '../types/trip';

const useTripForm = () => {
  const [tripData, setTripData] = useState<TripData>({
    title: '',
    date: '',
    location: '',
    xCoordinate: 0,
    yCoordinate: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const resetForm = () => {
    setTripData({
      title: '',
      date: '',
      location: '',
      xCoordinate: 0,
      yCoordinate: 0,
    });
  };

  return { tripData, handleChange, resetForm, setTripData };
};

export default useTripForm;
