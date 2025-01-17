import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Servicee from "@/components/servicee";
import WorkingProcess from "@/components/WorkingProcess";

const electricite_automatisme = {
  id: "electricite_automatisme",
  title: "Electricité & Automatisme",
  description:
    "Chez PIOLEC, nous sommes spécialisés dans la conception, l’installation et la maintenance de systèmes électriques et d’automatisation, adaptés à vos besoins industriels, commerciaux ou résidentiels. Nos services incluent l’étude et le dimensionnement de vos installations électriques, la réalisation d’armoires électriques, l’automatisation des processus industriels, et la mise en place de solutions de variation de vitesse et de démarrage spécifique. Nous veillons à respecter les normes en vigueur et à fournir des installations sécurisées et performantes, qu’il s’agisse de courants forts ou faibles. Que vous ayez besoin d’une alimentation de secours avec des groupes électrogènes ou des onduleurs, ou d’une solution sur mesure pour vos équipements électriques, PIOLEC est votre partenaire de confiance pour des projets électriques réussis.",
  images: [
    {
      src: "/assets/img/about/0101.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0102.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0103.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};
const contrôle_dacces_surveillance = {
  id: "contrôle_dacces_surveillance",
  title: "Contrôle d'accès & Surveillance ",
  description:
    "La sécurité de vos bâtiments et sites est une priorité pour PIOLEC. Nous proposons des systèmes de contrôle d’accès modernes et performants, incluant des lecteurs biométriques, des badges, et des claviers à code, pour gérer les accès physiques de manière sécurisée. En complément, nous installons des systèmes de vidéosurveillance avec des caméras IP et analogiques, offrant une surveillance continue et en temps réel de vos espaces. Nos solutions de gestion centralisée vous permettent de superviser et de contrôler vos installations de sécurité de manière intuitive et efficace. Avec PIOLEC, vous pouvez protéger vos biens et vos personnes en toute confiance.",
  images: [
    {
      src: "/assets/img/about/0101.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0102.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0103.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: false, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const detection_incendie_intrusion = {
  id: "detection_incendie_intrusion",
  title: "Détection incendie & intrusion ",
  description:
    "Protéger vos locaux contre les risques d’incendie et d’intrusion est essentiel. PIOLEC installe des systèmes de détection d’incendie et d’intrusion de haute qualité, incluant des centrales d’alarme, des détecteurs de fumée, et des logiciels de supervision pour une gestion centralisée et réactive. Nos systèmes sont conçus pour vous alerter rapidement en cas d’urgence, vous permettant d’agir sans délai et de minimiser les risques. Que ce soit pour un petit bureau ou un grand site industriel, nous vous proposons des solutions adaptées à vos besoins, conformes aux normes de sécurité les plus strictes.",
  images: [
    {
      src: "/assets/img/about/0101.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0102.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0103.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};
const precablage_informatique = {
  id: "precablage_informatique",
  title: "Precablage informatique ",
  description:
    "Dans un monde de plus en plus connecté, une infrastructure réseau fiable est indispensable. PIOLEC propose des services de précâblage informatique pour assurer une connectivité optimale et sécurisée. Nous installons des câbles RJ45, des panneaux de brassage, des switchs, des routeurs, et des chemins de câbles pour créer des réseaux performants et évolutifs. Nos équipes prennent en charge l’installation et la configuration de vos équipements réseau, garantissant une infrastructure robuste et prête à répondre à vos besoins actuels et futurs. Avec PIOLEC, vous bénéficiez d’une connectivité fluide et sécurisée pour tous vos projets informatiques.",
  images: [
    {
      src: "/assets/img/about/0101.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0102.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0103.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: false, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const energies_renouvelables = {
  id: "energies_renouvelables_travaux_divers",
  title: "Energies renouvelables & Travaux divers ",
  description:
    "Conscients des enjeux environnementaux et économiques, PIOLEC vous accompagne dans la transition vers des énergies plus propres et durables. Nous proposons des solutions innovantes en énergies renouvelables, telles que l’installation de panneaux solaires photovoltaïques pour produire de l’électricité à partir de l’énergie solaire. Nos experts vous conseillent et vous accompagnent dans le choix des solutions les plus adaptées à vos besoins et à votre budget, vous permettant de réduire votre consommation d’énergie et votre empreinte carbone tout en réalisant des économies significatives. Avec PIOLEC, vous faites un pas vers un avenir plus durable.",
  images: [
    {
      src: "/assets/img/about/0101.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0102.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0103.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};
const maintenance_sav = {
  id: "maintenance_sav",
  title: "Maintenance & S.A.V",
  description:
    "Pour assurer la longévité et le bon fonctionnement de vos installations, PIOLEC propose des services de maintenance préventive et corrective, ainsi qu’un support après-vente réactif et professionnel. Nous réalisons des inspections régulières pour anticiper les pannes et garantir le bon fonctionnement de vos équipements. En cas de problème, notre équipe intervient rapidement pour résoudre les dysfonctionnements et minimiser les temps d’arrêt. Nous offrons également un support technique continu pour répondre à vos questions et vous accompagner dans l’utilisation de vos installations. Avec PIOLEC, vous bénéficiez d’un accompagnement complet, même après la fin de votre projet.",
  images: [
    {
      src: "/assets/img/about/0101.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0102.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0103.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: false, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const travaux_divers = {
  id: "travaux-divers",
  title: "Travaux divers",
  description:
    "PIOLEC réalise des travaux variés et sur mesure, adaptés aux spécificités de chaque projet. Que ce soit pour des rénovations électriques, des extensions de réseaux, ou des projets techniques complexes, nous nous engageons à respecter les délais, les budgets et les normes de qualité les plus strictes. Notre flexibilité et notre expertise nous permettent de répondre à tous vos besoins, même les plus exigeants. Avec PIOLEC, vous avez un partenaire fiable pour tous vos travaux, quels que soient leur taille et leur complexité.",
  images: [
    {
      src: "/assets/img/about/0101.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0102.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/about/0103.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Services" pageTitle="Nos Services" />
      <GrowBusiness paddingTop={8} />
      <Servicee {...electricite_automatisme} />
      <Servicee {...contrôle_dacces_surveillance} />
      <Servicee {...detection_incendie_intrusion} />
      <Servicee {...precablage_informatique} />
      <Servicee {...energies_renouvelables} />
      <Servicee {...maintenance_sav} />
      <Servicee {...travaux_divers} />

      <WorkingProcess
        title1="Découverte et analyse"
        desc1="Nous analysons vos besoins pour créer une solution sur mesure, adaptée à vos objectifs et contraintes."
        title2="Conception et planification"
        desc2=" Nos experts conçoivent des plans détaillés et des schémas techniques conformes aux normes pour une mise en œuvre optimale."
        title3="Installation et exécution"
        desc3="Nous installons vos réseaux informatiques avec des matériaux de qualité et des techniques éprouvées, garantissant fiabilité et performance."
        title4="Tests et remise des clés"
        desc4="Nous testons rigoureusement votre réseau avant la livraison et vous fournissons un support technique pour une utilisation optimale."
      />

      <Faq />

      <Cta
        sectionPadding="true"
        h2="Prêt à moderniser vos installations électriques ?"
        p="Découvrez des solutions innovantes et fiables pour une performance énergétique optimale et une gestion simplifiée de vos systèmes électriques."
      />
    </NextLayout>
  );
};
export default page;
