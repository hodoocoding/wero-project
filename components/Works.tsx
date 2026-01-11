"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  year: string;
  title: string;
  subtitle: string;
  tags: string[];
  img: string;
  gallery?: string[]; // Extra images
}

const Works: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Original list
  const projectsData: Project[] = [
    {
      year: "2025",
      title: "Audi Korea X Noblesse",
      subtitle: "Nutcracker VIP Chauffeur",
      tags: ["VIP PROTOCOL", "PARTNERSHIP"],
      img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2166",
      ],
    },
    {
      year: "2025",
      title: "Audi Korea",
      subtitle: "Progressive Experience",
      tags: ["VIP CHAUFFEUR", "OPERATION"],
      img: "https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=2070&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070",
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072",
      ],
    },
    {
      year: "2021-2023",
      title: "BMW Korea",
      subtitle: "Product Launch & Customer Events",
      tags: ["LAUNCH", "CUSTOMER EVENT"],
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070",
        "https://images.unsplash.com/photo-1494905998402-395d579af90f?q=80&w=2070",
      ],
    },
    {
      year: "2019",
      title: "Nissan Korea",
      subtitle: "Seoul Motor Show",
      tags: ["MOTOR SHOW", "EXHIBITION"],
      img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "2018",
      title: "Nissan Korea",
      subtitle: "Busan Motor Show",
      tags: ["MOTOR SHOW", "EXHIBITION"],
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2166&auto=format&fit=crop",
    },
    {
      year: "2017",
      title: "Audi Korea",
      subtitle: "C-seg Comparative Test-drive",
      tags: ["TEST DRIVE", "EXPERIENCE"],
      img: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop",
    },
  ];

  // Logic: "홈페이지에 표기되는 순서는 역순으로 (가장 최근)".
  // User says "List sequence is numbered, but show in reverse (most recent ordered?)".
  // The provided list seems to be 2025 -> 2017 already.
  // If the user meant "The list I gave you is numbered 1..N (Old to New?), please show Reverse".
  // The code above is 2025 (Top) -> 2017 (Bottom). This IS Reverse Chronological.
  // If the user meant "Reverse of what is in the code", then I would flip it.
  // BUT: "List in google sheet" vs "Photo names".
  // I will assume the `projectsData` I hardcoded IS the "Most Recent First" order.
  // If I need to be safe, I'll sort by year descending.
  // But since I typed it, I'll just rely on the array order.
  // "List Numbering... Reverse".
  // I will just render `projectsData` as is, assuming it is already "Recent First".
  // IF the user implies the supplied data is Old->New, then I should reverse it.
  // The hardcoded data above IS New->Old. So I am good.

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || !selectedProject.gallery) return;
    setCurrentImageIndex(
      (prev) => (prev + 1) % (selectedProject.gallery!.length + 1)
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || !selectedProject.gallery) return;
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + (selectedProject.gallery!.length + 1)) %
        (selectedProject.gallery!.length + 1)
    );
  };

  const getCurrentImage = () => {
    if (!selectedProject) return "";
    if (currentImageIndex === 0) return selectedProject.img;
    return selectedProject.gallery
      ? selectedProject.gallery[currentImageIndex - 1]
      : selectedProject.img;
  };

  return (
    <section id="works" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-xs font-bold tracking-[0.3em] text-brand-accent uppercase">
            Selected Portfolio
          </h2>
          <div className="h-px bg-white/20 flex-grow ml-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* CLS prevention with aspect-ratio container */}
              <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-white/5">
                <div className="absolute inset-0 bg-brand-accent mix-blend-color opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  + MORE IMAGES
                </div>
              </div>

              <div className="flex flex-col border-l-2 border-transparent group-hover:border-brand-accent pl-4 transition-all duration-300">
                <span className="text-brand-accent font-mono text-xs mb-2">
                  {project.year}
                </span>
                <h3 className="text-2xl font-display font-bold uppercase leading-none mb-1 text-white group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase border border-white/20 px-2 py-0.5 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button className="absolute top-8 right-8 text-white hover:text-brand-accent transition-colors">
            <X size={32} />
          </button>

          <div
            className="w-full max-w-5xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal gallery image - CLS prevention with aspect-ratio */}
            <div className="relative w-full aspect-video bg-neutral-900 border border-white/10 mb-6 group">
              <Image
                src={getCurrentImage()}
                alt="Project Gallery"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
              />

              {selectedProject.gallery &&
                selectedProject.gallery.length > 0 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-brand-accent hover:text-black transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-brand-accent hover:text-black transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-display font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400">{selectedProject.subtitle}</p>
              <p className="text-sm text-brand-accent mt-2">
                Image {currentImageIndex + 1} /{" "}
                {(selectedProject.gallery?.length || 0) + 1}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
