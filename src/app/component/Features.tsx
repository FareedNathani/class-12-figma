// components/Features.tsx
import React from 'react';

const Features = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Collaborate</h3>
          <p className="text-sm text-gray-600">
            Bring your team together with powerful collaboration tools that streamline communication.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Plan</h3>
          <p className="text-sm text-gray-600">
            Plan your projects efficiently with features like Gantt charts and Kanban boards.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Analyze</h3>
          <p className="text-sm text-gray-600">
            Analyze project progress with in-depth reports and real-time dashboards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
