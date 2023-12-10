import React, { useState } from 'react'
import '../styles/contact.scss'


const Contact = () => {

    const [readMore,setReadMore]=useState(false);

    const extraContent=
    <div>
        <p className="extra-content">
            AARIKA offers various SMS services and other text messaging solutions for businesses and individuals, focusing on bulk SMS, and SMS gateway integration. Additionally the company is a provider of SMS marketing products, Whatsapp marketing and text messaging solutions.

            AARIKA is an ever-growing company that specialized in providing a leading edge of products and 
            services in the SMS messaging industry. As a growing company, we look in the future to include a suite of world-class products and services to our valued customers.

            We provide carrier-grade mobile messaging solutions, with the option of advance application 
            integration to ensure a rapid, cost-effective time-to-market. Catering for all volumes of use, AARIKA offers real-time, secure, unlimited deployment of SMS delivery, utilizing innovative technology in both the outbound and inbound application.

            AARIKA positions itself as the leader in identifying, developing, implementing, branding and 
            maintaining dynamic marketing, advertising and communication concepts through the utilization of SMS and Whatsapp messaging solutions.

            INTRODUCTION TO PUSH SMS

            AARIKA provides all its clients a magnificent solution for one - to - one messaging, individual or personalized bulk SMS through its gateway, ideally supporting any Text or Microsoft Excel files from your desktop itself. AARIKA follows global data security standards and offers a trusted environment specializing as a campaigner, assisting you as a quick communicator, helps in adding sales & Advertising with a sense of customer support and care.

            Messages delivery rate and speed is high, Group Messaging, Annual scheduling, phone book upload and down directly from the desktop, and delivery status reports makes the system friendlier. We can support the integration of the system in your own website or application through HTTP / SMTP or SMPP as we had discussed, all your multiple down line users can be created, controlled and monitored by your own admin panel thru the web interface.
        </p>
    </div>
    const linkName=readMore?'Read less ':'Read more'
  return (
    <>
    <div className="background">
        <section className="form">
            <div className="content">
                <h1>Contact Information</h1>
                <p>
                    ABOUT AARIKA <br />
                    AARIKA is a leading messaging service provider. We are a leading end-to-end mobile data solutions 
                    provider that caters to corporate and individuals throughout the world. To increase support to our clients, we also provide value added services such as customization and integration.
                </p>
                <div className="app">
                    <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}} href='/'><p className='read-more'>{linkName}</p></a>
                    {readMore && extraContent}
                </div>

                <div className="personal-details">
                    <div className="business-no">
                        +918447008855
                    </div>
                    <div className="business-mail">
                        info.aarika@gmail.com
                    </div>
                    <div className="address">
                        Bangalore, India
                    </div>
                </div>
                <div className="socials">

                </div>
            </div>
            <div className="contact">
                <div className="name">
                    <div className="first">
                        <span>First Name</span>
                        <input type="text" placeholder='Jhon' required className='first-name' />
                    </div>
                    <div className="last">
                        <span>Last Name</span>
                        <input type="text" placeholder='Doe' className='last-name' />
                    </div>
                </div>
                <div className="details">
                    <div className="mail">
                        <span>Email</span>
                        <input type="text" placeholder='you@yourbusiness.com' required className='email' />
                    </div>
                    <div className="phone-no">
                        <span>Phone No.</span>
                        <input type="text" placeholder='0123456789' required className='phone' />
                    </div>
                </div>
                <div className="message">
                    <span>Message</span>
                    <textarea placeholder='Add your query..'></textarea>
                </div>
                <button>Send</button>
            </div>
        </section>
    </div>
    </>
  )
}

export default Contact