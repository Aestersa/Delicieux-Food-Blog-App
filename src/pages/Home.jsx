import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
import Modal from "../components/Modal/Modal";
import { useState, useEffect } from "react";

const Home = () => {
  
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {setModalOpen(false)};
  const open = () => {setModalOpen(true)}; 

  useEffect(() => {
    setTimeout(() => (
      modalOpen ? close() : open()
    ), 1000)
  }, [])

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      <Veggie />
      <Popular />
    </motion.div>
  );
};

export default Home;
