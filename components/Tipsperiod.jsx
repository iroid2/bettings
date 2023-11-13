import React from 'react'

export default function Tipsperiod({period,day,month,padding}) {
  return (
    <div className={padding}>
        <div className="period font-bold">{period}</div>
        <div className="month-day flex">
            <div className="month ">{month}</div>
            <div className="day">{day}</div>
        </div>
    </div>
  )
}
Tipsperiod


