import React, { useRef, useState } from "react";

const CheckSimilarity = ({ handleFile }) => {
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
    <section className="my-6">
      <section className="rounded-xl border border-dashed border-gray-700">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex flex-col items-center justify-center space-y-8 text-center">
          <div className="max-w-screen-md">
            <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900">
              Get real work done.
            </h1>
            <p className="mb-8 font-light text-2xl text-gray-400">
              Check out for the best candidates by uploading a list of resumes
              and a job description file right below!
            </p>

            <div className="flex flex-col space-y-8 justify-center">
              <div className="flex flex-col justify-center space-y-1">
                <button className="primarybtn" onClick={handleResumeFileClick}>
                  Upload Resumes &rarr;
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
                  <p className="capitalize">
                    Number of files selected: {selectedResumeFileNames.length}
                  </p>
                ) : (
                  <p className="text-gray-500">No Files Chosen</p>
                )}
              </div>

              <div className="flex flex-col justify-center space-y-1">
                <button
                  className="secondarybtn"
                  onClick={handleJobDescriptionFileClick}
                >
                  Upload Job Description &rarr;
                </button>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleJobDescriptionChange}
                  ref={jobDescriptionFileInputRef}
                  style={{ display: "none" }}
                />
                {jobDescriptionFile ? (
                  <p className="capitalize">
                    Job Description selected: {jobDescriptionFile.name}
                  </p>
                ) : (
                  <p className="text-gray-500">No Job Description Chosen</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CheckSimilarity;
