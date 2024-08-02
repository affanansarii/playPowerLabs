import { CloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import moment from "moment-timezone";
const TimezoneItem = ({timezone, onRemove}) => {

    return (

        <div className="timezone-item" style={{position: 'relative'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                <p>{timezone}</p>
                <div>{moment.tz(timezone).format('hh:mm a')}</div>
            </div>
            <div style={{position: 'absolute', top: '5px', right: '5px'}}>
                <Button onClick={() => onRemove(timezone)} leftIcon={<CloseIcon boxSize={3}/>}></Button>
            </div>
        </div>

    )

}

export default TimezoneItem;