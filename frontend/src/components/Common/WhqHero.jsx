import React, { useRef, useState } from "react";
import GoodFR from "../Pages/WHQSec/GoodFR";

const WhqHero = ({ handleFile }) => {
  const resumeFileInputRef = useRef(null);
  const jobDescriptionFileInputRef = useRef(null);
  const [selectedResumeFileNames, setSelectedResumeFileNames] = useState([]);
  const [jobDescriptionFile, setJobDescriptionFile] = useState(null);
  const maxResumeFileCount = 20;

  const handleResumeFileClick = () => {
    resumeFileInputRef.current.click();
  };

  const handleJobDescriptionFileClick = () => {
    jobDescriptionFileInputRef.current.click();
  };

  const handleJobDescriptionChange = (event) => {
    const fileUploaded = event.target.files[0];
    if (fileUploaded && fileUploaded.type === "application/pdf") {
      setJobDescriptionFile(fileUploaded);
      handleFile(fileUploaded);
    } else {
      console.error("Invalid file format. Please select a PDF file.");
      alert("Invalid file format. Please select a PDF file.");
    }
  };

  const handleResumeChange = (event) => {
    const filesUploaded = event.target.files;
    if (filesUploaded.length <= maxResumeFileCount) {
      const fileNames = Array.from(filesUploaded).map((file) => file.name);
      setSelectedResumeFileNames(fileNames);
      handleFile(filesUploaded);
    } else {
      console.error(
        "Maximum file count exceeded. Please select up to 20 files."
      );
      alert("Maximum file count exceeded. Please select up to 20 files.");
    }
  };
  return (
    <section>
      <div className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0 "></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center xl:max-w-3xl ">
            <h1 className="font-bold text-gray-900 text-4xl xl:text-6xl">
              Recruiting is{" "}
              <span className="text-red-200 bg-red-600 px-3 py-0.5 rounded-lg">
                HARD
              </span>{" "}
              & we aim to make it a{" "}
              <span className="underline underline-offset-4 text-5xl lg:text-7xl text-blue-600 decoration-wavy hover:decoration-solid">
                BREEZE
              </span>
            </h1>
            <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-700">
              Try out <span className="font-bold">Qritic</span> by uploading
              upto 5 files and 1 job description file and see magic happen ✨
            </p>

            <form
              action="#"
              className="max-w-xl mx-auto mt-10 border border-dashed border-gray-300 p-12 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col space-y-8 justify-center">
                <div className="flex flex-col justify-center space-y-1">
                  <button
                    className="secondarybtn"
                    onClick={handleResumeFileClick}
                  >
                    Resumes &rarr;{" "}
                    <span className="text-xs text-gray-400">
                      (.pdf, no images)
                    </span>
                  </button>
                  <input
                    type="file"
                    accept=".pdf"
                    multiple
                    onChange={handleResumeChange}
                    ref={resumeFileInputRef}
                    style={{ display: "none" }}
                  />
                  {selectedResumeFileNames.length > 0 ? (
                    <p className="capitalize text-xs">
                      Number of files selected: {selectedResumeFileNames.length}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-xs">No Files Chosen</p>
                  )}
                </div>

                <div className="flex flex-col justify-center space-y-1">
                  <button
                    className="secondarybtn"
                    onClick={handleJobDescriptionFileClick}
                  >
                    Job Description &rarr;{" "}
                    <span className="text-xs text-gray-400">
                      (.pdf, no images)
                    </span>
                  </button>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleJobDescriptionChange}
                    ref={jobDescriptionFileInputRef}
                    style={{ display: "none" }}
                  />
                  {jobDescriptionFile ? (
                    <p className="capitalize text-xs">
                      Job Description selected: {jobDescriptionFile.name}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-xs">
                      No Job Description Chosen
                    </p>
                  )}
                </div>
              </div>
              <div className="flex mt-5">
                <button type="submit" className="primarybtn w-full">
                  Check For Yourself &rarr;
                </button>
              </div>
            </form>
            <GoodFR />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhqHero;
