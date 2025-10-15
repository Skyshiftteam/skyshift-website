import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Database, Clock, Award, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function BusinessApplications() {
  const navigate = useNavigate()

  const navigateToContact = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <Database className="h-16 w-16 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-bold">Business Applications</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">
                Transform your business operations with expert implementation and optimization of Salesforce®, ServiceNow, and Atlassian solutions. We help companies streamline processes, enhance collaboration, and accelerate growth through intelligent cloud applications.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Clock className="h-12 w-12 mx-auto mb-2" />
                  <div className="text-2xl font-bold">3-8 Weeks</div>
                  <div className="text-sm text-white/80">Fast Delivery Promise</div>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-2" />
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm text-white/80">Certified Implementation</div>
                </div>
                <div className="text-center">
                  <Headphones className="h-12 w-12 mx-auto mb-2" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Ongoing Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Platform Expertise</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Comprehensive business application solutions designed to optimize your operations and drive growth
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Salesforce®",
                  desc: "Expert CRM implementation and optimization to accelerate sales, enhance customer relationships, and drive revenue growth.",
                  features: ["Sales Cloud implementation", "Service Cloud setup", "Marketing automation", "Custom integrations", "Data migration", "User training"],
                  timeline: "3-6 weeks delivery"
                },
                {
                  title: "ServiceNow",
                  desc: "IT service management and workflow automation to streamline operations, improve efficiency, and enhance service delivery.",
                  features: ["ITSM implementation", "Workflow automation", "Service portal configuration", "Integration services", "Process optimization", "Change management"],
                  timeline: "4-8 weeks delivery"
                },
                {
                  title: "Atlassian",
                  desc: "Project management and collaboration tools to enhance team productivity, streamline workflows, and improve project delivery.",
                  features: ["Jira implementation", "Confluence setup", "Workflow customization", "Agile board configuration", "Integration with dev tools", "Team training"],
                  timeline: "3-6 weeks delivery"
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{service.desc}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm font-semibold text-primary">{service.timeline}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">The SkyShift Methodology</h2>
            <p className="text-center text-muted-foreground mb-12">Our proven 4-step process ensures successful implementation every time</p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "STEP 01", title: "Discovery & Analysis", desc: "Deep dive into your business processes, requirements, and goals to create a tailored implementation strategy." },
                { step: "STEP 02", title: "Design & Configure", desc: "Custom configuration aligned with your workflows, including automation and integrations." },
                { step: "STEP 03", title: "Deploy & Test", desc: "Careful deployment with comprehensive testing to ensure everything works perfectly before go-live." },
                { step: "STEP 04", title: "Train & Support", desc: "User training and ongoing support to maximize adoption and ensure long-term success." }
              ].map((phase, index) => (
                <div key={index}>
                  <div className="text-sm font-bold text-primary mb-2">{phase.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Expected Results</h2>
            <p className="text-center text-muted-foreground mb-12">Based on industry standards and best practices, our customers typically achieve measurable business impact</p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: "Up to 35%", label: "Productivity Increase" },
                { metric: "Up to 40%", label: "Process Efficiency Gain" },
                { metric: "Up to 50%", label: "Faster Project Delivery" },
                { metric: "Up to 60%", label: "Reduced Manual Work" }
              ].map((result, index) => (
                <div key={index} className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                  <div className="text-sm font-medium">{result.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business Operations?</h2>
            <p className="text-muted-foreground mb-6">Let's discuss how SkyShift can accelerate your success with Salesforce®, ServiceNow, and Atlassian</p>
            <Button onClick={navigateToContact} size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

