"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { githubProjects, socialLinks } from "./data-helper";
import Link from "next/link";

const GitHubProjects = ({ id = "" }: { id: string }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredProjects = githubProjects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id={id} className="pt-20 px-5 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="slg:px-2 px-5">
        <SectionTitle title="GitHub Projects" />
        
        <div className="mx-auto mb-12 flex">
          <span className="relative mr-4 top-3">
            <svg className="w-8 h-8 inline-block text-green" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"
              ></path>
            </svg>
          </span>
          <p className="mt-4 text-grayblack">
            Explore my GitHub repositories featuring full-stack applications, AI projects, and open-source contributions. Click the projects below to view source code and documentation.
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-2xl">
          <input
            type="text"
            placeholder="Search projects by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-green bg-white text-grayblack focus:outline-none focus:border-green"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                className="group relative h-full"
              >
                <div className="h-full rounded-lg border-2 border-green bg-gradient-to-br from-green/5 to-transparent p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-green hover:bg-green/10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-blacktext group-hover:text-green transition-colors">
                        {project.name}
                      </h3>
                      <p className="mb-4 text-sm text-grayblack">
                        {project.description}
                      </p>
                    </div>
                    <svg className="w-6 h-6 text-green opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.6-5.4-12-12-12z" />
                    </svg>
                  </div>
                  <div className="mt-4 text-xs text-green font-semibold group-hover:underline">
                    View on GitHub →
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-grayblack">No projects found matching your search.</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={socialLinks.github}
            target="_blank"
            className="inline-block px-8 py-3 rounded-full bg-green text-white font-semibold shadow-md hover:bg-green/90 transition-all duration-300 hover:shadow-lg"
          >
            View All Projects on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
