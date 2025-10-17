import { Button } from '@/components/ui/button.jsx'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    navigate('/')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/skyshift-logo-footer.png" alt="SkyShift Logo" className="w-10 h-10" />
              <span className="font-semibold text-lg">SkyShift.ai</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming businesses with expert consulting services across Cloud, Cybersecurity, Business Applications, and Human Capital.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => { navigate('/cloud-consulting'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Cloud Services</button></li>
              <li><button onClick={() => { navigate('/cybersecurity'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Cybersecurity Services</button></li>
              <li><button onClick={() => { navigate('/business-applications'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Business Applications</button></li>
              <li><button onClick={() => { navigate('/human-capital'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Human Capital as a Service</button></li>
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
  )
}
