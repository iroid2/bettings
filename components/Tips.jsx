import React from 'react'
import Tipsperiod from './Tipsperiod'

export default function Tips() {
  return (
    <div className='tipSection flex flex-col  items-center'>
        <div className="topTips ">
            <h1 className='text-center m-4 text-2xl font-bold'>Free Football Betting Tips</h1>
            <div className="tips-header flex gap-4">
            <Tipsperiod padding={'border-2  flex flex-col items-center px-14 text-sm border-black'}  period={'Yesterday'} month={'Nov'} day={'23'}/>
            <Tipsperiod padding={'border-2  flex flex-col items-center px-14 text-sm border-black'}  period={'Today'} month={'Nov'} day={'27'}/>
            <Tipsperiod padding={'border-2  flex flex-col items-center px-14 text-sm border-black'}  period={'Tommorow'} month={'Nov'} day={'28'}/>
            </div>
        </div> 
        <div className="botmmTips">
            
        </div>
    </div>
  )
}
