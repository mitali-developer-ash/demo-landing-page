import React from 'react'

const Footer = () => {
  return (
    <section className='footer-container'>
        <div className='grid grid-cols-2 paddingLeftRight pt-16 h-3/4'>
            <div className=''>
                <h3>About</h3>
                <p className='text-fe-blue text-small'>
                    With one of the largest catalogs of medical, surgical, and diagnostic supplies available online, Medex Supply can provide your facility with all the medical equipment necessary to ensure a healthy, safe, and sterile environment. Our extensive selection, low prices, fast shipping, and friendly, knowledgeable customer service makes Medex Supply a #1 favorite with universities, hospitals, doctors, nurses, schools, laboratories, government agencies, and more.
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h3>Company</h3>
                    <ul className='text-fe-blue leading-8'>
                        <li>
                            <a href='#'>About Us</a>
                        </li>
                        <li>
                            <a href='#'>Authorized Dealer</a>
                        </li>
                        <li>
                            <a href='#'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='#'>Return Policy</a>
                        </li>
                        <li>
                            <a href='#'>Shipping Policy</a>
                        </li>
                        <li>
                            <a href='#'>Customer Feedback</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Account</h3>
                    <ul className='text-fe-blue leading-8'>
                        <li>
                            <a href='#'>Sign In</a>
                        </li>
                        <li>
                            <a href='#'>Register</a>
                        </li>
                        <li>
                            <a href='#'>Order Status</a>
                        </li>
                        <li>
                            <a href='#'>Re Order</a>
                        </li>
                        <li>
                            <a href='#'>Affiliates Program
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul className='text-fe-blue leading-8'>
                        <li>
                            <a href='#'>Chat With Us</a>
                        </li>
                        <li>
                            <a href='#'>Contact Us</a>
                        </li>
                        <li>
                            <a href='#'>abc@gmail.com</a>
                        </li>
                        <li>
                        <a href='#'>+880 1234 2343 23</a>
                    </li>
                    </ul>
                </div>
                <div>
                    <h3>Forms</h3>
                    <ul className='text-fe-blue leading-8'>
                        <li>
                            <a href='#'>Credit Application</a>
                        </li>
                        <li>
                            <a href='#'>Print Order Form</a>
                        </li>
                        <li>
                            <a href='#'>Suggestions</a>
                        </li> 
                        <li>
                            <a href='#'>Healthcare</a>
                        </li>
                        <li>
                            <a href='#'>Government</a>
                        </li>
                        <li>
                            <a href='#'>Tax Exempt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className='text-white py-12'>
            <div class="container text-center mx-0 my-auto">
                All rights reserved &copy; 2023
            </div>
        </div>
    </section>
  )
}

export default Footer