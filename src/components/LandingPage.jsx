import React from 'react';
import './LandingPage.css';

function App() {
    return (
        <div>
            <div className='header_banner'></div>
            <div className='header_banner2'></div>
            <div className='header_banner3'>
                <div className='img_container'>
                    <img src='/face.png' className='img_icon' />
                    <img src='/face.png' className='img_icon' />
                    <img src='/face.png' className='img_icon' />
                    <img src='/face.png' className='img_icon' />
                </div>
                <div className='menu_container'>
                    <div className='menu_text'>REFER AND EARN</div>
                    <div className='menu_text'>REFER AND EARN</div>
                    <img src='/face.png' className='img_icon' />
                    <div className='menu_text'>REFER AND EARN</div>
                </div>
            </div>
            <div className='header_banner4'>
                <div className="inner_cont">
                    <img src="/logo.png" alt="" className='logo' />
                    <input type="text" className='search_box' />
                    <img src="/cart.png" alt="" className='cart' />
                    <div className='cart_count'>0</div>
                    <img src="/cart.png" alt="" className='cart' />
                    <div className='cart_count'>0</div>
                    <div>
                        <div className='cart_text'>DISCOUNT</div>
                        <div className='cart_count'>$150,000</div>
                    </div>
                    <div className='cart_count'>
                        <div className='cart_text'>DISCOUNT</div>
                        <div className='cart_count'>$150,000</div>
                    </div>
                    <button className='btn cart_count'>UPLOAD AND PRINT</button>
                </div>
            </div>
            <div className="banner5">
                <div className="cont5">
                    <div className='menu_list'>New Arrivals</div>
                    <div className='menu_list'>New Arrivals</div>
                    <div className='menu_list'>New Arrivals</div>
                    <div className='menu_list'>New Arrivals</div>
                    <div className='menu_list'>New Arrivals</div>
                    <div className='menu_list'>New Arrivals</div>
                    <div className='menu_list'>New Arrivals</div>
                    <div className='menu_list'>New Arrivals</div>
                </div>
            </div>
            <div className="shop_out_container">
                <div className="shop_cont">
                    <img src="/art.jpg" alt="" className="art_img" />
                    <div className="art_details">
                        <div className='normal'>
                            <div className='digital'>DIGITAL PRINT</div>
                            <div className='norm'>NORMAL PRINT</div>
                        </div>
                        <div className="dropfile">
                            <img src="/cart.png" alt="" className='cart' />
                            <div className="drop">
                                Drop your files here
                                <div className="browse">or Browse</div>
                            </div>
                        </div>
                        <div className="print">
                            <div className="photo flex">PHOTO PRINT</div>
                            <div className="canvas flex">CANVAS PRINT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;