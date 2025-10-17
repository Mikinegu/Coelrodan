import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Package, Award, Handshake, Leaf, Globe, Phone, Mail, MapPin, ChevronDown, Shirt, Car, Users, TrendingUp, Shield, Clock, ArrowRight } from "lucide-react";
import logoPath from "@assets/logoo_1760519255656.png";
import heroImage from "@assets/stock_images/ethiopian_coffee_far_3d0fe15b.jpg";
import coffeeBeansImage from "@assets/stock_images/premium_arabica_coff_e2c3a97b.jpg";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Professional Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src={logoPath} 
                alt="Coelrodan Import and Export PLC" 
                className="h-10 w-auto object-contain"
              />
              <h2 className="text-base md:text-lg font-semibold text-foreground">Coelrodan Import & Export PLC</h2>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
              <a href="#coffee" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Products</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
              <Button size="sm" onClick={scrollToContact}>
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/90 to-primary/95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <Shield className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Trusted International Trade Partner</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
                Global Trade Excellence
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-4xl" data-testid="text-hero-subtitle">
                Connecting Ethiopia to the world through premium coffee exports and quality imports. 
                Your trusted partner in international trade since 2023.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base md:text-lg px-8 group"
                data-testid="button-explore-coffee"
                onClick={() => document.getElementById('coffee')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Coffee className="mr-2 h-5 w-5" />
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base md:text-lg px-8 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
                data-testid="button-contact"
                onClick={scrollToContact}
              >
                <Phone className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
            </div>
            <div className="pt-8 animate-bounce">
              <ChevronDown className="h-8 w-8 text-primary-foreground/60" data-testid="icon-scroll-indicator" />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Statistics Section */}
      <section className="py-16 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-card-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-card-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-card-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-card-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
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

      {/* Import Items Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground" data-testid="text-import-items-title">
            Import
          </h2>
          <p className="text-lg md:text-xl text-center mb-16 text-muted-foreground max-w-3xl mx-auto" data-testid="text-import-items-subtitle">
            We import high-quality products from around the world to meet diverse market needs
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Coco Fashion */}
            <Card className="hover-elevate active-elevate-2 transition-all duration-300" data-testid="card-coco-fashion">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                  <Shirt className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Coco Fashion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  Bringing top-quality fashion from the USA and Europe to Ethiopia - stylish, durable, and affordable.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Vehicles & Spare Parts */}
            <Card className="hover-elevate active-elevate-2 transition-all duration-300" data-testid="card-vehicles-spare-parts">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Vehicles & Spare Parts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  We import top-quality vehicles and genuine spare parts that are built for performance, trusted for durability.
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

      {/* Coffee Types Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground" data-testid="text-coffee-types-title">
              Export
            </h2>
            <p className="text-lg md:text-xl text-center mb-16 text-muted-foreground max-w-3xl mx-auto" data-testid="text-coffee-types-subtitle">
              Discover the unique characteristics and flavors of Ethiopia's finest coffee regions
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Nekemte */}
              <Card className="hover-elevate active-elevate-2 transition-all duration-300 group relative overflow-hidden" data-testid="card-nekemte">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${coffeeBeansImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5"></div>
                <CardHeader className="space-y-4 relative z-10">
                  <CardTitle className="text-xl md:text-3xl text-foreground">Nekemte</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    Known for a wild fruity and spicy profile, with notes of honey, citrus (lemon/orange), 
                    and often milk chocolate. This region produces coffee with exceptional complexity and depth.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Harar */}
              <Card className="hover-elevate active-elevate-2 transition-all duration-300 group relative overflow-hidden" data-testid="card-harar">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${coffeeBeansImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5"></div>
                <CardHeader className="space-y-4 relative z-10">
                  <CardTitle className="text-xl md:text-3xl text-foreground">Harar</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    Famous for its heavy body, winey acidity, and intense notes of blueberry, dark chocolate, 
                    and spice. One of Ethiopia's most distinctive and sought-after coffee varieties.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Sidamo */}
              <Card className="hover-elevate active-elevate-2 transition-all duration-300 group relative overflow-hidden" data-testid="card-sidamo">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${coffeeBeansImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5"></div>
                <CardHeader className="space-y-4 relative z-10">
                  <CardTitle className="text-xl md:text-3xl text-foreground">Sidamo</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    Noted for its medium body, bright citrus and floral acidity, and a clean, sweet berry finish. 
                    A well-balanced coffee with exceptional clarity and brightness.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Guji */}
              <Card className="hover-elevate active-elevate-2 transition-all duration-300 group relative overflow-hidden" data-testid="card-guji">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${coffeeBeansImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5"></div>
                <CardHeader className="space-y-4 relative z-10">
                  <CardTitle className="text-xl md:text-3xl text-foreground">Guji</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    Features notes of tropical fruit (peach, mango), jasmine, and stone fruit. 
                    Naturals are boldly fruity and sometimes wine-like, offering a unique tasting experience.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Yirgachefe */}
              <Card className="hover-elevate active-elevate-2 transition-all duration-300 group relative overflow-hidden sm:col-span-2 lg:col-span-1" data-testid="card-yirgachefe">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${coffeeBeansImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5"></div>
                <CardHeader className="space-y-4 relative z-10">
                  <CardTitle className="text-xl md:text-3xl text-foreground">Yirgachefe</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    Light body, intense floral aroma (jasmine), bright citrus acidity, and a very clean finish. 
                    Often considered one of the world's finest coffees with exceptional elegance and complexity.
                  </CardDescription>
                </CardContent>
              </Card>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto" data-testid="text-contact-subtitle">
                Let's discuss how we can help your business succeed in international trade
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center" data-testid="text-managing-director">
                    <Users className="h-6 w-6 mr-3" />
                    Leadership Team
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xl font-medium mb-1">Eyob Dadi Gawassa</p>
                      <p className="text-lg text-primary-foreground/80 mb-2">Managing Director</p>
                      <p className="text-base text-primary-foreground/70">Coelrodan Import and Export PLC</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <p className="text-sm text-primary-foreground/80 mb-2">Phone</p>
                    <a 
                      href="tel:+251911237167" 
                      className="text-lg font-medium hover:underline"
                      data-testid="link-phone"
                    >
                      +251 911 237 167
                    </a>
                  </div>

                  <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <p className="text-sm text-primary-foreground/80 mb-2">Email</p>
                    <a 
                      href="mailto:zelelacoffee@gmail.com" 
                      className="text-lg font-medium hover:underline break-all"
                      data-testid="link-email"
                    >
                      zelelacoffee@gmail.com
                    </a>
                  </div>

                  <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <p className="text-sm text-primary-foreground/80 mb-2">Location</p>
                    <p className="text-lg font-medium" data-testid="text-location">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>

              {/* Partnership CTA */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20">
                <h3 className="text-2xl font-semibold mb-4 flex items-center" data-testid="text-partnership-title">
                  <Handshake className="h-6 w-6 mr-3" />
                  Start Your Partnership
                </h3>
                <p className="text-base text-primary-foreground/90 leading-relaxed mb-6" data-testid="text-partnership-message">
                  Ready to expand your business globally? We're here to help you navigate international trade with confidence and expertise.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full group"
                    onClick={() => window.location.href = 'mailto:zelelacoffee@gmail.com'}
                    data-testid="button-send-email"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Inquiry
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={() => window.location.href = 'tel:+251911237167'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chart-1 text-primary-foreground/80 py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src={logoPath} 
                    alt="Coelrodan Import and Export PLC" 
                    className="h-12 w-auto object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground">Coelrodan Import & Export PLC</h3>
                    <p className="text-sm text-primary-foreground/70">International Trade Excellence</p>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-md">
                  Connecting Ethiopia to the world through premium coffee exports and quality imports. 
                  Your trusted partner in international trade since 2023.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wide">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#about" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a>
                  <a href="#coffee" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</a>
                  <a href="#contact" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wide">Contact Info</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm text-primary-foreground/80">+251 911 237 167</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm text-primary-foreground/80">zelelacoffee@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm text-primary-foreground/80">Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm text-primary-foreground/70" data-testid="text-footer-copyright">
                  © 2023-{new Date().getFullYear()} Coelrodan Import and Export PLC. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-primary-foreground/70">Quality. Heritage. Sustainability.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
