import React from 'react'
import { NavLink } from 'react-router-dom'
import { Heart } from 'lucide-react'
import SearchButton from './SearchButton';

const Footer = ({onSearchClick, onAboutClick, onCitiesClick }) => {
    return (
        <footer className="bg-violet-950 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Heart className="h-6 w-6 text-rose-100" />
                            <span className="text-xl font-bold">Exotic Nepal</span>
                        </div>
                        <p className="text-gray-100 mb-4 text-base">
                            Nepal's most trusted Call Girl platform connecting souls across the country.
                        </p>
                        <SearchButton onClick={onSearchClick}/>
                    </div>


                    {/* <div>
                        <h4 className="font-semibold mb-4">Important Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <button onClick={onAboutClick} className="hover:text-white">
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button onClick={onCitiesClick} className="hover:text-white">
                                    Cities
                                </button>
                            </li>
                            <li>
                                <NavLink to="#" className="hover:text-white">
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="hover:text-white">
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <NavLink to="#" className="hover:text-white">
                                    Help Center
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="hover:text-white">
                                    Safety Tips
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="hover:text-white">
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="hover:text-white">
                                    Community
                                </NavLink>
                            </li>
                        </ul>
                    </div> */}
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Exotic Nepal. All rights reserved. Made with ❤️ in Nepal</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
