import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Aplicaciones Web',
    description: 'Plataformas web que aumentan tus ventas y mejoran la experiencia de tus clientes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    benefits: ['+40% conversiones', 'Mejor UX', 'Escalabilidad', 'SEO optimizado']
  },
  {
    id: 2,
    title: 'Apps Móviles',
    description: 'Aplicaciones que tus clientes llevan en el bolsillo, aumentando el engagement.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    benefits: ['+60% retención', 'Notificaciones push', 'Offline-first', 'App Store ready']
  },
  {
    id: 3,
    title: 'Automatización con IA',
    description: 'Inteligencia artificial que reduce costos operativos y mejora la eficiencia.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    benefits: ['-70% tareas manuales', 'Chatbots inteligentes', 'Análisis predictivo', 'ROI en 3 meses']
  },
  {
    id: 4,
    title: 'Consultoría Digital',
    description: 'Estrategia tecnológica que transforma tu negocio y maximiza tu inversión.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    benefits: ['Roadmap claro', 'Tecnología correcta', 'Ahorro de costos', 'Ventaja competitiva']
  }
]

export default function ServicesContent() {
  return (
    <div className="space-y-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
          Soluciones que{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            generan resultados
          </span>
        </h2>
        <p className="text-lg text-text/80 max-w-2xl mx-auto">
          No solo desarrollamos software, creamos herramientas que impulsan el crecimiento de tu negocio
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-text/80 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-text/70 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 border border-white/10"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            ¿Por qué elegirnos?
          </h3>
          <p className="text-text/80 max-w-2xl mx-auto">
            No somos solo desarrolladores, somos tu socio estratégico en la transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { 
              icon: '🚀', 
              title: 'Entrega rápida', 
              description: 'MVP en 4-6 semanas, no meses' 
            },
            { 
              icon: '💰', 
              title: 'ROI garantizado', 
              description: 'Tu inversión se recupera en 3-6 meses' 
            },
            { 
              icon: '🔒', 
              title: 'Calidad premium', 
              description: 'Código limpio, escalable y mantenible' 
            },
            { 
              icon: '📈', 
              title: 'Crecimiento continuo', 
              description: 'Soporte y mejoras post-lanzamiento' 
            }
          ].map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h4 className="font-semibold mb-2">{reason.title}</h4>
              <p className="text-sm text-text/70">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
