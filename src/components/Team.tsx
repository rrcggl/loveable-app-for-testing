const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    initials: "SM",
  },
  {
    name: "James Chen",
    role: "Head of Design",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    initials: "JC",
  },
  {
    name: "Emma Rodriguez",
    role: "Lead Artisan",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    initials: "ER",
  },
  {
    name: "Michael Park",
    role: "Operations Director",
    bio: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",
    initials: "MP",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-muted-foreground rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the people behind it all
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our passionate 
            team brings decades of combined experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="font-heading text-3xl font-bold text-primary">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
