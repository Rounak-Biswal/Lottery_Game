import React from 'react'
import TicketNum from '../TicketNum/TicketNum'

const Ticket = ({ ticket }) => {
    return (
        <div>
            {
                ticket.map((num, idx) => {
                    return <TicketNum num={num} key={idx} />
                })
            }
        </div>
    )
}

export default Ticket
