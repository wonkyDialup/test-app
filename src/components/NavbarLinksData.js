import React from "react";
import {SidebarLink} from "../StyledComponents/NavbarStyle"
export default function SidebarLinks(props) {
    console.log({ props });
    return(
        <>
        <SidebarLink to={props.linkData.path}>{props.linkData.name}</SidebarLink>
        </>
    );
}