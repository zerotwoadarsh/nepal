import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-violet-100 flex items-center justify-center px-4 py-12">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8  text-center">
                <h2 className="text-3xl font-bold text-violet-700 mb-8">Contact Us</h2>
                <p className="text-gray-600">
                    Having some trouble or need assistance? We're here to help!
                </p>
                <p className="text-gray-600 mb-12">
                    Reach out to us anytime through the following ways:
                </p>

                <div className="grid sm:grid-cols-3 gap-6 text-left">
                    {/* Call */}
                    <div className="flex flex-col items-center p-4 bg-violet-50 rounded-xl hover:shadow transition-shadow">
                        <Phone className="h-6 w-6 text-violet-600 mb-2" />
                        <h3 className="font-semibold text-violet-700">Call Us</h3>
                        <p className="text-sm text-gray-600">+977-9800000000</p>
                    </div>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/9779800000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-violet-50 rounded-xl hover:shadow transition-shadow"
                    >
                        <MessageCircle className="h-6 w-6 text-violet-600 mb-2" />
                        <h3 className="font-semibold text-violet-700">WhatsApp</h3>
                        <p className="text-sm text-gray-600">Chat Instantly</p>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:contact@exoticnepal.com"
                        className="flex flex-col items-center p-4 bg-violet-50 rounded-xl hover:shadow transition-shadow"
                    >
                        <Mail className="h-6 w-6 text-violet-600 mb-2" />
                        <h3 className="font-semibold text-violet-700">Email</h3>
                        <p className="text-sm text-gray-600">excoticnepal@gmail.com</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
