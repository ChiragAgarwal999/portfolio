"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { Navbar } from "@/components/navbar";
import { LoadingScreen } from "@/components/loading-screen";
import { portfolioData as data } from "@/lib/resume-data";


export default function Home() {
  const { scrollYProgress } = useScroll();
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = useMemo(() => data.whatsapp, []);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const body = await res.json();
    setStatus(body.ok ? "Message sent successfully." : body.error || "Failed to send.");
    if (body.ok) setForm({ name: "", email: "", message: "" });
  };

  return (
    <main>
      <LoadingScreen done={loaded} />
      <motion.div className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-primary to-secondary" style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} />
      <Navbar name={data.name} />

      <section className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-8 px-4 py-20 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-3 text-muted">Hello, I&apos;m</p>
          <h1 className="pb-2 text-5xl font-extrabold leading-[1.1] gradient-text md:text-6xl">{data.name}</h1>
          <h2 className="mt-3 text-2xl font-semibold">{data.title}</h2>
          <p className="mt-5 text-muted">{data.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl bg-primary px-5 py-3 font-medium hover:opacity-90">Contact Me</a>
            <a href="/resume.pdf" className="glass rounded-xl px-5 py-3 font-medium">{data.resumeLabel}</a>
          </div>
          <div className="mt-6 flex gap-4 text-muted">
            <a href={data.github} target="_blank" rel="noreferrer"><Github /></a>
            <a href={data.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
            <a href={`mailto:${data.email}`}><Mail /></a>
            <a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="glass relative mx-auto h-80 w-80 overflow-hidden rounded-3xl shadow-glow">
          <img
  src="/profile.jpeg"
  alt="Chirag Agarwal"
  className="h-full w-full object-cover object-top"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </motion.div>
      </section>

      <Section id="about" title="About Me"><p className="text-muted">{data.profileSummary} {data.about} {data.goals}</p></Section>
      <Section id="skills" title="Skills"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{Object.entries(data.skills).map(([k, v]) => <motion.div whileHover={{ y: -4 }} key={k} className="glass rounded-2xl p-4"><h3 className="mb-3 capitalize font-semibold">{k}</h3><div className="flex flex-wrap gap-2">{v.map((s) => <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs">{s}</span>)}</div></motion.div>)}</div></Section>
      <Section id="experience" title="Experience"><div className="space-y-4">{data.experience.map((e)=> <motion.div whileInView={{ opacity: [0,1], x:[-20,0] }} key={e.company} className="glass rounded-2xl p-5"><h3 className="font-semibold">{e.role} · {e.company}</h3><p className="text-sm text-muted">{e.duration}</p><ul className="mt-3 list-disc pl-5 text-sm text-muted">{e.points.map((p)=><li key={p}>{p}</li>)}</ul></motion.div>)}</div></Section>
      <Section id="projects" title="Projects"><div className="grid gap-4 md:grid-cols-2">{data.projects.map((p)=><motion.div whileHover={{ y: -6 }} key={p.name} className="glass flex min-h-72 flex-col rounded-2xl p-5"><h3 className="font-semibold">{p.name}</h3><p className="mt-2 text-sm text-muted">{p.description}</p><div className="mt-3 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="rounded bg-white/10 px-2 py-1 text-xs">{t}</span>)}</div><div className="mt-auto pt-5 flex gap-4 text-sm"><a className="text-secondary" href={p.live} target="_blank" rel="noreferrer">Live</a><a className="text-secondary" href={p.github} target="_blank" rel="noreferrer">GitHub</a></div></motion.div>)}</div></Section>
      <Section id="education" title="Education"><div className="space-y-4">{data.education.map((ed)=><div key={ed.degree} className="glass rounded-2xl p-5"><h3 className="font-semibold">{ed.degree}</h3><p className="text-sm text-muted">{ed.institute} · {ed.duration}</p><p className="mt-2 text-sm text-muted">{ed.notes}</p></div>)}</div></Section>
      <Section id="certifications" title="Certifications"><ul className="grid gap-3 md:grid-cols-2">{data.certifications.map(c=><li key={c} className="glass rounded-xl p-4 text-sm text-muted">{c}</li>)}</ul></Section>
      <Section id="achievements" title="Achievements"><div className="flex flex-wrap gap-3">{data.achievements.map(a=><span key={a} className="glass rounded-full px-4 py-2">{a}</span>)}</div></Section>
      <Section id="contact" title="Contact">
        <div className="grid gap-6 md:grid-cols-2">
          <form onSubmit={submitForm} className="glass space-y-3 rounded-2xl p-5">
            <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required placeholder="Name" className="w-full rounded bg-white/10 p-3"/>
            <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required type="email" placeholder="Email" className="w-full rounded bg-white/10 p-3"/>
            <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} required placeholder="Message" className="h-28 w-full rounded bg-white/10 p-3"/>
            <button className="rounded bg-primary px-4 py-2">Send Message</button><p className="text-xs text-muted">{status}</p>
          </form>
          <div className="glass rounded-2xl p-5 text-muted"><p className="mb-2 flex items-center gap-2"><Mail size={16}/><a href={`mailto:${data.email}`}>{data.email}</a></p><p className="mb-2 flex items-center gap-2"><Phone size={16}/><a href={`tel:${data.phone.replace(/\s+/g,"")}`}>{data.phone}</a></p><p className="mb-2 flex items-center gap-2"><Linkedin size={16}/><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a></p><p className="mb-2 flex items-center gap-2"><Github size={16}/><a href={data.github} target="_blank" rel="noreferrer">GitHub Profile</a></p><p className="mb-2 flex items-center gap-2"><MessageCircle size={16}/><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Chat</a></p><p>{data.location}</p></div>
        </div>
      </Section>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-muted">© {new Date().getFullYear()} {data.name}. All rights reserved.</footer>
      <a href="#" className="fixed bottom-6 right-6 rounded-full bg-primary p-3 shadow-glow"><ArrowUp size={18}/></a>
    </main>
  );
}
