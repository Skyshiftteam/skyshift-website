import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Cloud, Shield, Users, Database, ArrowRight, CheckCircle2, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 5000)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-muted/50 to-background py-20 sm:py-28 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Elevating Business to <span className="text-primary">New Heights</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto">
                Transform complexity into clarity and challenges into opportunities through integrated consulting excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who We Are</h2>
                <p className="text-lg text-muted-foreground">Your trusted partner in business transformation</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle>Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To be the trusted partner that elevates organizations to new heights, transforming business challenges into sustainable competitive advantages through integrated expertise.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle>Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We partner with organizations to transform complexity into clarity. Through integrated consulting excellence, we deliver measurable results that elevate performance, strengthen security, optimize operations, and empower teams.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Elevation', desc: 'Lifting businesses beyond their limitations' },
                    { title: 'Clarity', desc: 'Cutting through complexity with clear solutions' },
                    { title: 'Innovation', desc: 'Embracing cutting-edge technologies' },
                    { title: 'Partnership', desc: 'Building lasting relationships' },
                    { title: 'Excellence', desc: 'Unwavering commitment to quality' }
                  ].map((value, index) => (
                    <div key={index} className="text-center">
                      <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive consulting solutions across four strategic domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                {
                  icon: Cloud,
                  title: 'Cloud Consulting',
                  description: 'Strategic cloud solutions that drive agility, scalability, and innovation',
                  path: '/cloud-consulting'
                },
                {
                  icon: Shield,
                  title: 'Cybersecurity Services',
                  description: 'Comprehensive security solutions to protect your organization from evolving threats',
                  path: '/cybersecurity'
                },
                {
                  icon: Database,
                  title: 'Customer Relationship Management',
                  description: 'Expert Salesforce® implementation and optimization to accelerate growth',
                  path: '/salesforce'
                },
                {
                  icon: Users,
                  title: 'Human Capital as a Service',
                  description: 'Flexible, on-demand talent solutions for growing businesses',
                  path: '/human-capital'
                }
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <Card 
                    key={index} 
                    className="hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => navigate(service.path)}
                  >
                    <CardHeader>
                      <div className="mb-4">
                        <Icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-16 sm:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our integrated consulting services can help you achieve your business goals
            </p>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers measurable results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { step: '01', title: 'Discovery & Analysis', desc: 'Deep dive into your business processes and goals' },
                { step: '02', title: 'Strategic Planning', desc: 'Develop tailored solutions aligned with your objectives' },
                { step: '03', title: 'Implementation', desc: 'Execute with precision and minimal disruption' },
                { step: '04', title: 'Optimization', desc: 'Continuous improvement and performance monitoring' },
                { step: '05', title: 'Training & Support', desc: 'Empower your team for long-term success' },
                { step: '06', title: 'Ongoing Partnership', desc: 'Sustained support as your business evolves' }
              ].map((phase, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="text-4xl font-bold text-primary mb-3">{phase.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Ready to elevate your business? Let's start the conversation
                </p>
              </div>

              {formSubmitted ? (
                <Card className="p-8 text-center bg-white">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your message and will get back to you shortly.</p>
                </Card>
              ) : (
                <Card className="p-8 bg-white">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your needs..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              )}

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-2">Or email us directly at:</p>
                <a href="mailto:info@skyshift.ai" className="text-primary hover:underline text-lg font-medium">
                  info@skyshift.ai
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
