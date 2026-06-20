"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

const varianContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const varianItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

function gunakanRotasiOtomatis(jumlahTestimoni: number, interval: number) {
  const [indeksAktif, setIndeksAktif] = useState(0)

  useEffect(() => {
    if (interval <= 0 || jumlahTestimoni <= 1) return

    const timer = setInterval(() => {
      setIndeksAktif((sekarang) => (sekarang + 1) % jumlahTestimoni)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, jumlahTestimoni])

  return [indeksAktif, setIndeksAktif] as const
}

function gunakanAnimasiSaatTerlihat() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return { sectionRef, controls }
}

function NavigasiTitik({
  jumlah,
  indeksAktif,
  onPilih,
}: {
  jumlah: number
  indeksAktif: number
  onPilih: (index: number) => void
}) {
  return (
    <div className="flex items-center gap-3 pt-4">
      {Array.from({ length: jumlah }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPilih(index)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            indeksAktif === index ? "w-10 bg-[#86efac]" : "w-2.5 bg-[#4a7c59]/30 hover:bg-[#4a7c59]/60"
          }`}
          aria-label={`View testimonial ${index + 1}`}
        />
      ))}
    </div>
  )
}

function KartuTestimoni({ testimoni, aktif }: { testimoni: Testimonial; aktif: boolean }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: aktif ? 1 : 0,
        x: aktif ? 0 : 100,
        scale: aktif ? 1 : 0.9,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ zIndex: aktif ? 10 : 0 }}
    >
      <div className="flex h-full flex-col rounded-2xl border border-[#4a7c59]/20 bg-[#0f1a0f] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:p-10">
        <div className="mb-6 flex gap-2">
          {Array(testimoni.rating)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#eab308] text-[#eab308]" />
            ))}
        </div>

        <div className="relative mb-6 flex-1">
          <Quote className="absolute -top-4 -left-4 h-10 w-10 rotate-180 text-[#4a7c59]/20" />
          <p className="relative z-10 text-lg leading-relaxed font-medium text-[#f0fdf4] md:text-xl">
            "{testimoni.content}"
          </p>
        </div>

        <Separator className="my-5 bg-[#4a7c59]/20" />

        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border border-[#4a7c59]/40">
            <AvatarImage src={testimoni.avatar} alt={testimoni.name} />
            <AvatarFallback>{testimoni.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-[#f0fdf4]">{testimoni.name}</h3>
            <p className="text-sm text-[#a7c9b4]">
              {testimoni.role}, <span className="text-[#86efac]">{testimoni.company}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function AnimatedTestimonials({
  title = "Dipercaya oleh Klien Kami",
  subtitle = "Jangan hanya mendengar dari kami. Lihat apa kata mereka tentang solusi digital dan ekosistem yang kami bangun.",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Dipercaya oleh berbagai perusahaan",
  className,
}: AnimatedTestimonialsProps) {
  const { sectionRef, controls } = gunakanAnimasiSaatTerlihat()
  const [indeksAktif, setIndeksAktif] = gunakanRotasiOtomatis(testimonials.length, autoRotateInterval)

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`overflow-hidden bg-[#0a0d0a] py-24 md:py-32 ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={varianContainer}
          className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={varianItem} className="flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-[#f0fdf4] md:text-5xl lg:text-6xl">{title}</h2>

              <p className="max-w-150 text-lg leading-relaxed text-[#a7c9b4]">{subtitle}</p>

              <NavigasiTitik jumlah={testimonials.length} indeksAktif={indeksAktif} onPilih={setIndeksAktif} />
            </div>
          </motion.div>

          <motion.div variants={varianItem} className="relative mr-4 h-full min-h-87.5 md:min-h-100 lg:mr-10">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4a7c59]/15 blur-[80px]" />

            {testimonials.map((testimoni, index) => (
              <KartuTestimoni key={testimoni.id} testimoni={testimoni} aktif={indeksAktif === index} />
            ))}

            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border border-[#4a7c59]/10 bg-[#4a7c59]/5"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl border border-[#4a7c59]/10 bg-[#4a7c59]/5"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}