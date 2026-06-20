import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Administrative Support",
    description:
      "Calendar, email, appointment, document, and filing support handled with care.",
  },
  {
    icon: Rocket,
    title: "Operations Support",
    description:
      "Workflow coordination, task tracking, data entry, and report preparation.",
  },
  {
    icon: Users,
    title: "Client Relations",
    description: "Clear communication, inquiry handling, follow-ups, and CRM updates.",
  },
  {
    icon: Lightbulb,
    title: "Research & Coordination",
    description:
      "Online research, travel planning, logistics support, and summaries.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Keeping work organized,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one task at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a highly organized Virtual Assistant with experience in
                administrative support, client communication, document
                management, and operations coordination.
              </p>
              <p>
                I support executives, teams, and businesses across healthcare,
                procurement, consulting, and professional services by helping
                them manage fast-paced workflows with accuracy and efficiency.
              </p>
              <p>
                My work is grounded in strong communication, attention to
                detail, confidentiality, and a practical approach to solving
                everyday administrative and operational challenges.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to provide dependable remote support that helps
                teams stay organized, responsive, and focused on what matters
                most."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
