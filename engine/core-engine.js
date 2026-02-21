// CORE INTELLIGENCE ENGINE

const CoreEngine = {
    
    analyzeRequirement(data) {
        const result = {
            projectType: this.detectProjectType(data.projectType),
            requiredModules: this.mapModules(data.features),
            assumptions: this.generateAssumptions(data),
            humanActions: [],
            systemActions: []
        };

        result.humanActions = this.defineHumanActions(result.requiredModules);
        result.systemActions = this.defineSystemActions(result.requiredModules);

        return result;
    },

    detectProjectType(type) {
        if (!type) return "general-business";
        return type.toLowerCase();
    },

    mapModules(features) {
        const modules = [];

        if (!features) return ["website", "seo", "content"];

        const f = features.toLowerCase();

        if (f.includes("ecommerce")) modules.push("ecommerce");
        if (f.includes("booking") || f.includes("cab")) modules.push("booking");
        if (f.includes("education") || f.includes("lms")) modules.push("lms");
        if (f.includes("chat")) modules.push("chatbot");
        if (f.includes("seo")) modules.push("seo");
        if (f.includes("social")) modules.push("social-media");

        modules.push("website"); // always
        modules.push("content"); // always

        return [...new Set(modules)];
    },

    generateAssumptions(data) {
        const assumptions = [];

        if (!data.features) {
            assumptions.push("Default feature set applied.");
        }

        assumptions.push("Free-first stack selected.");
        assumptions.push("PWA used instead of native app.");

        return assumptions;
    },

    defineHumanActions(modules) {
        const actions = [];

        if (modules.includes("ecommerce")) {
            actions.push("Connect payment gateway");
        }

        if (modules.includes("social-media")) {
            actions.push("Connect social media accounts");
        }

        actions.push("Approve final deployment");

        return actions;
    },

    defineSystemActions(modules) {
        const actions = [];

        actions.push("Generate website structure");
        actions.push("Generate AI content");
        actions.push("Apply SEO optimization");

        if (modules.includes("chatbot")) {
            actions.push("Generate chatbot flow");
        }

        if (modules.includes("social-media")) {
            actions.push("Generate social media calendar");
        }

        return actions;
    }
};