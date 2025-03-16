import React from 'react';
import { Link } from 'react-router-dom';
const FraudulentLoanForm = () => {
    // Scroll to top when the component mounts
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="fraud-form-container">
                <div className="progress-bar">
                    <div className="step active">1 Theft Details</div>
                    <div className="step">2 Your Information</div>
                    <div className="step">3 Suspect Information</div>
                    <div className="step">4 Additional Information</div>
                    <div className="step">5 Personal Statement</div>
                    <div className="step">6 Review Your Complaint</div>
                </div>
                <div className="info-box">
                    <p><strong>Fill in what you know.</strong> If you don’t know, leave it blank.</p>
                </div>

                <h2>Fraudulent Personal or Business Loan</h2>

                <form className="fraud-form">
                    <label>What company or bank opened the fraudulent account?</label>
                    <input type="text" placeholder="Enter bank name" />

                    <label>When did you first notice the problem?</label>
                    <div className="form-row">
                        <select>
                            <option>Select Month</option>
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                            ))}
                        </select>
                        <select>
                            <option>Select Year</option>
                            <option value="">2025</option>
                            <option value="">2024</option>
                            {Array.from({ length: 50 }, (_, i) => (
                                <option key={i} value={2023 - i}>{2023 - i}</option>
                            ))}
                        </select>
                    </div>

                    <label>If you know, tell us when the fraudulent charges began.</label>
                    <div className="form-row">
                        <select>
                            <option>Select Month</option>
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                            ))}
                        </select>
                        <select>
                            <option>Select Year</option>
                            <option value="">2025</option>
                            <option value="">2024</option>
                            {Array.from({ length: 50 }, (_, i) => (
                                <option key={i} value={2023 - i}>{2023 - i}</option>
                            ))}
                        </select>
                    </div>

                    <label>If you know, estimate the total fraudulent charges.</label>
                    <div className="currency-input">
                        <span>$</span>
                        <input type="text" />
                        <span>.00</span>
                    </div>

                    <label>Account number:</label>
                    <input type="text" placeholder="Enter account number" />

                    <h3 className="section-title">If you contacted the company:</h3>

                    <label>Name of a company representative that you spoke to:</label>
                    <input type="text" placeholder="Enter representative name" />

                    <label>Company's phone number:</label>
                    <input type="text" placeholder="Enter phone number" />

                    <label>Company's email address:</label>
                    <input type="email" placeholder="Enter email address" />
                </form>

                <Link to={'/report-form-2'}>
                    <button style={{
                        marginLeft: 'auto',
                        display: 'block',
                        marginBottom: "40px"
                    }} type="submit" className="submit-btn">Continue →</button>
                </Link>
            </div>
        </>
    );
};

export default FraudulentLoanForm;
