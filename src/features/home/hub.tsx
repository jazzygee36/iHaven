"use client";

const hubs = [
  {
    title: "Kaduna Tech Hub",
    description:
      "Connecting youth and developers in Northern Nigeria with free meetups, workshops, and mentorship.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  },
  {
    title: "Kano Innovation Center",
    description:
      "Our Kano community is growing fast — join weekly sessions on design, web, and entrepreneurship.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  },
  {
    title: "Abuja Creators Space",
    description:
      "Our capital-based hub where digital creators collaborate and build real-world solutions.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  },
];

const CommunityHubs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[25px] md:text-3xl font-bold text-gray-800 text-center mb-10">
          Our Community Hubs
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We're building physical and virtual spaces to empower developers,
          designers, and digital creators in every region. Join a hub near you
          and grow with others.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={hub.image}
                alt={hub.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-gray-800">{hub.title}</h3>
                <p className="text-gray-600 text-sm">{hub.description}</p>
                <button className="text-blue-600 font-medium hover:underline">
                  Explore More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CommunityHubs;
