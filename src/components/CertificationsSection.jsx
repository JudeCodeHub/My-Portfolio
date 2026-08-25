import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  FolderOpen,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  X,
  FileImage,
} from "lucide-react";
import Shuffle from "./ui/Shuffle";
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const CERTIFICATIONS_DATA = [
  {
    folderName: "KodeKloud",
    isOpenByDefault: false,
    files: [
      {
        id: "kk-1",
        name: "cert1.jpg",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert1.jpg",
      },
      {
        id: "kk-2",
        name: "cert2.jpg",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert2.jpg",
      },
      {
        id: "kk-3",
        name: "cert3.png",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert3.png",
      },
      {
        id: "kk-4",
        name: "cert4.jpg",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert4.jpg",
      },
      {
        id: "kk-5",
        name: "cert5.png",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert5.png",
      },
      {
        id: "kk-6",
        name: "cert6.png",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert6.png",
      },
      {
        id: "kk-7",
        name: "cert7.png",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert7.png",
      },
      {
        id: "kk-8",
        name: "cert8.png",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert8.png",
      },
      {
        id: "kk-9",
        name: "cert9.jpg",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert9.jpg",
      },
      {
        id: "kk-10",
        name: "cert10.jpg",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert10.jpg",
      },
      {
        id: "kk-11",
        name: "cert11.png",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert11.png",
      },
      {
        id: "kk-12",
        name: "cert12.jpg",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert12.jpg",
      },
      {
        id: "kk-13",
        name: "cert13.jpg",
        type: "IMAGE",
        image: "/Certificates/KodeKloud/cert13.jpg",
      },
    ],
  },
  {
    folderName: "Aws Skill Builder",
    isOpenByDefault: false,
    files: [
      {
        id: "aws-1",
        name: "cert1.png",
        type: "PDF",
        image: "/Certificates/Aws Skill Builder/cert1.png",
      },
      {
        id: "aws-2",
        name: "cert2.png",
        type: "PDF",
        image: "/Certificates/Aws Skill Builder/cert2.png",
      },
      {
        id: "aws-3",
        name: "cert3.png",
        type: "PDF",
        image: "/Certificates/Aws Skill Builder/cert3.png",
      },
      {
        id: "aws-4",
        name: "cert4.png",
        type: "PDF",
        image: "/Certificates/Aws Skill Builder/cert4.png",
      },
      {
        id: "aws-5",
        name: "cert5.png",
        type: "PDF",
        image: "/Certificates/Aws Skill Builder/cert5.png",
      },
      {
        id: "aws-6",
        name: "cert6.png",
        type: "PDF",
        image: "/Certificates/Aws Skill Builder/cert6.png",
      },
      {
        id: "aws-7",
        name: "cert7.png",
        type: "PDF",
        image: "/Certificates/Aws Skill Builder/cert7.png",
      },
    ],
  },
  {
    folderName: "Cisco",
    isOpenByDefault: false,
    files: [
      {
        id: "cisco-1",
        name: "cert.png",
        type: "PDF",
        image: "/Certificates/Cisco/cert.png",
      },
    ],
  },
  {
    folderName: "Competitions",
    isOpenByDefault: false,
    files: [
      {
        id: "comp-1",
        name: "cert1.png",
        type: "PDF",
        image: "/Certificates/Competitions/cert1.png",
      },
      {
        id: "comp-2",
        name: "cert2.png",
        type: "PDF",
        image: "/Certificates/Competitions/cert2.png",
      },
    ],
  },
  {
    folderName: "Google Skills",
    isOpenByDefault: false,
    files: [
      {
        id: "gs-1",
        name: "cert.png",
        type: "IMAGE",
        image: "/Certificates/Google Skills/cert.png",
      },
    ],
  },
  {
    folderName: "HackerRank",
    isOpenByDefault: false,
    files: [
      {
        id: "hr-1",
        name: "cert1.png",
        type: "IMAGE",
        image: "/Certificates/HackerRank/cert1.png",
      },
      {
        id: "hr-2",
        name: "cert2.png",
        type: "IMAGE",
        image: "/Certificates/HackerRank/cert2.png",
      },
    ],
  },
  {
    folderName: "Simplilearn",
    isOpenByDefault: false,
    files: [
      {
        id: "sl-1",
        name: "cert.png",
        type: "PDF",
        image: "/Certificates/Simplilearn/cert.png",
      },
    ],
  },
];

export const CertificationsSection = () => {
  const defaultOpenIndex = CERTIFICATIONS_DATA.findIndex(
    (folder) => folder.isOpenByDefault,
  );
  const [openFolder, setOpenFolder] = useState(
    defaultOpenIndex !== -1 ? defaultOpenIndex : null,
  );
  const [selectedCert, setSelectedCert] = useState(null);

  const toggleFolder = (index) => {
    if (openFolder === index) {
      setOpenFolder(null);
    } else {
      setOpenFolder(index);
    }
  };

  let activeFolderIdx = openFolder;
  let activeFileIdx = -1;
  if (selectedCert) {
    if (activeFolderIdx !== null && CERTIFICATIONS_DATA[activeFolderIdx]) {
      activeFileIdx = CERTIFICATIONS_DATA[activeFolderIdx].files.findIndex(
        (f) => f.id === selectedCert.id,
      );
    }
    if (activeFileIdx === -1) {
      for (let i = 0; i < CERTIFICATIONS_DATA.length; i++) {
        const idx = CERTIFICATIONS_DATA[i].files.findIndex(
          (f) => f.id === selectedCert.id,
        );
        if (idx !== -1) {
          activeFolderIdx = i;
          activeFileIdx = idx;
          break;
        }
      }
    }
  }

  const hasPrev = activeFileIdx > 0;
  const hasNext =
    activeFolderIdx !== null &&
    CERTIFICATIONS_DATA[activeFolderIdx] &&
    activeFileIdx < CERTIFICATIONS_DATA[activeFolderIdx].files.length - 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (hasPrev) {
      setSelectedCert(
        CERTIFICATIONS_DATA[activeFolderIdx].files[activeFileIdx - 1],
      );
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (hasNext) {
      setSelectedCert(
        CERTIFICATIONS_DATA[activeFolderIdx].files[activeFileIdx + 1],
      );
    }
  };

  return (
    <section
      id="certifications"
      className="w-full md:min-h-screen py-12 md:py-24 relative overflow-hidden flex flex-col items-center max-w-[100vw]"
    >
      {/* Background glow matching the terminal theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.03)_0%,_transparent_60%)] pointer-events-none" />

      {/* Header */}
      <div className="w-full max-w-5xl mb-4 z-20 text-center flex justify-center">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-slate-800 dark:text-white tracking-tight flex justify-center items-center whitespace-nowrap mb-4">
          <span className="text-orange-500 shrink-0 mr-3">~$</span>
          <span className="shrink-0 inline-block">
            <Shuffle text="certifications" loop={true} loopDelay={3} />
          </span>
        </h2>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-5xl px-4 md:px-8 z-10">
        {/* Terminal Window Frame */}
        <div className="w-full min-h-[400px] md:min-h-[650px] bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
          {/* Terminal Header */}
          <div className="h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 shrink-0 justify-between">
            <div className="w-14" /> {/* Spacer to keep title centered */}
            <div className="flex-1 text-center text-white/40 text-xs font-mono select-none">
              ~/certifications
            </div>
            <div className="flex gap-2 w-14 justify-end">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-6 font-mono text-sm md:text-base">
            {/* Table Header (Simulated ls -la output) */}
            <div className="flex items-center text-white/40 border-b border-white/10 pb-2 mb-4 px-2 hidden md:flex">
              <div className="w-10 shrink-0"></div>
              <div className="w-32 lg:w-40 shrink-0 text-left">Permissions</div>
              <div className="w-24 shrink-0 text-left">Owner</div>
              <div className="w-32 lg:w-48 shrink-0 hidden lg:block"></div>
              <div className="flex-1 text-left pl-4">Name</div>
            </div>

            <div className="flex flex-col gap-5">
              {CERTIFICATIONS_DATA.map((folder, folderIdx) => {
                const isOpen = openFolder === folderIdx;

                return (
                  <div key={folderIdx} className="flex flex-col">
                    {/* Folder Row */}
                    <div
                      onClick={() => toggleFolder(folderIdx)}
                      className="flex items-center hover:bg-white/5 p-2 rounded cursor-pointer transition-colors group select-none"
                    >
                      <div className="w-10 shrink-0 text-white/40 flex justify-center">
                        {isOpen ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </div>
                      <div className="hidden md:block w-32 lg:w-40 shrink-0 text-left text-orange-500/80">
                        drwxr-xr-x
                      </div>
                      <div className="w-24 shrink-0 hidden md:block text-left text-white/50">
                        jude
                      </div>
                      <div className="w-32 lg:w-48 shrink-0 hidden lg:block"></div>
                      <div className="flex-1 pl-4 flex items-center justify-start gap-3 text-left text-orange-400 font-bold group-hover:text-orange-300 transition-colors truncate">
                        {isOpen ? (
                          <FolderOpen size={18} className="shrink-0" />
                        ) : (
                          <Folder size={18} className="shrink-0" />
                        )}
                        <span className="truncate">{folder.folderName}</span>
                      </div>
                    </div>

                    {/* Files within Folder */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden flex flex-col pl-4 sm:pl-0 border-l border-white/10 sm:border-transparent ml-4 sm:ml-0"
                        >
                          {folder.files.map((file, fileIdx) => (
                            <div
                              key={fileIdx}
                              onClick={() => setSelectedCert(file)}
                              className="flex items-center hover:bg-white/10 p-2 rounded cursor-pointer transition-colors group select-none"
                            >
                              <div className="w-10 shrink-0 hidden md:block"></div>
                              <div className="hidden md:block w-32 lg:w-40 shrink-0 text-left text-white/60">
                                -rw-r--r--
                              </div>
                              <div className="w-24 shrink-0 hidden md:block text-left text-white/50">
                                jude
                              </div>
                              <div className="w-32 lg:w-48 shrink-0 hidden lg:block"></div>
                              <div className="flex-1 pl-4 flex items-center justify-start gap-3 text-left text-white/80 group-hover:text-white transition-colors truncate">
                                <FileImage
                                  size={16}
                                  className="text-white/40 group-hover:text-white/80 shrink-0"
                                />
                                <span className="truncate">{file.name}</span>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center p-4 pt-20 md:pl-64 lg:pl-80 bg-black/80 backdrop-blur-sm md:bg-black/60 md:backdrop-blur-none"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative w-[95vw] md:w-[90vw] max-w-5xl md:h-[80vh] flex flex-col bg-[#111] rounded-xl border border-white/10 overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="h-12 bg-[#1a1a1a] border-b border-white/10 flex items-center px-4 shrink-0 justify-between">
                    <div className="flex items-center gap-2 flex-1 overflow-hidden">
                      <FileImage
                        size={16}
                        className="text-orange-500 shrink-0"
                      />
                      <h3 className="text-white/60 font-mono text-sm font-bold truncate">
                        {selectedCert.name}
                      </h3>
                    </div>
                    <div className="flex justify-end shrink-0">
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="w-8 h-8 md:w-5 md:h-5 rounded-full md:bg-red-500 md:hover:bg-red-400 hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer group"
                      >
                        <X
                          size={20}
                          className="text-white/60 md:text-white md:w-[17px] md:h-[17px]"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Image / PDF Container */}
                  <div className="flex-1 bg-black/50 p-4 sm:p-8 flex items-center justify-center overflow-hidden h-[60vh] md:h-auto md:overflow-auto relative group/modal">
                    {/* DESKTOP PREV BUTTON */}
                    <button
                      onClick={handlePrev}
                      disabled={!hasPrev}
                      className={`hidden md:flex absolute left-4 top-[45%] -translate-y-1/2 w-12 h-12 rounded-full items-center justify-center transition-all z-10 opacity-0 ${
                        !hasPrev
                          ? "bg-black/60 border border-white text-white cursor-not-allowed group-hover/modal:opacity-30"
                          : "bg-black/60 hover:bg-black/80 border border-white hover:border-orange-500 hover:text-orange-500 text-white cursor-pointer group-hover/modal:opacity-100"
                      }`}
                    >
                      <ChevronLeft size={28} className="mr-1" />
                    </button>

                    <div className="w-full h-full flex items-center justify-center relative">
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.name}
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/1200x800/222/FFF?text=Certificate+Image+Missing\\n(Place+images+in+/public/Certificates/)";
                        }}
                      />
                    </div>

                    {/* DESKTOP NEXT BUTTON */}
                    <button
                      onClick={handleNext}
                      disabled={!hasNext}
                      className={`hidden md:flex absolute right-4 top-[45%] -translate-y-1/2 w-12 h-12 rounded-full items-center justify-center transition-all z-10 opacity-0 ${
                        !hasNext
                          ? "bg-black/60 border border-white text-white cursor-not-allowed group-hover/modal:opacity-30"
                          : "bg-black/60 hover:bg-black/80 border border-white hover:border-orange-500 hover:text-orange-500 text-white cursor-pointer group-hover/modal:opacity-100"
                      }`}
                    >
                      <ChevronRight size={28} className="ml-1" />
                    </button>
                  </div>

                  {/* MOBILE NAVIGATION BUTTONS (Underneath Image) */}
                  <div className="md:hidden h-16 bg-[#1a1a1a] border-t border-white/10 flex items-center justify-between px-4 sm:px-6 shrink-0">
                    <button
                      onClick={handlePrev}
                      disabled={!hasPrev}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                        !hasPrev
                          ? "text-white/30 cursor-not-allowed"
                          : "text-white hover:bg-white/10 hover:text-orange-500 cursor-pointer"
                      }`}
                    >
                      <ChevronLeft size={20} />
                      <span className="hidden sm:block font-mono text-sm">
                        Previous
                      </span>
                    </button>

                    <div className="text-white/40 font-mono text-xs sm:text-sm tracking-wider">
                      ~/{selectedCert.name.split(".")[0]}
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={!hasNext}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                        !hasNext
                          ? "text-white/30 cursor-not-allowed"
                          : "text-white hover:bg-white/10 hover:text-orange-500 cursor-pointer"
                      }`}
                    >
                      <span className="hidden sm:block font-mono text-sm">
                        Next
                      </span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
};
