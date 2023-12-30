import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../styles/home.scss'

import img7 from '../assets/7.png'
import imgs2 from '../assets/s2.png'
import imgs3 from '../assets/s3.png'
import imgs4 from '../assets/s4.webp'
import v2 from '../assets/v2.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faChartLine, faClock, faCode, faFileExcel, faIndianRupeeSign, faLocationCrosshairs, faLocationDot, faLock, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Select } from '@chakra-ui/react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'
import { faQuinscape } from '@fortawesome/free-brands-svg-icons';

import emailjs from '@emailjs/browser';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '35%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
};

const textOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
};



const Home = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <main>
      <section className='slider' id='home' >
        <MyCarousel />
      </section>
      <section className="get-introduced" id="features">
        <div className="features-main-content">
          <h1>Get Introduced to the Best Bulk SMS Provider</h1>
          <p>
            In the todaya€?s digital world, the availability and use of handheld devices like smart phones, makes the world shrink. It enables people to reach each other in just minutes without many efforts. <br /><br />

            Businesses can tap into this opportunity and choose Bulk SMS Service India that offers a wonderful opportunity for many business enterprises to reach their targeted customers instantly in a cost effective way. <br />
            <br />

            So, if the client needs a Bulk SMS Provider India, AARIKA is the best option. We are not only a brand, but a pioneer in the field of SMS service providing. We take pride in saying that we as a successful brand have helped numerous clients to reach out to their targeted customers. We have a track record of meeting the exact criteria, the client asks for. <br />
            <br />
            <span>You can get what's best</span> <br />
            <br />

            When it comes to choosing a Bulk SMS Provider India, you will come across quite a few companies that offer sms services at reasonably low cost. However, their approaches arent that professional when it comes to Bulk SMS in India. <br />
            <br />

            So, we request you to stay away from them and get in touch with us as we are heavily committed to providing the best services to clients. <br />
            <br />

            <span>Our Specialties</span> <br />
            <br />

            You will reach the target audience in a short span of time- With unlimited validity, Customer sender ID, Powerful Web APIa€?s, we deliver Bulk SMS in India to DND numbers, without hidden charges. <br />
            <br />

            Our team guarantees you that your SMS will be delivered on time- We engage the customers with our promotional and transactional SMS. <br />
            <br />

            <span>We are the Game-changers</span> <br />
            <br />

            1. The Delivery goes round the clock- Our entire team makes sure to deliver the SMS tool, irrespective of the time zones. Delivery is very important for all the clients and we at AARIKA, with our Bulk SMS Service Banglore, India are known for our instant deliverability on the go. <br />
            <br />

            2. Reliable Pricing Options- We at AARIKA provide the best and reliable pricing options for Bulk SMS in India packages, and help to promote the business online. <br />
            <br />

            3. Unicode SMS service- Local language SMS increases the ROI, up to 50% instead of English SMS, and provides a Unicode Options to advertise. <br />
            <br />

            4. SMS attachments- This is called as File Attachments in SMS Campaign. The client can attach photos, links, documents, etc. The file(s) will be securely hosted on our server, so the clients need not worry. <br />
            <br />

            <span>Our USP as a Bulk SMS Service Provider</span> <br />
            <br />

            1. We as a brand for Bulk SMS Service Bangalore, India is highly profitable to marketers and business managers, bulk SMS reach out to a wide range of people, and goes beyond the geographical limitations. <br />
            <br />

            2. Our network for Bulk SMS in India allows reaching out to the customers directly, along with keeping them updated with new and fresh arrivals and offers. <br />
            <br />

            The brand 'AARIKA', truly justifies the connotation of its name, thata€?s, to connect people. We are undoubtedly the best Bulk SMS Provider Banglore, India. Get in touch with us today and we will be more than happy to help you out. <br />
            <br />
          </p>
        </div>
        <div className="cards-below">
          <h1>OUR AARIKA <span>BULK SMS</span> CANa€?T GET EASIER THAN THIS !!!</h1>
          <p>
            With our tool customers can send campaigns which will save their valuable time and has a wonderful feature that will ensure to fetch a high response rate.
          </p>
        </div>
        <div className="cards">
          <div className="f3">
            <div className='video'>
              <video src={v2} autoPlay infiniteLoop muted preload='auto' type="video/mp4"></video>
              <div className="vid-content">
                <div className="logo">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="text">
                  <span>Delivery Round the Clock</span><br />
                  We will be delivering the SMS tool regardless of time zones globally. Delivery is important for all the customers and we do instant deliverability on the go.
                </div>
              </div>
            </div>
            <div className='video'>
              <video src={v2} autoPlay infiniteLoop muted preload='auto' type="video/mp4"></video>
              <div className="vid-content">
                <div className="logo">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                </div>
                <div className="text">
                <span>Reliable Pricing Options</span><br />
                We provide the best and reliable pricing options for our Bulk SMS packages which helps to promote your business online.
                </div>
              </div>
            </div>
            <div className='video'>
              <video src={v2} autoPlay infiniteLoop muted preload='auto' type="video/mp4"></video>
              <div className="vid-content">
                <div className="logo">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className="text">
                <span>Unicode SMS Service</span><br />
                Local language SMS will increase your ROI more that 50% instead of English SMS. With our tool, we provide Unicode Options to advertise.
                </div>
              </div>
            </div>
          </div>
          <div className="s3">
            <div className='video'>
              <video src={v2} autoPlay infiniteLoop muted preload='auto' type="video/mp4"></video>
              <div className="vid-content">
                <div className="logo">
                  <FontAwesomeIcon icon={faQuinscape} />
                </div>
                <div className="text">
                <span>SMS Attachments</span>
                File Attachments in SMS Campaign. You can attach Photos, Links, Document, etc., Your files will be securely hosted on our server so you dona€?t have to worry.
                </div>
              </div>
            </div>
            <div className='video'>
              <video src={v2} autoPlay infiniteLoop muted preload='auto' type="video/mp4"></video>
              <div className="vid-content">
                <div className="logo">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="text">
                <span>Track Campaign Metrics</span><br />
                Access granular click reports for all your marketing web links, attachments and more. Get detailed reports on the click through rates of your campaigns, who opened the links at what time, location details and device characteristics.
              </div>
              </div>
            </div>
            <div className='video'>
              <video src={v2} autoPlay infiniteLoop muted preload='auto' type="video/mp4"></video>
              <div className="vid-content">
                <div className="logo">
                  <FontAwesomeIcon icon={faFileExcel} />
                </div>
                <div className="text">
                <span>Send via App or Excel</span><br />
                Send SMS the way you like a€“ via Web Interfacen, App or Excel. We have the best delivery using all medium.
                </div>
              </div>
            </div>
          </div>
          <div className="t3">
            <div className='video'>
              <video src={v2} autoPlay infiniteLoop muted preload='auto' type="video/mp4"></video>
              <div className="vid-content">
                <div className="logo">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className="text">
                <span>Instant Account Activation</span><br />
                On Signup and payment made, we shall share you the credentials instantly where you can start the marketing & advertisement activities.
                </div>
              </div>
            </div>
            <div className='video'>
              <video src={v2} autoPlay infiniteLoop muted preload='auto' type="video/mp4"></video>
              <div className="vid-content">
                <div className="logo">
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </div>
                <div className="text">
                <span>Real Time Delivery</span><br />
                We provide a real-time delivery with a single click of your SMS campaigns. Our Server architecture is designed to scale million SMSs in a go. We deliver 2 million SMSs per day.
              </div>
              </div>
            </div>
            <div className='video'>
              <video src={v2} autoPlay infiniteLoop muted preload='auto' type="video/mp4"></video>
              <div className="vid-content">
                <div className="logo">
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </div>
                <div className="text">
                <span>API Support</span><br />
                Developers can integrate our SMS Tool API to send Messages from different websites & mobile applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-det" id="process">
        <div className="process-content">
          <div className="content-left">
            <p>
            <span>NCPR / DND Numbers Delivery</span><br /><br />
            Our Transactional route SMS will not block any NCPR / DND numbers. All SMS will be delivered on time without any hassle. <br /> <br />
            <span>Quick & Secure Login</span>  <br /> <br />
            With our Secured Account Panel you can Login and send messages.  <br /> <br />
            <span>Import & Send</span> <br /> <br />
            Upload Contacts from text / csv files for sending SMS in bulk. Delivery will be apt and fast.  <br /> <br />
            <span>Reliable SMS Delivery</span> <br /> <br />
            Our Portal has multiple SMS gateways that provides fastening on SMS delivery. We provide 24?—7 delivery time.  <br /> <br />
            </p>
          </div>
          <div className="image-middle">
            <img src={img7} alt="bird" />
          </div>
          <div className="content-right">
            <p>
            <span>No Setup costs</span><br />
            No Hidden or Setup costs involved. Pay for the Packages and Enjoy the service. <br /><br />
            <span>Smart Tracking</span> <br />
            Monitor the SMS Delivered / Failure status, keep a complete track on each and every SMS logs. <br /><br />
            <span>Robust API</span> <br />
            We provide HTTP, JSON/XML API Documentation so that you could make required configurations in your applications and send SMS. <br /><br />
            <span>Perfect Analytics</span> <br />
            Send and track all the SMS with detailed reports and get an overview with our single platform. <br /><br />
            </p>
          </div>
        </div>
        <div className="red-bar">
          <h1>Guaranteed Delivery with AARIKA Bulk SMS! Opt in Soon <button>For Free Demo Account</button> </h1>
        </div>
        <div className="bulk-sms-process">
          <h1>AARIKA BULKSMS PROCESS.</h1>
          <p>
            At AARIKA; delivery is 100% guarantee. We guard your privacy like a secret. All the SMS sent thorough our portal is secured & encrypted.
          </p>
          <div className="card-start">
            <div className="cards">
              <div className="logo">
                <FontAwesomeIcon icon={faBoxOpen} />
              </div>
              <div className="card-box">
                <h4>1. Pick</h4>
                <p>
                  Check our Pricing Plans and pick your preferred package.
                </p>
              </div>
            </div>
            <div className="cards">
              <div className="logo">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              </div>
              <div className="card-box">
                <h4>2. Pay</h4>
                <p>
                  Pay / Transfer your payment with our flexible options.
                </p>
              </div>
            </div>
            <div className="cards">
              <div className="logo">
              <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="card-box">
                <h4>3. Get</h4>
                <p>
                  Your credentials will be sent to your Email.
                </p>
              </div>
            </div>
            <div className="cards">
              <div className="logo">
                <FontAwesomeIcon icon={faLocationCrosshairs} />
              </div>
              <div className="card-box">
                <h4>4. Shoot</h4>
                <p>
                  Login & Shoot your SMS Campaigns and get it delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="prices" id='prices'>
        <h1>Trusted by over <span>5000+</span> people</h1>
        <p>
          We are not having Setup Costs | No License Costs | No Monthly Costs | No Sender ID Costs. You just pick our plans below and <br />signup. We accept online Payments too.
        </p>
        <div className="table">
          <div className="tab">
            Promotional SMS / Transactional SMS
          </div>
          <div className="table begin">
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Trial Pack</Th>
                    <Th>Classic</Th>
                    <Th>Corporate</Th>
                    <Th>Any Quantity</Th>
                  </Tr>
                  <Tr>
                    <Th>
                    INR 1500 <br /><span>+18% GST Applicable</span> 
                    </Th>
                    <Th>
                    INR 7500 <br /><span>+18% GST Applicable</span> 
                    </Th>
                    <Th>
                    INR 15000 <br /><span>+18% GST Applicable</span> 
                    </Th>
                    <Th>
                    CUSTOM <br /><span>+18% GST Applicable</span> 
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>10,000 SMS Credits</Td>
                    <Td>50,000 SMS Credits</Td>
                    <Td>100,000 SMS Credits</Td>
                    <Td>CUSTOM SMS Credits</Td>
                  </Tr>
                  <Tr>
                    <Td>Rate: 0.15 paisa per SMS</Td>
                    <Td>Rate: 0.15 paisa per SMS</Td>
                    <Td>Rate: 0.15 paisa per SMS</Td>
                    <Td>Rate: 0.15 paisa per SMS</Td>
                  </Tr>
                  <Tr>
                    <Td>Powerful Web APIs</Td>
                    <Td>Powerful Web APIs</Td>
                    <Td>Powerful Web APIs</Td>
                    <Td>Powerful Web APIs</Td>
                  </Tr>
                  <Tr>
                    <Td>Transactional Route</Td>
                    <Td>Transactional Route</Td>
                    <Td>Transactional Route</Td>
                    <Td>Transactional Route</Td>
                  </Tr>
                  <Tr>
                    <Td>Default Sender ID</Td>
                    <Td>Default Sender ID</Td>
                    <Td>Default Sender ID</Td>
                    <Td>Default Sender ID</Td>
                  </Tr>
                  <Tr>
                    <Td>99.99% Server Uptime</Td>
                    <Td>99.99% Server Uptime</Td>
                    <Td>99.99% Server Uptime</Td>
                    <Td>99.99% Server Uptime</Td>
                  </Tr>
                  <Tr>
                    <Td>Send Scheduled SMS</Td>
                    <Td>Send Scheduled SMS</Td>
                    <Td>Send Scheduled SMS</Td>
                    <Td>Send Scheduled SMS</Td>
                  </Tr>
                  <Tr>
                    <Td>Send Group SMS</Td>
                    <Td>Send Group SMS</Td>
                    <Td>Send Group SMS</Td>
                    <Td>Send Group SMS</Td>
                  </Tr>
                  <Tr>
                    <Td>Upload from Text / CSV</Td>
                    <Td>Upload from Text / CSV</Td>
                    <Td>Upload from Text / CSV</Td>
                    <Td>Upload from Text / CSV</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>User Friendly UI</Th>
                    <Th>User Friendly UI</Th>
                    <Th>User Friendly UI</Th>
                    <Th>User Friendly UI</Th>
                  </Tr>
                  <Tr>
                    <Th><Button colorScheme='blue' size='lg'>Button</Button></Th>
                    <Th><Button colorScheme='blue' size='lg'>Button</Button></Th>
                    <Th><Button colorScheme='blue' size='lg'>Button</Button></Th>
                    <Th><Button colorScheme='blue' size='lg'>Button</Button></Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="price-end">
          <div className="get-demo">
            <span>GET A DEMO ACCOUNT,</span> AND EXPERIENCE THE DELIVERY OF OUR PORTAL.
          </div>
          <div className="promotional-sms">
            <span>Promotional SMS</span> <br /><br />

            Boost your business with the magic of AARIKA Promotional SMS. With our promotional package, there will an automatic DND filter within our the SMS Portal. We also provide a default sender ID. <br />
            <br />

            <span>Transactional SMS</span> <br /> <br />

            As per the current market trend, Transactional SMS have gained tremendous success. This is majorly used by companies for promotion, marketing and other business purpose. With this route, there is no filtering on DND and sender ID. 100% SMS deliverable is achieved with the Transactional SMS. <br />
            <br />
            <br />

            <button>CONTACT US</button>
          </div>
        </div>
      </section>
      <section className="contact-us" id='contactus'>
        <h1>Contact<span>US</span></h1>
        <p>
          Have a question or need to solve a problem? We are happy to help you with our online chat / contact us with the below number. Our team work around the clock to make sure requests are answered as soon as possible.
        </p>
        <div className="details">
          <div className="address">
          <span>Bangalore Address:</span> <br />
          Xpova Web iSanchar Private Limited,
          4th Floor, Davanam Golden Prime Sqaure,
          Next to Total Mall, Opposite Madivala Police Station,
          Koramangala, Bengaluru 560 066. <br />
 <br />
          <span>Delhi Address:</span> <br />
          Xpova Web iSanchar Private Limited,
          316, Pratap Bhawan,
          5 Bahadur Shah Zafar Marg, ITO,
          New Delhi-110002 <br />
 <br />
          <span>Phone no: 080-50 247 247</span> <br />
          <span>Email : info@sanchar.mobi</span> <br />
 <br />
          <span>AVAILABLE FROM 10AM - 8PM</span> <br />
          </div>
          <div className="details-input">
            <form ref={form} onSubmit={sendEmail}>
              <div className="text">
                <span>TRY OUR FREE DEMO ACCOUNT</span><br />
                Fill in the below details to send a Free Demo Account Credentials.
              </div>
              <div className="cf3">
                <div className="name">
                  <input type="text" name="Name" placeholder='Your Name' required />
                </div>
                <div className="email">
                  <input type="text" name='Email' placeholder='Your E-mail' required />
                </div>
              </div>
              <div className="cs3">
                <div className="mobile-no">
                  <input type="text" name='Mobile' placeholder='Mobile Number' required />
                </div>
                <div className="city">
                  <input type="text" name='City' placeholder='City' required />
                </div>
              </div>
              <div className="ct3">
                <Select variant='filled' placeholder='Select Your Route'>
                  <option value='option1'>Transactional Route</option>
                  <option value='option2'>Promotional Route</option>
                </Select>
                <div className="message">
                  <textarea name="message" placeholder='Message'></textarea>
                </div>
              </div>
              <button>SEND</button>

            </form>
          </div>
        </div>
        <div className="copyright">

        </div>
      </section>
    </main>
    </>
  )
}

const MyCarousel = () => (
  <Carousel
    infiniteLoop
    interval={3000}
    showStatus={false}
    showThumbs={false}
    showArrows={true}
    
  >
    <Box w="full" h={'100vh'} display={'block'}>
      <Image src={imgs2} h="95vh" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Mission
      </Heading>
      <Text bgColor={'blackAlpha.600'} color={'white'} {...textOptions}>
        Our mission is to empower businesses with the tools they need to succeed in an increasingly competitive and fast-paced digital landscape. We aim to be the driving force behind effective communication strategies, providing our clients with the means to connect, engage, and thrive.
      </Text>
    </Box>
    <Box w="full" h={'100vh'} display={'block'}>
      <Image src={imgs3} h="95vh" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        100% your SMS will deliver. We Guarantee !
      </Heading>
      <Text bgColor={'blackAlpha.600'} color={'white'} {...textOptions}>
        Whether you are a small business, enterprise, or nonprofit organization, we are here to elevate your communication game. Join us in redefining the way you connect with your audience through the power of bulk SMS.
      </Text>
    </Box>
    <Box w="full" h={'100vh'} display={'block'}>
      <Image src={imgs4} h="95vh" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Get started today and witness the impact of seamless and efficient communication with us.
      </Heading>
    </Box>
  </Carousel>
);

export default Home