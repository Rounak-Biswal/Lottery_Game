import React, { useState } from 'react'
import { sum, generateTicket } from "../../utils/helper"
import Ticket from '../Ticket/Ticket'
import Button from '../Button/Button'
import style from "./Lottery.module.css"

const Lottery = ({ n, winCondition }) => {

    let [ticket, setTicket] = useState(generateTicket(n))
    let isWinning = winCondition(ticket)
    let buyTicket = () => {
        setTicket(generateTicket(n))
    }

    return (
        <div className={style.lottery}>
            <h2>Lottery Game</h2>
            <Ticket ticket={ticket} />
            <Button action={buyTicket} />
            <h3>{isWinning && "Congratulation, you've won !!"}</h3>
        </div>
    )
}

export default Lottery
