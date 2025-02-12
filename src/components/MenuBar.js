import {
    ShellBar, Button, SideNavigationItem, SideNavigation
} from '@ui5/webcomponents-react';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "@ui5/webcomponents-icons/dist/arrow-left";
import "@ui5/webcomponents-icons/dist/arrow-right";
import "@ui5/webcomponents-icons/dist/bullet-text";
import "@ui5/webcomponents-icons/dist/trend-down";
import "@ui5/webcomponents-icons/dist/time-entry-request";

import logo from "./logo.png";

import { useIntl } from 'react-intl';



const MenuBar = () => {
    const [open, setOpen] = useState(false);

    const intl = useIntl();


    const navigate = useNavigate();

    const updateSelected = (seq) => {
        setMessage(newMessage);
    };

    return (
        <>

            <ShellBar className="ui5-shellbar" logo={<img src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"></img>}

                primaryTitle="Certified"
                startButton={<Button icon="bullet-text" id="toggle" onClick={() => { setOpen(open ? false : true) }}></Button>} >


            </ShellBar>

            <SideNavigation className="ui5-side-navigation" collapsed={open}>

                <SideNavigationItem text="Summary" icon="arrow-right" selected onClick={() => { navigate("/debit"); }}></SideNavigationItem>

                <SideNavigationItem text="Skills" icon="arrow-left" onClick={() => { navigate("/credit"); }}></SideNavigationItem>

                <SideNavigationItem text="Certifications" icon="trend-down" onClick={() => { navigate("/history"); }}></SideNavigationItem>

                <SideNavigationItem text="Employment" icon="trend-down" onClick={() => { navigate("/history"); }}></SideNavigationItem>
                <SideNavigationItem text="Projects" icon="trend-down" onClick={() => { navigate("/history"); }}></SideNavigationItem>
                <SideNavigationItem text="Education" icon="trend-down" onClick={() => { navigate("/history"); }}></SideNavigationItem>
                <SideNavigationItem text="Launguage" icon="trend-down" onClick={() => { navigate("/history"); }}></SideNavigationItem>
                <SideNavigationItem text="My Time" icon="time-entry-request" onClick={() => { navigate("/history"); }}></SideNavigationItem>

            </SideNavigation>
        </>
    );

}

export default MenuBar;


