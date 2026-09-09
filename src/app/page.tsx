"use client";

import { motion } from "framer-motion";
import { Camera, Video, ArrowRight, Mail, Scissors, TrendingUp } from "lucide-react";

const portfolioVideos = [
  { type: "youtube", src: "https://www.youtube.com/embed/X2twjH13_QY", poster: "/images/cover-1.png", title: "Lucho Salamank", category: "Cinematic", format: "horizontal" },
  { type: "youtube", src: "https://www.youtube.com/embed/-vbec5Uq9DQ", title: "4K Showreel", category: "Showreel", format: "horizontal" },
  { type: "youtube", src: "https://www.youtube.com/embed/BBVxu6F03Co", title: "Nuevo Proyecto", category: "Video", format: "horizontal" },
  { type: "youtube", src: "https://www.youtube.com/embed/ylkVuBeHPC4", title: "Nuevo Proyecto 2", category: "Video", format: "horizontal" },
  { type: "youtube", src: "https://www.youtube.com/embed/jFQqOYhFEmE", title: "Nuevo Reel 1", category: "Video", format: "horizontal" },
  { type: "youtube", src: "https://www.youtube.com/embed/HwsJ_GvH6vo", title: "Nuevo Reel 2", category: "Video", format: "horizontal" },
  { type: "youtube", src: "https://www.youtube.com/embed/7aZrpAR4ZjA", title: "Nuevo Reel 3", category: "Video", format: "horizontal" },
  { type: "youtube", src: "https://www.youtube.com/embed/L1m-F33pR2M", title: "Nuevo Short 2", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/JNWQjRzdRBw", title: "Reel 8", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/M2lcfI8GUGw", title: "Reel 7", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/GUjQmcOUm1w", title: "Reel 1", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/J4yoPDHJAt8", title: "Reel 6", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/2fd2-Zz5QG8", title: "Reel 3", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/p2ondrblxyY", title: "Reel 4", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/4DVodxGwxDA", title: "Reel 5", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/a9ll6bTbChE", title: "Reel 9", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/h5PeVfzlsYs", title: "Reel 10", category: "Shorts", format: "vertical" },
  { type: "youtube", src: "https://www.youtube.com/embed/MJ9tlWbTOeY", title: "Nuevo Short 1", category: "Shorts", format: "vertical" },
  { type: "local", src: "/videos/Michael_Jackson.mp4", title: "Michael Jackson", category: "Reel", format: "vertical" },
  { type: "local", src: "/videos/Video_podcast.mp4", title: "Video Podcast", category: "Reel", format: "vertical" }
];

import { useState } from "react";

const YouTubePlayer = ({ src, poster }: { src: string, poster?: string }) => {
  const [isPlaying, setIsPlaying] = useState(!poster);
  
  if (!isPlaying && poster) {
    return (
      <div 
        className="w-full h-full relative cursor-pointer group/yt"
        onClick={() => setIsPlaying(true)}
      >
        <img src={poster} alt="Video cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/yt:bg-black/40 transition-colors">
          <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover/yt:scale-110 transition-transform">
            <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white ml-1"></div>
          </div>
        </div>
      </div>
    );
  }

  // Ensure autoplay is true when activated by click
  const embedUrl = src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;

  return (
    <iframe 
      src={embedUrl} 
      className="w-full h-full" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="text-2xl font-bold tracking-[0.3em]">RUSH</div>
        <div className="flex gap-6 text-sm tracking-widest uppercase hidden md:flex">
          <a href="#services" className="hover:text-gray-400 transition-colors">Servicios</a>
          <a href="#work" className="hover:text-gray-400 transition-colors">Portafolio</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contacto</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-lights-in-a-video-studio-34444-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-6"
          >
            RUSH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl tracking-wide mb-10"
          >
            Capturando la esencia del movimiento y la luz. Producción de video y fotografía de alto nivel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a href="#work" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gray-200 transition-colors">
              Ver nuestro trabajo
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm tracking-[0.5em] text-gray-500 uppercase mb-4">Lo que hacemos</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Servicios Especializados</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm group hover:border-white/30 transition-all"
            >
              <Video className="w-10 h-10 mb-6 text-gray-400 group-hover:text-white transition-colors" />
              <h4 className="text-xl font-bold mb-4">Grabación de Contenido</h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Producción audiovisual cinematográfica. Desde videos verticales, horizontales y documentales, hasta cobertura de eventos. Utilizamos equipos de última generación.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm group hover:border-white/30 transition-all"
            >
              <Scissors className="w-10 h-10 mb-6 text-gray-400 group-hover:text-white transition-colors" />
              <h4 className="text-xl font-bold mb-4">Edición de Video</h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Edición profesional especializada para videos verticales y reels. Creamos contenido dinámico, con ritmo y alto impacto visual que conecta con tu audiencia.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm group hover:border-white/30 transition-all"
            >
              <TrendingUp className="w-10 h-10 mb-6 text-gray-400 group-hover:text-white transition-colors" />
              <h4 className="text-xl font-bold mb-4">Anuncios en Meta Ads</h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Potencialización de ventas mediante pauta publicitaria. Diseñamos estrategias y campañas enfocadas en conversiones reales para escalar tu negocio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-32 px-6 bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.5em] text-gray-500 uppercase mb-4">Casos de Éxito</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Resultados Comprobados en Ventas</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20">
                <TrendingUp className="w-4 h-4" />
                <span>ROAS de hasta 10.89x</span>
              </div>
              <h4 className="text-3xl font-bold leading-tight">
                Multiplicamos por 10 lo invertido en tus campañas de Meta Ads.
              </h4>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                No solo creamos contenido visual de alta calidad, sino que lo transformamos en una máquina de ventas. Hemos manejado e-commerce completos en Shopify, optimizando integraciones y embudos de conversión para asegurar que cada dólar invertido retorne con máxima rentabilidad.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img 
                src="/images/meta-ads-roas.png" 
                alt="Resultados de campañas en Meta Ads" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-sm font-medium tracking-wider text-blue-300 mb-1">EVIDENCIA REAL</p>
                <p className="text-white font-bold text-xl">Administrador de Anuncios Meta</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm tracking-[0.5em] text-gray-500 uppercase mb-4">Portafolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Trabajos Recientes</h3>
            </div>
          </div>
          
          {/* Changed to an auto-fit grid to better support multiple videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {portfolioVideos.map((video, idx) => (
              <div key={idx} className={`flex flex-col bg-zinc-900 overflow-hidden rounded-xl border border-white/5 ${video.format === 'horizontal' ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}>
                <div className={`relative w-full ${video.format === 'horizontal' ? 'aspect-video' : 'aspect-[9/16]'}`}>
                  {video.type === "local" ? (
                    <video 
                      className="w-full h-full object-cover"
                      playsInline controls preload="metadata"
                      poster={video.poster}
                    >
                      <source src={`${video.src}#t=0.001`} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                      {video.src ? (
                        <YouTubePlayer src={video.src} poster={video.poster} />
                      ) : (
                        <span className="text-sm border border-zinc-600 px-4 py-2 rounded-md">Esperando enlace de YouTube...</span>
                      )}
                    </div>
                  )}
                </div>
                <div className="p-4 bg-zinc-900 flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-white leading-tight">{video.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{video.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-sm tracking-[0.5em] text-gray-500 uppercase mb-4">Hablemos</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-12">¿Listo para crear algo increíble?</h3>
          
          <a href="mailto:esteban.granada.rush@gmail.com" className="text-xl md:text-2xl font-light hover:text-gray-400 transition-colors mb-4 border-b border-white/20 pb-2 break-all">
            esteban.granada.rush@gmail.com
          </a>
          
          <a href="tel:+573170313702" className="text-xl md:text-2xl font-light hover:text-gray-400 transition-colors mb-12">
            317 0313 702
          </a>
          
          <div className="flex gap-8 mt-4">
            <a href="mailto:esteban.granada.rush@gmail.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
      
      <footer className="py-8 text-center text-sm text-gray-600 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} RUSH. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
