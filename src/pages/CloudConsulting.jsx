import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Cloud, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CloudConsulting() {
  const navigate = useNavigate()

  const services = [
    {
      title: "Advisory & Consulting",
      items: ["Cloud Center of Excellence (COE)", "Cloud Economics", "VMware Exit Strategy", "Well-Architected Review", "Cloud Migration Strategy", "Cloud Strategy & Assessment"]
    },
    {
      title: "DevOps & Foundation",
      items: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Container Orchestration", "DevOps Best Practices", "Automation Frameworks"]
    },
    {
      title: "Migration & Modernization",
      items: ["Application Migration", "Database Migration", "Legacy System Modernization", "Cloud-Native Refactoring", "Hybrid Cloud Setup"]
    },
    {
      title: "Cloud FinOps",
      items: ["Cost Optimization", "Budget Management", "Resource Tagging", "Reserved Instance Planning", "Cost Allocation"]
    },
    {
      title: "Hybrid Cloud",
      items: ["Multi-Cloud Strategy", "Cloud Interconnect", "Workload Distribution", "Data Synchronization", "Unified Management"]
    },
    {
      title: "Managed Services",
      items: ["24/7 Monitoring", "Incident Response", "Performance Optimization", "Security Management", "Compliance Reporting"]
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <Cloud className="h-16 w-16 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-bold">Cloud Consulting</h1>
              </div>
              <p className="text-xl text-white/90">
                Transform your IT infrastructure with strategic cloud solutions that drive agility, scalability, and innovation. Our comprehensive cloud consulting services help you navigate the complexities of cloud adoption and optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Why Cloud Consulting */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Cloud Consulting?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cloud computing has become the backbone of modern business operations. Whether you're just starting your cloud journey or looking to optimize existing cloud infrastructure, our expert consultants provide the strategic guidance and technical expertise you need to succeed.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Reduce infrastructure costs by up to 40%",
                "Improve scalability and flexibility",
                "Enhance security and compliance",
                "Accelerate time-to-market for new services",
                "Enable business agility and innovation"
              ].map((benefit, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <p className="font-medium">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Cloud Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Assessment", desc: "Evaluate current infrastructure and business requirements" },
                { step: "02", title: "Strategy", desc: "Design tailored cloud architecture and migration plan" },
                { step: "03", title: "Implementation", desc: "Execute migration and deployment with minimal disruption" },
                { step: "04", title: "Optimization", desc: "Continuous monitoring and cost optimization" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-3">{phase.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-muted-foreground mb-6">Let's discuss how our cloud consulting services can help you achieve your business goals.</p>
            <Button onClick={() => navigate('/#contact')} size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

