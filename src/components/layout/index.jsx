import React from 'react'
import Header from '../header';
import Footer from '../footer';
const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            <div className='mt-[70px]'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout
