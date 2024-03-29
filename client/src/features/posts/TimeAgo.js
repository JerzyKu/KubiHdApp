import { formatDistanceToNow, parseISO } from "date-fns";

import React from 'react'

export default function TimeAgo({ timestamp }) {

    let timeAgo = "???"
    if ( timestamp ){
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
        // console.log('date: ', date);
        // console.log('timestamp', timestamp);
    }

    return (
        <span>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
