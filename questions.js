/* 120 bilingual questions; grade is the recommended school grade (3–8). */
const QUESTIONS = [
  {
    "id": "math-01",
    "c": "math",
    "en": "What is 7 × 8?",
    "am": "7 × 8 ስንት ነው?",
    "o": [
      "54",
      "56",
      "64",
      "48"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "math-02",
    "c": "math",
    "en": "What is 125 + 75?",
    "am": "125 + 75 ስንት ነው?",
    "o": [
      "180",
      "190",
      "200",
      "210"
    ],
    "a": 2,
    "grade": 3
  },
  {
    "id": "math-03",
    "c": "math",
    "en": "What is half of 90?",
    "am": "የ90 ግማሽ ስንት ነው?",
    "o": [
      "35",
      "40",
      "45",
      "50"
    ],
    "a": 2,
    "grade": 3
  },
  {
    "id": "math-04",
    "c": "math",
    "en": "How many sides does a hexagon have?",
    "am": "ስድስት ጎን ስንት ጎኖች አሉት?",
    "o": [
      "5",
      "6",
      "7",
      "8"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "math-05",
    "c": "math",
    "en": "What is 9 squared?",
    "am": "9 በራሱ ሲባዛ ስንት ነው?",
    "o": [
      "18",
      "72",
      "81",
      "99"
    ],
    "a": 2,
    "grade": 4
  },
  {
    "id": "math-06",
    "c": "math",
    "en": "What is 1,000 − 375?",
    "am": "1,000 − 375 ስንት ነው?",
    "o": [
      "525",
      "625",
      "675",
      "725"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "math-07",
    "c": "math",
    "en": "What is 3/4 of 20?",
    "am": "የ20 ሶስት አራተኛ ስንት ነው?",
    "o": [
      "10",
      "12",
      "15",
      "18"
    ],
    "a": 2,
    "grade": 4
  },
  {
    "id": "math-08",
    "c": "math",
    "en": "What is 12 × 12?",
    "am": "12 × 12 ስንት ነው?",
    "o": [
      "124",
      "132",
      "144",
      "156"
    ],
    "a": 2,
    "grade": 4
  },
  {
    "id": "math-09",
    "c": "math",
    "en": "A triangle has angles 60° and 50°. What is the third angle?",
    "am": "የሶስት ማዕዘን ሁለት ማዕዘኖች 60° እና 50° ከሆኑ ሶስተኛው ስንት ነው?",
    "o": [
      "60°",
      "70°",
      "80°",
      "90°"
    ],
    "a": 1,
    "grade": 5
  },
  {
    "id": "math-10",
    "c": "math",
    "en": "What is 15% of 200?",
    "am": "የ200 15% ስንት ነው?",
    "o": [
      "15",
      "20",
      "30",
      "40"
    ],
    "a": 2,
    "grade": 7
  },
  {
    "id": "math-11",
    "c": "math",
    "en": "What is the perimeter of a square with side 6 cm?",
    "am": "ጎኑ 6 ሴ.ሜ የሆነ ካሬ ዙሪያ ስንት ነው?",
    "o": [
      "12 cm",
      "18 cm",
      "24 cm",
      "36 cm"
    ],
    "a": 2,
    "grade": 4
  },
  {
    "id": "math-12",
    "c": "math",
    "en": "What is 2.5 + 1.75?",
    "am": "2.5 + 1.75 ስንት ነው?",
    "o": [
      "3.25",
      "4.00",
      "4.25",
      "4.75"
    ],
    "a": 2,
    "grade": 5
  },
  {
    "id": "math-13",
    "c": "math",
    "en": "Which fraction is equal to 1/2?",
    "am": "ከ1/2 ጋር እኩል የሆነው ክፍል የትኛው ነው?",
    "o": [
      "2/3",
      "3/6",
      "4/6",
      "5/8"
    ],
    "a": 1,
    "grade": 5
  },
  {
    "id": "math-14",
    "c": "math",
    "en": "What is 5³?",
    "am": "5³ ስንት ነው?",
    "o": [
      "15",
      "25",
      "75",
      "125"
    ],
    "a": 3,
    "grade": 6
  },
  {
    "id": "math-15",
    "c": "math",
    "en": "A book costs 80 birr. What is the cost of 3 books?",
    "am": "አንድ መጽሐፍ 80 ብር ከሆነ 3 መጽሐፍ ስንት ይሆናሉ?",
    "o": [
      "160",
      "200",
      "240",
      "280"
    ],
    "a": 2,
    "grade": 4
  },
  {
    "id": "math-16",
    "c": "math",
    "en": "What is the least common multiple of 4 and 6?",
    "am": "የ4 እና 6 ዝቅተኛ የጋራ ብዜት ስንት ነው?",
    "o": [
      "8",
      "10",
      "12",
      "24"
    ],
    "a": 2,
    "grade": 7
  },
  {
    "id": "math-17",
    "c": "math",
    "en": "Solve: x + 9 = 17.",
    "am": "x + 9 = 17 ከሆነ x ስንት ነው?",
    "o": [
      "6",
      "7",
      "8",
      "9"
    ],
    "a": 2,
    "grade": 6
  },
  {
    "id": "math-18",
    "c": "math",
    "en": "What is the area of a rectangle 8 cm by 5 cm?",
    "am": "8 ሴ.ሜ በ5 ሴ.ሜ የሆነ አራት ማዕዘን ስፋት ስንት ነው?",
    "o": [
      "13 cm²",
      "26 cm²",
      "40 cm²",
      "80 cm²"
    ],
    "a": 2,
    "grade": 5
  },
  {
    "id": "math-19",
    "c": "math",
    "en": "What is 0.6 written as a percentage?",
    "am": "0.6 በመቶኛ ሲጻፍ ስንት ነው?",
    "o": [
      "6%",
      "16%",
      "60%",
      "600%"
    ],
    "a": 2,
    "grade": 6
  },
  {
    "id": "math-20",
    "c": "math",
    "en": "What is the mean of 4, 6, and 8?",
    "am": "የ4፣ 6 እና 8 አማካይ ስንት ነው?",
    "o": [
      "5",
      "6",
      "7",
      "8"
    ],
    "a": 1,
    "grade": 5
  },
  {
    "id": "math-21",
    "c": "math",
    "en": "What is √144?",
    "am": "√144 ስንት ነው?",
    "o": [
      "10",
      "11",
      "12",
      "14"
    ],
    "a": 2,
    "grade": 7
  },
  {
    "id": "math-22",
    "c": "math",
    "en": "Simplify the ratio 12:18.",
    "am": "12:18 ሬሾን ቀላል አድርግ።",
    "o": [
      "2:3",
      "3:2",
      "4:9",
      "6:9"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "math-23",
    "c": "math",
    "en": "What is 7/10 − 2/10?",
    "am": "7/10 − 2/10 ስንት ነው?",
    "o": [
      "3/10",
      "4/10",
      "5/10",
      "9/10"
    ],
    "a": 2,
    "grade": 4
  },
  {
    "id": "math-24",
    "c": "math",
    "en": "A car travels 120 km in 2 hours. What is its average speed?",
    "am": "መኪና በ2 ሰዓት 120 ኪ.ሜ ከተጓዘ አማካይ ፍጥነቱ ስንት ነው?",
    "o": [
      "40 km/h",
      "50 km/h",
      "60 km/h",
      "80 km/h"
    ],
    "a": 2,
    "grade": 6
  },
  {
    "id": "math-25",
    "c": "math",
    "en": "What is the value of 3(4 + 2)?",
    "am": "3(4 + 2) ስንት ነው?",
    "o": [
      "14",
      "18",
      "20",
      "24"
    ],
    "a": 1,
    "grade": 5
  },
  {
    "id": "math-26",
    "c": "math",
    "en": "What is the sum of the interior angles of a triangle?",
    "am": "የሶስት ማዕዘን ውስጣዊ ማዕዘኖች ድምር ስንት ነው?",
    "o": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "a": 1,
    "grade": 6
  },
  {
    "id": "math-27",
    "c": "math",
    "en": "Solve: 3x = 27.",
    "am": "3x = 27 ከሆነ x ስንት ነው?",
    "o": [
      "6",
      "8",
      "9",
      "12"
    ],
    "a": 2,
    "grade": 6
  },
  {
    "id": "math-28",
    "c": "math",
    "en": "What is 2⁵?",
    "am": "2⁵ ስንት ነው?",
    "o": [
      "10",
      "16",
      "25",
      "32"
    ],
    "a": 3,
    "grade": 6
  },
  {
    "id": "math-29",
    "c": "math",
    "en": "A fair die is rolled. What is the probability of getting a 6?",
    "am": "ፍትሃዊ ዳይስ ሲጣል 6 የማግኘት ዕድል ስንት ነው?",
    "o": [
      "1/2",
      "1/3",
      "1/6",
      "1/12"
    ],
    "a": 2,
    "grade": 8
  },
  {
    "id": "math-30",
    "c": "math",
    "en": "What is 1.2 × 10?",
    "am": "1.2 × 10 ስንት ነው?",
    "o": [
      "0.12",
      "1.2",
      "12",
      "120"
    ],
    "a": 2,
    "grade": 7
  },
  {
    "id": "science-01",
    "c": "science",
    "en": "At sea level, water boils at about…",
    "am": "በባሕር ወለል ላይ ውሃ በስንት ዲግሪ ይፈላል?",
    "o": [
      "50 °C",
      "75 °C",
      "100 °C",
      "150 °C"
    ],
    "a": 2,
    "grade": 3
  },
  {
    "id": "science-02",
    "c": "science",
    "en": "Which planet do we live on?",
    "am": "የምንኖርበት ፕላኔት የትኛው ነው?",
    "o": [
      "Mars / ማርስ",
      "Earth / ምድር",
      "Venus / ቬኑስ",
      "Jupiter / ጁፒተር"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "science-03",
    "c": "science",
    "en": "Which part of a plant absorbs water?",
    "am": "በእፅዋት ውስጥ ውሃን የሚወስደው ክፍል የትኛው ነው?",
    "o": [
      "Flower / አበባ",
      "Leaf / ቅጠል",
      "Root / ሥር",
      "Fruit / ፍሬ"
    ],
    "a": 2,
    "grade": 3
  },
  {
    "id": "science-04",
    "c": "science",
    "en": "Which gas do humans need to breathe?",
    "am": "ሰዎች ለመተንፈስ የሚያስፈልጋቸው ጋዝ የትኛው ነው?",
    "o": [
      "Oxygen / ኦክስጅን",
      "Helium / ሂሊየም",
      "Hydrogen / ሃይድሮጅን",
      "Neon / ኒዮን"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "science-05",
    "c": "science",
    "en": "What force pulls objects toward Earth?",
    "am": "ነገሮችን ወደ ምድር የሚስበው ኃይል ምንድን ነው?",
    "o": [
      "Magnetism / መግነጢሳዊ ኃይል",
      "Gravity / ስበት",
      "Friction / ግጭት",
      "Light / ብርሃን"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "science-06",
    "c": "science",
    "en": "What is the main source of energy for Earth?",
    "am": "ለምድር ዋናው የኃይል ምንጭ ምንድን ነው?",
    "o": [
      "The Moon / ጨረቃ",
      "The Sun / ፀሐይ",
      "Wind / ነፋስ",
      "Clouds / ደመና"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "science-07",
    "c": "science",
    "en": "Which organ pumps blood around the body?",
    "am": "ደምን በሰውነት ውስጥ የሚያዘዋውረው አካል የትኛው ነው?",
    "o": [
      "Lung / ሳንባ",
      "Brain / አንጎል",
      "Heart / ልብ",
      "Stomach / ሆድ"
    ],
    "a": 2,
    "grade": 4
  },
  {
    "id": "science-08",
    "c": "science",
    "en": "Which state of matter has a fixed shape?",
    "am": "ቋሚ ቅርጽ ያለው የቁስ ሁኔታ የትኛው ነው?",
    "o": [
      "Solid / ጠጣር",
      "Liquid / ፈሳሽ",
      "Gas / ጋዝ",
      "Vapour only / እንፋሎት"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "science-09",
    "c": "science",
    "en": "Which vitamin can the body make with sunlight?",
    "am": "ሰውነት በፀሐይ ብርሃን እርዳታ ሊያመርተው የሚችለው ቫይታሚን የትኛው ነው?",
    "o": [
      "Vitamin A",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D"
    ],
    "a": 3,
    "grade": 5
  },
  {
    "id": "science-10",
    "c": "science",
    "en": "What is the process by which plants make food using sunlight?",
    "am": "እፅዋት በፀሐይ ብርሃን ምግብ የሚያዘጋጁበት ሂደት ምን ይባላል?",
    "o": [
      "Respiration / መተንፈስ",
      "Photosynthesis / ፎቶሲንተሲስ",
      "Digestion / መፈጨት",
      "Evaporation / ትነት"
    ],
    "a": 1,
    "grade": 5
  },
  {
    "id": "science-11",
    "c": "science",
    "en": "Which of these is a renewable energy source?",
    "am": "ከእነዚህ ውስጥ ታዳሽ የኃይል ምንጭ የትኛው ነው?",
    "o": [
      "Coal / ከሰል",
      "Petrol / ቤንዚን",
      "Wind / ነፋስ",
      "Natural gas / የተፈጥሮ ጋዝ"
    ],
    "a": 2,
    "grade": 5
  },
  {
    "id": "science-12",
    "c": "science",
    "en": "What is the closest star to Earth?",
    "am": "ከምድር በጣም ቅርብ ያለው ኮከብ የትኛው ነው?",
    "o": [
      "Sirius / ሲሪየስ",
      "The Sun / ፀሐይ",
      "Polaris / ፖላሪስ",
      "Vega / ቬጋ"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "science-13",
    "c": "science",
    "en": "Which blood cells help fight infections?",
    "am": "ኢንፌክሽንን ለመዋጋት የሚረዱት የደም ሴሎች የትኞቹ ናቸው?",
    "o": [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma only"
    ],
    "a": 1,
    "grade": 7
  },
  {
    "id": "science-14",
    "c": "science",
    "en": "What is the chemical formula for water?",
    "am": "የውሃ ኬሚካላዊ ቀመር ምንድን ነው?",
    "o": [
      "CO₂",
      "O₂",
      "H₂O",
      "NaCl"
    ],
    "a": 2,
    "grade": 5
  },
  {
    "id": "science-15",
    "c": "science",
    "en": "Which instrument measures temperature?",
    "am": "ሙቀትን የሚለካው መሣሪያ የትኛው ነው?",
    "o": [
      "Barometer",
      "Thermometer",
      "Compass",
      "Ruler"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "science-16",
    "c": "science",
    "en": "What is the change from liquid to gas called?",
    "am": "ፈሳሽ ወደ ጋዝ መቀየር ምን ይባላል?",
    "o": [
      "Freezing / መቀዝቀዝ",
      "Melting / መቅለጥ",
      "Evaporation / ትነት",
      "Condensation / መጤዝ"
    ],
    "a": 2,
    "grade": 5
  },
  {
    "id": "science-17",
    "c": "science",
    "en": "Which planet is known as the Red Planet?",
    "am": "ቀይ ፕላኔት ተብሎ የሚጠራው የትኛው ነው?",
    "o": [
      "Mars / ማርስ",
      "Saturn / ሳተርን",
      "Earth / ምድር",
      "Mercury / ሜርኩሪ"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "science-18",
    "c": "science",
    "en": "What is the basic unit of life?",
    "am": "የሕይወት መሠረታዊ ክፍል ምንድን ነው?",
    "o": [
      "Atom / አቶም",
      "Cell / ሴል",
      "Organ / አካል",
      "Tissue / ሕብረ ሕዋስ"
    ],
    "a": 1,
    "grade": 7
  },
  {
    "id": "science-19",
    "c": "science",
    "en": "Which material is attracted to a magnet?",
    "am": "በማግኔት የሚሳበው ቁስ የትኛው ነው?",
    "o": [
      "Wood / እንጨት",
      "Plastic / ፕላስቲክ",
      "Iron / ብረት",
      "Glass / ብርጭቆ"
    ],
    "a": 2,
    "grade": 3
  },
  {
    "id": "science-20",
    "c": "science",
    "en": "What do bees collect from flowers?",
    "am": "ንቦች ከአበባ ምን ይሰበስባሉ?",
    "o": [
      "Nectar / የአበባ ጭማቂ",
      "Sand / አሸዋ",
      "Leaves / ቅጠል",
      "Bark / ቅርፊት"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "science-21",
    "c": "science",
    "en": "Which gas do plants take in during photosynthesis?",
    "am": "በፎቶሲንተሲስ ጊዜ እፅዋት የሚወስዱት ጋዝ የትኛው ነው?",
    "o": [
      "Oxygen / ኦክስጅን",
      "Carbon dioxide / ካርቦን ዳይኦክሳይድ",
      "Nitrogen / ናይትሮጅን",
      "Hydrogen / ሃይድሮጅን"
    ],
    "a": 1,
    "grade": 6
  },
  {
    "id": "science-22",
    "c": "science",
    "en": "What is the main function of the lungs?",
    "am": "የሳንባ ዋና ተግባር ምንድን ነው?",
    "o": [
      "Pump blood",
      "Exchange gases for breathing",
      "Digest food",
      "Filter urine"
    ],
    "a": 1,
    "grade": 5
  },
  {
    "id": "science-23",
    "c": "science",
    "en": "Which simple machine is a ramp?",
    "am": "ዘንበል ያለ መውጫ ከቀላል ማሽኖች የትኛው ነው?",
    "o": [
      "Lever / ማንሻ",
      "Pulley / መዘዋወሪያ",
      "Inclined plane / ዘንበል ያለ ወለል",
      "Wheel and axle / ጎማና ዘንግ"
    ],
    "a": 2,
    "grade": 5
  },
  {
    "id": "science-24",
    "c": "science",
    "en": "Which part of the cell contains most genetic information?",
    "am": "አብዛኛውን የዘር ውርስ መረጃ የያዘው የሴል ክፍል የትኛው ነው?",
    "o": [
      "Nucleus / ኒውክሊየስ",
      "Cell wall / የሴል ግድግዳ",
      "Vacuole / ቫኩዎል",
      "Membrane only / ሽፋን"
    ],
    "a": 0,
    "grade": 6
  },
  {
    "id": "science-25",
    "c": "science",
    "en": "What is the natural home of an organism called?",
    "am": "የአንድ ሕያዋን ተፈጥሯዊ መኖሪያ ምን ይባላል?",
    "o": [
      "Habitat / መኖሪያ",
      "Machine / ማሽን",
      "Mineral / ማዕድን",
      "Climate only / የአየር ሁኔታ"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "science-26",
    "c": "science",
    "en": "Sound travels fastest through which material?",
    "am": "ድምፅ በየትኛው ቁስ ውስጥ በፍጥነት ይጓዛል?",
    "o": [
      "Vacuum / ባዶ ቦታ",
      "Air / አየር",
      "Water / ውሃ",
      "Steel / ብረት"
    ],
    "a": 3,
    "grade": 6
  },
  {
    "id": "science-27",
    "c": "science",
    "en": "Which nutrient is especially important for building and repairing muscles?",
    "am": "ጡንቻን ለመገንባትና ለመጠገን በተለይ የሚያስፈልገው ንጥረ ምግብ የትኛው ነው?",
    "o": [
      "Protein / ፕሮቲን",
      "Sugar only / ስኳር",
      "Water only / ውሃ",
      "Salt / ጨው"
    ],
    "a": 0,
    "grade": 8
  },
  {
    "id": "science-28",
    "c": "science",
    "en": "What causes day and night on Earth?",
    "am": "በምድር ላይ ቀንና ሌሊት እንዲፈጠሩ ምን ያደርጋል?",
    "o": [
      "Earth rotates / ምድር በዘንግዋ መዞር",
      "The Sun circles Earth",
      "The Moon shines",
      "Clouds move"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "science-29",
    "c": "science",
    "en": "Which layer protects Earth from much harmful ultraviolet radiation?",
    "am": "ምድርን ከብዙ ጎጂ አልትራቫዮሌት ጨረር የሚጠብቀው ንብርብር የትኛው ነው?",
    "o": [
      "Ozone layer / የኦዞን ንብርብር",
      "Cloud layer only",
      "Rock layer",
      "Ocean floor"
    ],
    "a": 0,
    "grade": 6
  },
  {
    "id": "science-30",
    "c": "science",
    "en": "What is the SI unit of force?",
    "am": "የኃይል የSI መለኪያ ክፍል ምንድን ነው?",
    "o": [
      "Joule / ጁል",
      "Watt / ዋት",
      "Newton / ኒውተን",
      "Pascal / ፓስካል"
    ],
    "a": 2,
    "grade": 8
  },
  {
    "id": "amharic-01",
    "c": "amharic",
    "en": "What does ፀሐይ mean in English?",
    "am": "“ፀሐይ” በእንግሊዝኛ ምን ማለት ነው?",
    "o": [
      "Moon",
      "Star",
      "Sun",
      "Cloud"
    ],
    "a": 2,
    "grade": 3
  },
  {
    "id": "amharic-02",
    "c": "amharic",
    "en": "Which word means “water” in Amharic?",
    "am": "“ውሃ” ማለት ምንድን ነው?",
    "o": [
      "Fire / እሳት",
      "Water / ውሃ",
      "House / ቤት",
      "Road / መንገድ"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "amharic-03",
    "c": "amharic",
    "en": "What is the opposite of ትልቅ (big)?",
    "am": "የ“ትልቅ” ተቃራኒ ቃል የትኛው ነው?",
    "o": [
      "ረጅም",
      "ትንሽ",
      "ፈጣን",
      "ሙቅ"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "amharic-04",
    "c": "amharic",
    "en": "Which is an Amharic greeting?",
    "am": "በአማርኛ ሰላምታ የሆነው የትኛው ነው?",
    "o": [
      "ሰላም",
      "ውሃ",
      "ቤት",
      "መጽሐፍ"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "amharic-05",
    "c": "amharic",
    "en": "What does መጽሐፍ mean?",
    "am": "“መጽሐፍ” ምን ማለት ነው?",
    "o": [
      "Book / መጽሐፍ",
      "School / ትምህርት ቤት",
      "Friend / ጓደኛ",
      "Tree / ዛፍ"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "amharic-06",
    "c": "amharic",
    "en": "Which word means “mother”?",
    "am": "“እናት” ማለት ምንድን ነው?",
    "o": [
      "Father",
      "Mother",
      "Sister",
      "Brother"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "amharic-07",
    "c": "amharic",
    "en": "Which word means “house”?",
    "am": "“ቤት” ማለት ምንድን ነው?",
    "o": [
      "House",
      "River",
      "Mountain",
      "School"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "amharic-08",
    "c": "amharic",
    "en": "What is the plural meaning of ተማሪ (student) commonly written as?",
    "am": "የ“ተማሪ” ብዙ ቁጥር በተለምዶ እንዴት ይጻፋል?",
    "o": [
      "ተማሪዎች",
      "ተማሪነት",
      "ተማር",
      "ትምህርት"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "amharic-09",
    "c": "amharic",
    "en": "Which word means “peace”?",
    "am": "“ሰላም” ምን ማለት ነው?",
    "o": [
      "Peace / ሰላም",
      "Rain / ዝናብ",
      "Fire / እሳት",
      "Night / ሌሊት"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "amharic-10",
    "c": "amharic",
    "en": "Which word means “book” in Amharic?",
    "am": "“book” በአማርኛ ምን ይባላል?",
    "o": [
      "በር",
      "መጽሐፍ",
      "ጫማ",
      "ወንበር"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "amharic-11",
    "c": "amharic",
    "en": "What is the opposite of ቀን (day)?",
    "am": "የ“ቀን” ተቃራኒ ቃል ምንድን ነው?",
    "o": [
      "ሳምንት",
      "ወር",
      "ሌሊት",
      "ዓመት"
    ],
    "a": 2,
    "grade": 4
  },
  {
    "id": "amharic-12",
    "c": "amharic",
    "en": "Which word means “fast”?",
    "am": "“ፈጣን” ምን ማለት ነው?",
    "o": [
      "Slow",
      "Fast",
      "Quiet",
      "Heavy"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "amharic-13",
    "c": "amharic",
    "en": "Which word means “beautiful”?",
    "am": "“ቆንጆ” ምን ማለት ነው?",
    "o": [
      "Beautiful",
      "Angry",
      "Hungry",
      "Tired"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "amharic-14",
    "c": "amharic",
    "en": "What does ውሻ mean?",
    "am": "“ውሻ” ምን ማለት ነው?",
    "o": [
      "Cat",
      "Dog",
      "Cow",
      "Horse"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "amharic-15",
    "c": "amharic",
    "en": "Which word means “school”?",
    "am": "“ትምህርት ቤት” ምን ማለት ነው?",
    "o": [
      "Market",
      "School",
      "Hospital",
      "Church"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "amharic-16",
    "c": "amharic",
    "en": "Which word is a number: ሦስት?",
    "am": "“ሦስት” የትኛው ቁጥር ነው?",
    "o": [
      "2",
      "3",
      "4",
      "5"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "amharic-17",
    "c": "amharic",
    "en": "What does አመሰግናለሁ mean?",
    "am": "“አመሰግናለሁ” ምን ማለት ነው?",
    "o": [
      "Please",
      "Thank you",
      "Goodbye",
      "Good morning"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "amharic-18",
    "c": "amharic",
    "en": "Which word means “rain”?",
    "am": "“ዝናብ” ምን ማለት ነው?",
    "o": [
      "Wind",
      "Rain",
      "Sunshine",
      "Dust"
    ],
    "a": 1,
    "grade": 3
  },
  {
    "id": "amharic-19",
    "c": "amharic",
    "en": "What is the opposite of ሙቅ (hot)?",
    "am": "የ“ሙቅ” ተቃራኒ ቃል የትኛው ነው?",
    "o": [
      "ቀዝቃዛ",
      "ጣፋጭ",
      "ትልቅ",
      "ደረቅ"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "amharic-20",
    "c": "amharic",
    "en": "Which word means “friend”?",
    "am": "“ጓደኛ” ምን ማለት ነው?",
    "o": [
      "Enemy",
      "Friend",
      "Teacher",
      "Guest"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "amharic-21",
    "c": "amharic",
    "en": "Which is a verb meaning “to eat”?",
    "am": "“መብላት” ምን ማለት ነው?",
    "o": [
      "To sleep",
      "To eat",
      "To run",
      "To read"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "amharic-22",
    "c": "amharic",
    "en": "Which word means “mountain”?",
    "am": "“ተራራ” ምን ማለት ነው?",
    "o": [
      "Mountain",
      "Valley",
      "Bridge",
      "Lake"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "amharic-23",
    "c": "amharic",
    "en": "What does እንኳን ደህና መጣህ mean when speaking to a male guest?",
    "am": "ለወንድ እንግዳ “እንኳን ደህና መጣህ” ምን ማለት ነው?",
    "o": [
      "Welcome",
      "Sorry",
      "Good night",
      "Be quiet"
    ],
    "a": 0,
    "grade": 5
  },
  {
    "id": "amharic-24",
    "c": "amharic",
    "en": "Which punctuation mark often ends a question in Amharic writing?",
    "am": "በአማርኛ ጽሑፍ ጥያቄን ለመጨረስ የሚጠቀምበት ምልክት የትኛው ነው?",
    "o": [
      "።",
      "፣",
      "? only",
      "፧"
    ],
    "a": 3,
    "grade": 7
  },
  {
    "id": "amharic-25",
    "c": "amharic",
    "en": "Which word is closest in meaning to ደስታ?",
    "am": "“ደስታ” በትርጉም በጣም የሚቀርበው የትኛው ነው?",
    "o": [
      "Joy / ደስታ",
      "Fear / ፍርሃት",
      "Pain / ህመም",
      "Anger / ቁጣ"
    ],
    "a": 0,
    "grade": 5
  },
  {
    "id": "amharic-26",
    "c": "amharic",
    "en": "What does አንብብ mean as a command?",
    "am": "“አንብብ” እንደ ትእዛዝ ምን ማለት ነው?",
    "o": [
      "Write",
      "Read",
      "Listen",
      "Stand"
    ],
    "a": 1,
    "grade": 5
  },
  {
    "id": "amharic-27",
    "c": "amharic",
    "en": "Which word means “tomorrow”?",
    "am": "“ነገ” ምን ማለት ነው?",
    "o": [
      "Yesterday",
      "Today",
      "Tomorrow",
      "Morning"
    ],
    "a": 2,
    "grade": 4
  },
  {
    "id": "amharic-28",
    "c": "amharic",
    "en": "Which word means “teacher”?",
    "am": "“መምህር” ምን ማለት ነው?",
    "o": [
      "Student",
      "Teacher",
      "Farmer",
      "Driver"
    ],
    "a": 1,
    "grade": 7
  },
  {
    "id": "amharic-29",
    "c": "amharic",
    "en": "What does ትጋት most closely mean?",
    "am": "“ትጋት” በቅርብ ምን ማለት ነው?",
    "o": [
      "Diligence / ትጋት",
      "Laziness / ስንፍና",
      "Noise / ጫጫታ",
      "Sleep / እንቅልፍ"
    ],
    "a": 0,
    "grade": 8
  },
  {
    "id": "amharic-30",
    "c": "amharic",
    "en": "Which is the correct Amharic word for “thank you very much”?",
    "am": "“Thank you very much” በአማርኛ በተለምዶ እንዴት ይባላል?",
    "o": [
      "በጣም አመሰግናለሁ",
      "ደህና ሁን",
      "እባክህ ተቀመጥ",
      "እንዴት ነህ"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "ethiopia-01",
    "c": "ethiopia",
    "en": "What is the capital of Ethiopia?",
    "am": "የኢትዮጵያ ዋና ከተማ ምንድን ናት?",
    "o": [
      "Bahir Dar / ባሕር ዳር",
      "Gondar / ጎንደር",
      "Addis Ababa / አዲስ አበባ",
      "Dessie / ደሴ"
    ],
    "a": 2,
    "grade": 3
  },
  {
    "id": "ethiopia-02",
    "c": "ethiopia",
    "en": "Lake Tana is the source of which famous river?",
    "am": "ጣና ሐይቅ የየትኛው ታዋቂ ወንዝ ምንጭ ነው?",
    "o": [
      "Awash / አዋሽ",
      "Blue Nile / አባይ",
      "Omo / ኦሞ",
      "Wabi Shebelle / ዋቢ ሸበሌ"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "ethiopia-03",
    "c": "ethiopia",
    "en": "Gojjam is a historic area associated with which region?",
    "am": "ጎጃም ከየትኛው ክልል ጋር የተያያዘ ታሪካዊ አካባቢ ነው?",
    "o": [
      "Amhara / አማራ",
      "Oromia / ኦሮሚያ",
      "Sidama / ሲዳማ",
      "Afar / አፋር"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "ethiopia-04",
    "c": "ethiopia",
    "en": "Which mountain is a landmark of Gojjam?",
    "am": "የጎጃም መለያ ከሆኑ ተራሮች አንዱ የትኛው ነው?",
    "o": [
      "Choke / ጮቄ",
      "Kilimanjaro / ኪሊማንጃሮ",
      "Everest / ኤቨረስት",
      "Atlas / አትላስ"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "ethiopia-05",
    "c": "ethiopia",
    "en": "Ethiopian Christmas is commonly celebrated on…",
    "am": "የኢትዮጵያ ገና በተለምዶ መቼ ይከበራል?",
    "o": [
      "January 7 / ጥር 7",
      "February 14 / የካቲት 14",
      "April 1 / ሚያዝያ 1",
      "September 11 / መስከረም 11"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "ethiopia-06",
    "c": "ethiopia",
    "en": "What is the largest lake in Ethiopia?",
    "am": "በኢትዮጵያ ትልቁ ሐይቅ የትኛው ነው?",
    "o": [
      "Lake Abaya / አባያ ሐይቅ",
      "Lake Tana / ጣና ሐይቅ",
      "Lake Ziway / ዝዋይ ሐይቅ",
      "Lake Langano / ላንጋኖ ሐይቅ"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "ethiopia-07",
    "c": "ethiopia",
    "en": "What are the two main colours on Ethiopia’s national flag traditionally associated with?",
    "am": "በኢትዮጵያ ባንዲራ ላይ ካሉ ቀለሞች መካከል ሁለቱ የትኞቹ ናቸው?",
    "o": [
      "Green and yellow / አረንጓዴና ቢጫ",
      "Blue and pink / ሰማያዊና ሮዝ",
      "Black and orange / ጥቁርና ብርቱካናማ",
      "Purple and white / ሐምራዊና ነጭ"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "ethiopia-08",
    "c": "ethiopia",
    "en": "Which Ethiopian crop is used to make injera?",
    "am": "እንጀራ ለመሥራት በብዛት የሚጠቀሙት የኢትዮጵያ ሰብል የትኛው ነው?",
    "o": [
      "Teff / ጤፍ",
      "Cotton / ጥጥ",
      "Coffee / ቡና",
      "Sesame / ሰሊጥ"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "ethiopia-09",
    "c": "ethiopia",
    "en": "Which city is known as the capital of the Amhara Region?",
    "am": "የአማራ ክልል ዋና ከተማ የሆነችው የትኛው ከተማ ናት?",
    "o": [
      "Bahir Dar / ባሕር ዳር",
      "Mekelle / መቀሌ",
      "Hawassa / ሐዋሳ",
      "Jijiga / ጅግጅጋ"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "ethiopia-10",
    "c": "ethiopia",
    "en": "What is the traditional Ethiopian calendar year made up of?",
    "am": "በባህላዊው የኢትዮጵያ የቀን መቁጠሪያ ዓመት ስንት ወራት አሉት?",
    "o": [
      "10 months",
      "12 months only",
      "13 months",
      "14 months"
    ],
    "a": 2,
    "grade": 7
  },
  {
    "id": "ethiopia-11",
    "c": "ethiopia",
    "en": "Which animal is strongly associated with Ethiopian coffee ceremonies?",
    "am": "ከኢትዮጵያ የቡና ሥነ ሥርዓት ጋር በቀጥታ የተያያዘው የትኛው ነው?",
    "o": [
      "Clay coffee pot / ጀበና",
      "Fishing net / መረብ",
      "Snow shovel",
      "Saddle only"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "ethiopia-12",
    "c": "ethiopia",
    "en": "Which ancient site in Ethiopia is famous for its rock-hewn churches?",
    "am": "በድንጋይ ውስጥ በተቆረጡ ቤተ ክርስቲያናት የታወቀው ጥንታዊ ቦታ የትኛው ነው?",
    "o": [
      "Lalibela / ላሊበላ",
      "Dire Dawa / ድሬዳዋ",
      "Adama / አዳማ",
      "Debre Markos / ደብረ ማርቆስ"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "ethiopia-13",
    "c": "ethiopia",
    "en": "What is the name of Ethiopia’s famous long-distance runner Abebe Bikila’s sport?",
    "am": "አበበ ቢቂላ የታወቀበት ስፖርት ምንድን ነው?",
    "o": [
      "Swimming / ዋና",
      "Marathon running / ማራቶን ሩጫ",
      "Cycling / ብስክሌት",
      "Tennis / ቴኒስ"
    ],
    "a": 1,
    "grade": 4
  },
  {
    "id": "ethiopia-14",
    "c": "ethiopia",
    "en": "Which highland animal is native to Ethiopia?",
    "am": "የኢትዮጵያ ተወላጅ የሆነው የደጋ እንስሳ የትኛው ነው?",
    "o": [
      "Walia ibex / ዋሊያ ኢቤክስ",
      "Kangaroo / ካንጋሮ",
      "Polar bear / የዋልታ ድብ",
      "Llama / ላማ"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "ethiopia-15",
    "c": "ethiopia",
    "en": "What is the major highland crop teff used for?",
    "am": "ጤፍ በዋናነት ለምን ይጠቅማል?",
    "o": [
      "Making injera / እንጀራ ለመሥራት",
      "Making paper only",
      "Fuel for cars",
      "Making glass"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "ethiopia-16",
    "c": "ethiopia",
    "en": "Which river is also known as the Abay in Ethiopia?",
    "am": "በኢትዮጵያ አባይ ተብሎ የሚጠራው ወንዝ የትኛው ነው?",
    "o": [
      "Blue Nile / የሰማያዊ ናይል",
      "Awash / አዋሽ",
      "Omo / ኦሞ",
      "Baro / ባሮ"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "ethiopia-17",
    "c": "ethiopia",
    "en": "Which language is widely used as a federal working language of Ethiopia?",
    "am": "በኢትዮጵያ የፌዴራል የሥራ ቋንቋ ሆኖ በስፋት የሚጠቀምበት ቋንቋ የትኛው ነው?",
    "o": [
      "Amharic / አማርኛ",
      "Italian / ጣሊያንኛ",
      "Swahili / ስዋሂሊ",
      "Arabic only / አረብኛ ብቻ"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "ethiopia-18",
    "c": "ethiopia",
    "en": "Which month begins the Ethiopian New Year, usually in September?",
    "am": "ብዙ ጊዜ በሴፕቴምበር የሚጀምረው የኢትዮጵያ አዲስ ዓመት በየትኛው ወር ይጀምራል?",
    "o": [
      "Meskerem / መስከረም",
      "Tikimt / ጥቅምት",
      "Tahsas / ታኅሣሥ",
      "Sene / ሰኔ"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "ethiopia-19",
    "c": "ethiopia",
    "en": "What is the traditional woven pattern on many Ethiopian clothes called in English?",
    "am": "በብዙ የኢትዮጵያ ልብሶች ላይ የሚታየው የተሸመነ ጌጥ በእንግሊዝኛ ምን ይባላል?",
    "o": [
      "Tibeb / ጥበብ",
      "Denim",
      "Tartan only",
      "Lace only"
    ],
    "a": 0,
    "grade": 5
  },
  {
    "id": "ethiopia-20",
    "c": "ethiopia",
    "en": "Which city is located near Lake Tana?",
    "am": "ከጣና ሐይቅ አጠገብ የምትገኘው ከተማ የትኛው ናት?",
    "o": [
      "Bahir Dar / ባሕር ዳር",
      "Hawassa / ሐዋሳ",
      "Harar / ሐረር",
      "Semera / ሰመራ"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "ethiopia-21",
    "c": "ethiopia",
    "en": "Which season usually brings the main rains to much of the Ethiopian highlands?",
    "am": "በአብዛኛው የኢትዮጵያ ደጋማ አካባቢ ዋናውን ዝናብ የሚያመጣው ወቅት የትኛው ነው?",
    "o": [
      "Kiremt / ክረምት",
      "Bega / በጋ",
      "Autumn only",
      "Winter in Europe"
    ],
    "a": 0,
    "grade": 5
  },
  {
    "id": "ethiopia-22",
    "c": "ethiopia",
    "en": "Which Ethiopian holiday celebrates the finding of the True Cross?",
    "am": "የመስቀል መገኘትን የሚያከብረው የኢትዮጵያ በዓል የትኛው ነው?",
    "o": [
      "Meskel / መስቀል",
      "Enkutatash / እንቁጣጣሽ",
      "Genna / ገና",
      "Fasika / ፋሲካ"
    ],
    "a": 0,
    "grade": 8
  },
  {
    "id": "ethiopia-23",
    "c": "ethiopia",
    "en": "What is a common traditional Ethiopian flatbread?",
    "am": "የተለመደ ባህላዊ የኢትዮጵያ ጠፍጣፋ ዳቦ ምንድን ነው?",
    "o": [
      "Injera / እንጀራ",
      "Croissant",
      "Tortilla only",
      "Bagel"
    ],
    "a": 0,
    "grade": 3
  },
  {
    "id": "ethiopia-24",
    "c": "ethiopia",
    "en": "What is the name of the Ethiopian Orthodox Christmas celebration?",
    "am": "የኢትዮጵያ ኦርቶዶክስ የገና በዓል በምን ስም ይጠራል?",
    "o": [
      "Lidet / ልደት",
      "Timkat / ጥምቀት",
      "Meskel / መስቀል",
      "Irreecha / ኢሬቻ"
    ],
    "a": 0,
    "grade": 4
  },
  {
    "id": "ethiopia-25",
    "c": "ethiopia",
    "en": "Which historic city is famous for castles in Ethiopia?",
    "am": "በኢትዮጵያ ቤተ መንግሥቶች የታወቀችው ታሪካዊ ከተማ የትኛው ናት?",
    "o": [
      "Gondar / ጎንደር",
      "Bishoftu / ቢሾፍቱ",
      "Shashemene / ሻሸመኔ",
      "Dilla / ዲላ"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "ethiopia-26",
    "c": "ethiopia",
    "en": "What does the Ethiopian word “Abay” refer to in this geography question?",
    "am": "በዚህ የጂኦግራፊ ጥያቄ “አባይ” የሚለው ቃል ምንን ያመለክታል?",
    "o": [
      "A river / ወንዝ",
      "A desert / በረሃ",
      "A volcano / እሳተ ገሞራ",
      "A sea / ባሕር"
    ],
    "a": 0,
    "grade": 8
  },
  {
    "id": "ethiopia-27",
    "c": "ethiopia",
    "en": "Which region includes the historic Gojjam area?",
    "am": "ታሪካዊው ጎጃም አካባቢ በየትኛው ክልል ውስጥ ይገኛል?",
    "o": [
      "Amhara Region / አማራ ክልል",
      "Somali Region / ሶማሌ ክልል",
      "Gambela Region / ጋምቤላ ክልል",
      "Harari Region / ሐረሪ ክልል"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "ethiopia-28",
    "c": "ethiopia",
    "en": "Which traditional sport is associated with Genna festivities in parts of the Ethiopian highlands?",
    "am": "በኢትዮጵያ ደጋማ አካባቢዎች ከገና በዓል ጋር የሚያያዝ ባህላዊ ጨዋታ የትኛው ነው?",
    "o": [
      "Stick-and-ball game / በዱላና ኳስ የሚጫወት ጨዋታ",
      "Ice hockey",
      "Cricket only",
      "Golf"
    ],
    "a": 0,
    "grade": 8
  },
  {
    "id": "ethiopia-29",
    "c": "ethiopia",
    "en": "Which mountain range or highland landmark is strongly associated with Gojjam?",
    "am": "ከጎጃም ጋር በጣም የሚያያዘው የደጋ መለያ የትኛው ነው?",
    "o": [
      "Choke Mountains / ጮቄ ተራሮች",
      "Simien only / ሰሜን ተራሮች ብቻ",
      "Bale only / ባሌ ብቻ",
      "Danakil Depression / ዳናኪል ተፋሰስ"
    ],
    "a": 0,
    "grade": 7
  },
  {
    "id": "ethiopia-30",
    "c": "ethiopia",
    "en": "Which is a well-known Ethiopian export crop?",
    "am": "በኢትዮጵያ የሚታወቅ የወጪ ንግድ ሰብል የትኛው ነው?",
    "o": [
      "Coffee / ቡና",
      "Maple syrup",
      "Olives only",
      "Cocoa only"
    ],
    "a": 0,
    "grade": 8
  }
];
