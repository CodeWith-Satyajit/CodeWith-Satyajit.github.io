import React, { useEffect, useState } from 'react';
import {
    MessageStrip, Timeline, TimelineItem, List, ListItemStandard, FlexBox, AnalyticalTable, ObjectPageHeader, ObjectPageSubSection, ObjectPage, ObjectPageTitle, Toolbar, Text, Link, Label, FormItem, ObjectPageSection, Form, ToolbarButton, ObjectStatus
} from '@ui5/webcomponents-react';

import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import { useIntl } from 'react-intl';
import Image from "../components/Image.jfif";
import "@ui5/webcomponents-icons/dist/calendar";

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

        getItems();
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

            >
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.SUMMARY' })}
                    id="Header"
                    titleText={intl.formatMessage({ id: 'Detail.SUMMARY' })}
                >
                     <div style={{ padding: '5px' }}></div>
                    <ObjectStatus showDefaultIcon state={"Positive"}>
                        SAP UI full stack developer with 12 years of experience
                    </ObjectStatus>
                    <div style={{ padding: '5px' }}></div>
                    <ObjectStatus
                        state={"Positive"}
                        showDefaultIcon 

                    >
                        SAP UI full stack developer with 12 years of experience
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
                    id="Items"
                    titleText={intl.formatMessage({ id: 'Detail.SKILLS' })} >

                    <AnalyticalTable
                        columns={[

                            {
                                Header: ObjectNO,
                                accessor: 'rinObjectId',
                                autoResizable: false,
                                headerTooltip: ObjectNO,
                                width: 90,
                                disableGroupBy: true
                            },
                            {
                                Header: DocDate,
                                accessor: 'documentDate',
                                autoResizable: false,
                                headerTooltip: DocDate,
                                width: 110,
                                disableGroupBy: true
                            },
                            {
                                Header: TrnTyp,
                                accessor: 'transactionType',
                                autoResizable: false,
                                headerTooltip: TrnTyp,
                                width: 100,
                                disableGroupBy: true
                            },
                            {
                                Header: ProcStatus,
                                accessor: 'objStatus',
                                autoResizable: false,
                                headerTooltip: ProcStatus,
                                width: 150,
                                disableGroupBy: true
                            },
                            {
                                Header: EPAID,
                                accessor: 'transactionPartnerOrgId',
                                autoResizable: false,
                                headerTooltip: EPAID,
                                width: 100,
                                disableGroupBy: true
                            },
                            {
                                Header: RegQty,
                                accessor: 'regulationQuantity',
                                autoResizable: false,
                                headerTooltip: RegQty,
                                width: 100,
                                disableGroupBy: true
                            },
                            {
                                Header: RetQty,
                                accessor: 'retiredRINQty',
                                autoResizable: false,
                                headerTooltip: RetQty,
                                width: 100,
                                disableGroupBy: true
                            },
                            {
                                Header: FuelVOL,
                                accessor: 'fuelQuantity',
                                autoResizable: false,
                                headerTooltip: FuelVOL,
                                width: 100,
                                disableGroupBy: true
                            },

                            {
                                Header: TYPCODE,
                                accessor: 'itemType',
                                autoResizable: false,
                                headerTooltip: TYPCODE,
                                width: 200,
                                disableGroupBy: true
                            }


                        ]}
                        data={items}
                        filterable
                        groupBy={[]}
                        groupable
                        infiniteScroll
                        loading={loading}
                        minRows={9}
                        overscanCountHorizontal={5}
                        scaleWidthMode="Default"
                        selectionBehavior="Row"
                        selectionMode="None"
                        alternateRowColor={true}
                        sortable
                        subRowsKey="subRows"
                        visibleRowCountMode="Fixed"
                        visibleRows={9}
                        withRowHighlight
                        noDataText={intl.formatMessage({ id: 'Detail.MSG001' })}


                    />

                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.CERTIFICATIONS' })}
                    id="Certifications"
                    titleText={intl.formatMessage({ id: 'Detail.CERTIFICATIONS' })} >

                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.WORKHISTORY' })}
                    id="Workhistory"
                    titleText={intl.formatMessage({ id: 'Detail.WORKHISTORY' })} >

                    <Timeline >
                        <TimelineItem
                            icon="calendar"
                            name="Lead Consultant- [SAP UX & BTP Application Architect]"
                            subtitleText="Bosch Global Software Technologies Pvt Ltd  - Pune, India"
                            titleText="09/2023 - Present"
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
                        >
                            <div>Involved in the development of SAP Workflow for Procurement and Human
                                Capital Management modules</div>


                        </TimelineItem>

                        <TimelineItem
                            icon="calendar"
                            name="Software Engineer [SAP ABAP and SAP Fiori ]"
                            subtitleText="CMC Limited -  Mumbai, India"
                            titleText="08/2012  08/2015 "
                        >
                            <div>Worked as SAP technical consultant for ABAP developments</div>


                        </TimelineItem>


                    </Timeline>

                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.PROJECTS' })}
                    id="Projects"
                    titleText={intl.formatMessage({ id: 'Detail.PROJECTS' })} >
                    <ObjectPageSubSection
                        aria-label={intl.formatMessage({ id: 'Detail.KEYPROJECTS' })}
                        id="Key Projects"
                        titleText={intl.formatMessage({ id: 'Detail.KEYPROJECTS' })}
                    ></ObjectPageSubSection>

                    <ObjectPageSubSection
                        aria-label={intl.formatMessage({ id: 'Detail.PASTPROJECTS' })}
                        id="Past Projects"
                        titleText={intl.formatMessage({ id: 'Detail.PASTPROJECTS' })}
                    ></ObjectPageSubSection>

                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.EDUCATION' })}
                    id="Education"
                    titleText={intl.formatMessage({ id: 'Detail.EDUCATION' })} >

                </ObjectPageSection>
                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.CERTIFICATION' })}
                    id="Certification"
                    titleText={intl.formatMessage({ id: 'Detail.CERTIFICATION' })} >

                </ObjectPageSection>

                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.LANG' })}
                    id="Lang"
                    titleText={intl.formatMessage({ id: 'Detail.LANG' })} >

                </ObjectPageSection>

                <ObjectPageSection
                    aria-label={intl.formatMessage({ id: 'Detail.MYTIME' })}
                    id="Mytime"
                    titleText={intl.formatMessage({ id: 'Detail.MYTIME' })} >

                </ObjectPageSection>


            </ObjectPage>
        </div>
    );
}

export default DetailPage;