import React from 'react'
import { Description, HomepageStyle, Image } from '../StyledComponents/HomepageStyle'
import Logo from "../assets/logo/logo6.png"

export default function Homepage() {
    return (
        <HomepageStyle>
            <Image src={Logo} alt="logo3.png" />
            <Description className="Description">Our 100% online process cuts out the middlemen, so you get a lower price from the start. No commissions, no pressure, and no hidden fees. Saving you $1,400 on average compared to traditional dealerships.</Description>
            <br />
            <Description className="Description">With Strange Wheels, you decide how and when you’ll receive your ride. Have it delivered right to your driveway or pick it up from one of our car vending machines. Your choice.</Description>
        </HomepageStyle>
    )
}
