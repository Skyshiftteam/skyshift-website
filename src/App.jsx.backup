import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Cloud, Shield, Users, Database, Menu, X, ArrowRight, CheckCircle2, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import logo from './assets/skyshift_group_logo_transparent_bg.png'
import './App.css'

function App() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 5000)
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-semibold text-lg">SkyShift.ai</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-sm font-medium border-2 border-green-500 rounded hover:bg-green-50 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="px-4 py-2 text-sm font-medium border-2 border-blue-500 rounded hover:bg-blue-50 transition-colors">Services</button>
              <button onClick={() => scrollToSection('approach')} className="px-4 py-2 text-sm font-medium border-2 border-orange-500 rounded hover:bg-orange-50 transition-colors">Process</button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-sm font-medium border-2 border-teal-500 rounded hover:bg-teal-50 transition-colors">Contact</button>
            </div>

            {/* Get Started Button */}
            <div className="hidden md:block">
              <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 border-2 border-green-500 rounded hover:bg-green-50">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 border-2 border-blue-500 rounded hover:bg-blue-50">Services</button>
              <button onClick={() => scrollToSection('approach')} className="block w-full text-left px-4 py-2 border-2 border-orange-500 rounded hover:bg-orange-50">Process</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 border-2 border-teal-500 rounded hover:bg-teal-50">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/50 to-background py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnpNMzYgNTJjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnpNMCA1MmMwLTMuMzE0IDIuNjg2LTYgNi02czYgMi42ODYgNiA2LTIuNjg2IDYtNiA2LTYtMi42ODYtNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Elevating Business to <span className="text-primary">New Heights</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-muted-foreground animate-fade-in-up">
              Transform complexity into clarity and challenges into opportunities through integrated consulting excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white text-lg px-8 py-6">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SkyShift is your trusted partner to elevate your organization to new heights. We transform business challenges into sustainable competitive advantages through integrated expertise in Cloud, Cybersecurity, Enterprise Platforms, and Human Capital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the trusted partner that elevates organizations to new heights, transforming business challenges into sustainable competitive advantages through integrated expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We partner with organizations to transform complexity into clarity and challenges into opportunities, delivering measurable results that elevate performance, strengthen security, optimize operations, and empower teams.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10 text-foreground">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: 'Elevation', desc: 'Lifting businesses beyond limitations' },
                { title: 'Clarity', desc: 'Cutting through complexity' },
                { title: 'Innovation', desc: 'Embracing cutting-edge solutions' },
                { title: 'Partnership', desc: 'Building lasting relationships' },
                { title: 'Excellence', desc: 'Unwavering commitment to quality' }
              ].map((value, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive suite of consulting services designed to address your most critical business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Cloud Consulting */}
            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Cloud className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Cloud Consulting</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Achieve unparalleled agility, scalability, and innovation with our strategic cloud transformation services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Advisory & Consulting', 'DevOps & Foundation', 'Migration & Modernization', 'Cloud FinOps', 'Hybrid Cloud', 'Managed Services'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cybersecurity */}
            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Cybersecurity Services</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Protect your critical assets and operate with confidence through comprehensive security solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Risk Assessment & Compliance', 'Security Architecture Design', 'Threat Detection & Response', 'Continuous Security Monitoring'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Platform & Applications */}
            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Database className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Customer Relationship Management</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Drive revenue growth and enhance customer experiences with expert CRM implementation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Salesforce Consulting', 'Multi-Platform CRM Expertise', 'CRM Strategy & Optimization'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Human Capital */}
            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Human Capital as a Service</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Flexible, on-demand talent solutions built for growing businesses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['On-Demand Talent', 'Flexible Workforce Scaling', 'Managed HR Services', 'Expertise on Tap'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Your business challenges are unique, and your solutions should be too. Let's explore how our integrated services can create a secure, scalable foundation for your future.
          </p>
          <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Schedule Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Our Unique Approach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              What sets SkyShift apart is not just what we do, but how we do it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Strategic Vision', desc: 'We understand your business aspirations, not just technical requirements' },
              { title: 'Proven Expertise', desc: 'Deep experience across industries with specialized knowledge' },
              { title: 'Integrated Solutions', desc: 'Holistic approach ensuring all initiatives work together' },
              { title: 'Phased Implementation', desc: 'Continuous value delivery with minimal disruption' },
              { title: 'Change Management', desc: 'People-centered transformation for lasting success' },
              { title: 'Ongoing Partnership', desc: 'Long-term support and strategic guidance' }
            ].map((approach, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{approach.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Get Started Today</h2>
              <p className="text-lg text-muted-foreground">
                Contact us for a comprehensive consultation and discover how SkyShift can help you achieve your most ambitious goals.
              </p>
            </div>

            {formSubmitted ? (
              <Card className="border-2 border-secondary bg-secondary/5">
                <CardContent className="pt-12 pb-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Thank You!</h3>
                  <p className="text-lg text-muted-foreground mb-2">
                    We've received your message and will respond shortly.
                  </p>
                  <p className="text-muted-foreground">
                    Feel free to continue browsing our services.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name *</label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email *</label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company</label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message *</label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your needs..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message <Mail className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            <div className="mt-12 text-center space-y-4">
              <p className="text-muted-foreground">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="mailto:info@skyshift.ai" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">info@skyshift.ai</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: Logo and Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="font-semibold text-lg">SkyShift.ai</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Transforming businesses with expert consulting services across Cloud, Cybersecurity, CRM, and Human Capital.
              </p>
              <p className="text-gray-500 text-xs">
                Salesforce® is a trademark of Salesforce.com, inc. SkyShift.ai is an independent consulting partner and is not sponsored, endorsed, or affiliated with Salesforce.com, inc.
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigate('/cloud-consulting')} className="hover:text-white transition-colors">Cloud Consulting</button></li>
                <li><button onClick={() => navigate('/cybersecurity')} className="hover:text-white transition-colors">Cybersecurity Services</button></li>
                <li><button onClick={() => navigate('/salesforce')} className="hover:text-white transition-colors">Salesforce® Implementation</button></li>
                <li><button onClick={() => navigate('/human-capital')} className="hover:text-white transition-colors">Human Capital as a Service</button></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                <a href="mailto:info@skyshift.ai" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                  info@skyshift.ai
                </a>
                <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            © 2025 SkyShift.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

