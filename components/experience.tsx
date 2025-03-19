"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import content from "./content";

export default function Experience() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Experience & Education
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Briefcase className="w-8 h-8 text-primary mr-4" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Work Experience
              </h3>
            </motion.div>

            <div className="space-y-12">
              {content.experience.map((job) => (
                <motion.div
                  key={job.title + job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  <motion.div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                  <h4 className="text-xl font-bold text-foreground">
                    {job.title}
                  </h4>
                  <div className="flex justify-between text-muted-foreground mb-2">
                    <span>{job.company}</span>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <GraduationCap className="w-8 h-8 text-secondary mr-4" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Education
              </h3>
            </motion.div>

            <div className="space-y-12">
              {content.education.map((edu) => (
                <motion.div
                  key={edu.degree + edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="relative pl-8 border-l-2 border-secondary/30"
                >
                  <motion.div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                  <h4 className="text-xl font-bold text-foreground">
                    {edu.degree}
                  </h4>
                  <div className="flex justify-between text-muted-foreground mb-2">
                    <span>{edu.institution}</span>
                    <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
