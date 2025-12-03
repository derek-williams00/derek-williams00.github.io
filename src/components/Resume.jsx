import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="grid-container">
      <h2>Resume</h2>
      <p>
        Download my latest resume (PDF). Social links are available in the header and under the About section.
      </p>
      <p>
        <a href="/Public_Resume_December_2nd_2025_v11.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Open Resume (PDF)</a>
        &nbsp;
        <a href="/Public_Resume_December_2nd_2025_v11.pdf" download className="btn btn-outline-secondary">Download PDF</a>
      </p>

      <div className="resume-highlights">
        <h5>Summary</h5>
        <p>
          Software engineer specializing in AI-driven developer experience, agentic systems, and secure enterprise
          tooling, with expertise in scalable retrieval pipelines, enterprise-context delivery, and AI integration
          across developer communities.
        </p>

        <h5>Skills</h5>
        <p>
          Languages: Python, TypeScript, JavaScript, SQL, C/C++, Java, Go, C#, Swift<br />
          Frameworks & Tools: React, Node.js, Express, Flask, Redux, Docker, Kubernetes, AWS, Azure<br />
          AI / Systems: RAG, Vector DBs, MCP, CUDA, AI eval pipelines, MLOps
        </p>

        <h5>Professional Experience (highlights)</h5>
        <p>
          <strong>HP Inc. — Software Applications Engineer, AI Platform & Developer Experience</strong> (Feb 2025 - Present)
        </p>
        <ul>
          <li>Earned HP Innovator Award for RAG graph architectures supporting low-latency augmentation of AI coding tools.</li>
          <li>Evaluated and validated productivity impacts of GenAI coding-assistant fine-tuned models to inform licensing strategy.</li>
          <li>Delivered MCP-based developer platforms for secure enterprise-context delivery and rewrote an MCP server from Python to Go with Double-PKCE auth.</li>
        </ul>

        <p>
          <strong>HP Inc. — Software AI Intern</strong> (Jun 2024 - Jan 2025)
        </p>
        <ul>
          <li>Led evaluations of AI coding tools via automated assessment pipelines and enterprise datasets; performed hallucination/security analyses.</li>
          <li>Produced instructional materials on GitHub Copilot best practices and prompt-engineering strategies.</li>
        </ul>

        <h5>Education</h5>
        <p>B.S. Computer Science — Oregon State University, Dec 2024</p>
      </div>
    </section>
  );
};

export default Resume;
