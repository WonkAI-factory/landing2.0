import { motion } from 'framer-motion'

const benefits = [
  {
    id: 1,
    title: 'Aumenta tus ventas',
    description: 'Plataformas optimizadas que convierten visitantes en clientes',
    metric: '+40%',
    metricLabel: 'conversiones',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Reduce costos operativos',
    description: 'Automatización que elimina tareas repetitivas y errores humanos',
    metric: '-70%',
    metricLabel: 'tiempo manual',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Mejora la experiencia',
    description: 'Interfaces intuitivas que tus clientes amarán usar',
    metric: '+85%',
    metricLabel: 'satisfacción',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Escala tu negocio',
    description: 'Arquitecturas robustas que crecen contigo sin límites',
    metric: '10x',
    metricLabel: 'escalabilidad',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    )
  }
]

const testimonials = [
  {
    id: 1,
    name: 'María González',
    company: 'CEO, TechStart',
    content: 'Wonkai transformó completamente nuestra operación. En 3 meses redujimos costos en 60% y aumentamos ventas en 45%.',
    avatar: '👩‍💼'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    company: 'Director, InnovateCorp',
    content: 'La app que desarrollaron nos dio una ventaja competitiva enorme. Nuestros clientes están encantados.',
    avatar: '👨‍💻'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    company: 'Fundadora, DigitalFlow',
    content: 'Profesionales excepcionales. Entregaron antes de tiempo y superaron todas nuestras expectativas.',
    avatar: '👩‍🚀'
  }
]

export default function BenefitsContent() {
  return (
    <div className="space-y-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
          Resultados que{' '}
          <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            hablan por sí solos
          </span>
        </h2>
        <p className="text-lg text-text/80 max-w-3xl mx-auto">
          No prometemos milagros, pero sí resultados medibles que transforman tu negocio
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full hover:border-gray-600/50 transition-all duration-300 hover:bg-white/10 text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700/20 to-gray-600/20 rounded-xl flex items-center justify-center text-gray-300 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Metric */}
              <div className="mb-4">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {benefit.metric}
                </div>
                <div className="text-sm text-text/70 font-medium">
                  {benefit.metricLabel}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:text-gray-300 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-text/80 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-2xl p-8 lg:p-12 border border-white/10"
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h3>
          <p className="text-text/80 max-w-2xl mx-auto">
            No somos nosotros quienes hablamos de nuestros resultados, son nuestros clientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-text/70">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-text/80 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-2xl p-8 lg:p-12 border border-gray-600/30">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            ¿Listo para ver estos resultados en tu negocio?
          </h3>
          <p className="text-text/80 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos transformar tu idea en una herramienta que genere resultados reales
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-gray-800/25 transition-all duration-300"
          >
            Consulta gratuita
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
