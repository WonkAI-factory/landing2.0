import { motion } from 'framer-motion'
import HeroAnimation from './HeroAnimation'

export default function HeroContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center w-full">
      {/* Left Column - Content */}
      <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Wonkai
            </span>
          </h1>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight mb-6"
        >
          Transformamos tu{' '}
          <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            idea en realidad digital
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg lg:text-xl text-text/80 leading-relaxed mb-8"
        >
          Desarrollamos software que impulsa el crecimiento de tu negocio. 
          Desde aplicaciones web hasta soluciones con inteligencia artificial, 
          creamos productos que generan resultados reales.
        </motion.p>

        {/* Key Benefits - Compact Version */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold mb-1">Desarrollo ágil</h3>
            <p className="text-text/70 text-xs">Resultados rápidos</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold mb-1">Calidad</h3>
            <p className="text-text/70 text-xs">Código limpio</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold mb-1">ROI</h3>
            <p className="text-text/70 text-xs">Resultados reales</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
        >
          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-gray-800/25 transition-all duration-300"
          >
            Ver casos de éxito
          </motion.a>
          
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            Consulta gratuita
          </motion.a>
        </motion.div>
      </div>

      {/* Right Column - Rubik Cube */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="w-full max-w-lg xl:max-w-xl mx-auto">
          <HeroAnimation />
        </div>
      </motion.div>
    </div>
  )
}
