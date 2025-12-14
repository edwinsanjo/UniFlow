import { HashLink as Link } from "react-router-hash-link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-100 scroll-smooth">
      <Navbar />
      <Hero />
      <Stats />
      <AcademicsCarousel />
      <Admissions />
      <ResearchCarousel />
      <EventsSection />
      <CampusLife />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">UniFlow University</h1>
        <div className="hidden md:flex gap-6 text-slate-300">
          <Link smooth to="#academics" className="hover:text-white">Academics</Link>
          <Link smooth to="#admissions" className="hover:text-white">Admissions</Link>
          <Link smooth to="#research" className="hover:text-white">Research</Link>
          <Link smooth to="#campus" className="hover:text-white">Campus Life</Link>
          <Link smooth to="#events" className="hover:text-white">Events</Link>
        </div>
        <button className="px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-800">
          Student Login
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Knowledge. Innovation. <span className="text-slate-400">Nation Building.</span>
      </h2>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
        A premier Indian university offering excellence in education, research, and societal impact.
      </p>
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <Link smooth to="#admissions">
          <button className="px-8 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition">
            Apply Now
          </button>
        </Link>
        <Link smooth to="#academics">
          <button className="px-8 py-3 rounded-xl border border-slate-600 hover:bg-slate-800 transition">
            Explore Programs
          </button>
        </Link>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-64 hover:border-slate-500 transition">
          <h4 className="font-semibold text-lg mb-2">Upcoming Event</h4>
          <p className="text-sm text-slate-400">National Science Fest - 12th Jan 2025</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-64 hover:border-slate-500 transition">
          <h4 className="font-semibold text-lg mb-2">Notice</h4>
          <p className="text-sm text-slate-400">Semester Exam Dates Released</p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat label="Students" value="12,000+" />
        <Stat label="Faculty" value="850+" />
        <Stat label="Programs" value="120+" />
        <Stat label="Research Centers" value="35+" />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-slate-400 mt-2">{label}</div>
    </div>
  );
}

const departments = [
  { name: "Physics", courses: ["B.Sc Physics", "M.Sc Physics", "PhD Physics"] },
  { name: "Chemistry", courses: ["B.Sc Chemistry", "M.Sc Chemistry", "PhD Chemistry"] },
  { name: "Mathematics", courses: ["B.Sc Mathematics", "M.Sc Mathematics", "PhD Mathematics"] },
  { name: "Biology", courses: ["B.Sc Biology", "M.Sc Biotechnology", "PhD Life Sciences"] },
  { name: "Computer Science", courses: ["BCA", "B.Tech CSE", "MCA", "M.Tech AI", "PhD CSE"] },
  { name: "Commerce", courses: ["B.Com", "M.Com", "MBA Finance"] },
  { name: "Law", courses: ["BA LLB", "LLM", "PhD Law"] },
];

function AcademicsCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full bg-gray-900">

    <section id="academics" className="py-20 px-6 max-w-7xl bg-gray-900 mx-auto">
      <h3 className="text-3xl font-bold text-center mb-6">Academic Departments</h3>
      <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
        UniFlow University offers diverse programs across Science, Arts, Commerce, Law, and Technology.
      </p>
      <Slider {...settings}>
        {departments.map((dept) => (
          <div key={dept.name} className="px-3">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col h-full justify-between hover:border-slate-700 transition">
              <h4 className="text-xl font-semibold mb-3">{dept.name}</h4>
              <ul className="space-y-1 text-sm text-slate-400 flex-1">
                {dept.courses.map((c) => <li key={c}>• {c}</li>)}
              </ul>
              <button className="mt-4 px-4 py-2 rounded-lg border border-slate-800 hover:bg-gray-800 transition">
                View More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
    <hr className="border-slate-600"/>
    </div>
  );
}

function Admissions() {
  return (
    <section id="admissions" className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-12">Admissions 2025–26</h3>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <AdmissionCard
          title="Eligibility"
          items={[
            "10+2 / Equivalent",
            "Entrance Exams (CUET / University Test)",
            "Merit-based & Reservation Policies",
          ]}
        />
        <AdmissionCard
          title="Process"
          items={[
            "Online Application",
            "Entrance / Merit Evaluation",
            "Counselling & Seat Allotment",
            "Document Verification",
          ]}
        />
        <AdmissionCard
          title="Scholarships"
          items={[
            "Merit-based Scholarships",
            "SC / ST / OBC / EWS Support",
            "Research Fellowships (PG & PhD)",
          ]}
        />
      </div>
      <div className="text-center">
        <button className="px-8 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition">
          Apply Online Now
        </button>
      </div>
    </section>
  );
}

function AdmissionCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-slate-500 transition">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-slate-400">
        {items.map((i) => <li key={i}>• {i}</li>)}
      </ul>
    </div>
  );
}

const researchProjects = [
  { title: "AI in Agriculture", desc: "Smart monitoring system", img: "https://picsum.photos/400/250" },
  { title: "Renewable Energy", desc: "Solar & Wind optimization", img: "https://picsum.photos/400/250" },
  { title: "Biomedical Research", desc: "Innovative drug development", img: "https://picsum.photos/400/250" },
];

function ResearchCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-slate-800">
    <section id="research" className="py-20 px-6 max-w-7xl mx-auto bg-slate-800 rounded-xl">
      <h3 className="text-3xl font-bold text-center mb-12">Research & Innovation</h3>

      <Slider {...settings}>
        {researchProjects.map((a) => (
          <div key={a.title} className="px-3">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex flex-col hover:border-slate-500 transition">
              <img src={a.img} alt={a.title} className="rounded-xl mb-4 w-full h-48 object-cover"/>
              <h4 className="font-semibold text-lg">{a.title}</h4>
              <p className="text-sm text-slate-400 mt-2">{a.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
        </div>
  );
}

const events = [
  { title: "Tech Fest 2025", date: "12 Jan 2025", desc: "Annual technology festival." },
  { title: "Cultural Night", date: "28 Feb 2025", desc: "Celebrating arts and culture." },
  { title: "Convocation", date: "15 Mar 2025", desc: "Graduation ceremony for all students." },
];

function EventsSection() {
  return (
    <section id="events" className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-12">Upcoming Events</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((e) => (
          <div key={e.title} className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-slate-500 transition">
            <h4 className="font-semibold text-lg mb-2">{e.title}</h4>
            <p className="text-sm text-slate-400 mb-2">{e.date}</p>
            <p className="text-sm text-slate-300">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const campusFacilities = [
  { name: "Library", img: "https://picsum.photos/400/250" },
  { name: "Sports Complex", img: "https://picsum.photos/400/250" },
  { name: "Hostels", img: "https://picsum.photos/400/250" },
  { name: "Innovation Hub", img: "https://picsum.photos/400/250" },
];

function CampusLife() {
  return (
    <section id="campus" className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-6">Campus Life</h3>
      <p className="text-center text-slate-400 max-w-3xl mx-auto mb-12">
        Vibrant campus with hostels, sports complexes, cultural clubs, innovation hubs, and student-led communities.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {campusFacilities.map((f) => (
          <div key={f.name} className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-500 transition">
            <img src={f.img} alt={f.name} className="w-full h-48 object-cover"/>
            <div className="p-4 text-center text-slate-300 font-semibold">{f.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-700 py-8 text-center text-slate-500">
      © {new Date().getFullYear()} UniFlow University · India
    </footer>
  );
}
