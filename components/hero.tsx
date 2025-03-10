"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle, Github, Linkedin, Mail, Phone } from "lucide-react";
import LaptopViewer from "./laptop-viewer";
import content from "./content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-16">
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl z-0"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto grid md:grid-cols-2 gap-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.name}
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-medium mb-6 text-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content["job-title"]}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {content["headline"]}
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* <motion.button */}
            {/*   whileHover={{ scale: 1.05 }} */}
            {/*   whileTap={{ scale: 0.95 }} */}
            {/*   className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-primary-foreground font-medium text-lg" */}
            {/* > */}
            {/*   View My Work */}
            {/* </motion.button> */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-primary-foreground font-medium text-lg"
            >
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              whileHover={{ y: -5 }}
              href={content.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href={content.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href={`mailto:${content.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href={`tel:${content.phone}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-[500px] flex justify-center items-center xl:h-[600px]"
        >
          <div className="w-full h-full">
            <LaptopViewer />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-8"
      >
        <ArrowDownCircle className="w-10 h-10 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
