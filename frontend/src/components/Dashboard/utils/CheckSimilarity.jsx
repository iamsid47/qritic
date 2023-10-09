import React, { useRef, useState } from "react";
import axios from "axios";

const CheckSimilarity = ({ handleFile, handleResults }) => {
  const resumeFileInputRef = useRef(null);
  const jobDescriptionFileInputRef = useRef(null);
  const [selectedResumeFileNames, setSelectedResumeFileNames] = useState([]);
  const [jobDescriptionFile, setJobDescriptionFile] = useState(null);
  const maxResumeFileCount = 20;

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNERIndex, setSelectedNERIndex] = useState(-1);
  const [showResults, setShowResults] = useState(false);

  const handleResumeFileClick = () => {
    resumeFileInputRef.current.click();
  };

  const toggleNERDropdown = (index) => {
    setSelectedNERIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleJobDescriptionFileClick = () => {
    jobDescriptionFileInputRef.current.click();
  };

  const handleJobDescriptionChange = (event) => {
    const fileUploaded = event.target.files[0];
    if (fileUploaded && fileUploaded.type === "application/pdf") {
      setJobDescriptionFile(fileUploaded);
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
    } else {
      console.error(
        "Maximum file count exceeded. Please select up to 20 files."
      );
      alert("Maximum file count exceeded. Please select up to 20 files.");
    }
  };

  const handleUpload = async () => {
    alert("Request sent successfully. Wait for some time.");
    try {
      const formData = new FormData();
      formData.append("job_description", jobDescriptionFile);
      for (const resumeFile of resumeFileInputRef.current.files) {
        formData.append("resume_files", resumeFile);
      }

      const response = await axios.post(
        "http://localhost:8000/app/check_similarity",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResults(response.data.result);
      setLoading(false);
      setShowResults(true);
    } catch (error) {
      console.error("Error uploading files:", error);
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
              <div className="flex justify-center items-center">
                <button className="submitbtn w-1/3 " onClick={handleUpload}>
                  Get Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading && (
        <div className="my-6">
          <h1 className="text-center text-4xl text-gray-400">
            Results would appear here
          </h1>
          <p className="text-center text-gray-400 text-2xl py-3">
            Please give the processing some time, as we're running on limited
            resources.
          </p>
        </div>
      )}
      {!loading && showResults && (
        <div className="my-12">
          <h1 className="text-center text-5xl text-gray-900 py-6 font-bold">
            Results:
          </h1>
          <table className="w-full border-collapse border border-gray-700">
            <thead className="bg-gray-800 text-gray-900">
              <tr>
                <th className="border border-gray-700 py-4 px-16 text-center text-white">
                  File Name
                </th>
                <th className="border border-gray-700 py-4 px-16 text-center text-white">
                  Rank
                </th>
                <th className="border border-gray-700 py-4 px-16 text-center text-white">
                  Score
                </th>
                <th className="border hidden border-gray-700 py-4 px-16 text-center text-white">
                  NER Output
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index} className="text-gray-900 text-lg">
                  <td className="border border-gray-700 py-2 px-4">
                    {result.resume_filename}
                  </td>
                  <td className="border border-gray-700 py-4 px-16 text-center">
                    {result.rank}
                  </td>
                  <td className="border border-gray-700 py-4 px-16 text-center font-bold">
                    {result.ensemble_score
                      ? `${result.ensemble_score.toFixed(2)}%`
                      : "N/A"}
                  </td>
                  <td className="border hidden border-gray-700 py-4 px-16">
                    <button
                      onClick={() => toggleNERDropdown(index)}
                      className="text-blue-600 font-bold text-center py-3 underline cursor-pointer"
                    >
                      {selectedNERIndex === index
                        ? "Hide NER Output"
                        : "Show NER Output"}
                    </button>
                    {selectedNERIndex === index && (
                      <ul className="list-disc list-inside">
                        {result.ner_output.map((nerItem, itemIndex) => (
                          <li key={itemIndex}>{`${nerItem.text}`}</li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default CheckSimilarity;
