import React from 'react'

const OfferBanner = () => {
  return (
    <section className='container pl-16 home-below-carousel flex justify-between items-center'>
        <div className='flex justify-center items-center basis-1/5 gap-3'>
            <div className='w-14'>
                <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/shipping-img.png'/>  
            </div>
            <div className='no-wrap'>
                <p>
                    <strong className='text-rose-700'>Free Shipping</strong>
                    <br /> on all Orders $99+
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center basis-1/5 gap-3'>
            <div className='w-12'>
                <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/friendly-img.png'/>
            </div>
            <div className=''>
                <p>
                    <strong className='text-rose-700'>Friendly, Fast</strong>
                    <br /> Customer Support
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center basis-2/6 gap-3'>
            <div className='w-12'>
                <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/secure-img.png'/>
            </div>
            <div className=''>
                <p>
                    <strong className='text-rose-700'>Secure Payments</strong>
                    <br /> Your Information is Safe & Secure
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center basis-1/4 gap-3'>
            <div className='w-12'>
                <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/inventory-img.png'/>
            </div>
            <div className=''>
                <p>
                    <strong className='text-rose-700'>Largest Online Inventory</strong>
                    <br /> of Medical Supplies
                </p>
            </div>
           
        </div>
    </section>
  )
}

export default OfferBanner