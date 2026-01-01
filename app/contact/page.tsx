"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Phone, Linkedin, Github, Instagram, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="w-full px-6 md:px-6 transition-colors duration-300 bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 min-h-screen">
      <div className="max-w-5xl mx-auto mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Let's start a <br />
          <span className="text-indigo-600 dark:text-indigo-400">Conversation.</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-zinc-400 max-w-2xl">Have a project in mind or just want to say hi? I'm always open to discussing Back-End architecture and new technologies.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-8 rounded-2xl border bg-indigo-600 text-white dark:bg-indigo-900 dark:border-indigo-800 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="p-3 bg-white/10 rounded-xl w-fit mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-indigo-100 mb-8 leading-relaxed">Fill out the form or reach out to me directly via these channels.</p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-indigo-50 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">dirajadanu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-indigo-50 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">Central Java, Kab. Sukoharjo, Indonesia</span>
              </div>
              <div className="flex items-center space-x-4 text-indigo-50 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">+62 895 2486 3306</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-200 mb-4">Follow Me</p>
            <div className="flex gap-3">
              {[Linkedin, Github, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white transition-all duration-300 border border-indigo-400/30">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2 p-8 rounded-2xl border bg-gray-50 border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-zinc-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all text-gray-900 dark:text-zinc-100 placeholder-gray-400"
                  placeholder="Danudiraja Soenoto"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-zinc-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all text-gray-900 dark:text-zinc-100 placeholder-gray-400"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-zinc-300 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all text-gray-900 dark:text-zinc-100 placeholder-gray-400 resize-none"
                placeholder="Tell me about your project details..."
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-zinc-900"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
