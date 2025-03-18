"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionReveal from "@/components/section-reveal";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import content from "@/components/content";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionReveal immediate={true}>
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-12 text-center inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
                backgroundSize: ["100% 100%", "200% 200%"],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              About Me
            </motion.h1>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <SectionReveal
              direction="right"
              className="md:sticky md:top-24 h-max"
              delay={0.2}
              immediate={true}
            >
              <motion.div
                className="w-full aspect-square flex justify-center items-stretch max-w-[400px] mx-auto overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/me.jpg"
                  alt={content.name}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </motion.div>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.2} immediate={true}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-100">
                  {content.name}
                </h2>
                <h3 className="text-xl text-blue-400">Software Engineer</h3>

                <motion.div
                  className="flex items-center gap-2 text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>{content.location}</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a
                    href={`mailto:${content.email}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {content.email}
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a
                    href={`tel:${content.phone}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {content.phone}
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <a
                    href={content.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {content.linkedin}
                  </a>
                </motion.div>

                {content["about-me"].detailed.split("\n").map((paragraph) => (
                  <p key={paragraph} className="text-gray-300">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    {content.education.map((edu) => (
                      <motion.div
                        key={edu.degree}
                        className="bg-gray-800/30 p-4 rounded-lg border border-gray-700"
                        whileHover={{
                          x: 5,
                          borderColor: "rgba(96, 165, 250, 0.5)",
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-medium text-gray-200">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-400">
                          {edu.institution}, {edu.period}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.2}>
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">
                My Journey
              </h3>

              <div className="space-y-8">
                {content.experience.map((job) => (
                  <motion.div
                    key={job.title}
                    className={`relative pl-8 border-l-2 ${job.colors.border}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full ${job.colors.bg}`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    ></motion.div>
                    <h4 className="text-xl font-medium text-gray-200">
                      {job.title}
                    </h4>
                    <p className="text-gray-400 mb-2">{job.period}</p>
                    <p className="text-gray-300">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="mt-16 max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {content["technical-expertise"].map((category) => (
                  <motion.div
                    key={category.category}
                    className="bg-gray-800/30 p-4 rounded-lg border border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(96, 165, 250, 0.5)",
                    }}
                  >
                    <h4 className="font-medium text-blue-400 mb-2">
                      {category.category}
                    </h4>
                    <p className="text-gray-300">
                      {category.technologies.join(", ")}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
