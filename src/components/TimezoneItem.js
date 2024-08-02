import { CloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import moment from "moment-timezone";
import SliderComponent from "./SliderComponent";
const TimezoneItem = ({ timezone, onRemove }) => {

    return (

        <div className="timezone-item" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px', justifyContent: 'start', width: '100%' }}>

                <div style={{ width: '200px' }}>
                    <p style={{ textAlign: 'start' }}>{timezone}</p>
                </div>

                <div style={{ alignItems: 'center', margin: 'auto', justifyContent: 'center' }}>
                    <div>{moment.tz(timezone).format('hh:mm a')}</div>
                </div>

            </div>
            {/* <SliderComponent timeZone={timezone} /> */}
            <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
                <Button onClick={() => onRemove(timezone)} leftIcon={<CloseIcon boxSize={3} />}></Button>
            </div>
        </div>

    )

}

export default TimezoneItem;