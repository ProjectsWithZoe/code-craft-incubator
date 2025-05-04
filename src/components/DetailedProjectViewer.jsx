import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import html from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useNavigate } from "react-router-dom";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", html);

export default function DetailedProjectViewer({ projectData }) {
  const { name, description, difficulty, category, steps } = projectData || {};
  const [openStep, setOpenStep] = useState(null);
  const navigate = useNavigate();

  const getLanguage = (fileName) => {
    if (fileName.endsWith(".html")) return "html";
    if (fileName.endsWith(".css")) return "css";
    if (fileName.endsWith(".js")) return "javascript";
    return "text";
  };

  const navigateToMain = () => {
    navigate("/projects");
  };

  return (
    <div className="p-4 font-sans bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button
          className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-200 shadow-sm"
          onClick={navigateToMain}
        >
          ← Back to Projects
        </button>
      </div>

      {/* Project Info */}
      <div className="bg-white p-8 rounded-xl shadow-lg mx-auto w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">{name}</h1>
        <p className="text-gray-600 text-lg mb-4">{description}</p>
        <div className="flex gap-3">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {difficulty}
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Steps */}
      <div className="mx-auto w-full space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div
              onClick={() => setOpenStep(openStep === index ? null : index)}
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-blue-500">Step {step.step}</span>
                <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
              </div>
            </div>

            {openStep === index && (
              <div className="border-t border-gray-100">
                {/* Handle full files (only in step 1) */}
                {step.files ? (
                  <div className="p-6 space-y-6">
                    {step.files.map((file, fIndex) => (
                      <div key={fIndex} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-medium text-gray-500 mb-3">{file.file}</p>
                        <SyntaxHighlighter
                          language={getLanguage(file.file)}
                          style={atomOneDark}
                          customStyle={{
                            borderRadius: '0.5rem',
                            padding: '1rem',
                            margin: '0',
                            fontSize: '0.9rem'
                          }}
                        >
                          {file.content}
                        </SyntaxHighlighter>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-8 p-6">
                    {/* Description column */}
                    <div className="col-span-1 bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Description</h3>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{step.description}</p>
                    </div>
                    
                    {/* Code snippet column */}
                    {step.code && (
                      <div className="col-span-3 bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Code</h3>
                        <p className="text-sm font-medium text-gray-500 mb-3">
                          {step.code.file}
                        </p>
                        <SyntaxHighlighter
                          language={getLanguage(step.code.file)}
                          style={atomOneDark}
                          customStyle={{
                            borderRadius: '0.5rem',
                            padding: '1rem',
                            margin: '0',
                            fontSize: '0.9rem'
                          }}
                        >
                          {step.code.snippet}
                        </SyntaxHighlighter>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


