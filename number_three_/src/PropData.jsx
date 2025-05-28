import React from 'react'
import PropTransfer from './PropTransfer'

const PropData = () => {

    const propWork = [
        { company: 'infinix', product: 'mobile_laptop' },
        { company: 'xiaomi', product: 'mobile_laptop_car_bike' },
        { company: 'samsung', product: 'mobile_laptop' }
    ]

    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush">
                    {propWork.map((vd,uki) => (
                        <PropTransfer key={uki} transferData={vd} index={uki}/>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default PropData