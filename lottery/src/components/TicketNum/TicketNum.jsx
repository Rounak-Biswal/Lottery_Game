import React from 'react'
import style from "./TicketNum.module.css"

const TicketNum = ({ num }) => {
    return (
        <span className={style.ticketNum}>{num}</span>
    )
}

export default TicketNum
