import React, { useState } from "react";
import {
  Building2,
  Users,
  Brain,
  BarChart as ChartBar,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
} from "lucide-react";

function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-blue-950 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:hidden`}
    >
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-8 p-8">
        <a href="#" className="nav-link text-lg">
          About us
        </a>
        <a href="#" className="nav-link text-lg">
          Contact
        </a>
        <a href="#" className="nav-link text-lg">
          Services
        </a>
        <a href="#" className="nav-link text-lg">
          Companies
        </a>
        <div className="flex gap-6 mt-12">
          <Facebook className="w-6 h-6 text-white/60 hover:text-white/90 cursor-pointer" />
          <Twitter className="w-6 h-6 text-white/60 hover:text-white/90 cursor-pointer" />
          <Instagram className="w-6 h-6 text-white/60 hover:text-white/90 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

function SideNav() {
  return (
    <nav className="hidden lg:flex side-nav items-center px-5 z-50">
      <div className="">
        <h1 className="text-orange-400 font-bold text-2xl">
          Unity Corporation.
        </h1>
      </div>
      <div className="flex gap-8 items-center">
        <a href="#" className="nav-link">
          About us
        </a>
        <a href="#" className="nav-link">
          Contact
        </a>
        <a href="#" className="nav-link">
          Services
        </a>
        <a href="#" className="nav-link">
          Companies
        </a>
      </div>
      <div className="flex gap-4">
        <Facebook className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer" />
        <Twitter className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer" />
        <Instagram className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer" />
      </div>
    </nav>
  );
}

function ServiceBox({
  title,
  description,
  icon: Icon,
  cardClass,
  iconClass,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  cardClass?: string;
  iconClass?: string;
}) {
  return (
    <div
      className={
        cardClass ||
        "border border-blue-900 p-6 md:p-8 rounded-lg bg-blue-950/20 group hover:bg-blue-950/30 transition-colors"
      }
    >
      <Icon className={iconClass || "w-12 h-12 text-blue-950 mb-4"} />
      <h3 className="text-blue-950/70 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-black/60 text-sm text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white">
      <SideNav />
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Header */}
      <div className="flex justify-between items-center p-6 lg:hidden z-50 bg-blue-950">
        <h1 className="text-orange-400 font-bold text-2xl">
          Unity Corporation.
        </h1>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <main className="lg:pt-16">
        <div className="bg-blue-950 px-6 relative overflow-hidden">
          <section className="min-h-screen isolate relative flex flex-col justify-center items-center max-w-7xl mx-auto z-10">
            {/* Accent Bar */}
            <div className="w-20 h-2 bg-orange-500 rounded-full mb-6 mt-8 md:mt-0"></div>
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold mb-8 text-center text-white drop-shadow-lg tracking-tight">
              Bureau d’études et de conseil en{" "}
              <span className="highlight-word relative inline-block px-2">
                <span className="relative z-10">développement</span>
              </span>
            </h1>
            <p className="text-white/80 text-center text-lg md:text-xl mb-12 max-w-2xl shadow-sm">
              Accompagner le développement par l’expertise, l’innovation et
              l’intelligence collective.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <button className="bg-orange-500 text-white px-8 md:px-10 py-5 rounded-xl shadow-lg hover:bg-orange-600 hover:scale-105 transition-all font-semibold text-lg flex items-center justify-center gap-3">
                Commencez avec nous
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </section>
        </div>
        {/* Mission Section */}
        <section className="py-16 mt-20 max-lg:px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-blue-950 text-center text-4xl md:text-5xl lg:text-6xl mb-12">
              Missions
            </h2>
            <div className="space-y-8">
              <p className="text-blue-950 text-lg leading-relaxed text-center">
                Unity Corporation est un bureau d'études et de conseil en
                développement, dédié à l'accompagnement des projets majeurs
                portés par les acteurs du développement en RDC.
              </p>
              <p className="text-blue-950 text-lg leading-relaxed text-center">
                Nous mettons un point d'honneur à valoriser la formation à
                travers des approches innovantes telles que la pensée
                systémique, le processus de changement, l'apprentissage des
                adultes, l'intelligence collective, le posture de faciliteur, le
                design thinking, le plaidoyer, l'interculturalité, la gestion
                des conflits, et le leadership.
              </p>
              <p className="text-blue-950 text-lg leading-relaxed text-center">
                Notre équipe s'appuie sur un réseau pluridisciplinaire de
                consultants et d'experts de haut niveau, aptes à intervenir sur
                des missions à travers toute la RDC.
              </p>
            </div>
          </div>
        </section>

        {/* Competencies Section */}
        <section className="relative py-16 md:py-24 max-lg:px-5 bg-gradient-to-br from-blue-100 via-white to-blue-50 overflow-hidden">
          {/* Accent Bar and Title */}
          <div className="flex flex-col items-center mb-12">
            <h2 className="section-title text-blue-950 text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-tight">
              Domaines de compétences
            </h2>
            <div className="w-24 h-2 bg-orange-500 rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 md:px-0">
            <ServiceBox
              icon={ChartBar}
              title="Gestion des projets"
              description="Suivi, évaluation, apprentissage, redevabilité, évaluation d'impacts des projets de développement"
              cardClass="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-blue-100"
              iconClass="bg-blue-100 text-blue-700 rounded-full p-4 mb-4 shadow-md"
            />
            <ServiceBox
              icon={Leaf}
              title="Développement rural"
              description="Développement, marketing et commercialisation des chaînes de valeur agricoles"
              cardClass="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-blue-100"
              iconClass="bg-green-100 text-green-700 rounded-full p-4 mb-4 shadow-md"
            />
            <ServiceBox
              icon={Brain}
              title="Analyse des données"
              description="Collecte et analyse des données quantitatives et qualitatives"
              cardClass="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-blue-100"
              iconClass="bg-orange-100 text-orange-600 rounded-full p-4 mb-4 shadow-md"
            />
            <ServiceBox
              icon={Building2}
              title="Planification"
              description="Développement rural, planification et gestion des projets de développement, moyens d'existence durable"
              cardClass="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-blue-100"
              iconClass="bg-blue-200 text-blue-900 rounded-full p-4 mb-4 shadow-md"
            />
            <ServiceBox
              icon={ShieldCheck}
              title="Gestion environnementale"
              description="Études d'impact et solutions durables pour un développement respectueux de l'environnement"
              cardClass="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-blue-100"
              iconClass="bg-green-200 text-green-900 rounded-full p-4 mb-4 shadow-md"
            />
            <ServiceBox
              icon={Users}
              title="Conduite du changement"
              description="Intelligence collective, design thinking, leadership, gestion des conflits et communication persuasive"
              cardClass="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-blue-100"
              iconClass="bg-orange-200 text-orange-900 rounded-full p-4 mb-4 shadow-md"
            />
          </div>
        </section>

        <section className="relative py-16 md:py-24 max-lg:px-5 bg-gradient-to-br  overflow-hidden fade-in-section">
          <div className="flex flex-col items-center mb-12 relative z-10">
            <h2 className="section-title text-blue-950 text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-tight">
              Nos Clients
            </h2>
            <div className="w-24 h-2 bg-orange-500 rounded-full mt-4"></div>
            <p className="text-blue-950/60 text-lg text-center mt-4 max-w-2xl">
              Ils nous font confiance pour accompagner leurs projets de
              développement.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10">
            {/* Client 1 */}
            <a
              href="https://congochallenge.cd/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center w-96 h-56 hover:scale-105 hover:shadow-2xl transition-all border border-blue-100 glass-card">
                <img
                  src="/clients/LOGO-CONGO-CHALENGE.png"
                  alt="Congo Challenge"
                  className="w-fit h-24 object-contain mb-4 drop-shadow-md bg-orange-500 rounded-full"
                />
                <span className="text-blue-950 font-semibold text-lg group-hover:text-orange-500 transition-colors">
                  Congo Challenge
                </span>
              </div>
            </a>
            {/* Client 2 */}
            <a href="#" className="group">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center w-96 h-56 hover:scale-105 hover:shadow-2xl transition-all border border-blue-100 glass-card">
                <div className="flex items-center justify-center w-fit h-24 bg-blue-950 rounded-full px-10 mb-4">
                  <span className="text-white text-3xl font-bold">
                    Cerdi-bas
                  </span>
                </div>
                <span className="text-blue-950 font-semibold text-lg group-hover:text-orange-500 transition-colors">
                  Cerdi-bas
                </span>
              </div>
            </a>
            {/* Add more clients here as needed */}
          </div>
        </section>

        <section className="py-16 md:py-24 max-w-7xl mx-auto max-lg:px-5">
          <h2 className="section-title text-blue-950 text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
            Notre équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 max-md:gap-10 justify-center items-center">
            <div>
              <img
                src="/lydia-1-1.png"
                alt="Lydia Mbula"
                className="size-56 rounded-full mx-auto"
              />
              <p className="text-center text-blue-950 mt-3">Lydia Mbula</p>
            </div>
            <div>
              <img
                src="/partenaire-2.png"
                alt="team"
                className="size-56 rounded-full mx-auto"
              />
              <p className="text-center text-blue-950 mt-3">Jospin Mwendeke</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-16 md:py-24 max-lg:px-5 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-t-3xl shadow-xl overflow-hidden">
          {/* Decorative Accent Bar */}
          <div className="absolute left-0 top-10 h-32 w-2 bg-orange-400 rounded-full opacity-80"></div>
          <div className="flex flex-col max-w-7xl mx-auto lg:flex-row lg:justify-between lg:items-start gap-8 relative z-10">
            <div className="bg-white/10 rounded-2xl md:p-8 p-4 max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block w-8 h-2 bg-blue-950 rounded-full"></span>
                <h2 className="section-title text-blue-950 text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Pourquoi travailler
                  <br />
                  avec nous?
                </h2>
              </div>
              <p className="max-w-xl text-black/60 text-lg leading-relaxed">
                Avec plus de 10 ans d’expérience avérée en Afrique
                subsaharienne, Unity Corporation s’est imposée comme un
                partenaire de confiance pour des acteurs majeurs du
                développement. Nous avons accompagné une diversité de clients,
                notamment des bailleurs de fonds, des programmes de coopération
                bilatérale, des agences du{" "}
                <span className="italic">Système des Nations Unies</span>, des
                organisations internationales, ainsi que des partenaires
                étatiques et des acteurs du secteur privé. En intégrant une
                approche inclusive et sensible au genre, nous favorisons un
                développement durable et équitable, en donnant une place
                centrale aux femmes dans les processus décisionnels et les
                initiatives de transformation sociale et économique.
              </p>
            </div>
            <button className="bg-orange-500 text-white px-8 md:px-10 py-5 rounded-xl shadow-lg hover:bg-orange-600 hover:scale-105 transition-all font-semibold text-lg flex items-center justify-center gap-3">
              Contactez-nous
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          {/* Decorative Divider */}
          <div className="my-12 border-t border-blue-200 mx-8"></div>
          <div className="flex gap-8 mt-8 max-md:justify-center justify-center">
            <a href="#" className="group">
              <Facebook className="w-8 h-8 text-blue-950/60 group-hover:text-orange-500 transition-colors duration-200" />
            </a>
            <a href="#" className="group">
              <Twitter className="w-8 h-8 text-blue-950/60 group-hover:text-orange-500 transition-colors duration-200" />
            </a>
            <a href="#" className="group">
              <Instagram className="w-8 h-8 text-blue-950/60 group-hover:text-orange-500 transition-colors duration-200" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
