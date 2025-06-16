// src/pages/Home.jsx
import React from "react";
import { useRef, useEffect, useState } from "react";
import CityDisplay from "../components/CityDisplay";
import HomeImageLaptop from "../assets/backHomeLaptop.png";
import HomeImageMobile from "../assets/backHomeMobile.png";
import AnimatedContent from "../animations/AnimatedContent";
import Stepper, { Step } from "../animations/Stepper";
import { MessageCircle, Shield, Star, MapPin, UserLock, BriefcaseMedical } from "lucide-react"
import Card from "../animations/Card";
import Footer from "../components/Footer";

const Home = () => {
  const aboutRef = useRef(null);
  const citiesRef = useRef(null);
  const homeRef = useRef(null);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const [bgImage, setBgImage] = useState(HomeImageLaptop);

  useEffect(() => {
    const updateImage = () => {
      const isMobile = window.innerWidth < 640;
      setBgImage(isMobile ? HomeImageMobile : HomeImageLaptop);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);


  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };




  return (
    <div className=" space-y-20">
      <section ref={homeRef} id="home" className="h-screen bg-gray-100 text-3xl">
        <div
          style={styles}
          className="flex flex-col min-h-screen justify-center items-center"
        >
          <div className=" w-4/5 flex flex-col justify-center items-center text-justify">
            <AnimatedContent
              distance={250}
              direction="vertical"
              reverse={true}
              duration={0.8}
              initialOpacity={0.2}
              animateOpacity
              scale={0.6}
              threshold={0.3}
              delay={0.8}
            >
              <div className="sm:text-6xl text-2xl font-bold text-white">Welcome To</div>
            </AnimatedContent>
            <AnimatedContent
              distance={250}
              direction="vertical"
              reverse={true}
              duration={0.8}
              initialOpacity={0.2}
              animateOpacity
              scale={0.6}
              threshold={0.3}
              delay={0.6}
            >
              <div className="sm:text-3xl text-lg font-bold text-white">Exotic Nepal</div>
            </AnimatedContent>
            <AnimatedContent
              distance={250}
              direction="vertical"
              reverse={true}
              duration={1.2}
              initialOpacity={0.2}
              animateOpacity
              scale={0.6}
              threshold={0.3}
              delay={0.3}
            >
              <div className="text-xl font-bold text-white sm:mt-2 mt-8 text-center"></div>
            </AnimatedContent>

          </div>
        </div>
      </section>


      <section className="py-8 bg-violet-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="sm:text-3xl text-xl font-bold sm:mb-4 mb-2">Discover the Beauty of Nepal with Our Local Companions</h2>
              <p className="text-gray-600">
              </p>
            </div>
            <p className="sm:text-lg text-base text-gray-900 my-4 text-center px-2 ">
              Unlock the hidden pleasure waiting just for you in 4 easy steps.
            </p>


            <Stepper
              initialStep={1}
              onStepChange={(step) => {
                console.log(step);
              }}
              onFinalStepCompleted={() => console.log("All steps completed!")}
              backButtonText="Previous"
              nextButtonText="Next"
            >
              <Step>
                <h2 className="font-bold">Search your location at the top.</h2>
                <p>No matter where you reside, you will get us there!</p>
              </Step>
              <Step>
                <div className="w-full">

                  <h2 className="text-base">Love thick thighs? Pick <span className="font-bold">Sneha</span></h2>
                  <h2 className="text-base">Want some curvy tweak? Pick <span className="font-bold">Myra</span></h2>
                </div>
                <p className="text-sm mt-4"> Want something else? Explore our other options.</p>
              </Step>
              <Step>
                <h2>Price too high?</h2>
                <p>Don't worry, talk to our agent, she may negotiate.</p>
              </Step>
              <Step>
                <h2 className="font-bold text-lg">Final Step</h2>
                <p className="text-sm">Make the payment and be ready to get your bed warm.</p>
              </Step>
            </Stepper>
          </div>
        </div>
      </section>


      <section ref={aboutRef} id="about" className="py-20 bg-gradient-to-br from-violet-50 to-violet-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* <Badge className="bg-rose-100 text-rose-700 mb-4">Why Choose Nepal Hearts</Badge> */}
            <h2 className="text-4xl font-bold mb-4">Features That Makes Us Special </h2>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              Experience the vibrant Nepali dance over your <span className="font-bold">WOOD</span>            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-rose-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-300 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location-Based Search</h3>
              <p className="">
                Find Hot Call Girls near you in Kathmandu, Pokhara, Chitwan, and all major cities across Nepal.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-rose-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-300 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseMedical className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical Compatibility</h3>
              <p className="">
                AIDS? No. HIV? No. Our girls are medically fit and free from any sexually transmitted diseases.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-rose-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-300 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Messaging</h3>
              <p className="">
                NO frauds, NO spam. Our platform ensures secure and genuine interactions between you and the client.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-rose-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-300 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
              <p className="">
                All profiles are manually verified to ensure authentic girls and safe experience.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-rose-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-300 rounded-lg flex items-center justify-center mb-4">
                <UserLock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secret</h3>
              <p className="">
                Don't worry about your privacy, we will never share your personal information with anyone.
              </p>
            </Card>



            <Card className="p-6 hover:shadow-lg transition-shadow border-rose-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-300 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Premium Experience</h3>
              <p className="">
                Worried about the quality of service? Our girls are trained to provide the best experience possible.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section ref={citiesRef} id="cities" className="h-auto py-16 px-4 bg-gradient-to-br from-violet-300 to-violet-50">

        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-4xl font-bold text-black">Cities We Serve</h1>
          <div className="text-center my-6">
            <p className="sm:text-xl text-base text-gray-900 max-w-2xl mx-auto mb-4">
              From Kathmandu to Pokhara, tailored Nepali companion at your doorstep.
            </p>
          </div>

        </div>
        <CityDisplay />
      </section>



    </div>
  );
};

export default Home;
