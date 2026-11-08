/* TedraLingo — Stage 2, level B1: four more units per language, after the ten A1–A2 units (js/grammar.js).
 * Same shape as the units there; the map shows them under a "B1" divider (js/course.js).
 */
(function () {
  const B1 = {
    "ar": [
      {
        "id": "object-suffixes",
        "icon": "🎯",
        "level": "B1",
        "title": {
          "he": "כינויי מושא: شفته, بحبك",
          "en": "Object pronouns: شفته, بحبك",
          "ar": "ضمائر المفعول: شفته، بحبك",
          "ru": "Местоимения-дополнения: شفته, بحبك"
        },
        "explain": {
          "he": [
            "את המושא מחברים לסוף הפועל, כמו \"ראיתיו\" בעברית ספרותית: شفته = ראיתי אותו.",
            "אותי = ـني (بتعرفني), אותך = ـك / ـِك, אותו / אותה = ـه / ـها, אותנו = ـنا, אתכם = ـكم, אותם = ـهم.",
            "בספרותית הסיומות כמעט זהות: رأيتُه, أحبُّك, تعرفني."
          ],
          "en": [
            "The object is attached to the end of the verb: شفته = I saw him, بحبك = I love you.",
            "me = ـني (بتعرفني), you = ـك / ـِك, him / her = ـه / ـها, us = ـنا, you all = ـكم, them = ـهم.",
            "Standard Arabic uses almost the same endings: رأيتُه, أحبُّك, تعرفني."
          ],
          "ar": [
            "يتصل ضمير المفعول بآخر الفعل: شفته = رأيته، بحبك = أحبك.",
            "ـني للمتكلم (بتعرفني)، ـكَ / ـكِ للمخاطب، ـه / ـها للغائب والغائبة، ـنا وـكم وـهم للجمع.",
            "الضمائر نفسها تقريبًا في الفصحى: رأيتُه، أحبُّك، تعرفني."
          ],
          "ru": [
            "Дополнение присоединяется к концу глагола: شفته = я видел его, بحبك = я тебя люблю.",
            "меня = ـني (بتعرفني), тебя = ـك / ـِك, его / её = ـه / ـها, нас = ـنا, вас = ـكم, их = ـهم.",
            "В литературном арабском окончания почти те же: رأيتُه, أحبُّك, تعرفني."
          ]
        },
        "table": [
          [
            "ـني",
            "شافني"
          ],
          [
            "ـك · ـِك",
            "شافك · شافِك"
          ],
          [
            "ـه · ـها",
            "شافه · شافها"
          ],
          [
            "ـنا",
            "شافنا"
          ],
          [
            "ـكم",
            "شافكم"
          ],
          [
            "ـهم",
            "شافهم"
          ]
        ],
        "ex": [
          [
            "شفته بالسوق مبارح.",
            "ראיתי אותו בשוק אתמול.",
            "I saw him at the market yesterday.",
            "شفته بالسوق مبارح.",
            "Я видел его вчера на рынке."
          ],
          [
            "بتعرفني؟",
            "אתה מכיר אותי?",
            "Do you know me?",
            "بتعرفني؟",
            "Ты меня знаешь?"
          ],
          [
            "رح أستناكم بالفندق.",
            "אחכה לכם במלון.",
            "I'll wait for you at the hotel.",
            "رح أستناكم بالفندق.",
            "Я подожду вас в гостинице."
          ],
          [
            "اشتريت التذاكر وحطيتهم بالشنطة.",
            "קניתי את הכרטיסים ושמתי אותם בתיק.",
            "I bought the tickets and put them in the bag.",
            "اشتريت التذاكر وحطيتهم بالشنطة.",
            "Я купил билеты и положил их в сумку."
          ]
        ],
        "drills": [
          [
            "وين أحمد؟ ما ___ اليوم.",
            "شفته",
            [
              "شفته",
              "شفتها",
              "شفتهم"
            ],
            {
              "he": "ראיתי אותו",
              "en": "I saw him",
              "ru": "я видел его"
            }
          ],
          [
            "سارة صاحبتي، ___ كتير.",
            "بحبها",
            [
              "بحبها",
              "بحبه",
              "بحبهم"
            ],
            {
              "he": "אני אוהב אותה",
              "en": "I love her",
              "ru": "я её люблю"
            }
          ],
          [
            "إنت ___؟ أنا جارك!",
            "بتعرفني",
            [
              "بتعرفني",
              "بتعرفه",
              "بتعرفهم"
            ],
            {
              "he": "אתה מכיר אותי",
              "en": "you know me",
              "ru": "ты меня знаешь"
            }
          ],
          [
            "الولاد بالبيت، رح ___ بعد شوي.",
            "أشوفهم",
            [
              "أشوفهم",
              "أشوفه",
              "أشوفها"
            ],
            {
              "he": "אראה אותם",
              "en": "I will see them",
              "ru": "я их увижу"
            }
          ]
        ]
      },
      {
        "id": "comparatives",
        "icon": "⚖️",
        "level": "B1",
        "title": {
          "he": "השוואה: أكبر من, أحسن",
          "en": "Comparing: أكبر من, أحسن",
          "ar": "المقارنة: أكبر من، أحسن",
          "ru": "Сравнение: أكبر من, أحسن"
        },
        "explain": {
          "he": [
            "ההשוואה היא צורה קבועה אחת, \"أفعل\": كبير → أكبر, رخيص → أرخص, ואחריה من: الباص أرخص من التكسي.",
            "יוצאי דופן: منيح → أحسن (יותר טוב), كتير → أكتر (יותר). הצורה לא משתנה לפי מין: هي أكبر مني.",
            "הכי: הצורה לפני שם עצם: أكبر مدينة = העיר הכי גדולה. בספרותית: أكثر, أفضل."
          ],
          "en": [
            "The comparative has one fixed shape, \"aCCaC\": كبير → أكبر, رخيص → أرخص, followed by من (than): الباص أرخص من التكسي.",
            "Irregular: منيح → أحسن (better), كتير → أكتر (more). It does not change for gender: هي أكبر مني = she is older than me.",
            "Superlative: put the form before a noun: أكبر مدينة = the biggest city. Standard Arabic: أكثر, أفضل."
          ],
          "ar": [
            "اسم التفضيل على وزن «أفعل»: كبير ← أكبر، رخيص ← أرخص، وبعده «من»: الباص أرخص من التكسي.",
            "في المحكية: منيح ← أحسن، كتير ← أكتر. ولا يتغير مع المؤنث: هي أكبر مني.",
            "للتفضيل المطلق يأتي قبل الاسم: أكبر مدينة. وفي الفصحى: أكثر، أفضل."
          ],
          "ru": [
            "Сравнительная степень имеет одну форму «аф‘аль»: كبير → أكبر, رخيص → أرخص, а за ней من (чем): الباص أرخص من التكسي.",
            "Исключения: منيح → أحسن (лучше), كتير → أكتر (больше). Форма не меняется по роду: هي أكبر مني = она старше меня.",
            "Превосходная: форма перед существительным: أكبر مدينة = самый большой город. В литературном: أكثر, أفضل."
          ]
        },
        "table": [
          [
            "كبير",
            "أكبر"
          ],
          [
            "رخيص",
            "أرخص"
          ],
          [
            "قريب",
            "أقرب"
          ],
          [
            "منيح",
            "أحسن"
          ],
          [
            "كتير",
            "أكتر"
          ]
        ],
        "ex": [
          [
            "الباص أرخص من التكسي.",
            "האוטובוס זול יותר מהמונית.",
            "The bus is cheaper than the taxi.",
            "الباص أرخص من التكسي.",
            "Автобус дешевле такси."
          ],
          [
            "هاد المطعم أحسن من التاني.",
            "המסעדה הזאת טובה יותר מהשנייה.",
            "This restaurant is better than the other one.",
            "هاد المطعم أحسن من التاني.",
            "Этот ресторан лучше, чем тот."
          ],
          [
            "حيفا أقرب من إيلات.",
            "חיפה קרובה יותר מאילת.",
            "Haifa is closer than Eilat.",
            "حيفا أقرب من إيلات.",
            "Хайфа ближе, чем Эйлат."
          ],
          [
            "هاد أطيب أكل أكلته بحياتي!",
            "זה האוכל הכי טעים שאכלתי בחיים!",
            "This is the tastiest food I've ever eaten!",
            "هاد أطيب أكل أكلته بحياتي!",
            "Это самая вкусная еда в моей жизни!"
          ]
        ],
        "drills": [
          [
            "الباص ___ من التكسي.",
            "أرخص",
            [
              "أرخص",
              "رخيص",
              "رخيصة"
            ],
            {
              "he": "זול יותר",
              "en": "cheaper",
              "ru": "дешевле"
            }
          ],
          [
            "هاد الفندق ___ من التاني.",
            "أحسن",
            [
              "أحسن",
              "منيح",
              "منيحة"
            ],
            {
              "he": "טוב יותר",
              "en": "better",
              "ru": "лучше"
            }
          ],
          [
            "بالشتا، القدس ___ من تل أبيب.",
            "أبرد",
            [
              "أبرد",
              "بارد",
              "باردة"
            ],
            {
              "he": "קרה יותר",
              "en": "colder",
              "ru": "холоднее"
            }
          ],
          [
            "هاي ___ مدينة بالبلاد.",
            "أكبر",
            [
              "أكبر",
              "كبيرة",
              "الكبيرة"
            ],
            {
              "he": "הכי גדולה",
              "en": "the biggest",
              "ru": "самый большой"
            }
          ]
        ]
      },
      {
        "id": "conditionals",
        "icon": "🔀",
        "level": "B1",
        "title": {
          "he": "משפטי תנאי: إذا, لو",
          "en": "Conditionals: إذا, لو",
          "ar": "الجمل الشرطية: إذا، لو",
          "ru": "Условные предложения: إذا, لو"
        },
        "explain": {
          "he": [
            "إذا = אם (מצב אפשרי). אחריו בא בדרך כלל עבר, גם כשמדברים על העתיד: إذا وصلت بكير، بتصل فيك = אם אגיע מוקדם, אתקשר אליך.",
            "لو = לו / אילו (מצב דמיוני), ובחלק השני كان: لو بعرف، كنت قلتلك = לו ידעתי, הייתי אומר לך.",
            "בספרותית: إذا وصلتُ مبكرًا سأتصل بك · لو كنتُ أعرف لأخبرتُك."
          ],
          "en": [
            "إذا = if (a real possibility). It is usually followed by the past, even about the future: إذا وصلت بكير، بتصل فيك = if I arrive early, I'll call you.",
            "لو = if (imagined or unreal), with كان in the result: لو بعرف، كنت قلتلك = if I had known, I would have told you.",
            "Standard Arabic: إذا وصلتُ مبكرًا سأتصل بك · لو كنتُ أعرف لأخبرتُك."
          ],
          "ar": [
            "«إذا» للشرط الممكن، ويأتي بعدها الماضي عادةً حتى للمستقبل: إذا وصلت بكير، بتصل فيك = إذا وصلتُ مبكرًا أتصل بك.",
            "«لو» للشرط المتخيَّل، ويأتي «كان» في الجواب: لو بعرف، كنت قلتلك = لو كنتُ أعرف لأخبرتُك.",
            "في الفصحى: إذا وصلتُ مبكرًا سأتصل بك · لو كنتُ أعرف لأخبرتُك."
          ],
          "ru": [
            "إذا = если (реальная возможность). После него обычно прошедшее время, даже о будущем: إذا وصلت بكير، بتصل فيك = если приеду рано, позвоню тебе.",
            "لو = если бы (воображаемое), а во второй части — كان: لو بعرف، كنت قلتلك = если бы я знал, я бы тебе сказал.",
            "В литературном: إذا وصلتُ مبكرًا سأتصل بك · لو كنتُ أعرف لأخبرتُك."
          ]
        },
        "table": [
          [
            "إذا",
            "إذا بدك، منروح"
          ],
          [
            "إذا + ماضي",
            "إذا وصلت بكير، بتصل فيك"
          ],
          [
            "لو",
            "لو بعرف، كنت قلتلك"
          ],
          [
            "لو كان",
            "لو كان معي وقت، كنت رحت"
          ]
        ],
        "ex": [
          [
            "إذا بدك، منروح عالبحر بعد الضهر.",
            "אם אתה רוצה, נלך לים אחר הצהריים.",
            "If you want, we'll go to the beach in the afternoon.",
            "إذا بدك، منروح عالبحر بعد الضهر.",
            "Если хочешь, пойдём на море после обеда."
          ],
          [
            "إذا شتّت، منضل بالفندق.",
            "אם ירד גשם, נישאר במלון.",
            "If it rains, we'll stay at the hotel.",
            "إذا شتّت، منضل بالفندق.",
            "Если пойдёт дождь, останемся в гостинице."
          ],
          [
            "إذا وصلت بكير، بتصل فيك.",
            "אם אגיע מוקדם, אתקשר אליך.",
            "If I arrive early, I'll call you.",
            "إذا وصلت بكير، بتصل فيك.",
            "Если приеду рано, я тебе позвоню."
          ],
          [
            "لو كان معي وقت، كنت رحت عالبترا.",
            "אילו היה לי זמן, הייתי נוסע לפטרה.",
            "If I had time, I would go to Petra.",
            "لو كان معي وقت، كنت رحت عالبترا.",
            "Если бы у меня было время, я бы съездил в Петру."
          ]
        ],
        "drills": [
          [
            "___ وصلت بكير، بتصل فيك.",
            "إذا",
            [
              "إذا",
              "لأنه",
              "بس"
            ],
            {
              "he": "אם",
              "en": "if",
              "ru": "если"
            }
          ],
          [
            "لو بعرف، ___ قلتلك.",
            "كنت",
            [
              "كنت",
              "رح",
              "عم"
            ],
            {
              "he": "הייתי",
              "en": "I would have",
              "ru": "я бы"
            }
          ],
          [
            "إذا إنت ___ بكير، اتصل فيي.",
            "وصلت",
            [
              "وصلت",
              "وصلنا",
              "وصلوا"
            ],
            {
              "he": "הגעת",
              "en": "you arrive",
              "ru": "ты приедешь"
            }
          ],
          [
            "لو ___ معي مصاري، كنت اشتريت سيارة.",
            "كان",
            [
              "كان",
              "رح",
              "عم"
            ],
            {
              "he": "היה",
              "en": "had (if I had)",
              "ru": "было бы"
            }
          ]
        ]
      },
      {
        "id": "imperative",
        "icon": "👉",
        "level": "B1",
        "title": {
          "he": "ציווי: روح, تعال, لا تنسى",
          "en": "The imperative: روح, تعال, لا تنسى",
          "ar": "فعل الأمر: روح، تعال، لا تنسى",
          "ru": "Повелительное наклонение: روح, تعال, لا تنسى"
        },
        "explain": {
          "he": [
            "ציווי לזכר: روح (לך), اشرب (שתה), تعال (בוא). לנקבה מוסיפים ـي: روحي, ולרבים ـوا: روحوا.",
            "שלילה: لا + הפועל בהווה בלי ب: لا تروح = אל תלך, لا تنسي = אל תשכחי.",
            "בקשה מנומסת: מוסיפים لو سمحت / لو سمحتي: عطيني الحساب، لو سمحت. בספרותית: اذهب, تعالَ, أعطني."
          ],
          "en": [
            "To a man: روح (go), اشرب (drink), تعال (come). To a woman add ـي: روحي; to a group add ـوا: روحوا.",
            "Negative: لا + the present verb without ب: لا تروح = don't go, لا تنسي = don't forget (f.).",
            "To be polite add لو سمحت / لو سمحتي: عطيني الحساب، لو سمحت. Standard Arabic: اذهب, تعالَ, أعطني."
          ],
          "ar": [
            "للمذكر: روح، اشرب، تعال. وللمؤنث نضيف ـي: روحي، وللجمع ـوا: روحوا.",
            "النهي: لا + المضارع بلا «ب»: لا تروح، لا تنسي.",
            "للتهذيب نضيف «لو سمحت / لو سمحتي»: عطيني الحساب، لو سمحت. وفي الفصحى: اذهب، تعالَ، أعطني."
          ],
          "ru": [
            "Мужчине: روح (иди), اشرب (пей), تعال (иди сюда). Женщине добавляем ـي: روحي; нескольким людям — ـوا: روحوا.",
            "Запрет: لا + глагол настоящего времени без ب: لا تروح = не уходи, لا تنسي = не забудь (ж.).",
            "Для вежливости добавьте لو سمحت / لو سمحتي: عطيني الحساب، لو سمحت. В литературном: اذهب, تعالَ, أعطني."
          ]
        },
        "table": [
          [
            "إنت",
            "روح · اشرب · تعال"
          ],
          [
            "إنتِ",
            "روحي · اشربي · تعالي"
          ],
          [
            "إنتو",
            "روحوا · اشربوا · تعالوا"
          ],
          [
            "لا + مضارع",
            "لا تروح · لا تروحي"
          ]
        ],
        "ex": [
          [
            "تعال لهون، شوف المنظر!",
            "בוא לפה, תראה את הנוף!",
            "Come here, look at the view!",
            "تعال لهون، شوف المنظر!",
            "Иди сюда, посмотри на вид!"
          ],
          [
            "عطيني الحساب، لو سمحت.",
            "תן לי את החשבון, בבקשה.",
            "Can I have the bill, please?",
            "عطيني الحساب، لو سمحت.",
            "Дайте мне счёт, пожалуйста."
          ],
          [
            "لا تنسي الباسبور!",
            "אל תשכחי את הדרכון!",
            "Don't forget the passport!",
            "لا تنسي الباسبور!",
            "Не забудь паспорт!"
          ],
          [
            "استنونا قدام الفندق.",
            "חכו לנו מול המלון.",
            "Wait for us in front of the hotel.",
            "استنونا قدام الفندق.",
            "Подождите нас перед гостиницей."
          ]
        ],
        "drills": [
          [
            "يا سارة، ___ لهون!",
            "تعالي",
            [
              "تعالي",
              "تعال",
              "تعالوا"
            ],
            {
              "he": "בואי",
              "en": "come (f.)",
              "ru": "иди сюда (ж.)"
            }
          ],
          [
            "يا شباب، ___ عالباص بسرعة!",
            "اطلعوا",
            [
              "اطلعوا",
              "اطلع",
              "اطلعي"
            ],
            {
              "he": "עלו",
              "en": "get on (pl.)",
              "ru": "садитесь"
            }
          ],
          [
            "لا ___ الشنطة بالتكسي!",
            "تنسى",
            [
              "تنسى",
              "نسيت",
              "بتنسى"
            ],
            {
              "he": "תשכח",
              "en": "forget",
              "ru": "забудь"
            }
          ],
          [
            "___ الحساب، لو سمحت.",
            "عطيني",
            [
              "عطيني",
              "بعطيني",
              "عطيت"
            ],
            {
              "he": "תן לי",
              "en": "give me",
              "ru": "дайте мне"
            }
          ]
        ]
      }
    ],
    "de": [
      {
        "id": "dativ",
        "icon": "🎁",
        "level": "B1",
        "title": {
          "he": "דאטיב — mit / bei / zu + dem / der",
          "en": "The dative — mit / bei / zu + dem / der",
          "ar": "حالة الجر (Dativ) — mit / bei / zu + dem / der",
          "ru": "Дательный падеж — mit / bei / zu + dem / der"
        },
        "explain": {
          "he": [
            "הדאטיב עונה על \"למי?\" ובא אחרי mit, bei, zu, von, nach, aus, seit.",
            "התוויות משתנות: der / das ← dem, die ← der, ברבים die ← den (ולשם העצם מוסיפים ‎-n).",
            "קיצורים נפוצים: zu dem ← zum, zu der ← zur, bei dem ← beim, von dem ← vom."
          ],
          "en": [
            "The dative answers \"to whom?\" and follows mit, bei, zu, von, nach, aus, seit.",
            "Articles change: der / das → dem, die → der, plural die → den (and the noun adds -n).",
            "Common short forms: zu dem → zum, zu der → zur, bei dem → beim, von dem → vom."
          ],
          "ar": [
            "حالة Dativ تجيب عن سؤال «لِمَن؟» وتأتي بعد mit, bei, zu, von, nach, aus, seit.",
            "تتغير أدوات التعريف: der / das ← dem، die ← der، وفي الجمع die ← den (ويُضاف ‎-n إلى الاسم).",
            "اختصارات شائعة: zu dem ← zum، zu der ← zur، bei dem ← beim، von dem ← vom."
          ],
          "ru": [
            "Дательный падеж отвечает на вопрос «кому?» и стоит после mit, bei, zu, von, nach, aus, seit.",
            "Артикли меняются: der / das → dem, die → der, во множественном числе die → den (к существительному добавляется -n).",
            "Частые слияния: zu dem → zum, zu der → zur, bei dem → beim, von dem → vom."
          ]
        },
        "table": [
          [
            "der Bus",
            "mit dem Bus"
          ],
          [
            "das Hotel",
            "zum Hotel"
          ],
          [
            "die Apotheke",
            "zur Apotheke"
          ],
          [
            "die Freunde (Pl.)",
            "mit den Freunden"
          ],
          [
            "ich → mir, du → dir",
            "Kannst du mir helfen?"
          ],
          [
            "er → ihm, sie → ihr",
            "Ich gebe ihm das Ticket."
          ]
        ],
        "ex": [
          [
            "Ich fahre jeden Tag mit dem Bus zur Arbeit.",
            "אני נוסע כל יום באוטובוס לעבודה.",
            "I take the bus to work every day.",
            "أذهب إلى العمل بالحافلة كل يوم.",
            "Я каждый день езжу на работу на автобусе."
          ],
          [
            "Nach dem Frühstück gehen wir zum Bahnhof.",
            "אחרי ארוחת הבוקר אנחנו הולכים לתחנת הרכבת.",
            "After breakfast we're going to the train station.",
            "بعد الفطور سنذهب إلى محطة القطار.",
            "После завтрака мы идём на вокзал."
          ],
          [
            "Ich habe morgen einen Termin beim Arzt.",
            "יש לי מחר תור אצל הרופא.",
            "I have a doctor's appointment tomorrow.",
            "لديّ موعد عند الطبيب غدًا.",
            "Завтра у меня приём у врача."
          ],
          [
            "Kannst du mir bitte den Weg zeigen?",
            "אתה יכול בבקשה להראות לי את הדרך?",
            "Can you show me the way, please?",
            "هل يمكنك أن تدلّني على الطريق من فضلك؟",
            "Ты можешь показать мне дорогу?"
          ]
        ],
        "drills": [
          [
            "Ich fahre mit ___ Zug nach Berlin.",
            "dem",
            [
              "dem",
              "den",
              "der"
            ]
          ],
          [
            "Wir treffen uns nach ___ Arbeit.",
            "der",
            [
              "der",
              "die",
              "dem"
            ]
          ],
          [
            "Sie wohnt noch bei ___ Eltern.",
            "ihren",
            [
              "ihren",
              "ihre",
              "ihrer"
            ]
          ],
          [
            "Kannst du ___ bitte helfen?",
            "mir",
            [
              "mir",
              "mich",
              "ich"
            ]
          ]
        ]
      },
      {
        "id": "praeteritum",
        "icon": "📜",
        "level": "B1",
        "title": {
          "he": "Präteritum — war, hatte, konnte",
          "en": "Präteritum — war, hatte, konnte",
          "ar": "Präteritum — war, hatte, konnte",
          "ru": "Präteritum — war, hatte, konnte"
        },
        "explain": {
          "he": [
            "בדיבור משתמשים ב-Präteritum בעיקר עם sein, haben ופעלי העזר המודליים.",
            "sein ← war, haben ← hatte; פעלים מודליים מאבדים את האומלאוט ומוסיפים ‎-te: können ← konnte, müssen ← musste.",
            "ל-ich ול-er / sie אותה צורה: ich war, er war; wir waren, ihr wart, sie waren."
          ],
          "en": [
            "In speech, Germans use the Präteritum mainly with sein, haben and the modal verbs.",
            "sein → war, haben → hatte; modals drop the umlaut and add -te: können → konnte, müssen → musste.",
            "ich and er / sie share one form: ich war, er war; wir waren, ihr wart, sie waren."
          ],
          "ar": [
            "في الكلام يستخدم الألمان Präteritum غالبًا مع sein وhaben والأفعال المساعدة الشرطية (Modalverben).",
            "sein ← war، haben ← hatte؛ والأفعال المساعدة تفقد الـ Umlaut وتضيف ‎-te: können ← konnte، müssen ← musste.",
            "لـ ich و er / sie الصيغة نفسها: ich war, er war; wir waren, ihr wart, sie waren."
          ],
          "ru": [
            "В устной речи Präteritum используют в основном с sein, haben и модальными глаголами.",
            "sein → war, haben → hatte; модальные глаголы теряют умлаут и получают -te: können → konnte, müssen → musste.",
            "У ich и er / sie одна форма: ich war, er war; wir waren, ihr wart, sie waren."
          ]
        },
        "table": [
          [
            "ich / er / sie",
            "war · hatte"
          ],
          [
            "du",
            "warst · hattest"
          ],
          [
            "wir / sie / Sie",
            "waren · hatten"
          ],
          [
            "ihr",
            "wart · hattet"
          ],
          [
            "können / müssen",
            "konnte · musste"
          ],
          [
            "wollen / dürfen",
            "wollte · durfte"
          ]
        ],
        "ex": [
          [
            "Gestern war ich krank und musste zu Hause bleiben.",
            "אתמול הייתי חולה והייתי צריך להישאר בבית.",
            "Yesterday I was sick and had to stay at home.",
            "أمس كنتُ مريضًا واضطررتُ إلى البقاء في البيت.",
            "Вчера я был болен и должен был остаться дома."
          ],
          [
            "Das Hotel war schön, aber das Zimmer hatte keinen Balkon.",
            "המלון היה יפה, אבל לחדר לא הייתה מרפסת.",
            "The hotel was nice, but the room had no balcony.",
            "كان الفندق جميلًا، لكن الغرفة لم تكن فيها شرفة.",
            "Отель был красивый, но в номере не было балкона."
          ],
          [
            "Wir konnten leider keine Tickets mehr bekommen.",
            "לצערנו כבר לא הצלחנו להשיג כרטיסים.",
            "Unfortunately, we couldn't get any more tickets.",
            "للأسف لم نتمكن من الحصول على تذاكر.",
            "К сожалению, мы уже не смогли достать билеты."
          ],
          [
            "Hattest du am Wochenende Zeit?",
            "היה לך זמן בסוף השבוע?",
            "Did you have time at the weekend?",
            "هل كان لديك وقت في عطلة نهاية الأسبوع؟",
            "У тебя было время на выходных?"
          ]
        ],
        "drills": [
          [
            "Letzte Woche ___ ich in Wien.",
            "war",
            [
              "war",
              "bin",
              "waren"
            ]
          ],
          [
            "Gestern ___ wir keine Zeit für das Museum.",
            "hatten",
            [
              "hatten",
              "hatte",
              "hattet"
            ]
          ],
          [
            "Er ___ gestern lange arbeiten.",
            "musste",
            [
              "musste",
              "muss",
              "mussten"
            ]
          ],
          [
            "___ du schon einmal in Hamburg?",
            "Warst",
            [
              "Warst",
              "War",
              "Wart"
            ]
          ]
        ]
      },
      {
        "id": "weil-dass",
        "icon": "🔗",
        "level": "B1",
        "title": {
          "he": "משפטי משנה עם weil / dass — הפועל בסוף",
          "en": "Clauses with weil / dass — verb at the end",
          "ar": "الجمل الفرعية مع weil / dass — الفعل في النهاية",
          "ru": "Придаточные с weil / dass — глагол в конце"
        },
        "explain": {
          "he": [
            "אחרי weil (כי) ו-dass (ש...) הפועל המוטה עובר לסוף המשפט.",
            "משפט עיקרי, פסיק, ואז משפט המשנה: Ich bleibe zu Hause, weil ich krank bin.",
            "כשיש שני פעלים, המוטה בא אחרון: …, dass er nicht kommen kann."
          ],
          "en": [
            "After weil (because) and dass (that), the conjugated verb moves to the very end.",
            "Main clause, comma, then the subordinate clause: Ich bleibe zu Hause, weil ich krank bin.",
            "With two verbs, the conjugated one comes last: …, dass er nicht kommen kann."
          ],
          "ar": [
            "بعد weil (لأن) و dass (أنّ) ينتقل الفعل المصرَّف إلى آخر الجملة.",
            "جملة رئيسية، ثم فاصلة، ثم الجملة الفرعية: Ich bleibe zu Hause, weil ich krank bin.",
            "إذا كان هناك فعلان، يأتي الفعل المصرَّف في الأخير: …, dass er nicht kommen kann."
          ],
          "ru": [
            "После weil (потому что) и dass (что) спрягаемый глагол уходит в самый конец.",
            "Главное предложение, запятая, затем придаточное: Ich bleibe zu Hause, weil ich krank bin.",
            "Если глаголов два, спрягаемый стоит последним: …, dass er nicht kommen kann."
          ]
        },
        "table": [
          [
            "weil",
            "…, weil der Zug Verspätung hat."
          ],
          [
            "dass",
            "Ich glaube, dass das Café geschlossen ist."
          ],
          [
            "wenn",
            "…, wenn ich Zeit habe."
          ],
          [
            "ob",
            "Weißt du, ob es hier WLAN gibt?"
          ],
          [
            "+ Modalverb",
            "…, weil ich arbeiten muss."
          ]
        ],
        "ex": [
          [
            "Ich komme später, weil mein Zug Verspätung hat.",
            "אני אגיע מאוחר יותר, כי הרכבת שלי מתעכבת.",
            "I'll be late because my train is delayed.",
            "سأتأخر لأن قطاري متأخر.",
            "Я приду позже, потому что мой поезд опаздывает."
          ],
          [
            "Ich glaube, dass das Restaurant heute geschlossen ist.",
            "אני חושב שהמסעדה סגורה היום.",
            "I think the restaurant is closed today.",
            "أظن أن المطعم مغلق اليوم.",
            "Я думаю, что ресторан сегодня закрыт."
          ],
          [
            "Sie bleibt zu Hause, weil sie Fieber hat.",
            "היא נשארת בבית כי יש לה חום.",
            "She's staying at home because she has a fever.",
            "إنها تبقى في البيت لأنها مصابة بالحمّى.",
            "Она остаётся дома, потому что у неё температура."
          ],
          [
            "Weißt du, ob es im Hotel WLAN gibt?",
            "אתה יודע אם יש במלון Wi-Fi?",
            "Do you know if the hotel has Wi-Fi?",
            "هل تعرف إن كان في الفندق إنترنت لاسلكي؟",
            "Ты не знаешь, есть ли в отеле Wi-Fi?"
          ]
        ],
        "drills": [
          [
            "Ich nehme ein Taxi, ___ es regnet.",
            "weil",
            [
              "weil",
              "dass",
              "ob"
            ]
          ],
          [
            "Er sagt, dass er morgen nicht kommen ___.",
            "kann",
            [
              "kann",
              "können",
              "kannst"
            ]
          ],
          [
            "Ich hoffe, ___ das Wetter morgen schön ist.",
            "dass",
            [
              "dass",
              "weil",
              "ob"
            ]
          ],
          [
            "Wir essen im Hotel, weil das Restaurant geschlossen ___.",
            "ist",
            [
              "ist",
              "sind",
              "bist"
            ]
          ]
        ]
      },
      {
        "id": "konjunktiv-ii",
        "icon": "💭",
        "level": "B1",
        "title": {
          "he": "Konjunktiv II — würde, hätte, wäre, könnte",
          "en": "Konjunktiv II — würde, hätte, wäre, könnte",
          "ar": "Konjunktiv II — würde, hätte, wäre, könnte",
          "ru": "Konjunktiv II — würde, hätte, wäre, könnte"
        },
        "explain": {
          "he": [
            "Konjunktiv II הופך בקשות למנומסות ומדבר על משאלות ועל מצבים דמיוניים.",
            "לרוב הפעלים משתמשים ב-würde + שם הפועל: Ich würde gern reisen.",
            "צורות קצרות נפוצות: hätte (haben), wäre (sein), könnte (können): Ich hätte gern einen Kaffee."
          ],
          "en": [
            "Konjunktiv II makes requests polite and talks about wishes and imagined situations.",
            "Most verbs use würde + infinitive: Ich würde gern reisen.",
            "Common short forms: hätte (haben), wäre (sein), könnte (können): Ich hätte gern einen Kaffee."
          ],
          "ar": [
            "يجعل Konjunktiv II الطلبات مهذبة، ويُستخدم للتمنّي وللمواقف المتخيَّلة.",
            "معظم الأفعال تستخدم würde + المصدر: Ich würde gern reisen.",
            "صيغ قصيرة شائعة: hätte (haben)، wäre (sein)، könnte (können): Ich hätte gern einen Kaffee."
          ],
          "ru": [
            "Konjunktiv II делает просьбы вежливыми и выражает желания и воображаемые ситуации.",
            "Большинство глаголов образуют его с würde + инфинитив: Ich würde gern reisen.",
            "Частые краткие формы: hätte (haben), wäre (sein), könnte (können): Ich hätte gern einen Kaffee."
          ]
        },
        "table": [
          [
            "ich / er / sie",
            "würde · hätte · wäre · könnte"
          ],
          [
            "du",
            "würdest · hättest · wärst · könntest"
          ],
          [
            "wir / sie / Sie",
            "würden · hätten · wären · könnten"
          ],
          [
            "ihr",
            "würdet · hättet · wärt · könntet"
          ],
          [
            "wenn + Konjunktiv II",
            "Wenn ich Zeit hätte, würde ich kommen."
          ]
        ],
        "ex": [
          [
            "Ich hätte gern ein Zimmer mit Blick aufs Meer.",
            "הייתי רוצה חדר עם נוף לים.",
            "I'd like a room with a sea view.",
            "أودّ غرفة مطلّة على البحر.",
            "Я хотел бы номер с видом на море."
          ],
          [
            "Könnten Sie mir bitte die Rechnung bringen?",
            "תוכל בבקשה להביא לי את החשבון?",
            "Could you bring me the bill, please?",
            "هل يمكنك أن تحضر لي الفاتورة من فضلك؟",
            "Не могли бы вы принести мне счёт?"
          ],
          [
            "Wenn ich mehr Zeit hätte, würde ich öfter Sport machen.",
            "אילו היה לי יותר זמן, הייתי עושה ספורט לעתים קרובות יותר.",
            "If I had more time, I'd exercise more often.",
            "لو كان لديّ وقت أكثر، لمارستُ الرياضة أكثر.",
            "Если бы у меня было больше времени, я бы чаще занимался спортом."
          ],
          [
            "An deiner Stelle würde ich den Zug nehmen.",
            "במקומך הייתי לוקח את הרכבת.",
            "If I were you, I'd take the train.",
            "لو كنتُ مكانك، لركبتُ القطار.",
            "На твоём месте я бы поехал на поезде."
          ]
        ],
        "drills": [
          [
            "Ich ___ gern einen Tee, bitte.",
            "hätte",
            [
              "hätte",
              "hatte",
              "hätten"
            ]
          ],
          [
            "___ Sie mir bitte helfen?",
            "Könnten",
            [
              "Könnten",
              "Konnten",
              "Könnte"
            ]
          ],
          [
            "Wenn ich reich ___, würde ich um die Welt reisen.",
            "wäre",
            [
              "wäre",
              "war",
              "wären"
            ]
          ],
          [
            "An deiner Stelle ___ ich zum Arzt gehen.",
            "würde",
            [
              "würde",
              "wurde",
              "würdest"
            ]
          ]
        ]
      }
    ],
    "en": [
      {
        "id": "present-perfect",
        "icon": "🕰️",
        "level": "B1",
        "title": {
          "he": "Present perfect מול past simple — I have been / I went",
          "en": "Present perfect vs past simple — I have been / I went",
          "ar": "Present perfect مقابل past simple — I have been / I went",
          "ru": "Present perfect и past simple — I have been / I went"
        },
        "explain": {
          "he": [
            "Present perfect = have / has + צורת עבר שלישית: I have visited Rome.",
            "משתמשים בו לניסיון או לתוצאה עכשיו, בלי זמן מדויק: ever, never, already, yet, just.",
            "כשיש זמן מוגדר בעבר (yesterday, last year, in 2020) — past simple: I visited Rome last year."
          ],
          "en": [
            "Present perfect = have / has + past participle: I have visited Rome.",
            "Use it for experience or a result now, with no exact time: ever, never, already, yet, just.",
            "With a finished time (yesterday, last year, in 2020) use the past simple: I visited Rome last year."
          ],
          "ar": [
            "Present perfect = have / has + التصريف الثالث للفعل: I have visited Rome.",
            "نستعمله للتجربة أو لنتيجة قائمة الآن دون وقت محدد: ever, never, already, yet, just.",
            "مع وقت منتهٍ في الماضي (yesterday, last year, in 2020) نستعمل past simple: I visited Rome last year."
          ],
          "ru": [
            "Present perfect = have / has + третья форма глагола: I have visited Rome.",
            "Для опыта или результата сейчас, без точного времени: ever, never, already, yet, just.",
            "Если время указано и закончилось (yesterday, last year, in 2020) — past simple: I visited Rome last year."
          ]
        },
        "table": [
          [
            "I / you / we / they",
            "have been · have seen"
          ],
          [
            "he / she / it",
            "has been · has seen"
          ],
          [
            "past simple",
            "went · saw · was"
          ],
          [
            "present perfect words",
            "ever · never · already · yet · just"
          ],
          [
            "past simple words",
            "yesterday · last week · ago · in 2020"
          ]
        ],
        "ex": [
          [
            "Have you ever been to London?",
            "היית פעם בלונדון?",
            null,
            "هل زرت لندن من قبل؟",
            "Ты когда-нибудь был в Лондоне?"
          ],
          [
            "I've already checked in at the hotel.",
            "כבר עשיתי צ׳ק-אין במלון.",
            null,
            "لقد سجّلت دخولي في الفندق بالفعل.",
            "Я уже заселился в отель."
          ],
          [
            "We went to Paris last summer.",
            "נסענו לפריז בקיץ שעבר.",
            null,
            "ذهبنا إلى باريس في الصيف الماضي.",
            "Прошлым летом мы ездили в Париж."
          ],
          [
            "She hasn't finished her report yet.",
            "היא עוד לא סיימה את הדוח שלה.",
            null,
            "لم تُنهِ تقريرها بعد.",
            "Она ещё не закончила свой отчёт."
          ]
        ],
        "drills": [
          [
            "I have never ___ sushi.",
            "eaten",
            [
              "ate",
              "eaten",
              "eat"
            ]
          ],
          [
            "We ___ to Madrid two years ago.",
            "went",
            [
              "went",
              "have gone",
              "gone"
            ]
          ],
          [
            "___ you finished your coffee yet?",
            "Have",
            [
              "Have",
              "Did",
              "Has"
            ]
          ],
          [
            "She ___ just arrived at the airport.",
            "has",
            [
              "have",
              "has",
              "is"
            ]
          ]
        ]
      },
      {
        "id": "conditionals",
        "icon": "🔀",
        "level": "B1",
        "title": {
          "he": "משפטי תנאי — If it rains… / If I had…",
          "en": "First and second conditional — If it rains… / If I had…",
          "ar": "جمل الشرط — If it rains… / If I had…",
          "ru": "Условные предложения — If it rains… / If I had…"
        },
        "explain": {
          "he": [
            "תנאי ראשון — משהו אפשרי ומציאותי: If + הווה, will + פועל: If it rains, we will stay home.",
            "תנאי שני — משהו דמיוני או לא סביר: If + עבר, would + פועל: If I had more time, I would travel.",
            "בתנאי השני אומרים לרוב were לכולם: If I were you, I would take a taxi."
          ],
          "en": [
            "First conditional — real, possible situations: If + present, will + verb: If it rains, we will stay home.",
            "Second conditional — imaginary or unlikely situations: If + past, would + verb: If I had more time, I would travel.",
            "In the second conditional we often use were for everyone: If I were you, I would take a taxi."
          ],
          "ar": [
            "الشرط الأول — لموقف ممكن وواقعي: If + المضارع، will + الفعل: If it rains, we will stay home.",
            "الشرط الثاني — لموقف خيالي أو غير مرجّح: If + الماضي، would + الفعل: If I had more time, I would travel.",
            "في الشرط الثاني نستعمل غالبًا were مع جميع الضمائر: If I were you, I would take a taxi."
          ],
          "ru": [
            "Первый тип — реальная, возможная ситуация: If + настоящее, will + глагол: If it rains, we will stay home.",
            "Второй тип — воображаемая или маловероятная ситуация: If + прошедшее, would + глагол: If I had more time, I would travel.",
            "Во втором типе часто говорят were для всех лиц: If I were you, I would take a taxi."
          ]
        },
        "table": [
          [
            "1st: If + present",
            "will + verb"
          ],
          [
            "If you hurry,",
            "you will catch the bus."
          ],
          [
            "2nd: If + past",
            "would + verb"
          ],
          [
            "If I won the lottery,",
            "I would buy a house."
          ],
          [
            "If I were you,",
            "I would ask the doctor."
          ]
        ],
        "ex": [
          [
            "If you're hungry, we'll find a café.",
            "אם אתה רעב, נמצא בית קפה.",
            null,
            "إذا كنت جائعًا فسنجد مقهى.",
            "Если ты голоден, мы найдём кафе."
          ],
          [
            "If the train is late, I will call you.",
            "אם הרכבת תאחר, אתקשר אליך.",
            null,
            "إذا تأخّر القطار فسأتصل بك.",
            "Если поезд опоздает, я тебе позвоню."
          ],
          [
            "If I lived by the sea, I would swim every day.",
            "אם הייתי גר ליד הים, הייתי שוחה כל יום.",
            null,
            "لو كنت أعيش قرب البحر لسبحت كل يوم.",
            "Если бы я жил у моря, я бы плавал каждый день."
          ],
          [
            "If I were you, I would book the hotel now.",
            "במקומך, הייתי מזמין את המלון עכשיו.",
            null,
            "لو كنت مكانك لحجزت الفندق الآن.",
            "На твоём месте я бы забронировал отель сейчас."
          ]
        ],
        "drills": [
          [
            "If it rains tomorrow, we ___ stay at the hotel.",
            "will",
            [
              "will",
              "would",
              "are"
            ]
          ],
          [
            "If I ___ more money, I would buy a new car.",
            "had",
            [
              "have",
              "had",
              "will have"
            ]
          ],
          [
            "If we ___ the metro, we will arrive on time.",
            "take",
            [
              "take",
              "took",
              "will take"
            ]
          ],
          [
            "If I ___ you, I would see a doctor.",
            "were",
            [
              "am",
              "were",
              "be"
            ]
          ]
        ]
      },
      {
        "id": "comparatives",
        "icon": "📏",
        "level": "B1",
        "title": {
          "he": "השוואה והפלגה — cheaper / the cheapest",
          "en": "Comparatives and superlatives — cheaper / the cheapest",
          "ar": "صيغ المقارنة والتفضيل — cheaper / the cheapest",
          "ru": "Сравнительная и превосходная степень — cheaper / the cheapest"
        },
        "explain": {
          "he": [
            "מילים קצרות: ‎-er להשוואה ו-the ‎-est להפלגה: cheap → cheaper → the cheapest.",
            "מילים ארוכות: more / the most: comfortable → more comfortable → the most comfortable.",
            "חריגים: good → better → the best, bad → worse → the worst. אחרי השוואה: than."
          ],
          "en": [
            "Short adjectives: add -er to compare and the -est for the top: cheap → cheaper → the cheapest.",
            "Long adjectives: use more / the most: comfortable → more comfortable → the most comfortable.",
            "Irregulars: good → better → the best, bad → worse → the worst. After a comparative use than."
          ],
          "ar": [
            "الصفات القصيرة: نضيف ‎-er للمقارنة و the ‎-est للتفضيل: cheap → cheaper → the cheapest.",
            "الصفات الطويلة: نستعمل more / the most: comfortable → more comfortable → the most comfortable.",
            "الشواذ: good → better → the best و bad → worse → the worst. بعد المقارنة نستعمل than."
          ],
          "ru": [
            "Короткие прилагательные: -er для сравнения и the -est для превосходной степени: cheap → cheaper → the cheapest.",
            "Длинные прилагательные: more / the most: comfortable → more comfortable → the most comfortable.",
            "Исключения: good → better → the best, bad → worse → the worst. После сравнения — than."
          ]
        },
        "table": [
          [
            "cheap",
            "cheaper · the cheapest"
          ],
          [
            "big",
            "bigger · the biggest"
          ],
          [
            "easy",
            "easier · the easiest"
          ],
          [
            "expensive",
            "more expensive · the most expensive"
          ],
          [
            "good / bad",
            "better · the best / worse · the worst"
          ]
        ],
        "ex": [
          [
            "The bus is cheaper than the taxi.",
            "האוטובוס זול יותר מהמונית.",
            null,
            "الحافلة أرخص من سيارة الأجرة.",
            "Автобус дешевле, чем такси."
          ],
          [
            "This is the best café in town.",
            "זה בית הקפה הכי טוב בעיר.",
            null,
            "هذا أفضل مقهى في المدينة.",
            "Это лучшее кафе в городе."
          ],
          [
            "Our new room is bigger and more comfortable.",
            "החדר החדש שלנו גדול ונוח יותר.",
            null,
            "غرفتنا الجديدة أكبر وأكثر راحة.",
            "Наш новый номер больше и удобнее."
          ],
          [
            "August is the most expensive month to travel.",
            "אוגוסט הוא החודש היקר ביותר לטיול.",
            null,
            "أغسطس هو أغلى شهر للسفر.",
            "Август — самый дорогой месяц для поездок."
          ]
        ],
        "drills": [
          [
            "The train is ___ than the bus.",
            "faster",
            [
              "fast",
              "faster",
              "fastest"
            ]
          ],
          [
            "This is the ___ expensive hotel in the city.",
            "most",
            [
              "more",
              "most",
              "much"
            ]
          ],
          [
            "Today I feel ___ than yesterday.",
            "better",
            [
              "good",
              "better",
              "best"
            ]
          ],
          [
            "It was the ___ day of my holiday.",
            "worst",
            [
              "bad",
              "worse",
              "worst"
            ]
          ]
        ]
      },
      {
        "id": "relative-clauses",
        "icon": "🔗",
        "level": "B1",
        "title": {
          "he": "משפטי זיקה — who / which / that / where",
          "en": "Relative clauses — who / which / that / where",
          "ar": "جمل الصلة — who / which / that / where",
          "ru": "Определительные придаточные — who / which / that / where"
        },
        "explain": {
          "he": [
            "משפט זיקה מוסיף מידע על שם עצם ומחבר שני משפטים לאחד.",
            "who — לאנשים, which — לדברים, that — לשניהם, where — למקומות.",
            "דוגמה: The man who works here is friendly. This is the hotel where we stayed."
          ],
          "en": [
            "A relative clause adds information about a noun and joins two sentences into one.",
            "who — for people, which — for things, that — for both, where — for places.",
            "Example: The man who works here is friendly. This is the hotel where we stayed."
          ],
          "ar": [
            "جملة الصلة تضيف معلومة عن الاسم وتربط جملتين في جملة واحدة.",
            "who — للأشخاص، which — للأشياء، that — للاثنين، where — للأماكن.",
            "مثال: The man who works here is friendly. This is the hotel where we stayed."
          ],
          "ru": [
            "Придаточное определительное добавляет информацию о существительном и соединяет два предложения в одно.",
            "who — для людей, which — для вещей, that — для обоих, where — для мест.",
            "Пример: The man who works here is friendly. This is the hotel where we stayed."
          ]
        },
        "table": [
          [
            "who",
            "people: the woman who called"
          ],
          [
            "which",
            "things: the bag which I lost"
          ],
          [
            "that",
            "people or things: the bus that goes to the airport"
          ],
          [
            "where",
            "places: the café where we met"
          ]
        ],
        "ex": [
          [
            "The receptionist who helped us was very kind.",
            "פקידת הקבלה שעזרה לנו הייתה נחמדה מאוד.",
            null,
            "كانت موظفة الاستقبال التي ساعدتنا لطيفة جدًا.",
            "Администратор, который нам помог, был очень любезен."
          ],
          [
            "This is the bus that goes to the airport.",
            "זה האוטובוס שנוסע לשדה התעופה.",
            null,
            "هذه هي الحافلة التي تذهب إلى المطار.",
            "Это автобус, который идёт в аэропорт."
          ],
          [
            "I've lost the bag which I bought yesterday.",
            "איבדתי את התיק שקניתי אתמול.",
            null,
            "أضعت الحقيبة التي اشتريتها أمس.",
            "Я потерял сумку, которую купил вчера."
          ],
          [
            "That is the café where we first met.",
            "זה בית הקפה שבו נפגשנו לראשונה.",
            null,
            "ذلك هو المقهى الذي التقينا فيه أول مرة.",
            "Это то кафе, где мы впервые встретились."
          ]
        ],
        "drills": [
          [
            "The doctor ___ I saw today was very nice.",
            "who",
            [
              "who",
              "which",
              "where"
            ]
          ],
          [
            "Is this the train ___ goes to Oxford?",
            "which",
            [
              "who",
              "which",
              "where"
            ]
          ],
          [
            "This is the restaurant ___ we had dinner.",
            "where",
            [
              "which",
              "who",
              "where"
            ]
          ],
          [
            "I have a friend ___ lives in Rome.",
            "who",
            [
              "where",
              "who",
              "which"
            ]
          ]
        ]
      }
    ],
    "es": [
      {
        "id": "imperfecto",
        "icon": "🎞️",
        "level": "B1",
        "title": {
          "he": "Imperfecto מול indefinido — hacía / hice",
          "en": "Imperfecto vs indefinido — hacía / hice",
          "ar": "Imperfecto مقابل indefinido — hacía / hice",
          "ru": "Imperfecto и indefinido — hacía / hice"
        },
        "explain": {
          "he": [
            "Imperfecto — לתיאור רקע, הרגלים ומצבים בעבר: Cuando era niño, vivía en Sevilla.",
            "Indefinido — לפעולה שהתרחשה והסתיימה: Ayer comí paella.",
            "יחד: הרקע ב-imperfecto והאירוע ב-indefinido: Llovía cuando llegamos al hotel."
          ],
          "en": [
            "Imperfecto — for background, habits and states in the past: Cuando era niño, vivía en Sevilla.",
            "Indefinido — for a completed action or event: Ayer comí paella.",
            "Together: background in imperfecto, event in indefinido: Llovía cuando llegamos al hotel."
          ],
          "ar": [
            "Imperfecto — لوصف الخلفية والعادات والحالات في الماضي: Cuando era niño, vivía en Sevilla.",
            "Indefinido — لحدث وقع وانتهى: Ayer comí paella.",
            "معًا: الخلفية بـ imperfecto والحدث بـ indefinido: Llovía cuando llegamos al hotel."
          ],
          "ru": [
            "Imperfecto — фон, привычки и состояния в прошлом: Cuando era niño, vivía en Sevilla.",
            "Indefinido — завершённое действие или событие: Ayer comí paella.",
            "Вместе: фон в imperfecto, событие в indefinido: Llovía cuando llegamos al hotel."
          ]
        },
        "table": [
          [
            "-ar (hablar)",
            "hablaba · hablabas · hablaba · hablábamos · hablaban"
          ],
          [
            "-er / -ir (comer, vivir)",
            "comía · comías · comía · comíamos · comían"
          ],
          [
            "ser",
            "era · eras · era · éramos · eran"
          ],
          [
            "ir",
            "iba · ibas · iba · íbamos · iban"
          ],
          [
            "imperfecto: señales",
            "siempre · a menudo · cuando era niño"
          ],
          [
            "indefinido: señales",
            "ayer · el lunes · una vez · en 2020"
          ]
        ],
        "ex": [
          [
            "De pequeña, iba a la playa todos los veranos.",
            "כשהייתי קטנה, הייתי הולכת לים כל קיץ.",
            "As a child, I used to go to the beach every summer.",
            "عندما كنت صغيرة، كنت أذهب إلى الشاطئ كل صيف.",
            "В детстве я каждое лето ездила на пляж."
          ],
          [
            "Llovía mucho cuando llegamos al hotel.",
            "ירד הרבה גשם כשהגענו למלון.",
            "It was raining a lot when we arrived at the hotel.",
            "كانت تمطر كثيرًا عندما وصلنا إلى الفندق.",
            "Шёл сильный дождь, когда мы приехали в отель."
          ],
          [
            "Estaba en la oficina cuando me llamaste.",
            "הייתי במשרד כשהתקשרת אליי.",
            "I was at the office when you called me.",
            "كنت في المكتب عندما اتصلت بي.",
            "Я был в офисе, когда ты мне позвонил."
          ],
          [
            "El sábado cenamos en un restaurante italiano.",
            "בשבת אכלנו ארוחת ערב במסעדה איטלקית.",
            "On Saturday we had dinner at an Italian restaurant.",
            "يوم السبت تعشّينا في مطعم إيطالي.",
            "В субботу мы ужинали в итальянском ресторане."
          ]
        ],
        "drills": [
          [
            "Cuando era niño, ___ en un pueblo pequeño.",
            "vivía",
            [
              "vivía",
              "viví",
              "vivo"
            ]
          ],
          [
            "Ayer ___ un café con mi jefe.",
            "tomé",
            [
              "tomaba",
              "tomé",
              "tomo"
            ]
          ],
          [
            "Hacía sol cuando ___ al aeropuerto.",
            "llegamos",
            [
              "llegábamos",
              "llegamos",
              "llegar"
            ]
          ],
          [
            "Antes siempre ___ al trabajo en autobús.",
            "iba",
            [
              "fui",
              "iba",
              "voy"
            ]
          ]
        ]
      },
      {
        "id": "object-pronouns",
        "icon": "🎯",
        "level": "B1",
        "title": {
          "he": "כינויי מושא — lo / la / le",
          "en": "Object pronouns — lo / la / le",
          "ar": "ضمائر المفعول به — lo / la / le",
          "ru": "Местоимения-дополнения — lo / la / le"
        },
        "explain": {
          "he": [
            "מושא ישיר (את מי / את מה): lo, la, los, las: ¿El billete? Lo tengo.",
            "מושא עקיף (למי): le, les: Le doy la llave al recepcionista.",
            "הכינוי בא לפני הפועל המוטה, או מחובר לסוף שם הפועל: Lo quiero comprar = Quiero comprarlo."
          ],
          "en": [
            "Direct object (whom / what): lo, la, los, las: ¿El billete? Lo tengo.",
            "Indirect object (to whom): le, les: Le doy la llave al recepcionista.",
            "The pronoun goes before the conjugated verb, or attaches to an infinitive: Lo quiero comprar = Quiero comprarlo."
          ],
          "ar": [
            "المفعول به المباشر (مَن / ماذا): lo, la, los, las: ¿El billete? Lo tengo.",
            "المفعول به غير المباشر (لمن): le, les: Le doy la llave al recepcionista.",
            "يأتي الضمير قبل الفعل المصرَّف أو يتصل بآخر المصدر: Lo quiero comprar = Quiero comprarlo."
          ],
          "ru": [
            "Прямое дополнение (кого / что): lo, la, los, las: ¿El billete? Lo tengo.",
            "Косвенное дополнение (кому): le, les: Le doy la llave al recepcionista.",
            "Местоимение стоит перед спрягаемым глаголом или присоединяется к инфинитиву: Lo quiero comprar = Quiero comprarlo."
          ]
        },
        "table": [
          [
            "me · te · nos",
            "me / to me · you / to you · us / to us"
          ],
          [
            "lo / la",
            "him, it (m.) / her, it (f.)"
          ],
          [
            "los / las",
            "them (m.) / them (f.)"
          ],
          [
            "le / les",
            "to him, to her, to you / to them"
          ],
          [
            "le + lo → se lo",
            "Se lo doy."
          ]
        ],
        "ex": [
          [
            "¿Tienes el pasaporte? — Sí, lo tengo.",
            "יש לך את הדרכון? — כן, הוא אצלי.",
            "Do you have the passport? — Yes, I have it.",
            "هل معك جواز السفر؟ — نعم، معي.",
            "У тебя есть паспорт? — Да, он у меня."
          ],
          [
            "Las maletas las dejamos en recepción.",
            "את המזוודות השארנו בקבלה.",
            "We left the suitcases at reception.",
            "تركنا الحقائب في الاستقبال.",
            "Чемоданы мы оставили на ресепшене."
          ],
          [
            "Le escribo un correo a mi jefa.",
            "אני כותב מייל למנהלת שלי.",
            "I'm writing an email to my boss.",
            "أكتب رسالة إلكترونية إلى مديرتي.",
            "Я пишу письмо своей начальнице."
          ],
          [
            "¿La cuenta? Se la traigo ahora mismo.",
            "החשבון? אני מביא לך אותו מיד.",
            "The bill? I'll bring it to you right away.",
            "الحساب؟ سأحضره لك حالًا.",
            "Счёт? Сейчас вам его принесу."
          ]
        ],
        "drills": [
          [
            "¿El café? ___ quiero con leche.",
            "Lo",
            [
              "Lo",
              "La",
              "Le"
            ]
          ],
          [
            "Las entradas ___ compré por internet.",
            "las",
            [
              "los",
              "las",
              "les"
            ]
          ],
          [
            "___ doy las gracias al camarero.",
            "Le",
            [
              "Lo",
              "Le",
              "La"
            ]
          ],
          [
            "¿La llave? ___ la doy ahora mismo.",
            "Se",
            [
              "Se",
              "Le",
              "Lo"
            ]
          ]
        ]
      },
      {
        "id": "futuro",
        "icon": "🔮",
        "level": "B1",
        "title": {
          "he": "עתיד פשוט — hablaré, iré, tendré",
          "en": "Simple future — hablaré, iré, tendré",
          "ar": "المستقبل البسيط — hablaré, iré, tendré",
          "ru": "Простое будущее — hablaré, iré, tendré"
        },
        "explain": {
          "he": [
            "העתיד נבנה משם הפועל השלם + סיומת: hablaré, comerás, vivirá.",
            "הסיומות זהות לכל הפעלים: ‎-é, -ás, -á, -emos, -án.",
            "חריגים נפוצים: tener → tendré, hacer → haré, poder → podré, salir → saldré, decir → diré."
          ],
          "en": [
            "The future is built on the whole infinitive + an ending: hablaré, comerás, vivirá.",
            "The endings are the same for all verbs: -é, -ás, -á, -emos, -án.",
            "Common irregulars: tener → tendré, hacer → haré, poder → podré, salir → saldré, decir → diré."
          ],
          "ar": [
            "يُبنى المستقبل من المصدر كاملًا + نهاية: hablaré, comerás, vivirá.",
            "النهايات واحدة لكل الأفعال: ‎-é, -ás, -á, -emos, -án.",
            "أفعال شاذة شائعة: tener ← tendré، hacer ← haré، poder ← podré، salir ← saldré، decir ← diré."
          ],
          "ru": [
            "Будущее образуется от полного инфинитива + окончание: hablaré, comerás, vivirá.",
            "Окончания одинаковы для всех глаголов: -é, -ás, -á, -emos, -án.",
            "Частые исключения: tener → tendré, hacer → haré, poder → podré, salir → saldré, decir → diré."
          ]
        },
        "table": [
          [
            "yo",
            "hablaré · tendré"
          ],
          [
            "tú",
            "hablarás · tendrás"
          ],
          [
            "él / ella / usted",
            "hablará · tendrá"
          ],
          [
            "nosotros",
            "hablaremos · tendremos"
          ],
          [
            "ellos / ustedes",
            "hablarán · tendrán"
          ]
        ],
        "ex": [
          [
            "Mañana visitaremos el museo del Prado.",
            "מחר נבקר במוזיאון הפראדו.",
            "Tomorrow we will visit the Prado Museum.",
            "غدًا سنزور متحف البرادو.",
            "Завтра мы посетим музей Прадо."
          ],
          [
            "El tren saldrá a las ocho.",
            "הרכבת תצא בשמונה.",
            "The train will leave at eight.",
            "سيغادر القطار في الثامنة.",
            "Поезд отправится в восемь."
          ],
          [
            "Te llamaré cuando llegue al hotel.",
            "אתקשר אליך כשאגיע למלון.",
            "I'll call you when I get to the hotel.",
            "سأتصل بك عندما أصل إلى الفندق.",
            "Я позвоню тебе, когда доберусь до отеля."
          ],
          [
            "¿Tendrás tiempo para un café el viernes?",
            "יהיה לך זמן לקפה ביום שישי?",
            "Will you have time for a coffee on Friday?",
            "هل سيكون لديك وقت لفنجان قهوة يوم الجمعة؟",
            "У тебя будет время на кофе в пятницу?"
          ]
        ],
        "drills": [
          [
            "El año que viene ___ en Barcelona.",
            "viviré",
            [
              "viviré",
              "vivía",
              "vivo"
            ]
          ],
          [
            "Mañana ___ calor en Sevilla.",
            "hará",
            [
              "hacerá",
              "hará",
              "hace"
            ]
          ],
          [
            "¿___ venir a la cena el sábado?",
            "Podrás",
            [
              "Poderás",
              "Podrás",
              "Pudiste"
            ]
          ],
          [
            "Nosotros ___ la reunión a las diez.",
            "empezaremos",
            [
              "empezaremos",
              "empezarán",
              "empezamos"
            ]
          ]
        ]
      },
      {
        "id": "subjuntivo",
        "icon": "🌟",
        "level": "B1",
        "title": {
          "he": "הסוביונקטיבו בהווה — quiero que / espero que",
          "en": "Present subjunctive — quiero que / espero que",
          "ar": "صيغة subjuntivo في المضارع — quiero que / espero que",
          "ru": "Presente de subjuntivo — quiero que / espero que"
        },
        "explain": {
          "he": [
            "אחרי רצון, תקווה או בקשה כלפי אדם אחר + que בא subjuntivo: Quiero que vengas.",
            "יוצרים מצורת yo בהווה ומחליפים תנועה: ‎-ar → e (hable), -er / -ir → a (coma, viva).",
            "חריגים נפוצים: ser → sea, ir → vaya, estar → esté, tener → tenga, hacer → haga."
          ],
          "en": [
            "After wanting, hoping or asking something of another person + que, use the subjunctive: Quiero que vengas.",
            "Take the present yo form and swap the vowel: -ar → e (hable), -er / -ir → a (coma, viva).",
            "Common irregulars: ser → sea, ir → vaya, estar → esté, tener → tenga, hacer → haga."
          ],
          "ar": [
            "بعد التعبير عن الرغبة أو الأمل أو الطلب من شخص آخر + que نستعمل subjuntivo: Quiero que vengas.",
            "نأخذ صيغة yo في المضارع ونبدّل الحرف الصوتي: ‎-ar ← e (hable)، ‎-er / -ir ← a (coma, viva).",
            "أفعال شاذة شائعة: ser ← sea، ir ← vaya، estar ← esté، tener ← tenga، hacer ← haga."
          ],
          "ru": [
            "После желания, надежды или просьбы, обращённой к другому человеку, + que нужен subjuntivo: Quiero que vengas.",
            "Берём форму yo настоящего времени и меняем гласную: -ar → e (hable), -er / -ir → a (coma, viva).",
            "Частые исключения: ser → sea, ir → vaya, estar → esté, tener → tenga, hacer → haga."
          ]
        },
        "table": [
          [
            "hablar",
            "hable · hables · hable · hablemos · hablen"
          ],
          [
            "comer",
            "coma · comas · coma · comamos · coman"
          ],
          [
            "tener (tengo)",
            "tenga · tengas · tenga · tengamos · tengan"
          ],
          [
            "ir / ser",
            "vaya · sea"
          ],
          [
            "quiero que · espero que · ojalá",
            "+ subjuntivo"
          ]
        ],
        "ex": [
          [
            "Espero que tengas un buen viaje.",
            "אני מקווה שתהיה לך נסיעה טובה.",
            "I hope you have a good trip.",
            "أتمنى أن تكون رحلتك جميلة.",
            "Надеюсь, у тебя будет хорошая поездка."
          ],
          [
            "Quiero que vengas a la fiesta.",
            "אני רוצה שתבוא למסיבה.",
            "I want you to come to the party.",
            "أريدك أن تأتي إلى الحفلة.",
            "Я хочу, чтобы ты пришёл на вечеринку."
          ],
          [
            "El médico quiere que descanse unos días.",
            "הרופא רוצה שאנוח כמה ימים.",
            "The doctor wants me to rest for a few days.",
            "يريد الطبيب أن أرتاح بضعة أيام.",
            "Врач хочет, чтобы я отдохнул несколько дней."
          ],
          [
            "Ojalá haga buen tiempo mañana.",
            "הלוואי שיהיה מזג אוויר טוב מחר.",
            "I hope the weather is nice tomorrow.",
            "أتمنى أن يكون الطقس جميلًا غدًا.",
            "Хоть бы завтра была хорошая погода."
          ]
        ],
        "drills": [
          [
            "Espero que ___ bien en el hotel.",
            "estés",
            [
              "estás",
              "estés",
              "estar"
            ]
          ],
          [
            "Quiero que me ___ la verdad.",
            "digas",
            [
              "dices",
              "digas",
              "decir"
            ]
          ],
          [
            "Mi jefe quiere que ___ temprano mañana.",
            "llegue",
            [
              "llego",
              "llegue",
              "llegaré"
            ]
          ],
          [
            "Ojalá ___ un taxi libre.",
            "haya",
            [
              "hay",
              "haya",
              "había"
            ]
          ]
        ]
      }
    ],
    "fr": [
      {
        "id": "imparfait-passe-compose",
        "icon": "🎞️",
        "level": "B1",
        "title": {
          "he": "imparfait מול passé composé — רקע מול אירוע",
          "en": "Imparfait vs passé composé — background vs event",
          "ar": "imparfait مقابل passé composé — الخلفية مقابل الحدث",
          "ru": "Imparfait и passé composé — фон и событие"
        },
        "explain": {
          "he": [
            "imparfait (‎-ais, -ait, -ions, -iez, -aient) מתאר רקע, הרגלים ומצבים בעבר: Il faisait beau.",
            "passé composé מספר על אירוע אחד שהסתיים — מה קרה: J'ai perdu mes clés.",
            "ביחד: Je dormais quand le téléphone a sonné — ישנתי כשהטלפון צלצל."
          ],
          "en": [
            "The imparfait (-ais, -ait, -ions, -iez, -aient) describes background, habits and states in the past: Il faisait beau.",
            "The passé composé tells a single, finished event — what happened: J'ai perdu mes clés.",
            "Together: Je dormais quand le téléphone a sonné — I was sleeping when the phone rang."
          ],
          "ar": [
            "يصف imparfait (‎-ais, -ait, -ions, -iez, -aient) الخلفية والعادات والحالات في الماضي: Il faisait beau.",
            "أما passé composé فيروي حدثًا واحدًا انتهى، أي ما الذي حدث: J'ai perdu mes clés.",
            "معًا: Je dormais quand le téléphone a sonné — كنت نائمًا عندما رنّ الهاتف."
          ],
          "ru": [
            "Imparfait (-ais, -ait, -ions, -iez, -aient) описывает фон, привычки и состояния в прошлом: Il faisait beau.",
            "Passé composé рассказывает об одном завершённом событии — что произошло: J'ai perdu mes clés.",
            "Вместе: Je dormais quand le téléphone a sonné — я спал, когда зазвонил телефон."
          ]
        },
        "table": [
          [
            "décor / état",
            "il faisait beau, j'étais fatigué"
          ],
          [
            "habitude",
            "je prenais le bus tous les jours"
          ],
          [
            "action terminée",
            "j'ai pris un taxi"
          ],
          [
            "action en cours + interruption",
            "je lisais quand il est arrivé"
          ],
          [
            "souvent, toujours, avant",
            "→ imparfait"
          ],
          [
            "hier, soudain, une fois",
            "→ passé composé"
          ]
        ],
        "ex": [
          [
            "Il pleuvait quand nous sommes arrivés à l'hôtel.",
            "ירד גשם כשהגענו למלון.",
            "It was raining when we arrived at the hotel.",
            "كانت السماء تمطر عندما وصلنا إلى الفندق.",
            "Шёл дождь, когда мы приехали в гостиницу."
          ],
          [
            "Quand j'étais étudiant, je prenais le bus tous les jours.",
            "כשהייתי סטודנט, נסעתי באוטובוס כל יום.",
            "When I was a student, I took the bus every day.",
            "عندما كنت طالبًا، كنت أركب الحافلة كل يوم.",
            "Когда я был студентом, я каждый день ездил на автобусе."
          ],
          [
            "Je lisais le menu quand le serveur est venu.",
            "קראתי את התפריט כשהמלצר הגיע.",
            "I was reading the menu when the waiter came.",
            "كنت أقرأ قائمة الطعام عندما جاء النادل.",
            "Я читал меню, когда подошёл официант."
          ],
          [
            "Hier, j'ai perdu mes clés au bureau.",
            "אתמול איבדתי את המפתחות שלי במשרד.",
            "Yesterday I lost my keys at the office.",
            "أمس أضعتُ مفاتيحي في المكتب.",
            "Вчера я потерял ключи в офисе."
          ]
        ],
        "drills": [
          [
            "Quand j'étais petit, j'___ souvent à la plage.",
            "allais",
            [
              "allais",
              "irai",
              "irais"
            ]
          ],
          [
            "Il ___ beau quand nous sommes sortis du musée.",
            "faisait",
            [
              "faisait",
              "a fait",
              "fera"
            ]
          ],
          [
            "Je dormais quand le téléphone ___.",
            "a sonné",
            [
              "a sonné",
              "sonnait",
              "sonnera"
            ]
          ],
          [
            "Hier, Marie ___ son passeport à l'aéroport.",
            "a perdu",
            [
              "a perdu",
              "perdait",
              "perdra"
            ]
          ]
        ]
      },
      {
        "id": "futur-simple",
        "icon": "🔮",
        "level": "B1",
        "title": {
          "he": "futur simple — עתיד פשוט",
          "en": "Futur simple — the simple future",
          "ar": "futur simple — المستقبل البسيط",
          "ru": "Futur simple — простое будущее время"
        },
        "explain": {
          "he": [
            "futur simple: שם הפועל + ‎-ai, -as, -a, -ons, -ez, -ont: je parlerai, nous finirons.",
            "לכמה פעלים יש בסיס מיוחד: être ← ser-, avoir ← aur-, aller ← ir-, faire ← fer-, pouvoir ← pourr-.",
            "משתמשים בו לתוכניות ולהבטחות, הרבה עם demain או quand: Je t'appellerai demain."
          ],
          "en": [
            "Futur simple: infinitive + -ai, -as, -a, -ons, -ez, -ont: je parlerai, nous finirons.",
            "Some verbs have a special stem: être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-.",
            "Use it for plans and promises, often with demain or quand: Je t'appellerai demain."
          ],
          "ar": [
            "futur simple: المصدر + ‎-ai, -as, -a, -ons, -ez, -ont: je parlerai, nous finirons.",
            "لبعض الأفعال جذر خاص: être ← ser-، avoir ← aur-، aller ← ir-، faire ← fer-، pouvoir ← pourr-.",
            "نستخدمه للخطط والوعود، وغالبًا مع demain أو quand: Je t'appellerai demain."
          ],
          "ru": [
            "Futur simple: инфинитив + -ai, -as, -a, -ons, -ez, -ont: je parlerai, nous finirons.",
            "У некоторых глаголов особая основа: être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-.",
            "Его используют для планов и обещаний, часто с demain или quand: Je t'appellerai demain."
          ]
        },
        "table": [
          [
            "je",
            "parlerai · serai"
          ],
          [
            "tu",
            "parleras · auras"
          ],
          [
            "il / elle",
            "parlera · ira"
          ],
          [
            "nous",
            "parlerons · ferons"
          ],
          [
            "vous",
            "parlerez · viendrez"
          ],
          [
            "ils / elles",
            "parleront · pourront"
          ]
        ],
        "ex": [
          [
            "Je vous appellerai demain matin.",
            "אתקשר אליכם מחר בבוקר.",
            "I'll call you tomorrow morning.",
            "سأتصل بكم صباح الغد.",
            "Я позвоню вам завтра утром."
          ],
          [
            "Le train partira à 8 heures.",
            "הרכבת תצא בשמונה.",
            "The train will leave at 8 o'clock.",
            "سينطلق القطار في الساعة الثامنة.",
            "Поезд отправится в 8 часов."
          ],
          [
            "L'été prochain, nous irons en Provence.",
            "בקיץ הבא ניסע לפרובאנס.",
            "Next summer we'll go to Provence.",
            "في الصيف القادم سنذهب إلى بروفانس.",
            "Следующим летом мы поедем в Прованс."
          ],
          [
            "Quand tu seras à Paris, tu verras la tour Eiffel.",
            "כשתהיה בפריז, תראה את מגדל אייפל.",
            "When you're in Paris, you'll see the Eiffel Tower.",
            "عندما تكون في باريس، سترى برج إيفل.",
            "Когда ты будешь в Париже, ты увидишь Эйфелеву башню."
          ]
        ],
        "drills": [
          [
            "Demain, je ___ le musée du Louvre.",
            "visiterai",
            [
              "visiterai",
              "visiterais",
              "visitais"
            ]
          ],
          [
            "Nous ___ à l'hôtel vers 20 heures.",
            "arriverons",
            [
              "arriverons",
              "arriveront",
              "arriverez"
            ]
          ],
          [
            "L'année prochaine, elle ___ médecin.",
            "sera",
            [
              "sera",
              "aura",
              "ira"
            ]
          ],
          [
            "Tu ___ les courses samedi ?",
            "feras",
            [
              "feras",
              "fera",
              "ferez"
            ]
          ]
        ]
      },
      {
        "id": "pronoms-cod-coi",
        "icon": "🔁",
        "level": "B1",
        "title": {
          "he": "כינויי מושא — le / lui / y / en",
          "en": "Object pronouns — le / lui / y / en",
          "ar": "ضمائر المفعول — le / lui / y / en",
          "ru": "Местоимения-дополнения — le / lui / y / en"
        },
        "explain": {
          "he": [
            "מושא ישיר: le, la, les מחליפים דבר או אדם: Je prends le bus ← Je le prends.",
            "מושא עקיף עם à: lui, leur מחליפים אנשים: Je parle à Paul ← Je lui parle.",
            "y מחליף à + מקום, ו-en מחליף de + דבר או כמות. הכינוי בא לפני הפועל: J'y vais. J'en veux deux."
          ],
          "en": [
            "Direct object: le, la, les replace a thing or a person: Je prends le bus → Je le prends.",
            "Indirect object with à: lui, leur replace people: Je parle à Paul → Je lui parle.",
            "y replaces à + place; en replaces de + thing or a quantity. The pronoun goes before the verb: J'y vais. J'en veux deux."
          ],
          "ar": [
            "المفعول المباشر: le, la, les تحل محل شيء أو شخص: Je prends le bus ← Je le prends.",
            "المفعول غير المباشر مع à: lui, leur تحل محل الأشخاص: Je parle à Paul ← Je lui parle.",
            "y تحل محل à + مكان، وen تحل محل de + شيء أو كمية. يأتي الضمير قبل الفعل: J'y vais. J'en veux deux."
          ],
          "ru": [
            "Прямое дополнение: le, la, les заменяют предмет или человека: Je prends le bus → Je le prends.",
            "Косвенное дополнение с à: lui, leur заменяют людей: Je parle à Paul → Je lui parle.",
            "y заменяет à + место, en заменяет de + предмет или количество. Местоимение стоит перед глаголом: J'y vais. J'en veux deux."
          ]
        },
        "table": [
          [
            "le / la / les",
            "Je la connais."
          ],
          [
            "lui / leur",
            "Je lui téléphone ce soir."
          ],
          [
            "y (à + lieu)",
            "On y va !"
          ],
          [
            "en (de + chose)",
            "J'en prends deux."
          ],
          [
            "négation",
            "Je ne le vois pas."
          ]
        ],
        "ex": [
          [
            "Le passeport ? Je l'ai dans mon sac.",
            "הדרכון? הוא אצלי בתיק.",
            "The passport? I have it in my bag.",
            "جواز السفر؟ إنه معي في حقيبتي.",
            "Паспорт? Он у меня в сумке."
          ],
          [
            "J'ai écrit à mes collègues et je leur ai envoyé le dossier.",
            "כתבתי לעמיתים שלי ושלחתי להם את התיק.",
            "I wrote to my colleagues and sent them the file.",
            "كتبتُ إلى زملائي وأرسلتُ لهم الملف.",
            "Я написал коллегам и отправил им документы."
          ],
          [
            "La pharmacie ? J'y vais tout de suite.",
            "בית המרקחת? אני הולך לשם מיד.",
            "The pharmacy? I'm going there right away.",
            "الصيدلية؟ سأذهب إليها حالًا.",
            "Аптека? Я сейчас же туда иду."
          ],
          [
            "Des croissants ? Oui, j'en voudrais trois.",
            "קרואסונים? כן, הייתי רוצה שלושה.",
            "Croissants? Yes, I'd like three.",
            "كرواسون؟ نعم، أريد ثلاث قطع.",
            "Круассаны? Да, мне три, пожалуйста."
          ]
        ],
        "drills": [
          [
            "Tu vois Marie ce soir ? Oui, je ___ vois à huit heures.",
            "la",
            [
              "la",
              "lui",
              "en"
            ]
          ],
          [
            "Tu as parlé au directeur ? Oui, je ___ ai parlé hier.",
            "lui",
            [
              "lui",
              "le",
              "leur"
            ]
          ],
          [
            "Tu vas à la gare ? Oui, j'___ vais en taxi.",
            "y",
            [
              "y",
              "en",
              "la"
            ]
          ],
          [
            "Vous avez des billets ? Oui, nous ___ avons deux.",
            "en",
            [
              "en",
              "les",
              "y"
            ]
          ]
        ]
      },
      {
        "id": "conditionnel",
        "icon": "🌈",
        "level": "B1",
        "title": {
          "he": "conditionnel — \"הייתי רוצה\" ו-si + imparfait",
          "en": "Conditionnel — \"I would\" and si + imparfait",
          "ar": "conditionnel — «كنتُ سأ…» و si + imparfait",
          "ru": "Conditionnel — «я бы…» и si + imparfait"
        },
        "explain": {
          "he": [
            "conditionnel = בסיס העתיד + סיומות ה-imparfait: je voudrais, tu pourrais, il serait, nous aurions.",
            "הוא הופך בקשה למנומסת: Je voudrais un café. Pourriez-vous m'aider ?",
            "למצבים דמיוניים: si + imparfait, ואחר כך conditionnel: Si j'avais le temps, je voyagerais."
          ],
          "en": [
            "Conditionnel = future stem + imparfait endings: je voudrais, tu pourrais, il serait, nous aurions.",
            "It makes requests polite: Je voudrais un café. Pourriez-vous m'aider ?",
            "For imagined situations: si + imparfait, then the conditionnel: Si j'avais le temps, je voyagerais."
          ],
          "ar": [
            "conditionnel = جذر المستقبل + نهايات imparfait: je voudrais, tu pourrais, il serait, nous aurions.",
            "يجعل الطلب مهذبًا: Je voudrais un café. Pourriez-vous m'aider ?",
            "للمواقف المتخيَّلة: si + imparfait ثم conditionnel: Si j'avais le temps, je voyagerais."
          ],
          "ru": [
            "Conditionnel = основа будущего времени + окончания imparfait: je voudrais, tu pourrais, il serait, nous aurions.",
            "Он делает просьбу вежливой: Je voudrais un café. Pourriez-vous m'aider ?",
            "Для воображаемых ситуаций: si + imparfait, затем conditionnel: Si j'avais le temps, je voyagerais."
          ]
        },
        "table": [
          [
            "vouloir",
            "je voudrais"
          ],
          [
            "pouvoir",
            "vous pourriez"
          ],
          [
            "être",
            "ce serait"
          ],
          [
            "avoir",
            "nous aurions"
          ],
          [
            "aimer",
            "j'aimerais"
          ],
          [
            "si + imparfait",
            "Si j'étais riche, je voyagerais."
          ]
        ],
        "ex": [
          [
            "Je voudrais une chambre pour deux nuits.",
            "הייתי רוצה חדר לשני לילות.",
            "I'd like a room for two nights.",
            "أودّ غرفة لليلتين.",
            "Я хотел бы номер на две ночи."
          ],
          [
            "Pourriez-vous m'appeler un taxi, s'il vous plaît ?",
            "תוכל להזמין לי מונית, בבקשה?",
            "Could you call me a taxi, please?",
            "هل يمكنك أن تطلب لي سيارة أجرة من فضلك؟",
            "Не могли бы вы вызвать мне такси, пожалуйста?"
          ],
          [
            "Si j'avais plus de vacances, je voyagerais en Asie.",
            "אילו היו לי יותר ימי חופש, הייתי נוסע לאסיה.",
            "If I had more vacation, I'd travel to Asia.",
            "لو كانت لديّ إجازة أطول، لسافرتُ إلى آسيا.",
            "Если бы у меня было больше отпуска, я бы поехал в Азию."
          ],
          [
            "À ta place, j'irais chez le médecin.",
            "במקומך, הייתי הולך לרופא.",
            "If I were you, I'd go to the doctor.",
            "لو كنتُ مكانك، لذهبتُ إلى الطبيب.",
            "На твоём месте я бы пошёл к врачу."
          ]
        ],
        "drills": [
          [
            "Je ___ un thé, s'il vous plaît.",
            "voudrais",
            [
              "voudrais",
              "voudrai",
              "voudront"
            ]
          ],
          [
            "Si j'avais une voiture, je ___ à la campagne.",
            "partirais",
            [
              "partirais",
              "partirai",
              "partais"
            ]
          ],
          [
            "Si nous ___ plus d'argent, nous prendrions l'avion.",
            "avions",
            [
              "avions",
              "aurions",
              "aurons"
            ]
          ],
          [
            "___-vous fermer la fenêtre, s'il vous plaît ?",
            "Pourriez",
            [
              "Pourriez",
              "Pourrions",
              "Pourraient"
            ]
          ]
        ]
      }
    ],
    "he": [
      {
        "id": "future-tense",
        "icon": "⏩",
        "level": "B1",
        "title": {
          "he": "זמן עתיד: אלך, ילך, נלך",
          "en": "The future tense: אלך, ילך, נלך",
          "ar": "زمن المستقبل: אלך، ילך، נלך",
          "ru": "Будущее время: אלך, ילך, נלך"
        },
        "explain": {
          "he": [
            "בעתיד מוסיפים אות בתחילת הפועל: א (אני), ת (אתה / היא), י (הוא), נ (אנחנו): אני אלך, הוא ילך.",
            "לנקבה (את) מוסיפים י בסוף: את תלכי. ברבים מוסיפים ו: אתם תלכו, הם ילכו.",
            "שלילה: לא + עתיד: אני לא אשכח. בדיבור העתיד משמש גם לבקשה: תסגור את החלון, בבקשה."
          ],
          "en": [
            "The future adds a prefix to the verb: א (I), ת (you / she), י (he), נ (we): אני אלך = I will go, הוא ילך = he will go.",
            "For \"you\" (f.) add י at the end: את תלכי. In the plural add ו: אתם תלכו, הם ילכו.",
            "Negative: לא + future: אני לא אשכח = I won't forget. In speech the future also makes requests: תסגור את החלון, בבקשה."
          ],
          "ar": [
            "في المستقبل نضيف حرفًا في أول الفعل: א (أنا)، ת (أنتَ / هي)، י (هو)، נ (نحن) — تمامًا كـ«أ، ت، ي، ن» في العربية: אני אלך = سأذهب.",
            "للمخاطبة (את) نضيف י في الآخر: את תלכי. وفي الجمع نضيف ו: אתם תלכו، הם ילכו.",
            "النفي: לא + المستقبل: אני לא אשכח = لن أنسى. وفي الكلام يُستعمل المستقبل للطلب أيضًا: תסגור את החלון, בבקשה."
          ],
          "ru": [
            "В будущем времени к глаголу добавляется приставка: א (я), ת (ты / она), י (он), נ (мы): אני אלך = я пойду, הוא ילך = он пойдёт.",
            "Для «ты» (ж.) в конце добавляется י: את תלכי. Во множественном числе — ו: אתם תלכו, הם ילכו.",
            "Отрицание: לא + будущее: אני לא אשכח = я не забуду. В разговоре будущее время служит и просьбой: תסגור את החלון, בבקשה."
          ]
        },
        "table": [
          [
            "אני",
            "אלך"
          ],
          [
            "אתה · היא",
            "תלך"
          ],
          [
            "את",
            "תלכי"
          ],
          [
            "הוא",
            "ילך"
          ],
          [
            "אנחנו",
            "נלך"
          ],
          [
            "אתם · הם",
            "תלכו · ילכו"
          ]
        ],
        "ex": [
          [
            "מחר ניסע לאילת.",
            "מחר ניסע לאילת.",
            "Tomorrow we'll travel to Eilat.",
            "غدًا سنسافر إلى إيلات.",
            "Завтра мы поедем в Эйлат."
          ],
          [
            "אני אחזור בעוד שעה.",
            "אני אחזור בעוד שעה.",
            "I'll be back in an hour.",
            "سأعود بعد ساعة.",
            "Я вернусь через час."
          ],
          [
            "מתי תגיעו למלון?",
            "מתי תגיעו למלון?",
            "When will you get to the hotel?",
            "متى ستصلون إلى الفندق؟",
            "Когда вы доберётесь до гостиницы?"
          ],
          [
            "הוא ישלם בכרטיס אשראי.",
            "הוא ישלם בכרטיס אשראי.",
            "He will pay by credit card.",
            "سيدفع ببطاقة الائتمان.",
            "Он заплатит кредитной картой."
          ]
        ],
        "drills": [
          [
            "מחר אני ___ לים.",
            "אלך",
            [
              "אלך",
              "ילך",
              "נלך"
            ],
            {
              "en": "I will go",
              "ar": "سأذهب",
              "ru": "я пойду"
            }
          ],
          [
            "אנחנו ___ לאילת בקיץ.",
            "ניסע",
            [
              "ניסע",
              "אסע",
              "ייסעו"
            ],
            {
              "en": "we will travel",
              "ar": "سنسافر",
              "ru": "мы поедем"
            }
          ],
          [
            "מתי את ___ הביתה?",
            "תחזרי",
            [
              "תחזרי",
              "תחזור",
              "יחזרו"
            ],
            {
              "en": "you (f.) will come back",
              "ar": "ستعودين",
              "ru": "ты (ж.) вернёшься"
            }
          ],
          [
            "הם ___ בשמונה בערב.",
            "יגיעו",
            [
              "יגיעו",
              "נגיע",
              "יגיע"
            ],
            {
              "en": "they will arrive",
              "ar": "سيصلون",
              "ru": "они приедут"
            }
          ]
        ]
      },
      {
        "id": "binyanim",
        "icon": "🏗️",
        "level": "B1",
        "title": {
          "he": "בניינים: פעל, פיעל, התפעל",
          "en": "Verb patterns: pa'al, pi'el, hitpa'el",
          "ar": "أوزان الأفعال: פעל، פיעל، התפעל",
          "ru": "Биньяны: пааль, пиэль, итпаэль"
        },
        "explain": {
          "he": [
            "רוב הפעלים בנויים משורש של שלוש אותיות (כ-ת-ב, ד-ב-ר, ל-ב-ש) לפי כמה תבניות — בניינים.",
            "פעל: כותב, גר, אוכל. בפיעל ההווה מתחיל ב־מ: מדבר, מטייל, מחפש.",
            "בהתפעל ההווה מתחיל ב־מת, ולעיתים הפעולה היא על עצמך: מתלבש, מתרחץ, מתקשר."
          ],
          "en": [
            "Most verbs are built from a three-letter root (כ-ת-ב, ד-ב-ר, ל-ב-ש) poured into a few patterns called binyanim.",
            "Pa'al: כותב (writes), גר (lives), אוכל (eats). Pi'el starts with מ in the present: מדבר (speaks), מטייל (travels), מחפש (looks for).",
            "Hitpa'el starts with מת and is often done to yourself: מתלבש (gets dressed), מתרחץ (washes), מתקשר (calls)."
          ],
          "ar": [
            "معظم الأفعال مبنية من جذر ثلاثي (כ-ת-ב، ד-ב-ר، ל-ב-ש) على أوزان قليلة تُسمّى «بنيانيم» — تشبه أوزان الفعل في العربية.",
            "פעל: כותב (يكتب)، גר (يسكن)، אוכל (يأكل). وفي פיעל يبدأ الحاضر بـ מ: מדבר (يتكلم)، מטייל (يتجوّل)، מחפש (يبحث).",
            "وفي התפעל يبدأ الحاضر بـ מת، وكثيرًا ما يعود الفعل على الفاعل كوزن «تفعّل»: מתלבש (يرتدي ملابسه)، מתקשר (يتصل)."
          ],
          "ru": [
            "Большинство глаголов строится из корня из трёх букв (כ-ת-ב, ד-ב-ר, ל-ב-ש) по нескольким моделям — биньянам.",
            "Пааль: כותב (пишет), גר (живёт), אוכל (ест). В пиэль настоящее время начинается с מ: מדבר (говорит), מטייל (путешествует), מחפש (ищет).",
            "В итпаэль настоящее время начинается с מת, часто это действие над собой: מתלבש (одевается), מתרחץ (моется), מתקשר (звонит)."
          ]
        },
        "table": [
          [
            "פעל",
            "כותב · כותבת · כותבים"
          ],
          [
            "פיעל",
            "מדבר · מדברת · מדברים"
          ],
          [
            "התפעל",
            "מתלבש · מתלבשת · מתלבשים"
          ]
        ],
        "ex": [
          [
            "אני גר ליד הים.",
            "אני גר ליד הים.",
            "I live near the sea.",
            "أسكن قرب البحر.",
            "Я живу у моря."
          ],
          [
            "היא מדברת עברית ורוסית.",
            "היא מדברת עברית ורוסית.",
            "She speaks Hebrew and Russian.",
            "هي تتكلم العبرية والروسية.",
            "Она говорит на иврите и по-русски."
          ],
          [
            "אנחנו מטיילים בגליל.",
            "אנחנו מטיילים בגליל.",
            "We're touring the Galilee.",
            "نحن نتجوّل في الجليل.",
            "Мы путешествуем по Галилее."
          ],
          [
            "הוא מתקשר למלון.",
            "הוא מתקשר למלון.",
            "He is calling the hotel.",
            "هو يتصل بالفندق.",
            "Он звонит в гостиницу."
          ]
        ],
        "drills": [
          [
            "היא ___ עברית טוב מאוד.",
            "מדברת",
            [
              "מדברת",
              "מדבר",
              "מדברים"
            ],
            {
              "en": "speaks (f.)",
              "ar": "تتكلم",
              "ru": "говорит (ж.)"
            }
          ],
          [
            "אנחנו ___ בצפון כל קיץ.",
            "מטיילים",
            [
              "מטיילים",
              "מטייל",
              "מטיילת"
            ],
            {
              "en": "travel, tour",
              "ar": "نتجوّل",
              "ru": "путешествуем"
            }
          ],
          [
            "הוא ___ לאמא שלו כל ערב.",
            "מתקשר",
            [
              "מתקשר",
              "מקשר",
              "מתקשרת"
            ],
            {
              "en": "calls",
              "ar": "يتصل",
              "ru": "звонит"
            }
          ],
          [
            "אני ___ דירה בתל אביב.",
            "מחפש",
            [
              "מחפש",
              "מתחפש",
              "מחפשים"
            ],
            {
              "en": "am looking for (m.)",
              "ar": "أبحث عن",
              "ru": "ищу (м.)"
            }
          ]
        ]
      },
      {
        "id": "comparison",
        "icon": "⚖️",
        "level": "B1",
        "title": {
          "he": "השוואה: יותר… מ…, הכי",
          "en": "Comparing: יותר… מ…, הכי",
          "ar": "المقارنة: יותר… מ…، הכי",
          "ru": "Сравнение: יותר… מ…, הכי"
        },
        "explain": {
          "he": [
            "יותר + שם תואר + מ־: הרכבת יותר מהירה מהאוטובוס.",
            "פחות … מ־ — להפך; כמו — שוויון: היא גבוהה כמו אחיה.",
            "הכי + שם תואר: המסעדה הכי טובה בעיר. שם התואר עדיין מתאים במין ובמספר."
          ],
          "en": [
            "More: יותר + adjective + מ־ (than): הרכבת יותר מהירה מהאוטובוס = the train is faster than the bus.",
            "Less: פחות … מ־. Equal: כמו: היא גבוהה כמו אחיה = she is as tall as her brother.",
            "The most: הכי + adjective: המסעדה הכי טובה בעיר. The adjective still agrees in gender and number."
          ],
          "ar": [
            "أكثر: יותר + الصفة + מ־ (من): הרכבת יותר מהירה מהאוטובוס = القطار أسرع من الحافلة.",
            "أقل: פחות … מ־. والتساوي بـ כמו (مثل): היא גבוהה כמו אחיה = هي طويلة مثل أخيها.",
            "التفضيل المطلق: הכי + الصفة: המסעדה הכי טובה בעיר = أفضل مطعم في المدينة. وتبقى الصفة مطابقة في الجنس والعدد."
          ],
          "ru": [
            "Больше: יותר + прилагательное + מ־ (чем): הרכבת יותר מהירה מהאוטובוס = поезд быстрее автобуса.",
            "Меньше: פחות … מ־. Равенство — כמו (как): היא גבוהה כמו אחיה = она такая же высокая, как брат.",
            "Самый: הכי + прилагательное: המסעדה הכי טובה בעיר. Прилагательное по-прежнему согласуется в роде и числе."
          ]
        },
        "table": [
          [
            "יותר … מ…",
            "יותר זול מ…"
          ],
          [
            "פחות … מ…",
            "פחות יקר מ…"
          ],
          [
            "כמו",
            "גדול כמו…"
          ],
          [
            "הכי",
            "הכי טוב · הכי טובה"
          ]
        ],
        "ex": [
          [
            "הרכבת יותר מהירה מהאוטובוס.",
            "הרכבת יותר מהירה מהאוטובוס.",
            "The train is faster than the bus.",
            "القطار أسرع من الحافلة.",
            "Поезд быстрее автобуса."
          ],
          [
            "החדר הזה פחות יקר.",
            "החדר הזה פחות יקר.",
            "This room is less expensive.",
            "هذه الغرفة أقل تكلفة.",
            "Этот номер дешевле."
          ],
          [
            "זה הקפה הכי טוב בעיר.",
            "זה הקפה הכי טוב בעיר.",
            "This is the best coffee in town.",
            "هذه أفضل قهوة في المدينة.",
            "Это лучший кофе в городе."
          ],
          [
            "בחורף ירושלים יותר קרה מתל אביב.",
            "בחורף ירושלים יותר קרה מתל אביב.",
            "In winter Jerusalem is colder than Tel Aviv.",
            "في الشتاء القدس أبرد من تل أبيب.",
            "Зимой в Иерусалиме холоднее, чем в Тель-Авиве."
          ]
        ],
        "drills": [
          [
            "המונית ___ יקרה מהאוטובוס.",
            "יותר",
            [
              "יותר",
              "הכי",
              "כמו"
            ],
            {
              "en": "more",
              "ar": "أكثر",
              "ru": "более"
            }
          ],
          [
            "זה המלון ___ טוב באילת.",
            "הכי",
            [
              "הכי",
              "יותר",
              "פחות"
            ],
            {
              "en": "the most",
              "ar": "الأكثر / الأفضل",
              "ru": "самый"
            }
          ],
          [
            "היא גבוהה ___ אמא שלה.",
            "כמו",
            [
              "כמו",
              "הכי",
              "מאוד"
            ],
            {
              "en": "as, like",
              "ar": "مثل",
              "ru": "как"
            }
          ],
          [
            "הדירה הזאת ___ יקרה מהקודמת, אז ניקח אותה.",
            "פחות",
            [
              "פחות",
              "יותר",
              "הכי"
            ],
            {
              "en": "less",
              "ar": "أقل",
              "ru": "менее"
            }
          ]
        ]
      },
      {
        "id": "if-that-when",
        "icon": "🔗",
        "level": "B1",
        "title": {
          "he": "משפטים מורכבים: אם, ש…, כש…",
          "en": "Linking clauses: אם, ש…, כש…",
          "ar": "الجمل المركبة: אם، ש…، כש…",
          "ru": "Сложные предложения: אם, ש…, כש…"
        },
        "explain": {
          "he": [
            "אם — לתנאי, ובדרך כלל אחריו עתיד: אם יהיה זמן, נלך למוזיאון.",
            "ש־ מתחברת למילה הבאה ומשמשת גם כ\"כי\" וגם כ\"אשר\": אני חושב שהמסעדה סגורה. האיש שגר פה.",
            "כש־ = כאשר, גם היא עם עתיד: כשנגיע למלון, נתקשר. עוד: בגלל ש־, לפני ש־, אחרי ש־."
          ],
          "en": [
            "אם = if, usually followed by the future: אם יהיה זמן, נלך למוזיאון = if there is time, we'll go to the museum.",
            "ש־ = that / who, written attached to the next word: אני חושב שהמסעדה סגורה. האיש שגר פה = the man who lives here.",
            "כש־ = when, also with the future: כשנגיע למלון, נתקשר = when we get to the hotel, we'll call. More: בגלל ש־ (because), לפני ש־ (before)."
          ],
          "ar": [
            "אם = إذا، وبعدها عادةً المستقبل: אם יהיה זמן, נלך למוזיאון = إذا كان هناك وقت فسنذهب إلى المتحف.",
            "ש־ = أنّ / الذي، وتُكتب ملتصقة بالكلمة التالية: אני חושב שהמסעדה סגורה = أظن أن المطعم مغلق. האיש שגר פה = الرجل الذي يسكن هنا.",
            "כש־ = عندما، ومعها المستقبل أيضًا: כשנגיע למלון, נתקשר = عندما نصل إلى الفندق سنتصل. وأيضًا: בגלל ש־ (لأنّ)، לפני ש־ (قبل أن)."
          ],
          "ru": [
            "אם = если, обычно с будущим временем: אם יהיה זמן, נלך למוזיאון = если будет время, пойдём в музей.",
            "ש־ = что / который, пишется слитно со следующим словом: אני חושב שהמסעדה סגורה. האיש שגר פה = человек, который здесь живёт.",
            "כש־ = когда, тоже с будущим: כשנגיע למלון, נתקשר = когда доедем до гостиницы, позвоним. Ещё: בגלל ש־ (потому что), לפני ש־ (перед тем как)."
          ]
        },
        "table": [
          [
            "אם",
            "אם יהיה חם, נלך לים"
          ],
          [
            "ש…",
            "אני חושב שזה רחוק"
          ],
          [
            "כש…",
            "כשנגיע, נתקשר"
          ],
          [
            "בגלל ש…",
            "בגלל שאין רכבת"
          ]
        ],
        "ex": [
          [
            "אם ירד גשם, נישאר במלון.",
            "אם ירד גשם, נישאר במלון.",
            "If it rains, we'll stay at the hotel.",
            "إذا أمطرت فسنبقى في الفندق.",
            "Если пойдёт дождь, останемся в гостинице."
          ],
          [
            "אני חושבת שהמוזיאון סגור היום.",
            "אני חושבת שהמוזיאון סגור היום.",
            "I think the museum is closed today.",
            "أظن أن المتحف مغلق اليوم.",
            "Думаю, музей сегодня закрыт."
          ],
          [
            "כשנגיע לירושלים, נאכל ארוחת ערב.",
            "כשנגיע לירושלים, נאכל ארוחת ערב.",
            "When we get to Jerusalem, we'll have dinner.",
            "عندما نصل إلى القدس سنتناول العشاء.",
            "Когда приедем в Иерусалим, поужинаем."
          ],
          [
            "זה הבחור שעובד בקבלה.",
            "זה הבחור שעובד בקבלה.",
            "That's the guy who works at reception.",
            "هذا هو الشاب الذي يعمل في الاستقبال.",
            "Это парень, который работает на ресепшене."
          ]
        ],
        "drills": [
          [
            "___ יהיה חם, נלך לים.",
            "אם",
            [
              "אם",
              "כי",
              "אבל"
            ],
            {
              "en": "if",
              "ar": "إذا",
              "ru": "если"
            }
          ],
          [
            "אני חושב ___ רחוק מכאן.",
            "שזה",
            [
              "שזה",
              "כשזה",
              "בזה"
            ],
            {
              "en": "that it",
              "ar": "أنّه",
              "ru": "что это"
            }
          ],
          [
            "___ למלון, נתקשר אלייך.",
            "כשנגיע",
            [
              "כשנגיע",
              "כשהגענו",
              "נגיע"
            ],
            {
              "en": "when we arrive",
              "ar": "عندما نصل",
              "ru": "когда приедем"
            }
          ],
          [
            "זה הבחור ___ בקבלה.",
            "שעובד",
            [
              "שעובד",
              "עובדת",
              "שעבדה"
            ],
            {
              "en": "who works",
              "ar": "الذي يعمل",
              "ru": "который работает"
            }
          ]
        ]
      }
    ],
    "it": [
      {
        "id": "imperfetto",
        "icon": "🎞️",
        "level": "B1",
        "title": {
          "he": "Imperfetto מול passato prossimo — facevo / ho fatto",
          "en": "Imperfetto vs passato prossimo — facevo / ho fatto",
          "ar": "Imperfetto مقابل passato prossimo — facevo / ho fatto",
          "ru": "Imperfetto и passato prossimo — facevo / ho fatto"
        },
        "explain": {
          "he": [
            "Imperfetto — לתיאור רקע, הרגלים ומצבים בעבר: Da bambino abitavo a Napoli.",
            "Passato prossimo — לפעולה שהתרחשה והסתיימה: Ieri ho visitato il Duomo.",
            "יחד: הרקע ב-imperfetto והאירוע ב-passato prossimo: Pioveva quando siamo arrivati."
          ],
          "en": [
            "Imperfetto — for background, habits and states in the past: Da bambino abitavo a Napoli.",
            "Passato prossimo — for a completed action or event: Ieri ho visitato il Duomo.",
            "Together: background in imperfetto, event in passato prossimo: Pioveva quando siamo arrivati."
          ],
          "ar": [
            "Imperfetto — لوصف الخلفية والعادات والحالات في الماضي: Da bambino abitavo a Napoli.",
            "Passato prossimo — لحدث وقع وانتهى: Ieri ho visitato il Duomo.",
            "معًا: الخلفية بـ imperfetto والحدث بـ passato prossimo: Pioveva quando siamo arrivati."
          ],
          "ru": [
            "Imperfetto — фон, привычки и состояния в прошлом: Da bambino abitavo a Napoli.",
            "Passato prossimo — завершённое действие или событие: Ieri ho visitato il Duomo.",
            "Вместе: фон в imperfetto, событие в passato prossimo: Pioveva quando siamo arrivati."
          ]
        },
        "table": [
          [
            "-are (parlare)",
            "parlavo · parlavi · parlava · parlavamo · parlavano"
          ],
          [
            "-ere (leggere)",
            "leggevo · leggevi · leggeva · leggevamo · leggevano"
          ],
          [
            "-ire (dormire)",
            "dormivo · dormivi · dormiva · dormivamo · dormivano"
          ],
          [
            "essere",
            "ero · eri · era · eravamo · erano"
          ],
          [
            "fare",
            "facevo · facevi · faceva · facevamo · facevano"
          ]
        ],
        "ex": [
          [
            "Da piccola andavo al mare ogni estate.",
            "כשהייתי קטנה, הייתי הולכת לים כל קיץ.",
            "As a child, I used to go to the seaside every summer.",
            "عندما كنت صغيرة، كنت أذهب إلى البحر كل صيف.",
            "В детстве я каждое лето ездила на море."
          ],
          [
            "Pioveva quando siamo arrivati in albergo.",
            "ירד גשם כשהגענו למלון.",
            "It was raining when we arrived at the hotel.",
            "كانت تمطر عندما وصلنا إلى الفندق.",
            "Шёл дождь, когда мы приехали в гостиницу."
          ],
          [
            "Ero in ufficio quando mi hai chiamato.",
            "הייתי במשרד כשהתקשרת אליי.",
            "I was at the office when you called me.",
            "كنت في المكتب عندما اتصلت بي.",
            "Я был в офисе, когда ты мне позвонил."
          ],
          [
            "Mentre aspettavo il treno, ho letto il giornale.",
            "בזמן שחיכיתי לרכבת, קראתי את העיתון.",
            "While I was waiting for the train, I read the newspaper.",
            "بينما كنت أنتظر القطار، قرأت الجريدة.",
            "Пока я ждал поезд, я прочитал газету."
          ]
        ],
        "drills": [
          [
            "Da bambino ___ in un piccolo paese.",
            "abitavo",
            [
              "abitavo",
              "ho abitato",
              "abito"
            ]
          ],
          [
            "Ieri sera ___ una pizza con gli amici.",
            "abbiamo mangiato",
            [
              "mangiavamo",
              "abbiamo mangiato",
              "mangiamo"
            ]
          ],
          [
            "Quando sono arrivato, ___ molto freddo.",
            "faceva",
            [
              "ha fatto",
              "faceva",
              "fa"
            ]
          ],
          [
            "Prima ___ sempre in ufficio in autobus.",
            "andavo",
            [
              "sono andato",
              "andavo",
              "vado"
            ]
          ]
        ]
      },
      {
        "id": "futuro",
        "icon": "🔮",
        "level": "B1",
        "title": {
          "he": "עתיד פשוט — parlerò, andrò, sarò",
          "en": "Simple future — parlerò, andrò, sarò",
          "ar": "المستقبل البسيط — parlerò, andrò, sarò",
          "ru": "Простое будущее — parlerò, andrò, sarò"
        },
        "explain": {
          "he": [
            "מורידים את ה-e האחרונה משם הפועל ומוסיפים סיומת; ב-‎-are ה-a הופכת ל-e: parlare → parlerò.",
            "הסיומות: ‎-ò, -ai, -à, -emo, -ete, -anno: prenderò, dormirai, partirà.",
            "חריגים נפוצים: essere → sarò, avere → avrò, andare → andrò, fare → farò, venire → verrò."
          ],
          "en": [
            "Drop the final -e of the infinitive and add the ending; in -are verbs the a becomes e: parlare → parlerò.",
            "Endings: -ò, -ai, -à, -emo, -ete, -anno: prenderò, dormirai, partirà.",
            "Common irregulars: essere → sarò, avere → avrò, andare → andrò, fare → farò, venire → verrò."
          ],
          "ar": [
            "نحذف حرف e الأخير من المصدر ونضيف النهاية، وفي أفعال ‎-are يتحول a إلى e: parlare ← parlerò.",
            "النهايات: ‎-ò, -ai, -à, -emo, -ete, -anno: prenderò, dormirai, partirà.",
            "أفعال شاذة شائعة: essere ← sarò، avere ← avrò، andare ← andrò، fare ← farò، venire ← verrò."
          ],
          "ru": [
            "Отбрасываем конечное -e инфинитива и добавляем окончание; в глаголах на -are a меняется на e: parlare → parlerò.",
            "Окончания: -ò, -ai, -à, -emo, -ete, -anno: prenderò, dormirai, partirà.",
            "Частые исключения: essere → sarò, avere → avrò, andare → andrò, fare → farò, venire → verrò."
          ]
        },
        "table": [
          [
            "io",
            "parlerò · sarò"
          ],
          [
            "tu",
            "parlerai · sarai"
          ],
          [
            "lui / lei / Lei",
            "parlerà · sarà"
          ],
          [
            "noi",
            "parleremo · saremo"
          ],
          [
            "voi",
            "parlerete · sarete"
          ],
          [
            "loro",
            "parleranno · saranno"
          ]
        ],
        "ex": [
          [
            "Domani visiteremo i Musei Vaticani.",
            "מחר נבקר במוזיאוני הוותיקן.",
            "Tomorrow we will visit the Vatican Museums.",
            "غدًا سنزور متاحف الفاتيكان.",
            "Завтра мы посетим Музеи Ватикана."
          ],
          [
            "Il treno partirà alle otto.",
            "הרכבת תצא בשמונה.",
            "The train will leave at eight.",
            "سيغادر القطار في الثامنة.",
            "Поезд отправится в восемь."
          ],
          [
            "Ti chiamerò quando arriverò in albergo.",
            "אתקשר אליך כשאגיע למלון.",
            "I'll call you when I get to the hotel.",
            "سأتصل بك عندما أصل إلى الفندق.",
            "Я позвоню тебе, когда доберусь до гостиницы."
          ],
          [
            "Sabato sarò a cena con i colleghi.",
            "בשבת אהיה בארוחת ערב עם הקולגות.",
            "On Saturday I'll be at dinner with my colleagues.",
            "يوم السبت سأكون على العشاء مع زملائي.",
            "В субботу я буду на ужине с коллегами."
          ]
        ],
        "drills": [
          [
            "L'anno prossimo ___ a Roma.",
            "andrò",
            [
              "anderò",
              "andrò",
              "andavo"
            ]
          ],
          [
            "Domani ___ bel tempo a Firenze.",
            "farà",
            [
              "farà",
              "farerà",
              "fa"
            ]
          ],
          [
            "Noi ___ il treno delle nove.",
            "prenderemo",
            [
              "prenderemo",
              "prenderanno",
              "prendiamo"
            ]
          ],
          [
            "Stasera ___ stanchissimo dopo il viaggio.",
            "sarò",
            [
              "sarò",
              "essererò",
              "ero"
            ]
          ]
        ]
      },
      {
        "id": "pronomi",
        "icon": "🎯",
        "level": "B1",
        "title": {
          "he": "כינויי מושא — lo / la / gli / le",
          "en": "Object pronouns — lo / la / gli / le",
          "ar": "ضمائر المفعول به — lo / la / gli / le",
          "ru": "Местоимения-дополнения — lo / la / gli / le"
        },
        "explain": {
          "he": [
            "מושא ישיר (את מי / את מה): lo, la, li, le: Il biglietto? Lo compro io.",
            "מושא עקיף (למי): gli (לו / להם), le (לה), Le (לך, בנימוס): Gli telefono stasera.",
            "הכינוי בא לפני הפועל. ב-passato prossimo, lo / la מתקצרים ל-l' וההתאמה במין: L'ho vista."
          ],
          "en": [
            "Direct object (whom / what): lo, la, li, le: Il biglietto? Lo compro io.",
            "Indirect object (to whom): gli (to him / them), le (to her), Le (to you, formal): Gli telefono stasera.",
            "The pronoun goes before the verb. In the passato prossimo lo / la become l' and the participle agrees: L'ho vista."
          ],
          "ar": [
            "المفعول به المباشر (مَن / ماذا): lo, la, li, le: Il biglietto? Lo compro io.",
            "المفعول به غير المباشر (لمن): gli (له / لهم)، le (لها)، Le (لك، بصيغة الاحترام): Gli telefono stasera.",
            "يأتي الضمير قبل الفعل. في passato prossimo يصبح lo / la ‏l' ويتوافق اسم المفعول: L'ho vista."
          ],
          "ru": [
            "Прямое дополнение (кого / что): lo, la, li, le: Il biglietto? Lo compro io.",
            "Косвенное дополнение (кому): gli (ему / им), le (ей), Le (вам, вежливо): Gli telefono stasera.",
            "Местоимение стоит перед глаголом. В passato prossimo lo / la → l', и причастие согласуется: L'ho vista."
          ]
        },
        "table": [
          [
            "mi · ti · ci · vi",
            "me · you · us · you (pl.) — direct and indirect"
          ],
          [
            "lo / la",
            "him, it (m.) / her, it (f.)"
          ],
          [
            "li / le",
            "them (m.) / them (f.)"
          ],
          [
            "gli",
            "to him / to them"
          ],
          [
            "le / Le",
            "to her / to you (formal)"
          ]
        ],
        "ex": [
          [
            "La chiave? L'ho lasciata in camera.",
            "המפתח? השארתי אותו בחדר.",
            "The key? I left it in the room.",
            "المفتاح؟ تركته في الغرفة.",
            "Ключ? Я оставил его в номере."
          ],
          [
            "Le valigie le lasciamo alla reception.",
            "את המזוודות אנחנו משאירים בקבלה.",
            "We'll leave the suitcases at reception.",
            "سنترك الحقائب في الاستقبال.",
            "Чемоданы мы оставим на ресепшене."
          ],
          [
            "Gli scrivo una mail domani mattina.",
            "אכתוב לו מייל מחר בבוקר.",
            "I'll write him an email tomorrow morning.",
            "سأكتب له رسالة إلكترونية صباح الغد.",
            "Я напишу ему письмо завтра утром."
          ],
          [
            "Il conto? Glielo porto subito.",
            "החשבון? אני מביא לך אותו מיד.",
            "The bill? I'll bring it to you right away.",
            "الحساب؟ سأحضره لك حالًا.",
            "Счёт? Сейчас вам его принесу."
          ]
        ],
        "drills": [
          [
            "Il caffè ___ prendo senza zucchero.",
            "lo",
            [
              "lo",
              "la",
              "gli"
            ]
          ],
          [
            "I biglietti? ___ ho comprati online.",
            "Li",
            [
              "Le",
              "Li",
              "Gli"
            ]
          ],
          [
            "Vedo Marco stasera e ___ do il regalo.",
            "gli",
            [
              "lo",
              "gli",
              "le"
            ]
          ],
          [
            "Ho chiamato Anna e ___ ho detto di venire.",
            "le",
            [
              "la",
              "le",
              "gli"
            ]
          ]
        ]
      },
      {
        "id": "condizionale",
        "icon": "🙏",
        "level": "B1",
        "title": {
          "he": "Condizionale — vorrei, potrei, dovrei",
          "en": "The conditional — vorrei, potrei, dovrei",
          "ar": "صيغة الشرط — vorrei, potrei, dovrei",
          "ru": "Условное наклонение — vorrei, potrei, dovrei"
        },
        "explain": {
          "he": [
            "ה-condizionale משמש לבקשות מנומסות, משאלות ועצות: Vorrei un caffè, per favore.",
            "נבנה כמו העתיד, עם סיומות אחרות: ‎-ei, -esti, -ebbe, -emmo, -este, -ebbero: parlerei.",
            "שימושיים מאוד: vorrei (הייתי רוצה), potrei (הייתי יכול), dovrei (הייתי צריך)."
          ],
          "en": [
            "The conditional is for polite requests, wishes and advice: Vorrei un caffè, per favore.",
            "It is built like the future, with different endings: -ei, -esti, -ebbe, -emmo, -este, -ebbero: parlerei.",
            "Very useful: vorrei (I would like), potrei (I could), dovrei (I should)."
          ],
          "ar": [
            "تُستعمل صيغة condizionale للطلبات المهذبة والأمنيات والنصائح: Vorrei un caffè, per favore.",
            "تُبنى مثل المستقبل لكن بنهايات أخرى: ‎-ei, -esti, -ebbe, -emmo, -este, -ebbero: parlerei.",
            "مفيدة جدًا: vorrei (أودّ)، potrei (يمكنني)، dovrei (ينبغي لي)."
          ],
          "ru": [
            "Condizionale — для вежливых просьб, желаний и советов: Vorrei un caffè, per favore.",
            "Образуется как будущее время, но с другими окончаниями: -ei, -esti, -ebbe, -emmo, -este, -ebbero: parlerei.",
            "Очень полезно: vorrei (я бы хотел), potrei (я мог бы), dovrei (мне следовало бы)."
          ]
        },
        "table": [
          [
            "volere",
            "vorrei · vorresti · vorrebbe"
          ],
          [
            "potere",
            "potrei · potresti · potrebbe"
          ],
          [
            "dovere",
            "dovrei · dovresti · dovrebbe"
          ],
          [
            "parlare",
            "parlerei · parleresti · parlerebbe"
          ],
          [
            "essere / andare",
            "sarei · andrei"
          ]
        ],
        "ex": [
          [
            "Vorrei prenotare una camera doppia.",
            "הייתי רוצה להזמין חדר זוגי.",
            "I would like to book a double room.",
            "أودّ حجز غرفة مزدوجة.",
            "Я бы хотел забронировать двухместный номер."
          ],
          [
            "Potrebbe chiamarmi un taxi, per favore?",
            "תוכל להזמין לי מונית, בבקשה?",
            "Could you call me a taxi, please?",
            "هل يمكنك أن تطلب لي سيارة أجرة من فضلك؟",
            "Не могли бы вы вызвать мне такси?"
          ],
          [
            "Dovresti andare dal medico.",
            "כדאי לך ללכת לרופא.",
            "You should go to the doctor.",
            "ينبغي أن تذهب إلى الطبيب.",
            "Тебе стоит сходить к врачу."
          ],
          [
            "Mi piacerebbe vivere a Firenze.",
            "הייתי שמח לגור בפירנצה.",
            "I would love to live in Florence.",
            "أودّ أن أعيش في فلورنسا.",
            "Я бы с удовольствием жил во Флоренции."
          ]
        ],
        "drills": [
          [
            "Scusi, ___ un cappuccino, per favore.",
            "vorrei",
            [
              "vorrò",
              "vorrei",
              "volevo"
            ]
          ],
          [
            "___ aprire la finestra, per favore?",
            "Potresti",
            [
              "Potresti",
              "Potrai",
              "Potrei"
            ]
          ],
          [
            "Al tuo posto, io ___ un taxi.",
            "prenderei",
            [
              "prenderò",
              "prenderei",
              "prendevo"
            ]
          ],
          [
            "Con più tempo, noi ___ in Sicilia.",
            "andremmo",
            [
              "andremo",
              "andremmo",
              "andiamo"
            ]
          ]
        ]
      }
    ]
  };
  Object.entries(B1).forEach(([lang, units]) => {
    if (!window.LQGrammar || !window.LQGrammar[lang]) return;
    units.forEach(u => { if (!window.LQGrammar[lang].some(x => x.id === u.id)) window.LQGrammar[lang].push(u); });
  });
})();
