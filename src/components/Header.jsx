import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    navigate('/')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    setMobileMenuOpen(false)
  }

  const navigateToHome = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const navigateToService = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
    setServicesOpen(false)
    setMobileMenuOpen(false)
  }

  const services = [
    { name: 'Cloud Consulting', path: '/cloud-consulting' },
    { name: 'Cybersecurity Services', path: '/cybersecurity' },
    { name: 'Business Applications', path: '/salesforce' },
    { name: 'Human Capital as a Service', path: '/human-capital' }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={navigateToHome} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-semibold text-lg">SkyShift.ai</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button onClick={navigateToHome} className="px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors">Home</button>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors flex items-center"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => navigateToService(service.path)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button onClick={() => scrollToSection('approach')} className="px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors">Process</button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors">Contact</button>
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
            <button onClick={navigateToHome} className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100">Home</button>
            
            {/* Mobile Services Submenu */}
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 flex items-center justify-between"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => navigateToService(service.path)}
                      className="block w-full text-left px-4 py-2 text-sm rounded hover:bg-gray-50"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button onClick={() => scrollToSection('approach')} className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100">Process</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100">Contact</button>
          </div>
        )}
      </div>
    </nav>
  )
}
