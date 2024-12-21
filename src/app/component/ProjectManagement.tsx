const ProjectManagement = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left Content: Text */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">Project Management</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
            Get Started →
          </button>
        </div>

        {/* Right Content: Blue Box and Dots */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
          {/* Blue Box */}
          <div className="w-[824px] h-[549px] bg-blue-200 rounded-md"></div>

        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
