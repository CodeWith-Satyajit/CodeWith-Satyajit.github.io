import {
    ShellBar, Button, SideNavigationItem, SideNavigation
} from '@ui5/webcomponents-react';
import React, { useState } from "react";
import {  useNavigate } from 'react-router-dom';

import "@ui5/webcomponents-icons/dist/arrow-left";
import "@ui5/webcomponents-icons/dist/arrow-right";
import "@ui5/webcomponents-icons/dist/menu";
import "@ui5/webcomponents-icons/dist/trend-down";


 const MenuBar = () => {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    return (
        <>
            <ShellBar className="ui5-shellbar" primary-title="Satyajit N Narkhede" secondaryTitle='SAP BTP Full Stack Developer' logo={<img ></img>}
             startButton={<Button icon="menu" id="toggle" onClick={() => { setOpen(open ? false : true) }}></Button>} >
                
                
            </ShellBar>

            <SideNavigation className="ui5-side-navigation" collapsed={open}>

                <SideNavigationItem text="Summary" icon="arrow-right" selected onClick={()=>{  navigate("/debit");}}></SideNavigationItem> 

                <SideNavigationItem text="" icon="arrow-left" onClick={()=>{navigate("/credit");}}></SideNavigationItem> 

              <SideNavigationItem text="Certifications" icon="trend-down" onClick={()=>{navigate("/history");}}></SideNavigationItem>

            </SideNavigation>
        </>
);

}

export default MenuBar;


