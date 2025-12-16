import { Settings, Calendar, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Settings,
      title: "Configure Your Workspace",
      description:
        "Easily set up your digital office with our intuitive setup wizard. Upload floor plans, add team members, and define booking policies in minutes.",
      features: [
        "Drag & drop floor plan upload",
        "Bulk employee import",
        "Customizable booking rules",
      ],
      gradient: "from-primary to-primary/80",
      iconBg: "from-primary to-primary/90",
      accentColor: "text-primary",
    },
    {
      number: "02",
      icon: Calendar,
      title: "Seamless Team Booking",
      description:
        "Empower your team with effortless desk and room reservations. Real-time availability and intuitive interface ensure a smooth experience.",
      features: [
        "One-click reservations",
        "Mobile-friendly interface",
        "Real-time availability sync",
      ],
      gradient: "from-secondary to-secondary/80",
      iconBg: "from-secondary to-secondary/90",
      accentColor: "text-secondary",
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Gain Actionable Insights",
      description:
        "Transform workspace data into strategic decisions. Track utilization patterns and optimize your office space with comprehensive analytics.",
      features: [
        "Usage analytics dashboard",
        "Peak utilization tracking",
        "Cost optimization insights",
      ],
      gradient: "from-accent to-accent/80",
      iconBg: "from-accent to-accent/90",
      accentColor: "text-accent",
    },
  ];

  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="fix-alignment relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Streamlined Workspace
            <span className="block text-primary">Management</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your hybrid work environment in three intuitive steps.
            From initial setup to data-driven optimization, WorkNest makes
            workspace management effortless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Step Card */}
              <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 rounded-xl h-full">
                <div className="card-body p-8">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.iconBg} shadow-md flex items-center justify-center mx-auto mb-6 `}
                  >
                    <step.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      className={`text-2xl font-bold text-foreground mb-4 leading-tight ${step.accentColor}`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-foreground/80 text-sm"
                        >
                          <div
                            className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mr-3 flex-shrink-0`}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to={"/signup"}>
            <button className="btn btn-primary btn-lg rounded-full px-8 group">
              <span>Start Your Journey</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Join 1,000+ companies transforming their workspace
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
