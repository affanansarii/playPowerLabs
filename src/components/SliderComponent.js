import React, { useState } from 'react';
import Slider from 'react-slider';
import moment from 'moment';

const SliderComponent = () => {

    const [time, setTime] = useState(0);

    const handleChange = (value) => {
        setTime(value);
    }

    const formatTime = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        return `${hours} hours: ${minutes < 10 ? '0' + minutes : minutes}`;
    }

    return (

        <div className='slider-container'>

            <Slider value={time} onChange={handleChange} min={0} max={24 * 60} step={1} />

            <div className='time-display'>

            {/* <p>UTC: {formatTime(time)}</p>
            <p>IST: {moment.utc(time * 60000).tz('Asia/Kolkata').format('HH:mm')}</p> */}

            </div>

        </div>

    )

}

export default SliderComponent;