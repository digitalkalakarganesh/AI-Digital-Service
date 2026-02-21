const CoreEngine = {
  analyzeRequirement: function (data) {
    const systemActions = [];
    const humanActions = [];
    const assumptions = [];

    let feasibility = "Feasible";

    // Project Type Logic
    if (data.projectType.includes("Website")) {
      systemActions.push("Generate website structure");
      systemActions.push("Create responsive UI layout");
    }

    if (data.projectType.includes("Mobile")) {
      systemActions.push("Build Progressive Web App (PWA)");
      assumptions.push("PWA used instead of native app.");
    }

    if (data.projectType.includes("Marketing")) {
      systemActions.push("Setup marketing automation funnel");
      systemActions.push("Integrate social media tools");
    }

    // Feature Detection Logic
    const featuresText = data.features.toLowerCase();

    if (featuresText.includes("ai")) {
      systemActions.push("Integrate AI content generation");
    }

    if (featuresText.includes("payment")) {
      systemActions.push("Integrate payment gateway");
      humanActions.push("Provide payment API keys");
    }

    if (featuresText.includes("crypto")) {
      feasibility = "Partially Feasible";
      humanActions.push("Third-party crypto API integration required");
      assumptions.push("Crypto APIs may require paid plan.");
    }

    if (featuresText.includes("seo")) {
      systemActions.push("Apply SEO optimization");
    }

    // Default fallback
    if (systemActions.length === 0) {
      systemActions.push("Basic system structure setup");
    }

    humanActions.push("Approve final deployment");

    assumptions.push("Free-first stack selected.");

    return {
      feasibility,
      systemActions,
      humanActions,
      assumptions
    };
  }
};