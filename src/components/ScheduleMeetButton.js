import React from 'react';
import { CalendarIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const ScheduleMeetButton = ({ selectedTime }) => {
  const scheduleMeet = () => {
    const meetUrl = `https://meet.google.com/new?hs=122&authuser=0&pli=1&usp=meet_open_extension&lfhs=2`;
    window.open(meetUrl, '_blank');
  };

  return (
    <Button onClick={scheduleMeet} leftIcon={<CalendarIcon />}>
      {/* Schedule Meet */}
    </Button>
  );
};

export default ScheduleMeetButton;