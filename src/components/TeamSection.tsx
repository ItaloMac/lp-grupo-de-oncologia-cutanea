const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dra. [Nome]",
      specialty: "Dermatologista oncológica, formada pela UFJF e com residência na UNIFESP. Atua no Sírio-Libanês e integra a diretoria do Grupo Brasileiro de Melanoma.",
      image: "Doctor Photo 1"
    },
    {
      name: "Dr. [Nome]",
      specialty: "Coordenador de Oncologia Cutânea na Clínica AMO e Hospital Santo Antônio, especialista em câncer de pele e Cirurgia de Mohs.",
      image: "Doctor Photo 2"
    },
    {
      name: "Dr. [Nome]",
      specialty: "Oncologista clínico formado pelo ICESP – USP, membro de comitês nacionais e internacionais, especialista em tumores cutâneos.",
      image: "Doctor Photo 3"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-medical-blue to-medical-orange"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-blue mb-6">
            Nossa equipe médica
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nosso time é composto por especialistas <strong>altamente qualificados</strong> e 
            comprometidos com a saúde da sua pele.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Conheça um pouco mais sobre nossos profissionais:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-card-soft hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Doctor Photo Placeholder */}
              <div className="w-40 h-40 bg-medical-blue/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-medical-orange/10 transition-colors duration-300">
                <span className="text-medical-blue text-sm text-center">{member.image}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-medical-blue mb-4 text-center">
                {member.name}
              </h3>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;