import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const options = [
    { id: '1', label: 'I want to report identity theft' },
    { id: '2', label: `Someone has my information or tried to use it, and I'm worried about identity theft` },
    { id: '3', label: 'My information was exposed in a data breach' },
    { id: '4', label: `I'm looking for information on identity theft` }
];

const checklists = {
    '1': [
        { id: 'credit-card', label: 'Credit card accounts' },
        { id: 'loans', label: 'Loans or leases (student loans, small business loans, mortgages, etc.)' },
        { id: 'debit-accounts', label: 'Debit, checking, or savings accounts' },
        { id: 'employment-taxes', label: 'Employment or taxes' },
        { id: 'utility-accounts', label: 'Telephone, mobile, or utility accounts' },
        { id: 'government-benefits', label: 'Government benefits or IDs (Social Security, Medicare, etc.)' },
        { id: 'other-accounts', label: 'Other account types (Internet, insurance, securities, medical, etc.)' },
    ],
    '2': [
        { id: 'ssn', label: 'Social Security number' },
        { id: 'online-login', label: 'Online login or password' },
        { id: 'credit-info', label: 'Debit or credit card information' },
        { id: 'bank-info', label: 'Bank account information' },
        { id: 'child-info', label: `Children's personal information` },
    ],
    '3': [
        { sid: '3.1', id: 'equifax', label: 'Equifax' },
        { sid: '3.2', id: 'marriott', label: 'Marriott and Starwood Hotels and Resorts' },
        { sid: '3.3', id: 'other-breach', label: 'A breach not listed here' },
    ],
};

const headings = {
    '0': 'Which statement best describes your situation?',
    '1': 'What did the identity thief use your information for?',
    '2': 'What personal information was lost or stolen?',
    '3': 'Which data breach?',
    '4': 'What information are you looking for?',
    '3.1': 'Has someone used your info to commit fraud?',
    '3.2': 'Has someone used your info to commit fraud?',
    '3.3': 'What information was exposed?'
};

const Assistant = () => {
    const [tab, setTab] = useState('0');
    const [subTab, setSubTab] = useState(null);
    const [subH, setSubH] = useState(null)
    return (
        <section className='container row'>
            <div className='row-25'>
                <h1>{subTab && !subH ? headings[subTab] : subH ? headings[subH] : headings[tab]}</h1>
                {tab === '2' && <p style={{ fontSize: '16px', color: '#7c7c7c', marginTop: "5px" }}>Something else? Learn what to do to protect yourself at IdentityTheft.gov/Info-Lost-or-Stolen.</p>}
                {subTab === '3.3' && <p style={{ fontSize: '10px', color: '#7c7c7c', marginTop: "5px" }}>Something else? Learn what to do to protect yourself at IdentityTheft.gov/databreach.</p>}
            </div>
            <div className='row-75'>
                {tab === '0' ? (
                    options.map(option => (
                        <button key={option.id} onClick={() => setTab(option.id)}>
                            {option.label} <FaArrowRight />
                        </button>
                    ))
                ) : tab === '4' ? (
                    <>

                        <div style={{ fontFamily: 'Arial, sans-serif', color: '#663300', padding: '20px' }}>
                            <h2 style={{ color: '#8B4513' }}>Learn more about identity theft</h2>
                            <br />

                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li>
                                    <strong>Avoid Identity theft:</strong>
                                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                                        <li>
                                            <a href="#" style={{ color: '#0044cc', textDecoration: 'none' }}>Identity Theft</a>
                                            <p style={{ margin: '5px 0' }}>Learn how to protect your personal information from identity theft</p>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: '#0044cc', textDecoration: 'none' }}>Online Privacy and Security</a>
                                            <p style={{ margin: '5px 0' }}>Learn about online privacy, how to protect your devices from hackers and threats, and how to avoid common online scams</p>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <strong>Recover from Identity theft:</strong>
                                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                                        <li>
                                            <a href="#" style={{ color: '#0044cc', textDecoration: 'none' }}>Recovery Steps</a>
                                            <p style={{ margin: '5px 0' }}>Review steps you can take to recover from identity theft</p>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: '#0044cc', textDecoration: 'none' }}>Your Rights</a>
                                            <p style={{ margin: '5px 0' }}>See an overview of your rights when you’re recovering from identity theft</p>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: '#0044cc', textDecoration: 'none' }}>Sample Letters</a>
                                            <p style={{ margin: '5px 0' }}>Find sample letters you can use to help resolve your identity theft</p>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <strong>Protect yourself when your information is lost, stolen, or exposed in a data breach:</strong>
                                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                                        <li>
                                            <a href="#" style={{ color: '#0044cc', textDecoration: 'none' }}>What To Do</a>
                                            <p style={{ margin: '5px 0' }}>Find what you can do to protect yourself from identity theft when your information has been lost, stolen, or exposed</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div style={{ fontFamily: 'Arial, sans-serif', color: '#663300', padding: '20px' }}>
                            <h4 style={{ color: '#8B4513' }}>Get contact information for credit bureaus and other companies</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li>
                                    <a href="#" style={{ color: '#0044cc', textDecoration: 'none', fontWeight: 'bold' }}>Credit Bureau Contacts</a>
                                </li>
                                <li>
                                    <a href="#" style={{ color: '#0044cc', textDecoration: 'none', fontWeight: 'bold' }}>Other Helpful Contacts</a>
                                </li>
                            </ul>

                            <h4 style={{ color: '#8B4513', marginTop: '20px' }}>Use and share free resources to help others</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li>
                                    <strong>For Everyone:</strong>
                                    <a href="#" style={{ color: '#0044cc', textDecoration: 'none', marginLeft: '5px' }}>ftc.gov/idtheft</a>
                                    <p style={{ margin: '5px 0' }}>Help people learn about identity theft — whether you’re chatting with friends and family, sharing info on a social networking site, or taking resources to a religious group or PTA meeting</p>
                                </li>
                                <li>
                                    <strong>For Older Adults:</strong>
                                    <a href="#" style={{ color: '#0044cc', textDecoration: 'none', marginLeft: '5px' }}>ftc.gov/passiton</a>
                                    <p style={{ margin: '5px 0' }}>Share materials for older adults on identity theft, fraud, and scams</p>
                                </li>
                                <li>
                                    <strong>For Businesses:</strong>
                                    <a href="#" style={{ color: '#0044cc', textDecoration: 'none', marginLeft: '5px' }}>ftc.gov/business-guidance/privacy-security</a>
                                    <p style={{ margin: '5px 0' }}>Share data security resources to help businesses of any size protect their customers’ and employees’ information and meet their legal obligations</p>
                                </li>
                                <li>
                                    <strong>Law Enforcement Officers:</strong>
                                    <p style={{ margin: '5px 0' }}>Local police can help people who’ve experienced identity theft by</p>
                                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px', color: '#666' }}>
                                        <li>encouraging them to create an Identity Theft Report and get a personal recovery plan at <a href="#" style={{ color: '#0044cc', textDecoration: 'none' }}>IdentityTheft.gov</a></li>
                                        <li>sharing <a href="#" style={{ color: '#0044cc', textDecoration: 'none' }}>free identity theft resources from the FTC</a></li>
                                        <li>taking a police report if asked. Some businesses require a police report to remove fraudulent debts from the affected account</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        Here's the JSX with inline styles matching the formatting in your screenshot:

                        ```jsx
                        <div style={{ fontFamily: 'Arial, sans-serif', color: '#663300', padding: '20px' }}>
                            <h4 style={{ color: '#8B4513' }}>Report a scam, fraud, or bad business practice</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li>
                                    <a href="#" style={{ color: '#0044cc', textDecoration: 'none', fontWeight: 'bold' }}>
                                        Tell the FTC at ReportFraud.ftc.gov
                                    </a>
                                </li>
                                <li>
                                    Not sure if something is a scam? Learn more at
                                    <a href="#" style={{ color: '#0044cc', textDecoration: 'none', marginLeft: '5px' }}>
                                        ftc.gov/scams
                                    </a>
                                </li>
                            </ul>

                            <div style={{ border: '1px solid black', padding: '15px', marginTop: '20px' }}>
                                <p style={{ fontWeight: 'bold', color: '#665500', margin: 0 }}>
                                    Scammers are impersonating the FTC. Know that the FTC will never threaten you, say you must transfer your money
                                    to “protect it,” or tell you to withdraw cash or buy gold and give it to someone. Learn more at
                                    <a href="#" style={{ color: '#0044cc', textDecoration: 'none', marginLeft: '5px' }}>
                                        ftc.gov/impersonators
                                    </a>.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className={"buttonbx"}>
                            <button className='green-button b1' onClick={() => setTab('0')}>Back</button>
                            <Link to="/report">
                                <button className='green-button b2' onClick={() => setTab('0')}>Continue <FaArrowRight /></button>
                            </Link>
                        </div>

                    </>
                ) : checklists[tab] ? (
                    tab === '3' ? (
                        subTab === null ? (
                            <>
                                {checklists[tab].map(item => (
                                    <button key={item.id} className='row-75-button' onClick={() => { setSubTab(item.id); setSubH(item.sid) }}>
                                        {item.label} <FaArrowRight />
                                    </button>
                                ))}
                                <div style={{ display: 'flex', justifyContent: 'space-between' }} className={"buttonbx"}>
                                    <button className='green-button' onClick={() => setTab('0')}>Back</button>
                                    <Link to="/report">
                                        <button className='green-button' onClick={() => setTab('0')}>Continue <FaArrowRight /></button>
                                    </Link>
                                </div>
                            </>
                        ) : subTab === 'equifax' || subTab === 'marriott' ? (
                            <>
                                <button className='row-75-button'>Yes, someone used my information to make purchases or open accounts. <FaArrowRight /></button>
                                <button className='row-75-button'>No, I'm not aware of any misuse. <FaArrowRight /></button>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }} className={"buttonbx"}>
                                    <button className='green-button' onClick={() => setTab('0')}>Back</button>
                                    <Link to="/report">
                                        <button className='green-button' onClick={() => setTab('0')}>Continue <FaArrowRight /></button>
                                    </Link>
                                </div>
                            </>
                        ) : subTab === 'other-breach' ? (
                            <>
                                <h4>Select all that apply</h4>
                                <div className='checklist-container'>
                                    {checklists['2'].map(item => (
                                        <label htmlFor={item.id} key={item.id} className='checkbox-item'>
                                            <input type='checkbox' id={item.id} />
                                            <p>{item.label}</p>
                                        </label>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }} className={"buttonbx"}>
                                    <button className='green-button' onClick={() => setTab('0')}>Back</button>
                                    <Link to="/report">
                                        <button className='green-button' onClick={() => setTab('0')}>Continue <FaArrowRight /></button>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <p>Content for {subTab}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }} className={"buttonbx"}>
                                    <button className='green-button' onClick={() => setTab('0')}>Back</button>
                                    <Link to="/report">
                                        <button className='green-button' onClick={() => setTab('0')}>Continue <FaArrowRight /></button>
                                    </Link>
                                </div>
                            </>
                        )
                    ) : (
                        <>
                            <h4>Select all that apply</h4>
                            <div className='checklist-container'>
                                {checklists[tab].map(item => (
                                    <label htmlFor={item.id} key={item.id} className='checkbox-item'>
                                        <input type='checkbox' id={item.id} />
                                        <p>{item.label}</p>
                                    </label>
                                ))}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} className={"buttonbx"}>
                                <button className='green-button' onClick={() => setTab('0')}>Back</button>
                                <Link to="/report">
                                    <button className='green-button' onClick={() => setTab('0')}>Continue <FaArrowRight /></button>
                                </Link>
                            </div>
                        </>
                    )
                ) : <></>}
            </div>
        </section>
    );
};

export default Assistant;
