"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import content from "./content";

export default function Biography() {
  return (
    <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/Anonymous.svg"
                alt={content.name}
                width={500}
                height={500}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-2xl z-0"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-r from-secondary to-primary rounded-full opacity-20 blur-2xl z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.25, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              className="flex items-center gap-2 text-muted-foreground"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="h-5 w-5" />
              <span>{content.location}</span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {content["about-me"].title}
            </h3>

            {/* <p className="text-lg text-muted-foreground"> */}
            {/*   I&apos;m a software engineer based in Tbilisi, Georgia, with a passion for programming that ignited at the age */}
            {/*   of 12. My journey began with competitive programming, where I mastered essential algorithms and honed my */}
            {/*   problem-solving skills. */}
            {/* </p> */}
            {/**/}
            {/* <p className="text-lg text-muted-foreground"> */}
            {/*   Over time, my focus shifted towards web development, and I&apos;ve built expertise in both frontend and backend */}
            {/*   technologies. I&apos;ve worked with startups and established companies across various industries, helping them */}
            {/*   solve complex problems and deliver exceptional digital experiences. */}
            {/* </p> */}
            {/**/}
            {/* <p className="text-lg text-muted-foreground"> */}
            {/*   My approach combines technical expertise with a deep understanding of user needs. I&apos;m excited to apply my */}
            {/*   diverse skills and knowledge to create innovative solutions in the software engineering world. */}
            {/* </p> */}

            {content["about-me"].detailed.split("\n").map((line, index) => (
              <p className="text-lg text-muted-foreground" key={index}>
                {line}
              </p>
            ))}

            <div className="pt-4">
              <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center text-lg font-medium text-primary hover:text-secondary transition-colors"
                >
                  Learn more about my journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
