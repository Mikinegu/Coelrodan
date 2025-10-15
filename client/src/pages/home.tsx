import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Package, Award, Handshake, Leaf, Globe, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import logoPath from "@assets/logoo_1760519255656.jpg";
import heroImage from "@assets/stock_images/ethiopian_coffee_far_3d0fe15b.jpg";
import coffeeBeansImage from "@assets/stock_images/premium_arabica_coff_e2c3a97b.jpg";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32 lg:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/85 to-primary/90"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
            <img 
              src={logoPath} 
              alt="Coelrodan Import and Export PLC" 
              className="h-24 md:h-32 w-auto object-contain"
              data-testid="img-logo"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
              Quality. Heritage. Sustainability.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl" data-testid="text-hero-subtitle">
              Premium Ethiopian Arabica coffee exports and quality apparel imports. 
              A family-owned business committed to excellence since 2023.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base md:text-lg px-8"
                data-testid="button-explore-coffee"
                onClick={() => document.getElementById('coffee')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Coffee className="mr-2 h-5 w-5" />
                Explore Our Coffee
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base md:text-lg px-8 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground"
                data-testid="button-contact"
                onClick={scrollToContact}
              >
                Contact Us
              </Button>
            </div>
            <div className="pt-8 animate-bounce">
              <ChevronDown className="h-8 w-8 text-primary-foreground/60" data-testid="icon-scroll-indicator" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-about-title">
              About Coelrodan
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-about-intro">
              Established in 2023, Coelrodan Import and Export PLC is a family-owned business 
              proudly based in Addis Ababa, Ethiopia. We were founded with a strong commitment 
              to quality, integrity, and sustainable trade practices in both the import and export sectors.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-about-mission">
              As we continue to grow and build long-lasting relationships, we are keen on establishing 
              partnerships with businesses that share our values and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-card-foreground" data-testid="text-services-title">
            Our Business Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Apparel Import */}
            <Card className="hover-elevate active-elevate-2 transition-all duration-300" data-testid="card-apparel">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center">
                  <Package className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Quality Apparel Imports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  We import a wide range of high-quality apparel products to meet the growing demand 
                  of the Ethiopian market. Our goal is to provide fashionable, durable, and affordable 
                  clothing options that cater to diverse consumer needs.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Coffee Export */}
            <Card className="hover-elevate active-elevate-2 transition-all duration-300" data-testid="card-coffee">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-chart-2 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-white dark:text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Premium Coffee Exports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  We are proud exporters of the finest Ethiopian Arabica coffee beans—both specialty 
                  and commercial grades. Sourced directly from dedicated farmers across various regions 
                  of Ethiopia, our coffee embodies the rich flavors and heritage that make Ethiopian coffee 
                  renowned worldwide.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ethiopian Coffee Highlight Section */}
      <section id="coffee" className="py-20 md:py-32 bg-chart-3 text-white dark:text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${coffeeBeansImage})` }}
        ></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6" data-testid="text-coffee-title">
              Ethiopian Coffee Excellence
            </h2>
            <p className="text-lg md:text-xl text-center mb-16 text-white/90 dark:text-white/90 max-w-3xl mx-auto" data-testid="text-coffee-subtitle">
              Our coffee embodies the rich flavors and heritage that make Ethiopian coffee renowned worldwide
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4" data-testid="card-specialty">
                <div className="w-20 h-20 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-chart-2" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Specialty & Commercial Grades</h3>
                <p className="text-base text-white/80 dark:text-white/80 leading-relaxed">
                  Premium Ethiopian Arabica coffee beans, carefully selected for both specialty 
                  and commercial markets worldwide.
                </p>
              </div>

              <div className="text-center space-y-4" data-testid="card-sourcing">
                <div className="w-20 h-20 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto">
                  <Handshake className="h-10 w-10 text-chart-2" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Direct Farmer Sourcing</h3>
                <p className="text-base text-white/80 dark:text-white/80 leading-relaxed">
                  Working closely with dedicated farmers across various regions of Ethiopia 
                  to ensure consistent quality and ethical practices.
                </p>
              </div>

              <div className="text-center space-y-4" data-testid="card-heritage">
                <div className="w-20 h-20 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto">
                  <Globe className="h-10 w-10 text-chart-2" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Rich Ethiopian Heritage</h3>
                <p className="text-base text-white/80 dark:text-white/80 leading-relaxed">
                  Every bean tells the story of Ethiopia's legendary coffee culture and the 
                  centuries-old tradition of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground" data-testid="text-values-title">
            Our Values & Mission
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center space-y-4" data-testid="card-quality">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality</h3>
              <p className="text-base text-muted-foreground">
                Unwavering commitment to excellence in every product we import and export.
              </p>
            </div>

            <div className="text-center space-y-4" data-testid="card-integrity">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Integrity</h3>
              <p className="text-base text-muted-foreground">
                Building trust through transparent and ethical business practices.
              </p>
            </div>

            <div className="text-center space-y-4" data-testid="card-sustainability">
              <div className="w-16 h-16 rounded-lg bg-chart-4/10 flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-chart-4" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Sustainability</h3>
              <p className="text-base text-muted-foreground">
                Promoting ethical and sustainable practices throughout our supply chain.
              </p>
            </div>

            <div className="text-center space-y-4" data-testid="card-partnership">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Partnership</h3>
              <p className="text-base text-muted-foreground">
                Building long-lasting relationships with businesses that share our values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6" data-testid="text-contact-title">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-center mb-16 text-primary-foreground/90 max-w-3xl mx-auto" data-testid="text-contact-subtitle">
              We would be delighted to explore potential opportunities for collaboration
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6" data-testid="text-managing-director">Managing Director</h3>
                  <p className="text-xl font-medium mb-2">Eyob Dadi Gawassa</p>
                  <p className="text-base text-primary-foreground/80">Coelrodan Import and Export PLC</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/80 mb-1">Phone</p>
                      <a 
                        href="tel:+251911237167" 
                        className="text-lg font-medium hover:underline"
                        data-testid="link-phone"
                      >
                        +251 911 237 167
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/80 mb-1">Email</p>
                      <a 
                        href="mailto:zelelacoffee@gmail.com" 
                        className="text-lg font-medium hover:underline break-all"
                        data-testid="link-email"
                      >
                        zelelacoffee@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/80 mb-1">Location</p>
                      <p className="text-lg font-medium" data-testid="text-location">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Message */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 md:p-10">
                <h3 className="text-2xl font-semibold mb-4" data-testid="text-partnership-title">
                  Partnership Opportunities
                </h3>
                <p className="text-base text-primary-foreground/90 leading-relaxed mb-6" data-testid="text-partnership-message">
                  We are committed to building long-lasting relationships with businesses that share 
                  our values of quality, integrity, and sustainable trade practices. Whether you're 
                  interested in our premium Ethiopian coffee exports or quality apparel imports, 
                  we look forward to exploring how we can work together.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => window.location.href = 'mailto:zelelacoffee@gmail.com'}
                  data-testid="button-send-email"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Us an Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chart-1 text-primary-foreground/80 py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <p className="text-lg font-semibold text-primary-foreground dark:text-primary-foreground" data-testid="text-footer-company">
              Coelrodan Import and Export PLC
            </p>
            <p className="text-sm" data-testid="text-footer-tagline">
              Quality. Heritage. Sustainability.
            </p>
            <p className="text-sm" data-testid="text-footer-copyright">
              © 2023-{new Date().getFullYear()} Coelrodan Import and Export PLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
