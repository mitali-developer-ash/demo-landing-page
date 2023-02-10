import React from 'react'

import Button from "../Button/button.component"

const Categories = () => {
  return (
    <section className='paddingLeftRight bg-fe-blue pb-16'>
        <h1 className='heading-text'>Featured Categories</h1>
        <div className='grid  grid-cols-6 gap-5'>
            <div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
                <div>
                    <a href='#' className=''>
                        <img src='https://www.aegisshield.com/file/7709827-product/w220/h220/j.jpg'/>
                    </a>
                </div>
                <p className='heading-text pt-5'>
                    <strong>VIP HONEY</strong>
                </p>
            </div>
            <div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
            <a>
                <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img2.jpg'/>
            </a>
            <p className='heading-text pt-5'>
                <strong>Diagnostic Tools</strong>
            </p>
        </div>
        <div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
        <a>
            <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img5.jpg'/>
        </a>
        <p className='heading-text pt-5'>
            <strong>Incontinence Care</strong>
        </p>
    </div>
    <div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
    <a>
        <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img10.jpg'/>
    </a>
    <p className='heading-text pt-5'>
        <strong>Respiratory</strong>
    </p>
</div>
<div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
<a>
    <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img6.jpg'/>
</a>
<p className='heading-text pt-5'>
    <strong>Infection Control</strong>
</p>
</div>
<div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
<a>
    <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img9.jpg'/>
</a>
<p className='heading-text pt-5'>
    <strong>Personal Care</strong>
</p>
</div>
<div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
<a>
    <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img7.jpg'/>
</a>
<p className='heading-text pt-5'>
    <strong>Needles & Syringes</strong>
</p>
</div>
<div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
<a>
    <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img3.jpg'/>
</a>
<p className='heading-text pt-5'>
    <strong>DIsposable Gloves</strong>
</p>
</div>
<div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
<a>
    <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img2.jpg'/>
</a>
<p className='heading-text pt-5'>
    <strong>Diagnostic Tools</strong>
</p>
</div>
<div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
<a>
    <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img11.jpg'/>
</a>
<p className='heading-text pt-5'>
    <strong>Surgical Supplies</strong>
</p>
</div>
<div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
<a>
    <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img4.jpg'/>
</a>
<p className='heading-text pt-5'>
    <strong>Exam Room Equipment</strong>
</p>
</div>
<div className='cursor-pointer transition-all shadow  hover:shadow-2xl'>
<a>
    <img src='https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/f-cat-img8.jpg'/>
</a>
<p className='heading-text pt-5'>
    <strong>Patient Care</strong>
</p>
</div>
</div>
    <div className='flex justify-center mt-10'> <Button props={'See More'}/> </div>
    </section>
  )
}

export default Categories