import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer>
                <p>Copyright ©️ {year} Shubham </p>
            </footer>
        </>
    );   
}

export default Footer;