export default function LandingPage() {
  const currentYear = new Date().getFullYear()

  const features = [
    {
      badge: "Automation",
      title: "No-code automation flows",
      description:
        "Build powerful WhatsApp workflows with our drag-and-drop builder. Set triggers, conditions, and actions without writing a single line of code.",
    },
    {
      badge: "Broadcasts",
      title: "Smart broadcast campaigns",
      description:
        "Send personalized messages to thousands of contacts at once. Schedule campaigns, segment audiences, and track delivery in real-time.",
    },
    {
      badge: "CRM",
      title: "Built-in contact management",
      description:
        "Organize contacts with tags, custom fields, and conversation history. Never lose track of a lead or customer inquiry again.",
    },
  ]

  const testimonials = [
    {
      quote:
        "AutoBotWa cut our response time from hours to seconds. Our customers love getting instant answers, and our team can focus on complex queries.",
      name: "Sanjana Mehta",
      role: "Founder, Bloom & Co.",
    },
    {
      quote:
        "We've seen a 40% increase in lead conversions since implementing AutoBotWa. The broadcast feature alone has transformed our marketing.",
      name: "Rahul Verma",
      role: "Marketing Lead, EduSpark",
    },
    {
      quote:
        "Setting up automated flows took less than an hour. Now we handle 3x the inquiries with the same team size. Absolute game-changer.",
      name: "Priya Sharma",
      role: "Operations Head, QuickServe",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹0",
      period: "/ month",
      tagline: "For trying things out",
      features: [
        "Up to 500 contacts",
        "Basic automation flows",
        "1 team member",
        "Standard support",
        "WhatsApp Web integration",
      ],
      buttonText: "Start free",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "₹1,499",
      period: "/ month",
      tagline: "Best for growing teams",
      features: [
        "Up to 10,000 contacts",
        "Advanced automation flows",
        "Broadcast campaigns",
        "Tags & custom fields",
        "Team inbox (5 members)",
        "Priority support",
      ],
      buttonText: "Get started",
      highlighted: true,
    },
    {
      name: "Scale",
      price: "Custom",
      period: "",
      tagline: "For larger teams & agencies",
      features: [
        "Unlimited contacts",
        "Multiple WhatsApp numbers",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
        "SLA guarantee",
      ],
      buttonText: "Talk to us",
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-slate-950">
              A
            </div>
            <span className="text-lg font-semibold">AutoBotWa</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-300 transition-colors hover:text-white">
              Features
            </a>
            <a href="#testimonials" className="text-sm text-slate-300 transition-colors hover:text-white">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm text-slate-300 transition-colors hover:text-white">
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#pricing"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition-colors hover:bg-emerald-400"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
                🚀 Automate WhatsApp in minutes
              </div>

              {/* Headline */}
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                WhatsApp automation for{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  modern businesses
                </span>
              </h1>

              {/* Subtext */}
              <p className="mb-8 max-w-lg text-lg text-slate-300 md:text-xl">
                Automate replies, broadcast campaigns, and capture leads on WhatsApp — all without writing a single line
                of code. Scale your customer conversations effortlessly.
              </p>

              {/* CTAs */}
              <div className="mb-4 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                <a
                  href="#pricing"
                  className="w-full rounded-lg bg-emerald-500 px-6 py-3 text-center font-medium text-slate-950 transition-colors hover:bg-emerald-400 sm:w-auto"
                >
                  Start Free Trial
                </a>
                <a
                  href="#features"
                  className="w-full rounded-lg border border-slate-700 px-6 py-3 text-center font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800/50 sm:w-auto"
                >
                  View Demo
                </a>
              </div>

              {/* Reassurance */}
              <p className="text-sm text-slate-400">No credit card required · Cancel anytime</p>
            </div>

            {/* Right Visual */}
            <div className="flex-1">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl">
                {/* Chat Preview */}
                <div className="mb-6 space-y-4">
                  {/* Incoming message */}
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-800 px-4 py-2.5 text-sm text-slate-200">
                      Hi! What are your pricing plans?
                    </div>
                  </div>

                  {/* Outgoing auto-reply */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-emerald-600 px-4 py-2.5 text-sm text-white">
                      <p className="mb-1">👋 Thanks for reaching out!</p>
                      <p>We have 3 plans starting at ₹0/month. Check our pricing page or reply "PLANS" for details!</p>
                    </div>
                  </div>

                  {/* Incoming */}
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-800 px-4 py-2.5 text-sm text-slate-200">
                      PLANS
                    </div>
                  </div>

                  {/* Outgoing auto-reply */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-emerald-600 px-4 py-2.5 text-sm text-white">
                      <p>📋 Here are our plans:</p>
                      <p className="mt-1">• Starter: ₹0/mo</p>
                      <p>• Growth: ₹1,499/mo</p>
                      <p>• Scale: Custom</p>
                    </div>
                  </div>
                </div>

                {/* Stat Chips */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-3 text-center">
                    <p className="text-lg font-bold text-emerald-400">2x</p>
                    <p className="text-xs text-slate-400">Faster responses</p>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-3 text-center">
                    <p className="text-lg font-bold text-emerald-400">+34%</p>
                    <p className="text-xs text-slate-400">Lead conversion</p>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-3 text-center">
                    <p className="text-lg font-bold text-emerald-400">24/7</p>
                    <p className="text-xs text-slate-400">Auto-replies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-900/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Built for fast-moving teams</h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              AutoBotWa helps marketing, sales, and support teams manage all their WhatsApp conversations in one
              powerful platform.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm transition-colors hover:border-slate-700"
              >
                <div className="mb-4 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {feature.badge}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Loved by growing teams</h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              Businesses in e-commerce, education, and services trust AutoBotWa to handle their WhatsApp communications
              at scale.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <figure
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-colors hover:border-slate-700"
              >
                <blockquote className="mb-4 text-sm leading-relaxed text-slate-200">"{testimonial.quote}"</blockquote>
                <figcaption>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Simple, transparent pricing</h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              Start free, upgrade when you're ready. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-2xl border p-6 ${
                  plan.highlighted
                    ? "border-emerald-400/70 bg-slate-900 shadow-lg shadow-emerald-500/10"
                    : "border-slate-800 bg-slate-900/60"
                }`}
              >
                <div>
                  {/* Plan Header */}
                  <div className="mb-6">
                    {plan.highlighted && (
                      <div className="mb-3 inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-slate-950">
                        Most Popular
                      </div>
                    )}
                    <h3 className="mb-1 text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-slate-400">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-slate-300">
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full rounded-lg py-3 font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                      : "border border-slate-700 text-slate-200 hover:border-slate-600 hover:bg-slate-800/50"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-slate-800 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-xs text-slate-400">© {currentYear} AutoBotWa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-xs text-slate-400 transition-colors hover:text-slate-200">
              Features
            </a>
            <a href="#pricing" className="text-xs text-slate-400 transition-colors hover:text-slate-200">
              Pricing
            </a>
            <a href="#" className="text-xs text-slate-400 transition-colors hover:text-slate-200">
              Privacy
            </a>
            <a href="#" className="text-xs text-slate-400 transition-colors hover:text-slate-200">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
