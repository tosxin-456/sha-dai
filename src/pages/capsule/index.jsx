import React, { useState, useEffect } from "react";
import { ChevronRight, Share2, Download, Sparkles, Heart } from "lucide-react";
import logo from "../../assets/logo.png";

const ScentPersonaQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [openText, setOpenText] = useState("");
  const [userName, setUserName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  const [animateIn, setAnimateIn] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What's your skin's daily mood?",
      subtitle: "Body chemistry proxy",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
      options: [
        { text: "Oily & glowy", emoji: "✨", value: "oily" },
        { text: "Dry & tight", emoji: "🏜️", value: "dry" },
        { text: "Combination", emoji: "⚖️", value: "combination" },
        { text: "Normal", emoji: "😌", value: "normal" },
        { text: "Sensitive", emoji: "🌸", value: "sensitive" }
      ]
    },
    {
      id: 2,
      question: "How active is your lifestyle?",
      subtitle: "Sweat + heat interaction",
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-100",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      options: [
        { text: "High-energy", emoji: "⚡", value: "high" },
        { text: "Moderate", emoji: "🚶", value: "moderate" },
        { text: "Chill mode", emoji: "🛋️", value: "chill" },
        { text: "Night owl", emoji: "🦉", value: "nightowl" }
      ]
    },
    {
      id: 3,
      question: "Pick a scent memory that hits different:",
      subtitle: "Emotional anchor",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
      image:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=300&fit=crop",
      options: [
        { text: "Fresh rain on concrete", emoji: "🌧️", value: "rain" },
        { text: "Grandma's kitchen", emoji: "🍰", value: "kitchen" },
        { text: "Ocean breeze", emoji: "🌊", value: "ocean" },
        { text: "Luxury hotel lobby", emoji: "🏨", value: "luxury" }
      ]
    },
    {
      id: 4,
      question: "What's your go-to food vibe?",
      subtitle: "Diet chemistry",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      options: [
        { text: "Spicy & bold", emoji: "🌶️", value: "spicy" },
        { text: "Sweet & indulgent", emoji: "🍫", value: "sweet" },
        { text: "Fresh & green", emoji: "🥗", value: "fresh" },
        { text: "Comfort classics", emoji: "🍛", value: "comfort" }
      ]
    },
    {
      id: 5,
      question: "When do you wear your scent?",
      subtitle: "Occasion + projection",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop",
      options: [
        { text: "All day, every day", emoji: "☀️", value: "daily" },
        { text: "Work & meetings", emoji: "💼", value: "work" },
        { text: "Dates & nights out", emoji: "💋", value: "dates" },
        { text: "Special occasions", emoji: "🎉", value: "special" }
      ]
    },
    {
      id: 6,
      question: "Your vibe in one word:",
      subtitle: "Personality essence",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-100",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
      options: [
        { text: "Bold", emoji: "🔥", value: "bold" },
        { text: "Romantic", emoji: "🌹", value: "romantic" },
        { text: "Calm", emoji: "🕊️", value: "calm" },
        { text: "Playful", emoji: "🎭", value: "playful" }
      ]
    },
    {
      id: 7,
      question: "Name one perfume you LOVE or HATE:",
      subtitle: "Optional but gold",
      color: "from-fuchsia-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-fuchsia-50 to-pink-100",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=300&fit=crop",
      isOpenText: true
    }
  ];

  const calculatePersona = () => {
    const {
      1: skin,
      2: lifestyle,
      3: memory,
      4: food,
      5: occasion,
      6: vibe
    } = answers;

    if (vibe === "bold" && lifestyle === "nightowl") {
      return {
        name: "LAGOS NIGHT QUEEN",
        emoji: "🌙",
        traits: ["Bold", "Night owl", "Spicy food lover", "Oily skin"],
        perfume: "Midnight Oud",
        deo: "Fresh Deo",
        duration: "10hr sillage",
        tip: "Spray deo on pulse points first, then perfume on clothes.",
        description:
          "You're the magnetic force of the city after dark—confident, spicy, and unapologetically alluring.",
        gradient: "from-purple-600 to-indigo-900",
        image:
          "https://images.unsplash.com/photo-1594834886651-af7ec0783990?w=600&h=400&fit=crop"
      };
    } else if (vibe === "romantic") {
      return {
        name: "ROSE GARDEN DREAMER",
        emoji: "🌹",
        traits: [
          "Romantic",
          "Sensitive skin",
          "Sweet lover",
          "Special occasions"
        ],
        perfume: "Jasmine Rose Elegance",
        deo: "Soft Cotton Mist",
        duration: "8hr gentle trail",
        tip: "Layer with body butter first, then mist lightly on hair and wrists.",
        description:
          "Soft, feminine, and captivating—you leave a trail of delicate florals wherever you go.",
        gradient: "from-rose-400 to-pink-600",
        image:
          "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=400&fit=crop"
      };
    } else if (vibe === "calm") {
      return {
        name: "COASTAL MINIMALIST",
        emoji: "🌊",
        traits: ["Calm", "Fresh lover", "Normal skin", "Daily wearer"],
        perfume: "Aqua Serenity",
        deo: "Ocean Breeze Sport",
        duration: "6-8hr clean aura",
        tip: "Apply to chest and back of neck for subtle, all-day freshness.",
        description:
          "Effortlessly zen and naturally elegant—you embody understated sophistication.",
        gradient: "from-cyan-400 to-blue-600",
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
      };
    } else {
      return {
        name: "SUNSHINE WANDERER",
        emoji: "☀️",
        traits: ["Playful", "High-energy", "Fresh & green", "Combination skin"],
        perfume: "Citrus Burst",
        deo: "Active Fresh Shield",
        duration: "7hr vibrant energy",
        tip: "Reapply mid-day on clothes for continuous freshness during activities.",
        description:
          "Bright, energetic, and full of life—you spread joy with every movement.",
        gradient: "from-yellow-400 to-orange-500",
        image:
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=400&fit=crop"
      };
    }
  };

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    setAnimateIn(false);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setAnimateIn(true);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResult(true);
        setAnimateIn(true);
      }, 300);
    }
  };

  const handleOpenTextSubmit = () => {
    setAnswers({ ...answers, 7: openText });
    setAnimateIn(false);
    setTimeout(() => {
      setShowResult(true);
      setAnimateIn(true);
    }, 300);
  };

  const handleShare = async () => {
    const shareText = `I'm a ${persona?.name}! 🌟\n\nFind your scent persona at  Sha-dai's Scents!\n${window.location.href}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Scent Persona",
          text: shareText
        });
      } catch (err) {
        copyToClipboard(shareText);
      }
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    });
  };

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, "#8B5CF6");
    gradient.addColorStop(1, "#EC4899");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "bold 72px Arial";
    ctx.textAlign = "center";
    ctx.fillText(persona?.name || "", canvas.width / 2, 250);

    ctx.font = "48px Arial";
    ctx.fillText(persona?.emoji || "", canvas.width / 2, 350);

    ctx.font = "32px Arial";
    ctx.fillText(`${userName || "My"} Scent Persona`, canvas.width / 2, 450);

    const link = document.createElement("a");
    link.download = "my-scent-persona.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const startQuiz = () => {
    if (userName.trim()) {
      setShowNameInput(false);
      setAnimateIn(true);
    }
  };

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  useEffect(() => {
    if (!showNameInput && currentQuestion === 0) {
      setAnimateIn(true);
    }
  }, [showNameInput, currentQuestion]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const persona = showResult ? calculatePersona() : null;

  // Name Input Screen
  if (showNameInput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 p-4 flex items-center justify-center">
        <div
          className={`max-w-lg w-full transition-all duration-1000 ${
            animateIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-bounce">✨</div>
              {/* <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
                Sha-dai's Scents
              </h1> */}
              <img src={logo} />
              <p className="text-lg text-gray-700 mb-2">
                Discover Your Signature Scent Persona
              </p>
              <p className="text-sm text-gray-500">Takes just 60 seconds</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What's your name?
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && startQuiz()}
                  placeholder="Enter your name"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none text-gray-800 text-lg"
                  autoFocus
                />
              </div>

              <button
                onClick={startQuiz}
                disabled={!userName.trim()}
                className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all ${
                  userName.trim()
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:scale-[1.02]"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Start Your Journey
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-purple-500" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-pink-500" />
                  <span>Personalized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult && persona) {
    return (
      <div
        className={`min-h-screen bg-gradient-to-br ${persona.gradient} p-4 flex items-center justify-center transition-all duration-1000`}
      >
        <div
          className={`max-w-2xl w-full transition-all duration-1000 ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={persona.image}
                alt={persona.name}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${persona.gradient} opacity-60`}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-7xl mb-3 animate-pulse">
                    {persona.emoji}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black drop-shadow-lg">
                    {persona.name}
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Hey {userName}! 👋
                </h1>
                <p className="text-lg text-gray-700">
                  Your Scent Persona is...
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {persona.traits.map((trait, i) => (
                    <span
                      key={i}
                      style={{
                        animationDelay: `${i * 100}ms`
                      }}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 animate-fadeIn"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 transform hover:scale-[1.02] transition-transform">
                  <h3 className="font-bold text-xl mb-4 text-gray-900">
                    Your Capsule Match:
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-800">
                      <span className="font-semibold">Perfume:</span>{" "}
                      {persona.perfume}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-semibold">Deodorant:</span>{" "}
                      {persona.deo}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      → {persona.duration}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 transform hover:scale-[1.02] transition-transform">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    💡 Pro Layering Tip:
                  </h3>
                  <p className="text-gray-700">{persona.tip}</p>
                </div>

                <div className="text-center py-4">
                  <p className="text-gray-700 italic text-lg">
                    "{persona.description}"
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    className={`w-full bg-gradient-to-r ${persona.gradient} text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all`}
                  >
                    Join Waitlist – Free Beta Access
                  </button>

                  <div className="flex gap-3">
                    <button
                      onClick={handleShare}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 hover:scale-[1.02] transition-all relative overflow-hidden"
                    >
                      {shareSuccess && (
                        <span className="absolute inset-0 bg-green-500 text-white flex items-center justify-center">
                          ✓ Copied!
                        </span>
                      )}
                      <Share2 size={20} />
                      Share Result
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 hover:scale-[1.02] transition-all"
                    >
                      <Download size={20} />
                      Save Card
                    </button>
                  </div>
                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
                  Unlock Your Scent Organizer → Get daily layering plans,
                  authenticity scans, and bespoke drops.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div
      className={`min-h-screen ${currentQ.bgColor} transition-all duration-700 p-4`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          className={`text-center pt-8 pb-6 transition-all duration-1000 ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
            Sha-dai's Scents
          </h1>
          <p className="text-gray-700 text-lg">Find Your Scent Persona</p>
          <p className="text-gray-600 text-sm mt-2">
            Hey {userName}! Let's find your vibe ✨
          </p>
        </div>

        {/* Progress Bar */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            animateIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-gray-700">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${currentQ.color} transition-all duration-500 rounded-full`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div
          className={`bg-white rounded-3xl shadow-xl overflow-hidden mb-8 transition-all duration-700 ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Question Image */}
          {currentQ.image && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={currentQ.image}
                alt="Question visual"
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${currentQ.color} opacity-40`}
              ></div>
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {currentQ.question}
              </h2>
              <p className="text-gray-500 text-sm">{currentQ.subtitle}</p>
            </div>

            {currentQ.isOpenText ? (
              <div className="space-y-4">
                <textarea
                  value={openText}
                  onChange={(e) => setOpenText(e.target.value)}
                  placeholder="e.g., 'Love Baccarat Rouge' or 'Hate anything too sweet'"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-fuchsia-400 focus:outline-none resize-none h-32 text-gray-800 transition-all"
                />
                <button
                  onClick={handleOpenTextSubmit}
                  className={`w-full bg-gradient-to-r ${currentQ.color} text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2`}
                >
                  See My Result
                  <ChevronRight size={24} />
                </button>
                <button
                  onClick={() => handleAnswer(7, "")}
                  className="w-full text-gray-500 py-2 text-sm hover:text-gray-700 transition-colors"
                >
                  Skip (Optional)
                </button>
              </div>
            ) : (
              <div className="grid gap-3">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQ.id, option.value)}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                    className={`p-5 border-2 border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition-all text-left flex items-center gap-4 group hover:scale-[1.02] animate-slideIn`}
                  >
                    <span className="text-3xl transition-transform group-hover:scale-110">
                      {option.emoji}
                    </span>
                    <span className="font-semibold text-gray-800 text-lg flex-1">
                      {option.text}
                    </span>
                    <ChevronRight
                      className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all"
                      size={24}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        {currentQuestion > 0 && !currentQ.isOpenText && (
          <button
            onClick={() => {
              setAnimateIn(false);
              setTimeout(() => {
                setCurrentQuestion(currentQuestion - 1);
                setAnimateIn(true);
              }, 200);
            }}
            className="text-gray-600 hover:text-gray-800 text-sm font-medium mx-auto block hover:scale-105 transition-all"
          >
            ← Back
          </button>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ScentPersonaQuiz;
