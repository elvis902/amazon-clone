import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
           <img 
              className='home__image'
              src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
              alt=''
           />
           <div className='home__row'>
                <Product
                    id="123654"
                    title="ReWork: Change the Way You Work Forever by Jason Fried (Author)"
                    price={419}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41ju6JBCJmL._SX311_BO1,204,203,200_.jpg"
                />
                 <Product
                    id="123654"
                    title="American Tourister Casual Backpack (Laptop Compatibility: No, Strap Type: Adjustable
                        Outer Material: Polyester, Color: Black)"
                    price={419}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91FvDEE9sCL._UL1500_.jpg"
                />
           </div>
           <div className='home__row'>
                <Product
                    id="43564645"
                    title="SHOPTOSHOP Activity Tracker (All-day activity tracking: Track steps, distance, calories burned, active minute)"
                    price={487}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41ihFTq5-LL._AC_UL480_FMwebp_QL65_.jpg"
                />
                 <Product
                    id="56768778"
                    title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
                    price={4149}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                    id="97868767"
                    title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 128GB) - Space Grey (3rd Generation)"
                    price={80900}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_UY327_FMwebp_QL65_.jpg"
                />
           </div>
           <div className='home__row'>
                <Product
                    id="8798734"
                    title="eAirtec 102 cms (40 inches) HD Ready Smart LED TV 40DJSM (Black) (2020 Model)"
                    price={13750}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61eIoF28biL._AC_UY327_FMwebp_QL65_.jpg"
                />
           </div>
           
        </div>
    )
}

export default Home
