import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Users, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function HumanCapital() {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <Users className="h-16 w-16 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-bold">Human Capital as a Service</h1>
              </div>
              <p className="text-xl text-white/90">
                Flexible, on-demand talent solutions built for growing businesses. Think of it as cloud computing for talent.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "On-Demand Talent", desc: "Access qualified professionals for short-term projects or ongoing needs." },
                { title: "Flexible Workforce Scaling", desc: "Quickly expand or contract your team based on demand." },
                { title: "Managed HR Services", desc: "Let us handle payroll, compliance, onboarding, and benefits." },
                { title: "Expertise on Tap", desc: "Get access to niche skills and global talent." }
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
            <h2 className="text-2xl font-bold mb-4">Your workforce, simplified. Your growth, accelerated.</h2>
            <Button onClick={() => navigate('/#contact')} size="lg" className="bg-primary hover:bg-primary/90">
              Explore Talent Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
