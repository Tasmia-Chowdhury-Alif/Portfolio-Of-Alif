'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, FileCode, Calendar, Users, Zap, CheckCircle, ArrowRight, Sparkles, AlertTriangle, Lightbulb } from 'lucide-react'
import { projects } from '@/components/sections/projects'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollProgress } from '@/components/scroll-progress'


export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = parseInt(params.id as string)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => router.push('/#projects')}>Back to Projects</Button>
        </div>
      </div>
    )
  }

  const currentIndex = projects.findIndex((p) => p.id === projectId)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* HERO SECTION */}
        <section className="relative h-screen min-h-[620px] flex items-center overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            quality={92}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-25 mix-blend-overlay`} />

          {/* Glow Orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20`} />
            <div className={`absolute bottom-20 -left-40 w-[500px] h-[500px] bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-10`} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <Button
                  variant="ghost"
                  onClick={() => router.push('/#projects')}
                  className="mb-8 text-white/90 hover:text-white hover:bg-white/10 group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Projects
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white mb-6">
                  <Sparkles className="w-4 h-4" /> {project.subtitle}
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter mb-6">
                  {project.title}
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Minimal Interactive Buttons */}
              {/* Minimal Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                {/* Live Demo */}
                {project.links.live && (
                  <Button
                    size="sm"
                    className="
                      h-10 px-5 rounded-full
                      bg-white 
                      text-black
                      hover:text-white
                      hover:opacity-90
                      hover:bg-linear-to-r from-cyan to-electric-blue font-semibold
                      transition-all duration-300
                      shadow-md
                      group
                    "
                    asChild
                  >
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {/* Source Code */}
                {project.links.github && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="
                      h-10 px-5 rounded-full
                      border-none
                      shadow-white
                      bg-transparent/50
                      hover:bg-transparent/50
                      text-white
                      hover:text-white
                      dark:hover:text-white
                      backdrop-blur-md
                      hover:shadow-md 
                      hover:shadow-cyan/40
                      transition-all duration-300
                      group
                    "
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Source Code
                    </a>
                  </Button>
                )}

                {/* API Docs */}
                {project.links.docs && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="
                      group
                      h-10 px-5 rounded-full
                      border-none
                      shadow-white
                    bg-transparent/50
                    hover:bg-transparent/50
                    text-white
                    hover:text-white
                    dark:hover:text-white
                      backdrop-blur-md
                      hover:shadow-md 
                      hover:shadow-cyan/40
                      transition-all duration-300
                    "
                    asChild
                  >
                    <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                      <FileCode className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      API Docs
                    </a>
                  </Button>
                )}
              </motion.div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="absolute bottom-10 left-0 right-0 z-10">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 bg-card/80 dark:bg-card/70 backdrop-blur-xl border border-border rounded-2xl py-5 px-8 w-fit mx-auto">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  {project.timeline}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4" />
                  {project.teamSize}
                </div>
                <span className={`px-5 py-1 rounded-full text-sm font-medium border ${project.status === 'Live' ? 'border-emerald-500 text-emerald-400' : 'border-yellow-500 text-yellow-400'}`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="relative py-20 bg-grid">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto space-y-20">

              {/* Technology Stack - Compact */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Zap className="w-7 h-7 text-cyan" />
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-3 px-5 py-3.5 bg-card border border-border rounded-2xl hover:border-cyan/40 transition-all"
                    >
                      <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                      <span className="font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <CheckCircle className="w-7 h-7 text-emerald-500" />
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.longFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 6 }}
                      className="flex gap-4 p-6 rounded-3xl bg-card border border-border hover:border-emerald-500/30 transition-all"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges Faced - Improved */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <AlertTriangle className="w-7 h-7 text-orange-500" />
                  Challenges Faced
                </h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                      className="p-7 rounded-3xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 hover:border-orange-500/40 group"
                    >
                      <div className="flex gap-4">
                        <div className="mt-1">
                          <AlertTriangle className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <p className="leading-relaxed text-foreground/90">{challenge}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Future Improvements - Improved */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Lightbulb className="w-7 h-7 text-cyan" />
                  Future Improvements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.futureImprovements.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      transition={{ delay: i * 0.08 }}
                      className="p-7 rounded-3xl bg-gradient-to-br from-cyan/5 to-transparent border border-cyan/20 hover:border-cyan/40 group"
                    >
                      <div className="flex gap-4">
                        <div className="mt-1">
                          <Lightbulb className="w-5 h-5 text-cyan group-hover:rotate-12 transition-transform" />
                        </div>
                        <p className="leading-relaxed text-foreground/90">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="pt-12 border-t border-border flex flex-col sm:flex-row gap-6"
              >
                {prevProject && (
                  <Link href={`/projects/${prevProject.id}`} className="group flex-1">
                    <div className="p-6 rounded-3xl border border-border hover:border-cyan/30 hover:bg-card transition-all">
                      <p className="text-xs text-muted-foreground">Previous Project</p>
                      <p className="font-medium mt-1 group-hover:text-cyan transition-colors">{prevProject.title}</p>
                    </div>
                  </Link>
                )}
                {nextProject && (
                  <Link href={`/projects/${nextProject.id}`} className="group flex-1">
                    <div className="p-6 rounded-3xl border border-border hover:border-cyan/30 hover:bg-card transition-all text-right">
                      <p className="text-xs text-muted-foreground">Next Project</p>
                      <p className="font-medium mt-1 group-hover:text-cyan transition-colors">{nextProject.title}</p>
                    </div>
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}