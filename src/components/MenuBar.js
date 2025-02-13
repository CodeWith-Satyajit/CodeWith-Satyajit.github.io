import {
   Popover, ShellBar, Button, SideNavigationItem, SideNavigation
} from '@ui5/webcomponents-react';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "@ui5/webcomponents-icons/dist/arrow-left";
import "@ui5/webcomponents-icons/dist/arrow-right";
import "@ui5/webcomponents-icons/dist/bullet-text";
import "@ui5/webcomponents-icons/dist/trend-down";
import "@ui5/webcomponents-icons/dist/time-entry-request";
import "@ui5/webcomponents-icons/dist/multi-select";
import "@ui5/webcomponents-icons/dist/notification-2";
import "@ui5/webcomponents-icons/dist/validate";
import "@ui5/webcomponents-icons/dist/employee";
import "@ui5/webcomponents-icons/dist/project-definition-triangle";
import "@ui5/webcomponents-icons/dist/education";
import "@ui5/webcomponents-icons/dist/marketing-campaign";





import { isMobile } from "react-device-detect";

import { useIntl } from 'react-intl';
import { eventBus } from "./eventBus";



const MenuBar = () => {
    const [open, setOpen] = useState(isMobile ? true : false);
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six, setSix] = useState(false);
    const [seven, setSeven] = useState(false);
    const [eight, setEight] = useState(false);
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);

    const intl = useIntl();


    const navigate = useNavigate();

    useEffect(() => {
        eventBus.on("Scroll", (data) => {
            console.log(data);
            updateSelected(data.id)
        });

        return () => {
            eventBus.off("Scroll");
        };
    }, []);

    const updateTab = (seq) => {
        eventBus.emit("Tab", { "id": seq });

    }

    const updateSelected = (seq) => {
        switch (seq) {
            case '1':
                setOne(true);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(false);
                setSix(false);
                setSeven(false);
                setEight(false);

                break;
            case '2':
                setOne(false);
                setTwo(true);
                setThree(false);
                setFour(false);
                setFive(false);
                setSix(false);
                setSeven(false);
                setEight(false);
                break;

            case '3':
                setOne(false);
                setTwo(false);
                setThree(true);
                setFour(false);
                setFive(false);
                setSix(false);
                setSeven(false);
                setEight(false);
                break;

            case '4':
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(true);
                setFive(false);
                setSix(false);
                setSeven(false);
                setEight(false);
                break;

            case '5':
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(true);
                setSix(false);
                setSeven(false);
                setEight(false);
                break;

            case '6':
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(false);
                setSix(true);
                setSeven(false);
                setEight(false);
                break;
            case '7':
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(false);
                setSix(false);
                setSeven(true);
                setEight(false);
                break;
            case '8':
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(false);
                setSix(false);
                setSeven(false);
                setEight(true);
                break;
            default:
                break;
        }
    };

    return (
        <>

            <ShellBar className="ui5-shellbar"  logo={<img src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"></img>}

                primaryTitle="Certified"
                startButton={<Button icon="bullet-text" id="toggle" onClick={() => { setOpen(open ? false : true) }}></Button>} >
                 

            </ShellBar>

            <SideNavigation className="ui5-side-navigation" collapsed={open}>

                <SideNavigationItem text="Summary" icon="notification-2" selected={one} onClick={() => { updateTab('1'); }}></SideNavigationItem>

                <SideNavigationItem text="Skills" icon="multi-select" selected={two} onClick={() => { updateTab('2'); }}></SideNavigationItem>

                <SideNavigationItem text="Certifications" icon="validate" selected={three} onClick={() => { updateTab('3'); }}></SideNavigationItem>

                <SideNavigationItem text="Employment" icon="employee" selected={four} onClick={() => { updateTab('4'); }}></SideNavigationItem>
                <SideNavigationItem text="Projects" icon="project-definition-triangle" selected={five} onClick={() => { updateTab('5'); }}></SideNavigationItem>
                <SideNavigationItem text="Education" icon="education" selected={six} onClick={() => { updateTab('6'); }}></SideNavigationItem>
                <SideNavigationItem text="Launguage" icon="marketing-campaign" selected={seven} onClick={() => { updateTab('7'); }}></SideNavigationItem>
                <SideNavigationItem text="My Time" icon="time-entry-request" selected={eight} onClick={() => { updateTab('8'); }}></SideNavigationItem>

            </SideNavigation>
        </>
    );

}

export default MenuBar;


