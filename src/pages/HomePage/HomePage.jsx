import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookList from "../../components/BookList/BookList";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";

const HomePage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    
    const hasSeenBanner = localStorage.getItem("hasSeenWelcomeBanner");
    if (!hasSeenBanner) {
      setIsBannerVisible(true);
      localStorage.setItem("hasSeenWelcomeBanner", "true");
    }
  }, []);

  const hideBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className="relative">
     
      {isBannerVisible && (
        <WelcomeBanner onHide={hideBanner} isVisible={isBannerVisible} />
      )}

    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isBannerVisible ? 0.5 : 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-10"
      >
        <BookList />
      </motion.div>
    </div>
  );
};

export default HomePage;
