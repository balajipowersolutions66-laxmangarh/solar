import { useRouter } from "next/router";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Mock database of projects
  const projects = {
    "residential-5kw": {
      title: "Residential Rooftop – 5 kW",
      description:
        "This 5 kW residential rooftop project in Jaipur provides full household energy independence with net-metering integration. The system powers fans, lights, refrigerator, and air conditioners, reducing monthly bills to almost zero.",
      img: "/projects/home1.jpg",
      specs: ["5 kW Solar Panels", "On-Grid Inverter", "Net Metering Enabled"],
    },
    "agriculture-10hp": {
      title: "Agriculture Pumping – 10 HP",
      description:
        "This 10 HP solar pumping project in Haryana provides sustainable water pumping for irrigation. Farmers save on electricity bills and enjoy reliable pumping even during power cuts.",
      img: "/projects/farm1.jpg",
      specs: [
        "10 HP Solar Water Pump",
        "Hybrid Solar Inverter",
        "Battery Backup for 6 hours",
      ],
    },
    "industrial-50kw": {
      title: "Industrial Roof – 50 kW",
      description:
        "A large-scale industrial solar rooftop installation in Gujarat. This 50 kW system covers 70% of the factory’s power needs, reducing grid dependency and electricity expenses significantly.",
      img: "/projects/industry1.jpg",
      specs: [
        "50 kW Solar Array",
        "3-Phase Industrial Inverter",
        "Monitoring System",
      ],
    },
  };

  const project = projects[slug];

  if (!project) {
    return (
      <div className="bg-pearl min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Loading project details...</p>
      </div>
    );
  }

  return (
    <div className="bg-pearl min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-80 object-cover bg-pearl"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-emerald mb-4">
            {project.title}
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p>

          <h2 className="text-xl font-semibold text-emerald mb-3">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {project.specs.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
