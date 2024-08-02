import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import moment from 'moment';

const SliderComponent = ({ timeZone }) => {

    const [changedTime, setTime] = useState(0);

    const handleChange = (value) => {
        setTime(value);
        console.log('slidevalue', value)
    }

    const momentTimeHours = moment.tz(timeZone).hours();
    const momentTimeMinutes = moment.tz(timeZone).minutes();
    const momentTimeSeconds = moment.tz(timeZone).seconds();

    const totalSeconds = 24 * 60 * 60;
    console.log('momentTime', totalSeconds)
    const formatTime = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        return `${hours} hours: ${minutes < 10 ? '0' + minutes : minutes}`;
    }

    return (

        <div className='slider-container'>

            <ReactSlider className='horizontal-slider' value={changedTime} onChange={handleChange} thumbClassName="thumbDiv" trackClassName="trackDiv" markClassName="markDiv" min={0} max={totalSeconds} withTracks step={60 * 60} marks={[(1 * 30 * 60), (2 * 30 * 60), (3 * 30 * 60), (4 * 30 * 60), (5 * 30 * 60), (6 * 30 * 60), (7 * 30 * 60), (8 * 30 * 60),]} renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>} />

            <div className='time-display'>

                {/* <p>UTC: {formatTime(time)}</p>
            <p>IST: {moment.utc(time * 60000).tz('Asia/Kolkata').format('HH:mm')}</p> */}

            </div>

        </div>

    )

}

export default SliderComponent;