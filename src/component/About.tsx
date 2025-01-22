

const About = () => {
  return (
    <div className="bg-white">
      <header className="bg-[#003366] text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
       To empower individuals with the digital skills and knowledge they need 
       to achieve their goals and contribute to a digitally advanced society
       </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >85+</h3>
            <p className="text-gray-700">Tutors</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >2+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="bg-[#003366] text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          To become a leading global academy inspiring digital transformation
          and fostering innovation through accessible education
          </p>
      </section>
      
      <div className="bg-gray-700 p-4 min-h-screen">
  <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
    <div className="md:w-2/3 lg:w-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-gray-100"
      >
        <path
          fillRule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clipRule="evenodd"
        ></path>
      </svg>
      <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Goals</h2>
      <p className="text-gray-300">
        We follow our process to get you started as quickly as possible
      </p>
    </div>

    <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
      {/* Reusable Grid Component */}
      {[
        {
          title: "Digital Education",
          description:
            "We provide accessible, high-quality digital education",
          path: "M10 10l2 -2v8",
        },
        {
          title: "Community",
          description:
            "To create a community of digitally empowered learners",
          path: "M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3",
        },
        {
          title: "Mordern Skills",
          description:
            "We will deliver practical, industry-relevant skills to learners worldwide",
          path: "M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 1 -1 -1h-2a1 1 0 1",
        },
        {
          title: "Celebrate your Achievement",
          description:
            "We love Celebrations. We will celebrate your achievement on our Social Profiles.",
          path: "M10 8v3a1 1 0 0 0 1 1h3M14 8v8",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
        >
          <div className="relative space-y-8 py-12 p-8">
          <svg
  stroke="currentColor"
  fill="none"
  strokeWidth="2"
  viewBox="0 0 24 24"
  strokeLinecap="round"
  strokeLinejoin="round"
  color="white"
  style={{ color: "white" }}
  height="50"
  width="50"
  xmlns="http://www.w3.org/2000/svg"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path
  d={"M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" + item.path}
  ></path>
</svg>

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-white transition">
                {item.title}
              </h5>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>








      
    </div>
  )
}

export default About