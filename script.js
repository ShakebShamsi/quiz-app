document.addEventListener('DOMContentLoaded', () => {

  const startButton = document.getElementById('start-btn');
  const nextButton = document.getElementById('next-btn');
  const restartButton = document.getElementById('restart-btn');
  const questionContainer = document.getElementById('question-container');
  const questionText = document.getElementById('question-text');
  const choicesList = document.getElementById('choices-list');
  const resultContainer = document.getElementById('result-container');
  const scoreDisplay = document.getElementById('score');

  const allQuestions = [
    {
      question: "Who is the last Prophet in Islam?",
      choices: ["Prophet Isa (Jesus)", "Prophet Musa (Moses)", "Prophet Ibrahim (Abraham)", "Prophet Muhammad (PBUH)"],
      answer: "Prophet Muhammad (PBUH)"
    },
    {
      question: "What is the holy book of Islam?",
      choices: ["Bible", "Torah", "Quran", "Vedas"],
      answer: "Quran"
    },
    {
      question: "How many times a day do Muslims pray?",
      choices: ["3", "4", "5", "6"],
      answer: "5"
    },
    {
      question: "In which language was the Quran revealed?",
      choices: ["Arabic", "Hebrew", "Persian", "Urdu"],
      answer: "Arabic"
    },
    {
      question: "What is the first month of the Islamic calendar?",
      choices: ["Ramadan", "Shawwal", "Muharram", "Safar"],
      answer: "Muharram"
    },
    {
      question: "What is the direction of prayer in Islam?",
      choices: ["North", "South", "Towards Jerusalem", "Towards Kaaba in Mecca"],
      answer: "Towards Kaaba in Mecca"
    },
    {
      question: "Which angel brought revelations to Prophet Muhammad (PBUH)?",
      choices: ["Jibrael", "Israfeel", "Mikaeel", "Azrael"],
      answer: "Jibrael"
    },
    {
      question: "What is the night called when the Quran was first revealed?",
      choices: ["Shab-e-Barat", "Lailat-ul-Qadr", "Eid Night", "Ashura"],
      answer: "Lailat-ul-Qadr"
    },
    {
      question: "How many chapters are in the Quran?",
      choices: ["114", "100", "99", "120"],
      answer: "114"
    },
    {
      question: "What is Zakat?",
      choices: ["Fasting", "Charity", "Prayer", "Hajj"],
      answer: "Charity"
    },
    {
      question: "Which city is known as the birthplace of Islam?",
      choices: ["Madina", "Jerusalem", "Mecca", "Baghdad"],
      answer: "Mecca"
    },
    {
      question: "Which Prophet is known for building the Kaaba?",
      choices: ["Prophet Adam", "Prophet Musa", "Prophet Ibrahim", "Prophet Isa"],
      answer: "Prophet Ibrahim"
    },
    {
      question: "Who was the first caliph of Islam?",
      choices: ["Umar ibn Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib", "Abu Bakr As-Siddiq"],
      answer: "Abu Bakr As-Siddiq"
    },
    {
      question: "Which battle is known as the first battle in Islam?",
      choices: ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq", "Battle of Tabuk"],
      answer: "Battle of Badr"
    },
    {
      question: "What is the meaning of 'Islam'?",
      choices: ["Peace", "Submission", "Love", "Faith"],
      answer: "Submission"
    },
    {
      question: "Which Prophet parted the sea by Allah’s command?",
      choices: ["Prophet Isa", "Prophet Ibrahim", "Prophet Musa", "Prophet Nuh"],
      answer: "Prophet Musa"
    },
    {
      question: "Which Surah is known as the Heart of the Quran?",
      choices: ["Surah Al-Fatiha", "Surah Yaseen", "Surah Rahman", "Surah Ikhlas"],
      answer: "Surah Yaseen"
    },
    {
      question: "Which prayer is performed before sunrise?",
      choices: ["Dhuhr", "Asr", "Fajr", "Maghrib"],
      answer: "Fajr"
    },
    {
      question: "Which pillar of Islam involves fasting?",
      choices: ["Shahadah", "Salah", "Zakat", "Sawm"],
      answer: "Sawm"
    },
    {
      question: "Who was the first person to accept Islam?",
      choices: ["Ali ibn Abi Talib", "Abu Bakr", "Khadijah (RA)", "Umar ibn Khattab"],
      answer: "Khadijah (RA)"
    },
    {
      question: "How many times is the name 'Muhammad' mentioned in the Quran?",
      choices: ["2", "3", "4", "5"],
      answer: "4"
    },
    {
      question: "Which Prophet is called 'Kaleemullah' (One who spoke to Allah)?",
      choices: ["Prophet Musa", "Prophet Ibrahim", "Prophet Nuh", "Prophet Isa"],
      answer: "Prophet Musa"
    },
    {
      question: "Where is the Prophet Muhammad (PBUH) buried?",
      choices: ["Mecca", "Taif", "Jerusalem", "Madina"],
      answer: "Madina"
    },
    {
      question: "Which Surah is the longest in the Quran?",
      choices: ["Surah An-Nisa", "Surah Al-Ma'idah", "Surah Al-Baqarah", "Surah Al-Imran"],
      answer: "Surah Al-Baqarah"
    },
    {
      question: "What is the Islamic term for pilgrimage to Mecca?",
      choices: ["Salah", "Zakat", "Hajj", "Umrah"],
      answer: "Hajj"
    },
    {
      question: "Who compiled the Quran into one book form?",
      choices: ["Umar ibn Khattab", "Ali ibn Abi Talib", "Abu Bakr", "Uthman ibn Affan"],
      answer: "Uthman ibn Affan"
    },
    {
      question: "Which companion is known as the 'scribe of the Prophet'?",
      choices: ["Bilal", "Zayd ibn Thabit", "Abu Hurairah", "Umar ibn Khattab"],
      answer: "Zayd ibn Thabit"
    },
    {
      question: "What is the name of the Islamic law?",
      choices: ["Hadith", "Sharia", "Sunnah", "Fiqh"],
      answer: "Sharia"
    },
    {
      question: "Which animal is mentioned the most in the Quran?",
      choices: ["Camel", "Horse", "Cow", "Sheep"],
      answer: "Cow"
    },
    {
      question: "Which day is considered the holiest in Islam?",
      choices: ["Saturday", "Friday", "Monday", "Sunday"],
      answer: "Friday"
    },
    {
      question: "How many Ayahs are there in Surah Al-Fatiha?",
      choices: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Which Prophet built the Ark?",
      choices: ["Prophet Nuh", "Prophet Ibrahim", "Prophet Musa", "Prophet Isa"],
      answer: "Prophet Nuh"
    },
    {
      question: "What is the name of the well near the Kaaba?",
      choices: ["Safa", "Zamzam", "Marwah", "Hudaybiyah"],
      answer: "Zamzam"
    },
    {
      question: "How many months are in the Islamic calendar?",
      choices: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "Which Prophet had control over jinns?",
      choices: ["Prophet Musa", "Prophet Yusuf", "Prophet Sulaiman", "Prophet Dawood"],
      answer: "Prophet Sulaiman"
    },
    {
      question: "Who was the mother of Prophet Isa (Jesus)?",
      choices: ["Maryam", "Fatima", "Aisha", "Khadijah"],
      answer: "Maryam"
    },
    {
      question: "What does 'Hijrah' mean?",
      choices: ["Charity", "Migration", "Fasting", "Prayer"],
      answer: "Migration"
    },
    {
      question: "How many major sins are there in Islam?",
      choices: ["5", "7", "10", "70"],
      answer: "70"
    },
    {
      question: "What is the name of the night journey of the Prophet (PBUH)?",
      choices: ["Hijrah", "Lailat-ul-Qadr", "Isra and Miraj", "Badr"],
      answer: "Isra and Miraj"
    },
    {
      question: "Who called the first Adhan (call to prayer)?",
      choices: ["Abu Bakr", "Umar", "Bilal ibn Rabah", "Ali ibn Abi Talib"],
      answer: "Bilal ibn Rabah"
    },
    {
      question: "What is the term for non-obligatory prayers in Islam?",
      choices: ["Fard", "Witr", "Sunnah", "Nafl"],
      answer: "Nafl"
    },
    {
      question: "How many Surahs are in the Quran named after Prophets?",
      choices: ["3", "5", "6", "7"],
      answer: "6"
    },
    {
      question: "What does 'Bismillah' mean?",
      choices: ["In the name of Allah", "Peace be upon you", "Praise be to Allah", "Allah is Great"],
      answer: "In the name of Allah"
    },
    {
      question: "Who was known as the ‘Seal of the Prophets’?",
      choices: ["Prophet Isa", "Prophet Musa", "Prophet Muhammad", "Prophet Ibrahim"],
      answer: "Prophet Muhammad"
    },
    {
      question: "Which animal spoke in the Quran?",
      choices: ["Donkey", "Camel", "Ant", "Snake"],
      answer: "Ant"
    },
    {
      question: "What is the name of the Islamic prayer mat?",
      choices: ["Sajada", "Ruqaa", "Hijab", "Imama"],
      answer: "Sajada"
    },
    {
      question: "How many compulsory Rakats are in daily prayers?",
      choices: ["15", "17", "20", "25"],
      answer: "17"
    },
    {
      question: "Which Surah has no Bismillah at the start?",
      choices: ["Surah Al-Tawbah", "Surah Al-Fatiha", "Surah Al-Kahf", "Surah Maryam"],
      answer: "Surah Al-Tawbah"
    },
    {
      question: "Which animal did the Prophet Muhammad (PBUH) ride during Isra?",
      choices: ["Camel", "Horse", "Donkey", "Buraq"],
      answer: "Buraq"
    }
  ];

  let questions = []; // to hold the 10 random questions
  let currentQuestionIndex = 0;
  let score = 0;
  let answered = false;

  startButton.addEventListener('click', startQuiz);

  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    startQuiz();
  });

  function startQuiz() {
    startButton.classList.add('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');

    // Select 10 random questions
    questions = shuffleArray([...allQuestions]).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;

    showQuestion();
  }

  function showQuestion() {
    answered = false;
    nextButton.classList.add('hidden');
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; // clearing previous choices

    questions[currentQuestionIndex].choices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.style.cursor = 'pointer';
      li.addEventListener('click', () => selectAnswer(li, choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(selectedLi, choice) {
    if (answered) return; // prevent multiple selections
    answered = true;

    const correctAnswer = questions[currentQuestionIndex].answer;
    const allChoices = choicesList.querySelectorAll('li');

    allChoices.forEach(li => {
      li.style.pointerEvents = 'none'; // disable all choices
      if (li.textContent === correctAnswer) {
        li.style.backgroundColor = 'green';
        li.style.color = 'white';
      }
    });

    if (choice === correctAnswer) {
      score++;
    } else {
      selectedLi.style.backgroundColor = 'red';
      selectedLi.style.color = 'white';
    }

    nextButton.classList.remove('hidden');
  }

  function showResult() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }

  // Helper: Shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

});
