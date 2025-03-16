import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import reportImage from '../assets/report.png'; // Update with the actual image path
import { Link } from 'react-router-dom';
const ReportIdentityTheft = () => {

        // Scroll to top when the component mounts
        React.useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    
    return (
        <section className="container">
            <div className="row" style={{
                display: "flex !important",
                justifyContent: "space-between"
            }}>

                <div style={{
                    width: "calc(75% - 20px)"
                }}>

                    <h1 className="title">Report Identity Theft to the FTC</h1>
                    <p className="description">
                        Next, we are going to ask for specific details. We will use the information you provide to create your:
                    </p>

                    <div className="report-container">
                        <img src={reportImage} alt="FTC Identity Theft Report & Recovery Plan" className="report-image" />
                    </div>

                    <p className="description">
                        These will help you <strong>fix problems</strong> caused by the identity theft.
                    </p>

                    <Link to={'/report-form'}>

                        <button className="green-button">
                            Continue <FaArrowRight />
                        </button>
                    </Link>

                </div>
                <div className='row-25'>

                    <div className="info-box">
                        <h3>How we handle your information</h3>
                        <p>
                            It's up to you to determine how much personal information you want to provide. The FTC enters this
                            information into a secure online database that law enforcement agencies use in their investigations.
                        </p>
                        <p>
                            Please read our <a href="#" className="privacy-link">Privacy Policy <FaArrowRight /></a> to learn more
                            about how we safeguard your personal information.
                        </p>
                        <p>OMB Control Number: 3084-0169</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ReportIdentityTheft;
