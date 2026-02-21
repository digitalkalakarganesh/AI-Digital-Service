const CoreEngine = {
  analyzeRequirement: function (data) {

    const systemActions = [];
    const humanActions = [];
    const assumptions = [];

    let feasibility = "Feasible";
    let complexityScore = 1;

    const featuresText = data.features.toLowerCase();

    // Project Type Logic
    if (data.projectType.includes("Website")) {
      systemActions.push("Generate website structure");
      complexityScore += 1;
    }

    if (data.projectType.includes("Mobile")) {
      systemActions.push("Build Progressive Web App (PWA)");
      complexityScore += 2;
      assumptions.push("PWA used instead of native app.");
    }

    if (data.projectType.includes("Marketing")) {
      systemActions.push("Setup marketing automation funnel");
      complexityScore += 2;
    }

    // Feature Detection
    if (featuresText.includes("ai")) {
      systemActions.push("Integrate AI content generation");
      complexityScore += 2;
    }

    if (featuresText.includes("payment")) {
      systemActions.push("Integrate payment gateway");
      humanActions.push("Provide payment API keys");
      complexityScore += 2;
    }

    if (featuresText.includes("crypto")) {
      feasibility = "Partially Feasible";
      humanActions.push("Third-party crypto API integration required");
      assumptions.push("Crypto APIs may require paid plan.");
      complexityScore += 3;
    }

    if (featuresText.includes("seo")) {
      systemActions.push("Apply SEO optimization");
      complexityScore += 1;
    }

    // Complexity Level
    let complexityLevel;
    let estimatedDays;
    let estimatedCost;

    if (complexityScore <= 3) {
      complexityLevel = "Low";
      estimatedDays = "5 - 10 days";
      estimatedCost = "₹15,000 - ₹30,000";
    } 
    else if (complexityScore <= 6) {
      complexityLevel = "Medium";
      estimatedDays = "15 - 25 days";
      estimatedCost = "₹40,000 - ₹80,000";
    } 
    else {
      complexityLevel = "High";
      estimatedDays = "30 - 60 days";
      estimatedCost = "₹1,00,000+";
    }

    humanActions.push("Approve final deployment");
    assumptions.push("Free-first stack selected.");

    return {
      feasibility,
      systemActions,
      humanActions,
      assumptions,
      complexityLevel,
      estimatedDays,
      estimatedCost
    };
  }
};