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
    <nav className="hidden lg:flex side-nav items-center px-5">
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
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="border border-blue-900 p-6 md:p-8 rounded-lg bg-blue-950/20 group hover:bg-blue-950/30 transition-colors">
      <Icon className="w-12 h-12 text-blue-950 mb-4" />
      <h3 className="text-blue-950/70 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-black/60 text-sm leading-relaxed">{description}</p>
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
      <div className="flex justify-between items-center p-6 lg:hidden bg-blue-950">
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
        <div className="bg-blue-950 px-6 relative">
          <section className="min-h-screen isolate relative flex flex-col justify-center items-center max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-8 text-center text-white">
              Bureau d’études et de conseil en{" "}
              {/* <br className="hidden md:block" /> */}
              <span className="highlight-word">développement</span>
            </h1>
            <p className="text-white/60 text-center text-lg md:text-xl mb-12 max-w-2xl">
              Accompagner le développement par l’expertise, l’innovation et
              l’intelligence collective.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <button className="bg-orange-500 text-white px-6 md:px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                Commencez avec nous
                <ArrowRight className="w-5 h-5" />
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

        {/* Stats Section */}
        {/* <section className="">
          <div className="section-title pt-16 text-4xl md:text-5xl lg:text-6xl mb-12">
            Trusted By
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            <div>
              <p className="stats-number text-4xl opacity-30">Fikra Digital</p>
            </div>
            <div>
              <p className="stats-number text-4xl opacity-30">Ogopa Studio</p>
            </div>
            <div>
              <p className="stats-number text-4xl opacity-30">Ogopa Studio</p>
            </div>
          </div>
        </section> */}

        {/* Competencies Section */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto max-lg:px-5">
          <h2 className="section-title text-blue-950 text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
            Domaines de compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceBox
              icon={ChartBar}
              title="Gestion des projets"
              description="Suivi, évaluation, apprentissage, redevabilité, évaluation d'impacts des projets de développement"
            />
            <ServiceBox
              icon={Leaf}
              title="Développement rural"
              description="Développement, marketing et commercialisation des chaînes de valeur agricoles"
            />
            <ServiceBox
              icon={Brain}
              title="Analyse des données"
              description="Collecte et analyse des données quantitatives et qualitatives"
            />
            <ServiceBox
              icon={Building2}
              title="Planification"
              description="Développement rural, planification et gestion des projets de développement, moyens d'existence durable"
            />
            <ServiceBox
              icon={ShieldCheck}
              title="Gestion environnementale"
              description="Études d'impact et solutions durables pour un développement respectueux de l'environnement"
            />
            <ServiceBox
              icon={Users}
              title="Conduite du changement"
              description="Intelligence collective, design thinking, leadership, gestion des conflits et communication persuasive"
            />
          </div>
        </section>

        <section className="py-16 md:py-24 max-w-7xl mx-auto max-lg:px-5">
          <h2 className="section-title text-blue-950 text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
            Nos Clients
          </h2>
          <div className="flex justify-center items-center gap-10">
            <a href="https://congochallenge.cd/" target="_blank">
              <img
                  src="/clients/LOGO-CONGO-CHALENGE.png"
                  alt="Congo Challenge"
                  className="bg-blue-950 w-64 rounded-full"
              />
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 max-w-7xl mx-auto max-lg:px-5">
          <h2 className="section-title text-blue-950 text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
            Notre équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 justify-center items-center">
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
              <p className="text-center text-blue-950 mt-3">Marie Okowe</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto max-lg:px-5">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            <div>
              <h2 className="section-title text-blue-950 text-4xl md:text-5xl lg:text-6xl">
                Pourquoi traivailler
                <br />
                avec nous?
              </h2>
              <p className="max-w-xl text-black/40">
                Avec plus de 10 ans d’expérience avérée en Afrique
                subsaharienne, Unity Corporation s’est imposée comme un
                partenaire de confiance pour des acteurs majeurs du
                développement. Nous avons accompagné une diversité de clients,
                notamment des bailleurs de fonds, des programmes de coopération
                bilatérale, des agences du *Système des Nations Unies, des
                organisations internationales, ainsi que des partenaires
                étatiques et des acteurs du secteur privé. En intégrant une
                approche inclusive et sensible au genre, nous favorisons un
                développement durable et équitable, en donnant une place
                centrale aux femmes dans les processus décisionnels et les
                initiatives de transformation sociale et économique.
              </p>
            </div>
            <button className="bg-orange-500 text-white px-6 md:px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              Contectez nous
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-6 mt-12 max-md:justify-center">
            <Facebook className="w-6 h-6 text-black/60 hover:text-black/90 cursor-pointer" />
            <Twitter className="w-6 h-6 text-black/60 hover:text-black/90 cursor-pointer" />
            <Instagram className="w-6 h-6 text-black/60 hover:text-black/90 cursor-pointer" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
