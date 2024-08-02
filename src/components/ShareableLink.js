// ShareableLink.js
import React from 'react';
import moment from 'moment-timezone';
import { Button } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

const ShareableLink = ({time, timezones}) => {

  const generateLink = () => {
    const link = `https://savvytime.com/converter/utc-to-france-paris`;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  return (
    <Button onClick={generateLink} leftIcon={<LinkIcon />}></Button>
  );
};

export default ShareableLink;
