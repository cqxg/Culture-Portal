import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';


const Time = (timelineArray) => {
    console.log(timelineArray.timelineArray);
    const resArr = timelineArray.timelineArray.map((timelineItem, index) => {
        return (
            <TimelineItem
                key={`00${index + 1}`}
                dateText={`${timelineItem.time}`}
                style={{ color: '#e86971' }}
            >
                <p>
                    {`${timelineItem.description}`}
                </p>
            </TimelineItem>
        )
    })
    return (
        <Timeline lineColor={'#ddd'}>
            {resArr}
        </Timeline>
    )
};

export default Time;