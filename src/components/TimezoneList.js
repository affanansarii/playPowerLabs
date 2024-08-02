import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import moment from 'moment-timezone';
import TimezoneItem from './TimezoneItem';
import DatePickerComponent from './DatePickerComponent';
import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon, AddIcon, RepeatIcon } from '@chakra-ui/icons';
import ShareableLink from './ShareableLink';
import ScheduleMeetButton from './ScheduleMeetButton';



const TimezoneList = () => {
  const [timezones, setTimezones] = useState(['UTC', 'Asia/Kolkata', 'America/New_York', 'Europe/London', 'Australia/Sydney', 'Asia/Tokyo', 'Europe/Berlin', 'America/Los_Angeles']);
  const [selectedTimezones, setSelectedTimezones] = useState(['UTC', 'Asia/Kolkata']);
  const [newTimezone, setNewTimezone] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchedTimeZone, setSearchedTimeZone] = useState([]);
  const {colorMode, toggleColorMode} = useColorMode();
  const [selectedTime, setSelectedTime] = useState(new Date());


  const addTimezone = (tz) => {
    if (tz && moment.tz.zone(tz)) {
      setSelectedTimezones([...selectedTimezones, tz]);
      setNewTimezone('');
      setSearchedTimeZone([]);
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(timezones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTimezones(items);
  };

  const removeTimezone = (timezone) => {
    setSelectedTimezones(selectedTimezones.filter(tz => tz !== timezone));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const reverseOrder = () => {
    setTimezones([...timezones].reverse());
  };

  const searchTimeZone = (e) => {
      console.log(e)
      let inputVal = e.target.value;
      setNewTimezone(inputVal);
      console.log('new tiem xone', inputVal);
    if(!inputVal){
        setSearchedTimeZone([]);
        return;
    }
    let searchedTz = timezones.filter(tz => tz.toLowerCase().includes(inputVal.toLowerCase()));
    setSearchedTimeZone(searchedTz);
  }

  return (
    <div>
        <div className="timezone-list" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', position: 'relative'}}>
            <div>
                <input 
                    type="text"
                    value={newTimezone}
                    onChange = {(e) => {searchTimeZone(e)}}
                    placeholder="Enter timezone (e.g., America/New_York)"
                    style={{border: '1px solid black', padding: '5px', width: '400px'}}
                    />
                {/* <Button onClick={addTimezone} leftIcon={<AddIcon />}></Button> */}
            </div>
            <div style={{display: 'flex', justifyContent: 'start', flexDirection: 'column', gap: '5px', position: 'absolute', top: '100%', background: 'white', border: '1px solid black', zIndex: '2'}}>
                {searchedTimeZone.map((tz) => (<div onClick={() => {addTimezone(tz)}} style={{textAlign: 'start'}}>{tz}</div>))}
            </div>
        </div>

      <DatePickerComponent onDateChange={handleDateChange} />
      
      <div>
        <ScheduleMeetButton selectedTime={selectedTime} />
      <Button onClick={toggleColorMode} leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}>
        {/* {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'} */}
      </Button>
      <ShareableLink />
      <Button onClick={reverseOrder} leftIcon={<RepeatIcon />}></Button>
      </div>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="selectedTimezones">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {selectedTimezones.map((tz, index) => (
                <Draggable key={tz} draggableId={tz} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TimezoneItem timezone={tz} onRemove={removeTimezone} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TimezoneList;