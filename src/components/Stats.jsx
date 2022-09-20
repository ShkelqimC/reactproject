import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Stats = ({ stats }) => {

    return (
        <div className='statContainer'>
            {stats.stats.map(s => {
                return <div className='battleStat' key={uuidv4()}>
                    <p style={{ color: s.stat.name.includes("att") ? 'red' : s.stat.name.includes("def") ? 'green' : 'blue' }}>
                        {s.stat.name} :
                    </p>
                    <span style={{ color: s.stat.name.includes("att") ? 'red' : s.stat.name.includes("def") ? 'green' : 'blue' }}>
                        <b>
                            {s.base_stat}
                        </b>
                    </span>
                </div>
            })}
        </div>
    );
}

export default Stats;
