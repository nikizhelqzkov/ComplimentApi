export const compliments = [
  // Bulgarian (with sweet nicknames)
  "Дими, усмивката ти прави света по-светъл от изгрев над морето.",
  "Фъсти, очите ти са като две искрици, които палят добро настроение у всеки.",
  "Обич, гласът ти е мелодия, която разтапя и най-студеното сърце.",
  "Сладка, присъствието ти е като прегръдка за душата.",
  "Прекрасна, нежността ти е сила, която вдъхновява.",
  "Слънце, с теб всеки ден е малък празник.",
  "Мила, ти превръщаш обикновените мигове в спомени.",
  "Дими, смехът ти е като вълшебство – кара всичко да изглежда по-леко.",
  "Фъсти, топлотата ти дава кураж и нежност едновременно.",
  "Обич, очарованието ти е естествено като дъх на липи в юнска вечер.",
  // English
  "Dimi, your smile brightens the day more than a sunrise over the sea.",
  "Fusti, your eyes sparkle like little stars that lift every mood.",
  "Obich, your voice is a melody that melts even the coldest heart.",
  "Sweetheart, your presence feels like a hug for the soul.",
  "Beautiful one, your gentleness is a strength that inspires.",
  "Sunshine, with you every day feels like a small celebration.",
  "Dear heart, you turn ordinary moments into cherished memories.",
  "Dimi, your laughter is magic – it makes everything feel lighter.",
  "Fusti, your warmth gives courage and comfort all at once.",
  "Obich, your charm is as natural as the scent of blossoms in June."
];

export function getRandomCompliment(language) {
  const bg = compliments.filter(c => /[А-Яа-я]/.test(c));
  const en = compliments.filter(c => !/[А-Яа-я]/.test(c));
  if (language === 'bg') return bg[Math.floor(Math.random() * bg.length)];
  if (language === 'en') return en[Math.floor(Math.random() * en.length)];
  return compliments[Math.floor(Math.random() * compliments.length)];
}
