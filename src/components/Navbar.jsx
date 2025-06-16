import React from 'react'
import GlueNav from '../animations/GlueNav'

const Navbar = () => {
    let items = [
        { label: "Home", path: "#home" },
        { label: "About", path: "#about" },
        { label: "Cities", path: "#cities" },
        { label: "Contact", path: "/contact-us" },
    ];

    const token = localStorage.getItem("token");
    if (token) {
        items = items.filter(item => item.label !== "Contact");
        items.push({ label: "Admin", path: "/admin/dashboard" });
    }

    return (
        <div className='w-full h-[60px] bg-white flex items-center justify-center  sticky top-0 z-50'>
            <div className="flex items-center h-full px-1 sm:px-2 md:px-4">
                <GlueNav
                    items={items}
                    particleCount={10}
                    particleDistances={[60, 8]} 
                    particleR={60} 
                    initialActiveIndex={0}
                    animationTime={400}
                    timeVariance={200}
                    colors={[1, 2, 3, 4]}
                />
            </div>

        </div>
    )
}

export default Navbar

