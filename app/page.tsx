'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Loader */}
      {loaderVisible && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500">
          <div className="w-12 h-12 border-4 border-gray-100 border-t-blue-900 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        navScrolled 
          ? 'bg-white/98 shadow-2xl' 
          : 'bg-white/96'
      } backdrop-blur-xl border-b border-gray-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full overflow-hidden border-2 border-indigo-600 shadow-md hover:shadow-lg transition-all hover:scale-110 flex-shrink-0">
                <img src="/profile-header.jpg" alt="Montassar Toumi" className="w-full h-full object-cover" />
              </div>
              <div className="text-sm sm:text-lg font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
                M. Toumi
              </div>
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-4 lg:gap-10 list-none">
              <li><a href="#about" className="text-gray-700 font-medium text-xs lg:text-sm hover:text-indigo-600 transition-all relative group">À propos<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#projects" className="text-gray-700 font-medium text-xs lg:text-sm hover:text-indigo-600 transition-all relative group">Projets<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#certifications" className="text-gray-700 font-medium text-xs lg:text-sm hover:text-indigo-600 transition-all relative group">Certifications<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#education" className="text-gray-700 font-medium text-xs lg:text-sm hover:text-indigo-600 transition-all relative group">Formation<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#contact" className="text-gray-700 font-medium text-xs lg:text-sm hover:text-indigo-600 transition-all relative group">Contact<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span></a></li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="md:hidden flex flex-col gap-3 mt-4 pb-4 list-none border-t border-gray-200 pt-4">
              <li><a href="#about" className="text-gray-700 font-medium text-sm hover:text-indigo-600 transition-all block py-2" onClick={() => setMobileMenuOpen(false)}>À propos</a></li>
              <li><a href="#projects" className="text-gray-700 font-medium text-sm hover:text-indigo-600 transition-all block py-2" onClick={() => setMobileMenuOpen(false)}>Projets</a></li>
              <li><a href="#certifications" className="text-gray-700 font-medium text-sm hover:text-indigo-600 transition-all block py-2" onClick={() => setMobileMenuOpen(false)}>Certifications</a></li>
              <li><a href="#education" className="text-gray-700 font-medium text-sm hover:text-indigo-600 transition-all block py-2" onClick={() => setMobileMenuOpen(false)}>Formation</a></li>
              <li><a href="#contact" className="text-gray-700 font-medium text-sm hover:text-indigo-600 transition-all block py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
              {/* Hero Content */}
              <div className="flex-1 w-full text-center lg:text-left">
                <div className="inline-block bg-gradient-to-r from-indigo-100 to-cyan-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs font-bold text-indigo-900 mb-6 sm:mb-8 pulse border border-indigo-200">
                  ✨ Étudiant Ingénieur · Embedded & IoT
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-5 text-gray-900">
                  Montassar<br />
                  <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Toumi
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-semibold mb-2 sm:mb-3">Ingénieur Systèmes Embarqués & Edge AI</p>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-8 sm:mb-10 leading-relaxed mx-auto lg:mx-0">
                  Expertise en FPGA, Jetson Xavier, STM32, ESP32. Je transforme le hardware en solutions intelligentes et connectées.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
                  <a href="#projects" className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all hover:translate-y-[-3px] text-sm sm:text-base">
                    Voir les projets
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-4 border-2 border-indigo-600 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all hover:translate-y-[-3px] hover:shadow-lg text-sm sm:text-base">
                    Me contacter
                  </a>
                </div>
              </div>

              {/* Profile Image */}
              <div className="flex-1 w-full flex justify-center mt-8 lg:mt-0">
                <div className="relative group w-full max-w-xs sm:max-w-sm">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                    <img src="/profile-hero.png" alt="Montassar Toumi" className="w-full h-auto object-cover rounded-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 lg:mt-20 max-w-2xl mx-auto lg:mx-0">
              <div className="reveal bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-100 hover:translate-y-[-5px] transition-all hover:shadow-2xl">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">7+</div>
                <div className="text-xs sm:text-sm uppercase font-bold text-gray-600 mt-2">Certifications</div>
              </div>
              <div className="reveal bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-100 hover:translate-y-[-5px] transition-all hover:shadow-2xl">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">6</div>
                <div className="text-xs sm:text-sm uppercase font-bold text-gray-600 mt-2">Projets clés</div>
              </div>
              <div className="reveal bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-100 hover:translate-y-[-5px] transition-all hover:shadow-2xl">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">NVIDIA</div>
                <div className="text-xs sm:text-sm uppercase font-bold text-gray-600 mt-2">DLI Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="reveal">
                <div className="text-xs sm:text-sm uppercase font-bold text-indigo-600 mb-2 sm:mb-3">// ingénierie & passion</div>
                <h2 className="text-3xl sm:text-4xl font-black text-left mb-4 sm:mb-6 text-gray-900">Hardware meets intelligence</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  Je suis étudiant en cycle ingénieur spécialisé <strong>Systèmes Embarqués & IoT</strong> à l'ISIMG.
                  Mon expertise couvre l'accélération matérielle sur FPGA, l'IA à la périphérie avec Jetson Xavier,
                  et l'architecture IoT sur STM32/ESP32.
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Chaque projet est une opportunité de fusionner la contrainte matérielle avec la puissance du software.
                  Certifié par le NVIDIA Deep Learning Institute et formé à Hedera Hashgraph, j'explore l'IA embarquée,
                  la vision par ordinateur et les protocoles modernes.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                  {['FPGA / Verilog', 'Jetson Xavier', 'STM32 / HAL', 'ESP32 / MicroPython', 'TensorRT / CUDA', 'C / C++ / Python', 'MQTT / Node-RED', 'React.js / Java', 'LLM / Diffusion Models'].map((skill) => (
                    <span key={skill} className="bg-white border border-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:border-indigo-600 hover:bg-indigo-50 transition-all hover:translate-y-[-2px] cursor-pointer hover:text-indigo-700 font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="reveal bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-blue-100 hover:translate-y-[-5px] transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black">🔹 Approche professionnelle</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  De l'architecture RTL à l'inférence deep learning en temps réel, je construis des systèmes fiables et optimisés. Expérience pratique en debug hardware, protocoles I2C/SPI, FreeRTOS, et déploiement cloud IoT.
                </p>
                <div className="font-bold text-sm sm:text-base text-gray-800">📍 Tunisie · Sidi Bouzid</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24 bg-gradient-to-b from-indigo-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal">
              <div className="text-xs sm:text-sm uppercase font-bold text-indigo-600 mb-2 sm:mb-3">// réalisations techniques</div>
              <h2 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4 text-gray-900">Projets clés</h2>
              <p className="text-base sm:text-lg text-gray-600">Des systèmes embarqués industriels, de l'accélération matérielle à l'IA Edge.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-max">
              {[
                { icon: '', category: 'FPGA · Hardware Acceleration', title: 'Accélérateur Matériel', desc: 'Implémentation d\'un accélérateur sur FPGA pour traitement parallèle haute performance. Optimisation RTL, réduction de latence et analyse temporelle.', techs: ['Verilog/VHDL', 'Quartus', 'Timing closure'] },
                { icon: '', category: 'Edge AI · Computer Vision', title: 'Vision sur Jetson Xavier', desc: 'Déploiement de modèles deep learning (YOLO) avec TensorRT, optimisation pour inférence temps réel sur plateforme NVIDIA.', techs: ['TensorRT', 'CUDA', 'OpenCV', 'PyTorch'] },
                { icon: '', category: 'STM32 · Embarqué temps réel', title: 'Domotique sur STM32', desc: 'Système de contrôle multi-capteurs, interface LCD, FreeRTOS, communication UART/I2C, gestion d\'actionneurs en temps réel.', techs: ['STM32F4', 'FreeRTOS', 'HAL', 'C'] },
                { icon: '', category: 'IoT · Cloud & MQTT', title: 'Station IoT ESP32', desc: 'Architecture IoT complète : acquisition de données, protocole MQTT, broker Mosquitto, dashboard Node-RED et surveillance à distance.', techs: ['ESP32', 'MicroPython', 'MQTT', 'Node-RED'] },
                { icon: '', category: 'Intelligence Artificielle', title: 'Système prédictif', desc: 'Modèle ML pour classification/détection d\'anomalies, preprocessing, optimisation des hyperparamètres et déploiement sur données réelles.', techs: ['Python', 'Scikit-learn', 'Pandas'] },
                { icon: '', category: 'Fullstack Web', title: 'Application React + Java', desc: 'Développement d\'une application web moderne avec React, backend Java/JDBC, API REST, authentification et persistance des données.', techs: ['React.js', 'Java/Spring', 'JDBC', 'PostgreSQL'] },
              ].map((project, i) => (
                <div key={i} className="reveal bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 border border-indigo-100 hover:translate-y-[-8px] hover:scale-105 transition-all hover:shadow-2xl group">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:animate-bounce">{project.icon}</div>
                  <div className="text-xs uppercase font-bold text-indigo-600 mb-2">{project.category}</div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">{project.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-indigo-50 to-cyan-50 px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-indigo-900 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:text-white transition-all hover:translate-y-[-2px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal">
              <div className="text-xs sm:text-sm uppercase font-bold text-indigo-600 mb-2 sm:mb-3">// formation continue & industrie</div>
              <h2 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4 text-gray-900">Certifications & accréditations</h2>
              <p className="text-base sm:text-lg text-gray-600">Reconnues par NVIDIA DLI et Hedera, démontrant mon engagement envers les technologies de pointe.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                { icon: '🟢', title: 'Applications of AI for Predictive Maintenance', org: 'NVIDIA Deep Learning Institute' },
                { icon: '🟢', title: 'Applications of AI for Anomaly Detection', org: 'NVIDIA Deep Learning Institute' },
                { icon: '🟢', title: 'Getting Started with AI on Jetson Nano', org: 'NVIDIA DLI' },
                { icon: '🟢', title: 'Getting Started with Deep Learning', org: 'NVIDIA DLI' },
                { icon: '💠', title: 'Rapid Application Development with LLMs', org: 'NVIDIA DLI · LLMs & GenAI' },
                { icon: '✨', title: 'Generative AI with Diffusion Models', org: 'NVIDIA Deep Learning Institute' },
                { icon: '🔷', title: 'Hashgraph Developer Course Exam', org: 'Hedera · Distributed Ledger' },
              ].map((cert, i) => (
                <div key={i} className="reveal bg-white/95 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-5 border border-indigo-100 flex items-start gap-3 sm:gap-4 hover:translate-x-1 hover:scale-105 transition-all hover:shadow-lg hover:border-indigo-300 cursor-pointer group">
                  <div className="text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">{cert.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{cert.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 sm:py-24 bg-gradient-to-b from-indigo-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal">
              <div className="text-xs sm:text-sm uppercase font-bold text-indigo-600 mb-2 sm:mb-3">// parcours académique</div>
              <h2 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4 text-gray-900">Formation & Diplômes</h2>
              <p className="text-base sm:text-lg text-gray-600">Un cursus exigeant en systèmes embarqués et informatique.</p>
            </div>

            <div className="max-w-2xl mx-auto px-4 sm:px-0">
              {[
                { date: '2024 — Présent', title: 'Cycle Ingénieur — Systèmes Embarqués & IoT', sub: 'ISIMG · Institut Supérieur d\'Informatique et de Mathématiques de Gabès' },
                { date: '2022 — 2024', title: 'Classes Préparatoires Intégrées — Informatique', sub: 'ISIMG · filière scientifique d\'excellence' },
                { date: '2022', title: 'Baccalauréat — Sciences Informatiques', sub: 'Mention Bien · Spécialité informatique' },
              ].map((edu, i) => (
                <div key={i} className="reveal flex gap-3 sm:gap-6 mb-6 sm:mb-8 hover:translate-x-2 transition-transform last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full shadow-md"></div>
                    {i < 2 && <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-indigo-200 to-transparent mt-2"></div>}
                  </div>
                  <div className="pb-6 sm:pb-8">
                    <div className="text-xs font-bold text-indigo-600 uppercase mb-0.5 sm:mb-1">{edu.date}</div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">{edu.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{edu.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-indigo-100 text-center hover:translate-y-[-5px] transition-all hover:shadow-3xl">
              <div className="text-xs sm:text-sm uppercase font-bold text-indigo-600 mb-3 sm:mb-4">// collaboration & opportunités</div>
              <h2 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4 text-gray-900">Discutons de votre projet</h2>
              <p className="text-gray-600 max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg">
                Stage, projet de R&D, prototypage IoT ou intégration IA embarquée — je suis disponible et passionné.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                <a href="mailto:tmontassarii@gmail.com" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-100 to-cyan-100 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-indigo-900 border border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:text-white hover:translate-y-[-3px] transition-all hover:shadow-lg hover:border-transparent w-full sm:w-auto">
                   tmontassarii@gmail.com
                </a>
                <a href="tel:+21655412496" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-100 to-cyan-100 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-indigo-900 border border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:text-white hover:translate-y-[-3px] transition-all hover:shadow-lg hover:border-transparent w-full sm:w-auto">
                  📱 +216 55 412 496
                </a>
                <a href="https://www.linkedin.com/in/toumi-montassar-021555372/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-100 to-cyan-100 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-indigo-900 border border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:text-white hover:translate-y-[-3px] transition-all hover:shadow-lg hover:border-transparent w-full sm:w-auto">
                  in LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 sm:py-12 px-4 sm:px-8 border-t border-indigo-100 text-gray-600 text-sm bg-gradient-to-b from-indigo-50 to-white">
        <p className="text-sm sm:text-base text-gray-700 font-semibold">© 2025 Montassar Toumi — Ingénierie des systèmes embarqués & IoT</p>
        <p className="mt-2 text-xs text-gray-500">Créativité technique & innovation matérielle · Engineering Solutions</p>
      </footer>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 5px rgba(30, 42, 94, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(30, 42, 94, 0.4);
          }
        }

        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        a[href^="#"] {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
