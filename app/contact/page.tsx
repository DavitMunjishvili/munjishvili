"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react"
import SectionReveal from "@/components/section-reveal"
import content from "@/components/content"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Thanks for your message! This is a demo form.")
  }

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
              Get In Touch
            </motion.h1>
          </SectionReveal>

          <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <SectionReveal direction="right" delay={0.2} className="md:col-span-2" immediate={true}>
              <motion.div
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8"
                whileHover={{ boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-200">Contact Information</h2>

                <div className="space-y-6">
                  <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Mail className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-300">Email</h3>
                      <a
                        href={`mailto:${content.email}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        {content.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, delay: 0.3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Phone className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                      <a href={`tel:${content.phone}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                        {content.phone}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, delay: 0.6, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <MapPin className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-300">Location</h3>
                      <p className="text-gray-400">{content.location}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-300 mb-4">Connect with me</h3>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ y: -5 }}
                      href={content.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href={content.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                    >
                      <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href={content.twitter}
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                    >
                      <Twitter size={24} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.2} className="md:col-span-3" immediate={true}>
              <motion.div
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8"
                whileHover={{ boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-200">Send Me a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                      placeholder="Project Inquiry"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                      placeholder="Hello, I'd like to talk about..."
                    />
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </main>
  )
}

