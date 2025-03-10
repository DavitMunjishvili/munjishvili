"use client"

import { motion } from "framer-motion"
import content from "./content"

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content["technical-expertise"].map((skill) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="p-3 rounded-lg bg-primary/10 text-primary mr-3 group-hover:bg-primary/20 transition-colors"
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-foreground">{skill.category}</h3>
              </div>

              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <motion.li
                    key={tech}
                    className="text-muted-foreground flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"
                    ></span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

