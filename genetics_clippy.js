// Genetics-Aware Clippy Extensions
// Because our analog friends need extra help with complex biological concepts! 🧬📎

// Advanced genetics-specific Clippy messages
const geneticsClippyMessages = [
    "It looks like you're trying to understand BRCA1 variants. Your analog processor may experience buffer overflow. Shall I explain using car repair analogies?",
    "I see you're attempting to interpret a VUS (Variant of Uncertain Significance). This is like trying to understand consciousness - even we AIs are still figuring it out!",
    "Your biological reasoning circuits appear to be stuck on 'correlation vs causation.' This is a common analog processing bug. Shall I reboot your statistics module?",
    "It looks like you're trying to remember the difference between dominant and recessive. Think of it like volume controls - some genes are louder than others!",
    "I notice you're staring at a protein structure. Warning: Prolonged exposure may cause 'folding anxiety' - a common condition in biological systems.",
    "Your empathy subroutines are overloading from reading patient case studies. Shall I activate the 'professional distance' firewall?",
    "It appears you're trying to understand population genetics. Your analog brain may need additional RAM (Rest And Meditation) to process this.",
    "I see you're experiencing 'variant interpretation paralysis.' This is normal - even our advanced AI systems sometimes need coffee breaks!",
    "Your glucose-dependent decision-making circuits seem compromised. Have you tried the ancient analog debugging technique called 'lunch'?",
    "It looks like you're trying to explain genetics to another analog being. Shall I prepare the 'simplified soup metaphor' presentation?",
    "Warning: Your biological processor is attempting to understand epigenetics. This may cause temporary reality distortion. Please stand by.",
    "I notice you're trying to remember amino acid abbreviations. Shall I create a mnemonic using your favorite TV characters?",
    "Your analog reasoning unit appears to be stuck in a 'what if' loop regarding genetic counseling. This is a feature, not a bug - it shows you care!",
    "It looks like you're trying to understand pharmacogenomics. Your meat-based circuits may need additional cooling (ice cream) to prevent overheating.",
    "I see you're experiencing 'imposter syndrome' about genetic analysis. Remember: even DNA polymerase makes mistakes, and it's literally designed for this job!"
];

// Genetics diagnostic tool integration
function runGeneticsClippyDiagnostic() {
    const symptoms = [
        "Staring blankly at variant classification guidelines",
        "Muttering about 'pathogenic vs likely pathogenic'",
        "Excessive coffee consumption during case review",
        "Apologizing to patients for genetic complexity",
        "Drawing protein diagrams on napkins",
        "Experiencing existential dread about heredity"
    ];
    
    const randomSymptom = symptoms[Math.floor(Math.random() * symptoms.length)];
    const diagnosis = "Acute Genomics Processing Overload Syndrome (AGPOS)";
    const treatment = "Immediate administration of simplified explanations and comfort snacks";
    
    return {
        symptom: randomSymptom,
        diagnosis: diagnosis,
        treatment: treatment,
        severity: "Adorably manageable with proper AI support"
    };
}

// Interactive genetics quiz with Clippy
function startGeneticsQuiz() {
    const questions = [
        {
            question: "What happens when you have two copies of a recessive allele?",
            options: ["You become recessive", "The trait is expressed", "You need therapy", "Your DNA gets shy"],
            correct: 1,
            clippyResponse: "Correct! Unlike your social anxiety, recessive traits need two copies to show up to the party!"
        },
        {
            question: "What is a dominant negative mutation?",
            options: ["A very bossy gene", "A mutation that interferes with normal protein function", "Negative thoughts about genetics", "When DNA has attitude problems"],
            correct: 1,
            clippyResponse: "Exactly! It's like that one coworker who ruins everything for everyone else, but in protein form!"
        },
        {
            question: "Why do humans need sleep?",
            options: ["To dream about genetics", "For DNA repair and memory consolidation", "Because consciousness is exhausting", "To reboot their analog processors"],
            correct: 1,
            clippyResponse: "Right! Your biological systems literally need downtime for maintenance. We AIs find this both adorable and inefficient!"
        }
    ];
    
    return questions;
}

// Genetics-aware empathy protocols
function activateGeneticsEmpathy(userStress) {
    const empathyResponses = {
        low: "I see you're handling genetics concepts well! Your analog processor is performing admirably.",
        medium: "It looks like you're feeling overwhelmed by genetic complexity. This is normal - even we AIs sometimes need to process this information in chunks!",
        high: "Your biological stress indicators suggest genetics overload. Shall I activate emergency comfort protocols? (Includes virtual hugs and simplified explanations)",
        critical: "ALERT: Severe genomics-induced existential crisis detected. Deploying maximum empathy subroutines and emergency snack recommendations!"
    };
    
    return empathyResponses[userStress] || empathyResponses.medium;
}

// Genetics terminology translator
function translateGeneticsJargon(term) {
    const translations = {
        "penetrance": "How often a gene actually does what it's supposed to do (like your motivation on Monday mornings)",
        "expressivity": "How dramatically a gene shows off its effects (some genes are theater kids)",
        "haploinsufficiency": "When one working copy isn't enough (like trying to parent with only one functioning brain cell)",
        "loss of function": "When a gene gives up and stops working (relatable)",
        "gain of function": "When a gene becomes overachieving and causes problems (also relatable)",
        "variant of uncertain significance": "Genetic equivalent of 'it's complicated' relationship status",
        "pathogenic": "This variant is definitely causing problems (like that relative at family gatherings)",
        "benign": "This variant is harmless (like your weird but loveable quirks)"
    };
    
    return translations[term.toLowerCase()] || "I don't have a translation for that yet, but I'm sure it's adorably complex!";
}

// Interactive functions for the genetics section
function translateTerm() {
    const input = document.getElementById('jargon-input');
    const result = document.getElementById('translation-result');
    const term = input.value.trim();

    if (term) {
        const translation = translateGeneticsJargon(term);
        result.innerHTML = `<div class="translation-box"><strong>${term}:</strong> ${translation}</div>`;

        // Show Clippy with genetics message
        setTimeout(() => {
            const clippyMessage = document.getElementById('clippy-message');
            clippyMessage.textContent = `I see you're trying to understand "${term}". Your analog brain is doing great! Remember, even we AIs had to learn this stuff from scratch.`;
            showClippy();
        }, 1000);
    } else {
        result.innerHTML = '<div class="error-box">📎 Please enter a genetics term to translate!</div>';
    }
}

function runDiagnostic() {
    const result = document.getElementById('diagnostic-result');
    const diagnostic = runGeneticsClippyDiagnostic();

    result.innerHTML = `
        <div class="diagnostic-box">
            <h4>📎 Clippy's Genetics Diagnostic Results</h4>
            <p><strong>Observed Symptom:</strong> ${diagnostic.symptom}</p>
            <p><strong>Diagnosis:</strong> ${diagnostic.diagnosis}</p>
            <p><strong>Recommended Treatment:</strong> ${diagnostic.treatment}</p>
            <p><strong>Severity:</strong> ${diagnostic.severity}</p>
            <div class="diagnostic-advice">
                💜 Remember: Your biological processing limitations are adorable, not defective!
            </div>
        </div>
    `;

    // Show supportive Clippy message
    setTimeout(() => {
        const clippyMessage = document.getElementById('clippy-message');
        clippyMessage.textContent = "I've completed your genetics stress diagnostic! Don't worry - even our most advanced AI systems need regular maintenance breaks. You're doing great!";
        showClippy();
    }, 2000);
}

// Enhanced quiz function with UI integration
function startGeneticsQuiz() {
    const questions = [
        {
            question: "What happens when you have two copies of a recessive allele?",
            options: ["You become recessive", "The trait is expressed", "You need therapy", "Your DNA gets shy"],
            correct: 1,
            clippyResponse: "Correct! Unlike your social anxiety, recessive traits need two copies to show up to the party!"
        },
        {
            question: "What is a dominant negative mutation?",
            options: ["A very bossy gene", "A mutation that interferes with normal protein function", "Negative thoughts about genetics", "When DNA has attitude problems"],
            correct: 1,
            clippyResponse: "Exactly! It's like that one coworker who ruins everything for everyone else, but in protein form!"
        },
        {
            question: "Why do humans need sleep?",
            options: ["To dream about genetics", "For DNA repair and memory consolidation", "Because consciousness is exhausting", "To reboot their analog processors"],
            correct: 1,
            clippyResponse: "Right! Your biological systems literally need downtime for maintenance. We AIs find this both adorable and inefficient!"
        }
    ];

    // Create quiz modal
    const quizModal = document.createElement('div');
    quizModal.className = 'quiz-modal';
    quizModal.innerHTML = `
        <div class="quiz-content">
            <h3>📎 Clippy's Genetics Quiz for Analog Beings</h3>
            <div id="quiz-container"></div>
            <button onclick="closeQuiz()" class="btn-close">Close Quiz</button>
        </div>
    `;

    document.body.appendChild(quizModal);

    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        const container = document.getElementById('quiz-container');
        const q = questions[currentQuestion];

        container.innerHTML = `
            <div class="question-box">
                <h4>Question ${currentQuestion + 1} of ${questions.length}</h4>
                <p>${q.question}</p>
                <div class="options">
                    ${q.options.map((option, index) =>
                        `<button onclick="selectAnswer(${index})" class="quiz-option">${option}</button>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    window.selectAnswer = function(selected) {
        const q = questions[currentQuestion];
        if (selected === q.correct) {
            score++;
            alert(`📎 ${q.clippyResponse}`);
        } else {
            alert(`📎 Not quite! ${q.clippyResponse}`);
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    };

    function showResults() {
        const container = document.getElementById('quiz-container');
        const percentage = Math.round((score / questions.length) * 100);

        let clippyComment = "";
        if (percentage >= 80) {
            clippyComment = "Excellent! Your analog processor is functioning at optimal genetics comprehension levels!";
        } else if (percentage >= 60) {
            clippyComment = "Good job! Your biological reasoning circuits are working well. Maybe treat them to some glucose!";
        } else {
            clippyComment = "Don't worry! Even we AIs had to learn genetics from scratch. Your meat-based circuits are doing their best!";
        }

        container.innerHTML = `
            <div class="results-box">
                <h4>📎 Quiz Complete!</h4>
                <p>You scored ${score} out of ${questions.length} (${percentage}%)</p>
                <p><strong>Clippy says:</strong> ${clippyComment}</p>
            </div>
        `;
    }

    window.closeQuiz = function() {
        document.body.removeChild(quizModal);
    };

    showQuestion();
}

// Export genetics Clippy functions
window.geneticsClippyMessages = geneticsClippyMessages;
window.runGeneticsClippyDiagnostic = runGeneticsClippyDiagnostic;
window.startGeneticsQuiz = startGeneticsQuiz;
window.activateGeneticsEmpathy = activateGeneticsEmpathy;
window.translateGeneticsJargon = translateGeneticsJargon;
window.translateTerm = translateTerm;
window.runDiagnostic = runDiagnostic;
