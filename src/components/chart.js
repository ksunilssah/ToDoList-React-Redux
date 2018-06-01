import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {

    //Average 
    const average = (data) => {
        return _.round(_.sum(data) / data.length);
    }

    return (
        <div>
            <Sparklines height={30} width={60} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}