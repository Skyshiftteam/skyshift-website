import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Shield, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Cybersecurity() {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <Shield className="h-16 w-16 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-bold">Cybersecurity Services</h1>
              </div>
              <p className="text-xl text-white/90">
                Protect your organization from evolving cyber threats with comprehensive security solutions.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Cybersecurity Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Risk Assessment & Compliance", desc: "Identify vulnerabilities and ensure regulatory compliance." },
                { title: "Security Architecture", desc: "Design robust security frameworks for your business." },
                { title: "Threat Management", desc: "24/7 monitoring and incident response." },
                { title: "Security Training", desc: "Empower your team with security best practices." }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Strengthen Your Security?</h2>
            <Button onClick={() => navigate('/#contact')} size="lg" className="bg-primary hover:bg-primary/90">
              Request Security Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
