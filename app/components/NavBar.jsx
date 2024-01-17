import Link from 'next/link'
import Logo from './ServicedeskLogo.png'
import Image from 'next/image'

import React from 'react'

export default function NavBar({user}) {
return (
<nav>
<Image
src={Logo}
alt='Helpdesk logo'
width={70}
quality={100}
placeholder='blur' 
/>
<h1>Helpdesk</h1>
<Link href="/">Dashboard</Link>
<Link href="/tickets">Tickets</Link>
{user && <span>Hello, {user.email}</span>}
</nav>
)
}


