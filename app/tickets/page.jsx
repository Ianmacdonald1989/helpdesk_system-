import React from 'react'
import TicketList from './ticketList'

export default function Tickets() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets</small></p>
          </div>
        </nav>

        <TicketList />
    </main>

  )
}
