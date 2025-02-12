import React, { useEffect, useState } from 'react';
import {
    RatingIndicator, NotificationList, NotificationListItem, Title, Tag, MessageStrip, Timeline, TimelineItem, List, ListItemStandard, FlexBox, AnalyticalTable, ObjectPageHeader, ObjectPageSubSection, ObjectPage, ObjectPageTitle, Toolbar, Text, Link, Label, FormItem, ObjectPageSection, Form, ToolbarButton, ObjectStatus
} from '@ui5/webcomponents-react';


import { useLocation, useNavigate } from "react-router-dom";

import { PieChart } from '@ui5/webcomponents-react-charts';

import axios from "axios";
import { useIntl } from 'react-intl';
import Image from "../components/Image.jfif";
import "@ui5/webcomponents-icons/dist/calendar";
import { eventBus } from "./eventBus";

const DetailPage = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [records, setRecords] = useState(0);
    const location = useLocation();
    const { objectId } = location.state || {};
    const { regulationLogisticsPlant } = location.state || {};
    const { regulationLogisticsMaterialNumber } = location.state || {};
    const { Quantity } = location.state || {};
    const { statusDesc } = location.state || {};
    const { regulationGoodsMovementDocumentNumber } = location.state || {};
    const { internalComments } = location.state || {};
    const [selectedSection, setSelectedSection] = useState(0);



    const navigate = useNavigate();

    const baseURL = "odata/v4/regulation-compliance-transaction/";


    const instance = axios.create({
        baseURL
    });
    const intl = useIntl();

    const getItems = async () => {
        let filterString = "$filter=retireObjectId eq " + objectId + "";
        let results = [];

        setLoading(true);
        try {
            const { data } = await instance.get("/getRetireObjRVORINAllocDetails?" + filterString);
            results = (data.d?.results || data.d || data.value);
            results.forEach(element => {
                element.objStatus = element.processingStatus + '(' + element.objectStatusDesc + ')';
                if (element.objectType == 'RVO') {
                    element.itemType = element.rfs2ObligationType + '(' + element.rfs2ObligationTypeDesc + ')';
                } else if (element.objectType == 'RIN')
                    element.itemType = element.dCode + '(' + element.dCodeDesc + ')';
            });

            setItems(results);
            console.log(results);
            setLoading(false);
            setRecords(results.length);
        } catch (error) {
            setItems([]);
            setLoading(false);
            setRecords(0);
        }


    };


       useEffect(() => {
           eventBus.on("Tab", (data) => {
               console.log(data);
               setSelectedSection(data.id)
           });
   
           return () => {
               eventBus.off("Tab");
           };
       }, []);

    const ObjectNO = intl.formatMessage({ id: 'Detail.OBJECTNO' });
    const DocDate = intl.formatMessage({ id: 'Detail.DOCDATE' });
    const TrnTyp = intl.formatMessage({ id: 'Detail.TRNTYP' });
    const ProcStatus = intl.formatMessage({ id: 'Detail.PROCSTATUS' });
    const EPAID = intl.formatMessage({ id: 'Detail.EPAID' });
    const RegQty = intl.formatMessage({ id: 'Detail.REGQTY' });
    const RetQty = intl.formatMessage({ id: 'Detail.RETQTY' });
    const FuelVOL = intl.formatMessage({ id: 'Detail.FUELVOL' });
    const TYPCODE = intl.formatMessage({ id: 'Detail.TYPCODE' });
    const onSelectedSectionChange = (e) => {

        eventBus.emit("Scroll", {"id":e.detail.selectedSectionId});
        console.log(e.detail.selectedSectionId);

    }


    return (
        <div>
            <ObjectPage

                mode="Default"
                headerArea={<ObjectPageHeader><FlexBox alignItems="Center" wrap="Wrap"><FlexBox direction="Column"><Link>+91 950 351 7322</Link><Link href="mailto:satyajit.authentic@gmail.com">satyajit.authentic@gmail.com</Link><Link href="https://www.linkedin.com/in/satyajit-n-narkhede-36a84389/">Linkedin</Link></FlexBox><FlexBox direction="Column" style={{ padding: '10px' }}><Label>Navi Mumbai</Label><Label>Maharashtra, India</Label></FlexBox></FlexBox></ObjectPageHeader>}
                image={Image}
                imageShapeCircle
                style={{
                    height: '91vh'
                }}
                titleArea={<ObjectPageTitle actionsBar={<Toolbar design="Transparent"></Toolbar>} header="Satyajit N Narkhede" subHeader="SAP BTP Architect | Fiori | CAPM | ReactJS "><ObjectStatus state="Positive">#OPENTOWORK</ObjectStatus></ObjectPageTitle>}
                headerPinned
                selectedSectionId={selectedSection}
                onSelectedSectionChange={onSelectedSectionChange}
            >
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.SUMMARY' })}
                    id="1"
                    titleText={intl.formatMessage({ id: 'Detail.SUMMARY' })}
                >
                    <div style={{ padding: '5px' }}></div>
                    <ObjectStatus showDefaultIcon state={"Positive"}>
                        SAP UI/UX Full Stack architect with 12 years of experience
                    </ObjectStatus>

                    <div style={{ padding: '5px' }}></div>
                    <ObjectStatus
                        state={"Positive"}
                        showDefaultIcon
                    >
                        Expertise in Fiori Full Stack Development involving Fiori & CAPM/ABAP OData
                    </ObjectStatus>
                    <div style={{ padding: '5px' }}></div>
                    <ObjectStatus
                        state={"Positive"}
                        showDefaultIcon
                    >
                        Skilled in architecting and delivering Custom Freestyle, Standard Fiori
                        Applications and React JS apps using UI5 web components
                    </ObjectStatus>
                    <div style={{ padding: '5px' }}></div>
                    <ObjectStatus
                        state={"Positive"}
                        showDefaultIcon
                    >
                        Successfully completed 4 End-to-End S4 HANA Implementations with Side-by-Side Extensibility
                    </ObjectStatus>
                    <div style={{ padding: '5px' }}></div>
                    <ObjectStatus
                        state={"Positive"}
                        showDefaultIcon
                    >
                        Strong experience in Fiori developments across On-Premise, Cloud & Hybrid
                        landscapes
                    </ObjectStatus>

                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.SKILLS' })}
                    id="2"
                    titleText={intl.formatMessage({ id: 'Detail.SKILLS' })} >
                    <div>
                        Technologies

                    </div>

                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        FIORI
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        SAPUI5
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        ABAP
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        CAPM(NodeJS)
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        GIT
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        CI/CD
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        Cloud Foundry
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        Kyma-kubernetes
                    </Tag><div></div>
                    <div>
                        Power Skills

                    </div>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        Team Lead
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        Coach
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        Project Management
                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        Active Listener

                    </Tag>
                    <div></div>
                    <div>
                        Exploring On

                    </div>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        ReactJS

                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        UI5-WebComponents

                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        Material UI Components

                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        BTP Process Automation

                    </Tag>
                    <div></div>
                    <div>
                        Methodology

                    </div>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        Agile

                    </Tag>
                    <Tag hideStateIcon style={{ padding: '2px' }}>
                        Waterfall


                    </Tag>


                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.CERTIFICATIONS' })}
                    id="3"
                    titleText={intl.formatMessage({ id: 'Detail.CERTIFICATIONS' })} >
                    <NotificationList>

                        <NotificationListItem
                            footnotes={<><Label>Issued by SAP on Sep,2023
                            </Label></>}
                            importance="Standard"
                            titleText="SAP Certified Development Associate  SAP BT
Extensions with SAP Cloud Application
Programming Model
"
                            wrappingType="Normal"
                        >

                        </NotificationListItem>

                        <NotificationListItem
                            footnotes={<><Label>Issued by SAP on Nov, 2023

                            </Label></>}
                            importance="Standard"
                            titleText="SAP Certified Development Associate  Side-by-Side Extensibility Based on SAP BTP- Kyma Runtime"
                            wrappingType="Normal"
                        >

                        </NotificationListItem>

                        <NotificationListItem
                            footnotes={<><Label>Issued by SAP on Apr,2024

                            </Label></>}
                            importance="Standard"
                            titleText="Creating Applications and Extensions using SAP
Build Code  Record of Achievement
"
                            wrappingType="Normal"
                        >

                        </NotificationListItem>

                    </NotificationList>



                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.WORKHISTORY' })}
                    id="4"
                    titleText={intl.formatMessage({ id: 'Detail.WORKHISTORY' })} >

                    <Timeline >
                        <TimelineItem
                            icon="calendar"
                            name="Lead Consultant- [SAP UX & BTP Application Architect]"
                            subtitleText="Bosch Global Software Technologies Pvt Ltd  - Pune, India"
                            titleText="09/2023 - Present"
                            nameClickable
                        >
                            <div>Working as SAP BTP application Architect and Lead</div>
                            <div>Responsible for delivery of Side-by-Side Extension objects</div>
                            <div>Responsible for setting up CICD with cTMS and GitHub</div>
                            <div>Member of CoE team for BTP development and new offerings from SAP</div>
                            <div>Involved in Product Development based on SAP BTP solution</div>
                        </TimelineItem>

                        <TimelineItem
                            icon="calendar"
                            name="Manager [SAP UX & BTP Application Architect]"
                            subtitleText="Deloitte USI -  Mumbai, India/Tokyo, Japan"
                            titleText="06/2018 - 09/2023"
                            nameClickable
                        >
                            <div>Worked as SAP BTP Development Architect</div>
                            <div>Responsible for design and implementation of Fiori UI/UX</div>
                            <div>Coordination with business for requirement gathering</div>
                            <div>Development Catalog(Classical/In-App/Side-by-Side)</div>
                            <div>Involved in complex development of CAP API(NodeJS) with authorizatio
                                Hana DB integration, Local testing(Profile), Cloud SDK with FIORI
                                UI(SAPUI5)Team upskilling and Object delivery</div>
                            <div>React JS development for Fiori Apps using UI5 Web components
                            </div>
                        </TimelineItem>

                        <TimelineItem
                            icon="calendar"
                            name="Senior Software Engineer [SAP Fiori and SAP Workflow]"
                            subtitleText="Zensar Technologies -  Mumbai, India"
                            titleText="09/2016 - 05/2018"
                            nameClickable
                        >
                            <div>Responsible for the delivery of Fiori based Human Capital Management</div>
                            <div>Objects/Applications Development of configuration various workflows in
                                ESS/MSS Module
                            </div>

                        </TimelineItem>
                        <TimelineItem
                            icon="calendar"
                            name="SAP Workflow Analyst [SAP Fiori and SAP Workflow]"
                            subtitleText="Systemax -  Mumbai, India"
                            titleText="10/2015  09/2016"
                            nameClickable
                        >
                            <div>Involved in the development of SAP Workflow for Procurement and Human
                                Capital Management modules</div>


                        </TimelineItem>

                        <TimelineItem
                            icon="calendar"
                            name="Software Engineer [SAP ABAP and SAP Fiori ]"
                            subtitleText="CMC Limited -  Mumbai, India"
                            titleText="08/2012  08/2015 "
                            nameClickable
                        >
                            <div>Worked as SAP technical consultant for ABAP developments</div>


                        </TimelineItem>


                    </Timeline>

                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.PROJECTS' })}
                    id="5"
                    titleText={intl.formatMessage({ id: 'Detail.PROJECTS' })} >
                    <ObjectPageSubSection
                        aria-label={intl.formatMessage({ id: 'Detail.KEYPROJECTS' })}
                        id="Key Projects"
                        titleText={intl.formatMessage({ id: 'Detail.KEYPROJECTS' })}
                    >
                        <NotificationList>
                            <NotificationListItem
                                footnotes={<><Label>American agribusiness cooperative owned by farmers and member
                                    cooperatives</Label><Label>01/2024 - Present</Label></>}
                                importance="Standard"
                                titleText="SAP BTP Product Development"
                                wrappingType="Normal"
                            >
                                Offshore SAP BTP lead for product
                                development.
                                <br />
                                Quality lead for CAPM and SAP Fiori Applications(UI5 and React JS)
                                <br />
                                Responsible for development of React JS application along with UI5 web
                                component
                                <br />
                                Mentoring resources for CAPM and SAP BTP
                                <br />
                                Responsible for setting up development environment - VScode [Githu
                                copilot, BAS toolkit], Event Mesh, CICD
                                <br />
                                Involved in development of Dashboard for RINS soultion using React JS.

                            </NotificationListItem>
                            <NotificationListItem
                                footnotes={<><Label>A German company engine manufacturing brands</Label><Label>09/2023 - 12/2023</Label></>}
                                importance="Standard"
                                titleText="SAP BTP Side-by-Side Extensions with S/4 HANA Public Cloud"
                                wrappingType="Normal"
                            >
                                Involved Development of Side-by-Side extension like development of report
                                and transactional application on BTP consuming standard API and custom API
                                build in S/4 HANA public cloud
                                <br />
                                Development of custom report for work item status for workflows running in
                                process automation.[using CAP and Fiori Element UI]



                            </NotificationListItem>

                            <NotificationListItem
                                footnotes={<><Label>A Japanese Semiconductor Solutions Group is a corporate group that develops
                                    Imaging and Sensing solution business</Label><Label>07/2022 - 09/2023</Label></>}
                                importance="Standard"
                                titleText="SAP BTP Side-by-Side Extensions with S/4 HANA on Premises"
                                wrappingType="Normal"
                            >
                                Worked as SAP BTP Development Architect- Responsible for overal
                                solutions in BTP cloud foundry environment
                                <br />
                                Responsible to provide Technical Workshops to client on various development
                                methods
                                <br />
                                Responsible for development cataloging with respect to Classical, In-App,
                                Side-by-Side Extensibility
                                <br />
                                Responsible for development and delivery of SAP BTP objects (CAP with
                                custom authorization and dynamic attributes, FIORI- SAPUI5)
                                <br />
                                Involved in configuration of GitLab flow for source code management and
                                transport of BTP objects to next subaccount




                            </NotificationListItem>
                            <NotificationListItem
                                footnotes={<><Label>Electric power company in Zurich, Switzerland</Label><Label>02/2021 - 07/2022</Label></>}
                                importance="Standard"
                                titleText="SAP Fiori on BTP with S/4 HANA on-Premises"
                                wrappingType="Normal"
                            >
                                Led Fiori Development team
                                <br />
                                Responsible for setting up SAP Business Application studio
                                <br />
                                Successfully delivered Fiori First solution (130+ Custom Fiori Apps)
                                <br />
                                Co-ordinating with client technical solution architect for overall progress of
                                project
                                <br />
                                Responsible for providing solution to complex scenario




                            </NotificationListItem>

                            <NotificationListItem
                                footnotes={<><Label>An American manufacturer of ammunition, chlorine, and sodium hydroxide</Label><Label>07/2018 - 01/2021</Label></>}
                                importance="Standard"
                                titleText="SAP Fiori Implementation on S/4 HANA on Premises"
                                wrappingType="Normal"
                            >
                                Worked as Team lead for Delivery of RICEFW objects in Transportation
                                Management, Production Planning, Quality Management
                                <br />
                                Responsible for daily project status reporting to the management





                            </NotificationListItem>

                        </NotificationList>


                    </ObjectPageSubSection>

                    <ObjectPageSubSection
                        aria-label={intl.formatMessage({ id: 'Detail.PASTPROJECTS' })}
                        id="99"
                        titleText={intl.formatMessage({ id: 'Detail.PASTPROJECTS' })}
                    >
                        <NotificationList>

                            <NotificationListItem
                                footnotes={<><Label>CIDCO (City And Industrial Development Corporation), Systemax, AER
                                    (Atomic Energy Regulatory Board) and Shared Support
                                </Label><Label>08/2012 - 06/2018</Label></>}
                                importance="Standard"
                                titleText="CIDCO (City And Industrial Development Corporation), Systemax, AER
(Atomic Energy Regulatory Board) and Shared Support
"
                                wrappingType="Normal"
                            >
                                Responsible for creation UI5 Application for Purchase requisition and
                                Purchase Order approval
                                <br />
                                Involved creation of Workflows in MM module (PO, PR, SES)
                                <br />
                                Customization of workflows in Human Resource module
                                <br />
                                Responsible for development of Workflow for Purchase Requisition, Purchase
                                Order, Goods Receipt
                                <br />
                                Responsible for development of BDC program for maintenance address
                                details for Vendor(Call Transaction)







                            </NotificationListItem>

                        </NotificationList>
                    </ObjectPageSubSection>

                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.EDUCATION' })}
                    id="6"
                    titleText={intl.formatMessage({ id: 'Detail.EDUCATION' })} >

                    <NotificationList>

                        <NotificationListItem
                            footnotes={<><Label>Mumbai University, India
                            </Label><Label>09/2008 - 05/2012</Label></>}
                            importance="Standard"
                            titleText="Bachelor of Engineering"
                            wrappingType="Normal"
                        >
                            Completed Bachelor of Engineering with First class
                            <br />
                            Stream- Information Technology
                        </NotificationListItem>

                    </NotificationList>

                </ObjectPageSection>


                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.LANG' })}
                    id="7"
                    titleText={intl.formatMessage({ id: 'Detail.LANG' })} >
                    <br />
                    <FlexBox direction="Row" justifyContent="Start" wrap="NoWrap" alignItems="Center">
                        <Title>English</Title>
                        <RatingIndicator about='Test' value={5} max={5} readonly={true} ></RatingIndicator></FlexBox>
                    <FlexBox direction="Row" justifyContent="Start" wrap="NoWrap" alignItems="Center">
                        <Title>Marathi</Title>
                        <RatingIndicator about='Test' value={5} max={5} readonly={true} ></RatingIndicator></FlexBox>
                    <FlexBox direction="Row" justifyContent="Start" wrap="NoWrap" alignItems="Center">
                        <Title>Hindi</Title>
                        <RatingIndicator about='Test' value={5} max={5} readonly={true} ></RatingIndicator></FlexBox>
                </ObjectPageSection>

                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.MYTIME' })}
                    id="8"
                    titleText={intl.formatMessage({ id: 'Detail.MYTIME' })} >
                    <PieChart
                        dataset={[
                            {
                                name: 'Project Deliverables  Architecting and Developing',
                                users: 50
                            },
                            {
                                name: 'Communication with Stakeholders',
                                users: 45
                            },
                            {
                                name: 'Firm Contribution  Asset/Proposals',
                                users: 15
                            },
                            {
                                name: 'Team Management',
                                users: 12
                            },
                            {
                                name: 'Mentoring',
                                users: 8
                            },
                            {
                                name: 'Continuous self-improvement and Developmet Activities',
                                users: 20
                            }
                        ]}
                        dimension={{
                            accessor: 'name'
                        }}
                        measure={{
                            accessor: 'users'
                        }}

                    />
                </ObjectPageSection>


            </ObjectPage>
        </div>
    );
}

export default DetailPage;