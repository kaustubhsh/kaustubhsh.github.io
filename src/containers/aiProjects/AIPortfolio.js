import React from 'react';
import './AIPortfolio.css';
import { Fade } from 'react-reveal';

const AIPortfolio = () => {
  const [activeProject, setActiveProject] = React.useState(null);

  const focusAreas = [
    {
      title: "Platform Engineering for LLM",
      icon: "🧠",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Designing and operating Kubernetes-native platforms for large language model inference and training at production scale",
      tech: ["Kubernetes", "vLLM", "Ray", "Triton Inference Server", "KServe"],
      details: [
        "Multi-model LLM serving with auto-scaling",
        "Kubernetes operators for model lifecycle",
        "Inference optimization & batching strategies",
        "Model registry and version management",
        "A/B testing and canary deployments for models",
        "Resource quota and namespace isolation"
      ]
    },
    {
      title: "GPU Infrastructure & Optimization",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Datacenter GPU handling, NVIDIA GPU optimization, MIG partitioning strategies, and GPU cluster orchestration",
      tech: ["NVIDIA MIG", "CUDA", "DCGM", "GPU Operator", "NCCL", "NVLink"],
      details: [
        "NVIDIA MIG strategy for GPU partitioning",
        "GPU cluster orchestration and scheduling",
        "DCGM monitoring and health checks",
        "Multi-instance GPU workload isolation",
        "GPU memory optimization and profiling",
        "Datacenter-scale GPU fleet management"
      ]
    },
    {
      title: "AIOps Platform",
      icon: "📊",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Intelligent operations platform combining observability, anomaly detection, and automated remediation for AI infrastructure",
      tech: ["Prometheus", "Grafana", "OpenTelemetry", "PagerDuty", "Elasticsearch"],
      details: [
        "Real-time infrastructure observability",
        "ML-powered anomaly detection",
        "Automated incident response and remediation",
        "SLA/SLO monitoring and alerting",
        "Capacity planning and forecasting",
        "Root cause analysis automation"
      ]
    },
    {
      title: "LLM Training Platform",
      icon: "🔬",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      description: "End-to-end training infrastructure for large language models with distributed computing and experiment tracking",
      tech: ["PyTorch", "DeepSpeed", "Horovod", "Weights & Biases", "FSDP"],
      details: [
        "Distributed training orchestration",
        "DeepSpeed ZeRO optimization",
        "Experiment tracking and reproducibility",
        "Data pipeline and preprocessing at scale",
        "Checkpoint management and fault tolerance",
        "Hyperparameter tuning automation"
      ]
    },
    {
      title: "MCP Gateway",
      icon: "🔗",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      description: "Model Context Protocol gateway for LLM tool routing, function calling orchestration, and secure tool access management",
      tech: ["Model Context Protocol", "API Gateway", "LangChain", "OAuth2", "gRPC"],
      details: [
        "MCP server federation and routing",
        "Tool discovery and capability negotiation",
        "Secure tool access with RBAC policies",
        "Request/response transformation layer",
        "Rate limiting and quota management",
        "Tool execution sandboxing"
      ]
    },
    {
      title: "Agent Registry",
      icon: "📋",
      gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      description: "Centralized registry for AI agent discovery, versioning, health monitoring, and lifecycle management",
      tech: ["Service Discovery", "gRPC", "etcd", "Agent Lifecycle", "OpenAPI"],
      details: [
        "Agent registration and discovery",
        "Version management and rollback",
        "Health monitoring and heartbeat",
        "Capability-based agent matching",
        "Agent dependency graph tracking",
        "Deprecation and migration workflows"
      ]
    },
    {
      title: "AI Agent HUB",
      icon: "🤖",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      description: "Centralized multi-agent orchestration hub for coordinating, governing, and scaling autonomous AI agent workflows",
      tech: ["Multi-Agent Orchestration", "Agent Framework", "Redis", "Kafka", "WebSocket"],
      details: [
        "Multi-agent task coordination",
        "Agent communication protocols",
        "Workflow orchestration engine",
        "Governance and compliance policies",
        "Agent performance analytics",
        "Scalable agent execution runtime"
      ]
    },
    {
      title: "Software SDLC Automation",
      icon: "🔄",
      gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      description: "End-to-end software development lifecycle automation with infrastructure as code, quality gates, and security scanning",
      tech: ["GitHub Actions", "Terraform", "SonarQube", "Snyk", "Vault"],
      details: [
        "Automated code review and quality gates",
        "Infrastructure as Code pipelines",
        "Security scanning and compliance checks",
        "Environment provisioning automation",
        "Release management and versioning",
        "Developer experience tooling"
      ]
    },
    {
      title: "CI/CD & Kubernetes Architecture",
      icon: "☸️",
      gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      description: "GitOps-driven CI/CD pipelines and Kubernetes platform architecture for cloud-native application delivery",
      tech: ["ArgoCD", "Helm", "GitOps", "Istio", "Kustomize", "Flux"],
      details: [
        "GitOps-driven continuous delivery",
        "Helm chart library and standards",
        "Service mesh with Istio",
        "Multi-cluster Kubernetes architecture",
        "Progressive delivery and canary releases",
        "Platform engineering and developer portals"
      ]
    }
  ];

  return (
    <div className="ai-portfolio-container" id="focus-areas">
      <div className="focus-section-header">
        <Fade duration={1000}>
          <h1 className="focus-section-title">Focus Areas</h1>
          <p className="focus-section-subtitle">What I'm building and operating at scale</p>
        </Fade>
      </div>
      <div className="focus-grid">
        {focusAreas.map((area, index) => (
          <Fade key={index} duration={1000} delay={index * 100}>
            <div
              className={`focus-card ${activeProject === index ? 'focus-card-active' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="focus-card-icon" style={{ background: area.gradient }}>
                <span className="focus-icon-emoji">{area.icon}</span>
              </div>
              <h2 className="focus-card-title">{area.title}</h2>
              <p className="focus-card-description">{area.description}</p>
              <div className="focus-tech-stack">
                {area.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="focus-tech-tag">{tech}</span>
                ))}
              </div>
              <div className={`focus-card-overlay ${activeProject === index ? 'visible' : ''}`}>
                <div className="focus-overlay-content">
                  <h3>Key Capabilities</h3>
                  <ul>
                    {area.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AIPortfolio;
