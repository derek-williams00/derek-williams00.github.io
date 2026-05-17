import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="grid-container">
      <h2>Resume</h2>
      <div className="resume-actions">
        <a href="/Derek_Williams_Public_Resume_May_2026.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">Open PDF</a>
        <a href="/Derek_Williams_Public_Resume_May_2026.pdf" download className="btn-resume">Download PDF</a>
      </div>

      <div className="resume-highlights">
        <h5>Summary</h5>
        <p>
          AI engineer specialized in building and deploying LLM-powered systems, including conversational AI,
          retrieval pipelines, and evaluation frameworks. Experience delivering production AI platforms and
          data-intensive enterprise tooling.
        </p>

        <h5>Skills</h5>
        <p>
          <strong>Languages:</strong> Python, TypeScript, JavaScript, SQL, C/C++, Java, Go, C#<br />
          <strong>Frameworks:</strong> React, Node.js, Next.js, Express, Flask, Redux, .NET, FastMCP<br />
          <strong>AI / Systems:</strong> RAG, Vector DBs, MCP, CUDA, AI Evaluation &amp; Observability, LangChain, MLOps<br />
          <strong>Platforms:</strong> Git, Docker, Kubernetes, Linux, AWS, Azure, GitOps, CI/CD
        </p>

        <h5>Experience</h5>
        <p>
          <strong>HP Inc. - Machine Learning Engineer</strong> (Dec 2025 - Present)
        </p>
        <ul>
          <li>Built and deployed LLM-powered applications using RAG pipelines, vector databases, and agentic workflows to automate incident resolution and knowledge retrieval.</li>
          <li>Developed a conversational fab escalation assistant integrating historical incident data, reducing mean time to resolution.</li>
          <li>Designed an enterprise knowledge system capturing and serving domain expertise via retrieval pipelines for long-term reuse.</li>
          <li>Led adoption of spec-driven, AI-assisted development workflows, improving iteration speed and alignment with business requirements.</li>
        </ul>

        <p>
          <strong>HP Inc. - Software Applications Engineer, AI Platforms &amp; Developer Experience</strong> (Feb - Dec 2025)
        </p>
        <ul>
          <li>Earned HP Innovator Award for RAG graph architectures supporting low-latency augmentation of AI coding tools.</li>
          <li>Prevented significant costs evaluating productivity impacts of fine-tuned coding models, informing licensing strategy.</li>
          <li>Delivered MCP-based developer platforms enabling secure enterprise-context delivery for agentic coding workflows.</li>
          <li>Supported enterprise AI platforms serving 10,000+ engineers and 8,000+ Copilot users.</li>
        </ul>

        <p>
          <strong>HP Inc. - Software AI Intern</strong> (Jun 2024 - Jan 2025)
        </p>
        <ul>
          <li>Led evaluations of AI coding tools via automated assessment pipelines, enterprise datasets, and hallucination/security analyses.</li>
          <li>Produced instructional content showcasing effective GitHub Copilot usage including prompt-engineering strategies.</li>
        </ul>

        <h5>Education</h5>
        <p>B.S. Computer Science, GPA 3.2 - Oregon State University, College of Engineering (ABET-accredited) - 2024</p>
      </div>
    </section>
  );
};

export default Resume;
