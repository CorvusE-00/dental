export type TreatmentLocale = 'en' | 'tr'

export const routableTreatmentSlugs = [
  'routine-care',
  'dental-implants',
  'veneers',
  'crowns',
  'smile-makeover',
  'all-on-4',
] as const

export type RoutableTreatmentSlug = (typeof routableTreatmentSlugs)[number]
export type TreatmentId = RoutableTreatmentSlug | 'not-sure'

export function getTreatmentsIndexHref(locale: TreatmentLocale) {
  return locale === 'tr' ? '/tr/treatments' : '/treatments'
}

export function getTreatmentHref(locale: TreatmentLocale, slug: RoutableTreatmentSlug) {
  return `${getTreatmentsIndexHref(locale)}/${slug}`
}

export type TreatmentProcessStep = {
  title: string
  description: string
}

export type TreatmentFaq = {
  question: string
  answer: string
}

export type TreatmentQuickFacts = {
  startingPrice: string
  appointmentCount: string
  typicalTimeline: string
  anaesthesia?: string
}

export type TreatmentLocalizedContent = {
  name: string
  summary: string
  cardDetails: string[]
  quickFacts: TreatmentQuickFacts
  priceNote: string
  detailIntroduction: string
  whatItIs: string
  suitability: string
  process: TreatmentProcessStep[]
  timeline: string
  planFactors: string[]
  pricing: string
  faqs: TreatmentFaq[]
  aftercare: string
  metadata: {
    title: string
    description: string
  }
  imageAlt: string
}

export type TreatmentDefinition = {
  slug: RoutableTreatmentSlug
  featuredOnHomepage: boolean
  order: number
  image: string
  imageStatus: 'dedicated' | 'prototype-placeholder'
  imageNote?: string
  content: Record<TreatmentLocale, TreatmentLocalizedContent>
}

export type HomepageTreatment = {
  id: RoutableTreatmentSlug
  name: string
  summary: string
  details: string[]
  image: string
  imageAlt: string
}

const enPriceNote = 'Prototype starting price for demonstration only.'
const trPriceNote = 'Yalnızca prototip gösterimi için örnek başlangıç fiyatıdır.'

export const treatmentCatalog = [
  {
    slug: 'routine-care',
    featuredOnHomepage: true,
    order: 1,
    image: '/images/editorial/routine-care.jpg',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'Check-ups & Preventive Care',
        summary: 'Examinations, hygiene, fillings and gum care planned around your everyday health and the concerns you want to address.',
        cardDetails: ['In-person assessment', 'Prevention-first planning'],
        quickFacts: { startingPrice: 'From €50', appointmentCount: 'Usually one visit', typicalTimeline: 'Usually one visit', anaesthesia: 'Usually only if needed' },
        priceNote: enPriceNote,
        detailIntroduction: 'Review your dental health and the concern you want to address.',
        whatItIs: 'Routine care examines teeth and gums, provides hygiene, treats fillings where needed and plans prevention.',
        suitability: 'It may suit check-ups, hygiene, fillings, gum concerns or a new symptom. The plan changes if the examination finds decay, inflammation or another issue.',
        process: [
          { title: 'Examination and history', description: 'The clinician reviews your symptoms, history, teeth, gums and records.' },
          { title: 'Hygiene and diagnostics', description: 'Cleaning or focused diagnostic checks are completed when appropriate.' },
          { title: 'Treat active concerns', description: 'Fillings, gum care or another immediate concern is discussed and treated when suitable.' },
          { title: 'Build a home-care plan', description: 'You receive practical brushing, interdental-care and prevention guidance.' },
          { title: 'Set recall and maintenance', description: 'Future reviews are planned around your health and maintenance needs.' },
        ],
        timeline: 'Routine care is often completed in one visit. Further treatment, diagnostics or hygiene follow-up add appointments when needed.',
        planFactors: ['Current dental health', 'Gum condition', 'Plaque and calculus build-up', 'Active decay or symptoms', 'Preventive needs'],
        pricing: 'The estimate follows examination, materials and treatment scope.',
        faqs: [
          { question: 'What happens at a routine check-up?', answer: 'The clinician reviews your history, examines your teeth and gums, discusses any concerns and explains the next appropriate steps.' },
          { question: 'Is professional cleaning included?', answer: 'Professional cleaning may be included when it is appropriate, but the exact scope is confirmed after your needs are assessed.' },
          { question: 'Could a filling be done at the same visit?', answer: 'Sometimes, if the examination, timing and tooth condition make same-visit treatment appropriate.' },
          { question: 'How often should routine appointments be planned?', answer: 'The interval depends on your dental health, gum condition, risk factors and maintenance needs rather than one fixed schedule.' },
        ],
        aftercare: 'You receive home-care guidance and a recall plan for your ongoing needs.',
        metadata: {
          title: 'Check-ups & Preventive Care | Luma Dental Istanbul',
          description: 'Explore thoughtful check-ups and preventive dental care in Istanbul, with planning shaped around your health and everyday needs.',
        },
        imageAlt: 'A bright dental treatment room prepared for a routine appointment.',
      },
      tr: {
        name: 'Kontrol ve Koruyucu Bakım',
        summary: 'Günlük sağlığınıza ve ele almak istediğiniz konulara göre planlanan muayene, diş taşı temizliği, dolgu ve diş eti bakımı.',
        cardDetails: ['Yüz yüze değerlendirme', 'Koruma odaklı planlama'],
        quickFacts: { startingPrice: '€50’den başlayan', appointmentCount: 'Genellikle tek randevu', typicalTimeline: 'Genellikle tek randevu', anaesthesia: 'Genellikle gerektiğinde' },
        priceNote: trPriceNote,
        detailIntroduction: 'Diş sağlığınızı ve ele almak istediğiniz konuyu değerlendirmeyle netleştirin.',
        whatItIs: 'Rutin bakım; dişleri ve diş etlerini muayene eder, hijyen sağlar, gerektiğinde dolgu yapar ve korunmayı planlar.',
        suitability: 'Kontrol, hijyen, dolgu, diş eti endişeleri veya yeni bir belirti için düşünülebilir. Muayenede çürük, iltihap veya başka bir sorun görülürse plan değişir.',
        process: [
          { title: 'Muayene ve geçmiş', description: 'Klinisyen belirtilerinizi, geçmişinizi, dişlerinizi, diş etlerinizi ve kayıtlarınızı inceler.' },
          { title: 'Hijyen ve tanısal kontroller', description: 'Uygun olduğunda profesyonel temizlik veya odaklanmış kontroller tamamlanır.' },
          { title: 'Aktif sorunları ele alın', description: 'Dolgu, diş eti bakımı veya başka bir sorun uygun olduğunda görüşülür ve tedavi edilir.' },
          { title: 'Evde bakım planı', description: 'Fırçalama, diş arası temizliği ve korunma için pratik yönlendirme verilir.' },
          { title: 'Kontrol ve bakım planı', description: 'Gelecek kontroller sağlığınıza ve bakım ihtiyaçlarınıza göre planlanır.' },
        ],
        timeline: 'Başka bir tedavi gerekmiyorsa rutin bakım çoğunlukla tek randevuda tamamlanır. Ek tedavi, tanısal çalışma veya hijyen takibi gerektiğinde randevu eklenir.',
        planFactors: ['Mevcut diş sağlığı', 'Diş eti durumu', 'Plak ve diş taşı birikimi', 'Aktif çürük veya belirtiler', 'Koruyucu bakım ihtiyaçları'],
        pricing: 'Tahmini ücret; muayene, materyaller ve tedavi kapsamına göre belirlenir.',
        faqs: [
          { question: 'Rutin kontrolde neler olur?', answer: 'Klinisyen geçmişinizi inceler, dişlerinizi ve diş etlerinizi muayene eder, endişelerinizi dinler ve uygun sonraki adımları açıklar.' },
          { question: 'Profesyonel temizlik dahil midir?', answer: 'Uygun olduğunda profesyonel temizlik planlanabilir; ancak kapsam ihtiyaçlarınız değerlendirildikten sonra netleşir.' },
          { question: 'Dolgu aynı randevuda yapılabilir mi?', answer: 'Muayene, süre ve dişin durumu uygun olduğunda bazen aynı randevuda yapılabilir.' },
          { question: 'Rutin randevular ne sıklıkta planlanır?', answer: 'Aralık; diş sağlığınıza, diş eti durumunuza, risk faktörlerinize ve bakım ihtiyaçlarınıza göre belirlenir; tek bir sabit program yoktur.' },
        ],
        aftercare: 'Evde bakım yönlendirmesi ve ihtiyaçlarınıza göre kontrol planı verilir.',
        metadata: {
          title: 'Kontrol ve Koruyucu Bakım | Luma Dental Istanbul',
          description: 'İstanbul’da sağlığınıza ve günlük ihtiyaçlarınıza göre planlanan kontrol ve koruyucu diş bakımını keşfedin.',
        },
        imageAlt: 'Rutin bir randevu için hazırlanmış aydınlık bir diş tedavi odası.',
      },
    },
  },
  {
    slug: 'dental-implants',
    featuredOnHomepage: true,
    order: 2,
    image: '/images/treatments/dental-implants.webp',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'Dental Implants',
        summary: 'A structured way to discuss replacing one or more missing teeth, with planning shaped around your bone, bite and wider health.',
        cardDetails: ['Timing after assessment', '3D CBCT planning'],
        quickFacts: { startingPrice: 'From €500', appointmentCount: 'Multiple visits', typicalTimeline: 'Usually several months', anaesthesia: 'Usually local' },
        priceNote: enPriceNote,
        detailIntroduction: 'Begin with an assessment of the missing tooth or teeth and the information still needed.',
        whatItIs: 'An implant replaces a missing tooth root with a fixture placed in the jawbone. After healing, a crown, bridge or other restoration replaces the visible tooth.',
        suitability: 'Implants may suit one or more missing teeth when a fixed or implant-supported option is considered. Bone, gums, general health, smoking, bite and grafting needs affect suitability.',
        process: [
          { title: 'Consultation, examination and imaging', description: 'The clinician reviews the missing teeth, gums, bite, health history and scans.' },
          { title: 'Implant planning', description: 'Position, number, material options and restoration design are planned around your anatomy.' },
          { title: 'Implant placement', description: 'The fixture is placed in the jawbone using the agreed surgical and anaesthesia plan.' },
          { title: 'Healing and integration', description: 'Healing allows the implant and surrounding tissues to be reviewed.' },
          { title: 'Final crown or restoration', description: 'The planned restoration is fitted and maintenance is explained.' },
        ],
        timeline: 'Placement may take one appointment, but healing means the full process commonly spans several months. Grafting, multiple sites or laboratory stages can extend the schedule.',
        planFactors: ['Bone support and grafting needs', 'Gum health', 'Implant location and number', 'Bite and existing teeth', 'Smoking and medical history'],
        pricing: 'The estimate follows examination, materials and treatment scope.',
        faqs: [
          { question: 'Do I need enough bone for an implant?', answer: 'Bone quantity and quality are assessed as part of planning. If support is limited, the clinician explains which options may be relevant.' },
          { question: 'Could I need bone grafting?', answer: 'Grafting may be discussed when the planned implant position needs additional support; whether it is appropriate depends on imaging and examination.' },
          { question: 'How long until the final tooth is fitted?', answer: 'The final restoration may be fitted after the implant and surrounding tissues have healed. The timing is confirmed around your plan and reviews.' },
          { question: 'Can I start planning before travelling?', answer: 'You can share your starting information and records before travelling, but final suitability and treatment planning require appropriate assessment.' },
          { question: 'Is implant treatment painful?', answer: 'The team discusses anaesthesia, healing and aftercare for your plan. Experience varies, and no treatment outcome or comfort level can be guaranteed.' },
        ],
        aftercare: 'Aftercare covers implant-site hygiene, healing guidance, follow-ups and long-term maintenance.',
        metadata: {
          title: 'Dental Implants in Istanbul | Luma Dental Istanbul',
          description: 'Learn how Luma plans dental implant care around your dental health, anatomy, bite and individual treatment goals.',
        },
        imageAlt: 'A clinician holding a model of a single dental implant beside a digital scan.',
      },
      tr: {
        name: 'Diş İmplantları',
        summary: 'Bir veya daha fazla eksik dişi değiştirmeyi, kemik, kapanış ve genel sağlığınıza göre planlanan yapılandırılmış bir değerlendirmeyle konuşun.',
        cardDetails: ['Değerlendirme sonrası zamanlama', '3D CBCT planlaması'],
        quickFacts: { startingPrice: '€500’den başlayan', appointmentCount: 'Birden fazla randevu', typicalTimeline: 'Genellikle birkaç ay', anaesthesia: 'Genellikle lokal' },
        priceNote: trPriceNote,
        detailIntroduction: 'Eksik diş veya dişleri ve hâlâ ihtiyaç duyulan bilgileri değerlendirmeyle netleştirin.',
        whatItIs: 'İmplant, çene kemiğine yerleştirilen bir gövdeyle eksik diş kökünün yerini alır. İyileşme sonrasında görünen dişi kuron, köprü veya başka bir restorasyon tamamlar.',
        suitability: 'Sabit veya implant destekli bir seçenek düşünülen bir ya da daha fazla eksik diş için gündeme gelebilir. Kemik, diş eti, genel sağlık, sigara, kapanış ve kemik ekleme ihtiyacı uygunluğu etkiler.',
        process: [
          { title: 'Görüşme, muayene ve görüntüleme', description: 'Klinisyen eksik dişleri, diş etlerini, kapanışı, sağlık geçmişini ve görüntülemeleri değerlendirir.' },
          { title: 'İmplant planlaması', description: 'Konum, sayı, malzeme ve restorasyon tasarımı anatomik yapınıza göre planlanır.' },
          { title: 'İmplantın yerleştirilmesi', description: 'İmplant gövdesi, üzerinde anlaşılan cerrahi ve anestezi planıyla yerleştirilir.' },
          { title: 'İyileşme ve bütünleşme', description: 'İyileşme döneminde implant ve çevre dokular değerlendirilir.' },
          { title: 'Son kuron veya restorasyon', description: 'Planlanan restorasyon takılır ve bakım adımları açıklanır.' },
        ],
        timeline: 'Yerleştirme tek randevu sürebilir; ancak iyileşme nedeniyle toplam süreç çoğunlukla birkaç aya yayılır. Kemik ekleme, birden fazla bölge veya laboratuvar aşamaları süreyi uzatabilir.',
        planFactors: ['Kemik desteği ve olası kemik ekleme', 'Diş eti sağlığı', 'İmplantın konumu ve sayısı', 'Kapanış ve mevcut dişler', 'Sigara ve sağlık geçmişi'],
        pricing: 'Tahmini ücret; muayene, materyaller ve tedavi kapsamına göre belirlenir.',
        faqs: [
          { question: 'İmplant için yeterli kemiğe sahip olmam gerekir mi?', answer: 'Planlamanın parçası olarak kemiğin miktarı ve kalitesi değerlendirilir. Destek sınırlıysa klinisyen ilgili seçenekleri açıklar.' },
          { question: 'Kemik ekleme gerekebilir mi?', answer: 'Planlanan implant konumu ek desteğe ihtiyaç duyduğunda kemik ekleme görüşülebilir; uygunluk görüntüleme ve muayeneye bağlıdır.' },
          { question: 'Son diş ne zaman takılır?', answer: 'Son restorasyon implant ve çevre dokular iyileştikten sonra takılabilir. Zamanlama planınıza ve kontrollerinize göre netleşir.' },
          { question: 'Seyahat etmeden önce planlamaya başlayabilir miyim?', answer: 'Başlangıç bilgilerinizi ve kayıtlarınızı seyahatten önce paylaşabilirsiniz; ancak nihai uygunluk ve tedavi planı için uygun değerlendirme gerekir.' },
          { question: 'İmplant tedavisi ağrılı mıdır?', answer: 'Ekip planınıza göre anesteziyi, iyileşmeyi ve bakım sonrasını açıklar. Deneyim kişiden kişiye değişir; ağrı veya konfor konusunda garanti verilemez.' },
        ],
        aftercare: 'Bakım sonrası implant bölgesi temizliği, iyileşme yönlendirmesi, kontroller ve uzun vadeli bakımı kapsar.',
        metadata: {
          title: 'İstanbul’da Diş İmplantları | Luma Dental Istanbul',
          description: 'Luma’nın diş implantı bakımını diş sağlığınıza, anatomik yapınıza, kapanışınıza ve kişisel hedeflerinize göre nasıl planladığını öğrenin.',
        },
        imageAlt: 'Dijital taramanın yanında tek bir diş implantı modelini tutan klinisyen.',
      },
    },
  },
  {
    slug: 'veneers',
    featuredOnHomepage: true,
    order: 3,
    image: '/images/treatments/veneers.webp',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'Veneers',
        summary: 'Thin porcelain or composite veneers can be discussed to refine shape, shade and alignment with a natural-looking result in mind.',
        cardDetails: ['Appointment plan after assessment', 'Shade matched in clinic'],
        quickFacts: { startingPrice: 'From €180 / tooth', appointmentCount: '2–3 visits', typicalTimeline: 'Several days to 1–2 weeks', anaesthesia: 'If preparation is needed' },
        priceNote: enPriceNote,
        detailIntroduction: 'Discuss the features you want to refine and the level of change that feels right.',
        whatItIs: 'Veneers are thin porcelain or composite shells bonded to the front of selected teeth. They can change shape, shade and minor alignment; preparation varies by tooth and plan.',
        suitability: 'They may suit changes to shape, shade, proportion or worn and chipped teeth. Enamel, bite, gums, alignment, bruxism and the desired change affect suitability; no-prep is not right for every tooth.',
        process: [
          { title: 'Consultation and smile assessment', description: 'You discuss the shape, shade, proportion and level of change.' },
          { title: 'Tooth, gum and scan assessment', description: 'The clinician reviews enamel, gums, bite, alignment and relevant scans.' },
          { title: 'Design and mock-up where appropriate', description: 'Suitable shapes, shades and preview steps are discussed.' },
          { title: 'Preparation and veneer production', description: 'Teeth are prepared as needed and the veneers are produced to the agreed design.' },
          { title: 'Final fit and bonding', description: 'The restorations are checked, adjusted and bonded after the plan is confirmed.' },
        ],
        timeline: 'Veneers commonly involve two to three appointments over several days to one or two weeks. More teeth, laboratory work, complex preparation or design changes can extend the workflow.',
        planFactors: ['Enamel condition', 'Bite, bruxism and gum health', 'Tooth alignment', 'Shade and shape goals', 'Number, material and preparation'],
        pricing: 'The estimate follows examination, materials and treatment scope.',
        faqs: [
          { question: 'Will my natural teeth need preparation?', answer: 'Preparation depends on the tooth, material, bite and agreed design. The amount is discussed after the tooth and surrounding tissues are assessed.' },
          { question: 'Should I choose porcelain or composite?', answer: 'The materials differ in workflow, appearance, maintenance and suitability. The appropriate comparison depends on your teeth and goals.' },
          { question: 'How many teeth might be treated?', answer: 'The number depends on the smile features you want to change, your bite and the plan that is appropriate for your dental health.' },
          { question: 'Can shade and shape be previewed?', answer: 'Shade and shape can be discussed, and preview or mock-up steps may be used when they are suitable for your case.' },
          { question: 'How long do veneers last?', answer: 'Veneers are planned as a longer-term restoration, but their lifespan varies with material, bite, care and daily habits, so no fixed duration is guaranteed.' },
        ],
        aftercare: 'Aftercare covers cleaning, bite awareness, restoration protection and follow-up.',
        metadata: {
          title: 'Veneers in Istanbul | Luma Dental Istanbul',
          description: 'Discuss porcelain or composite veneers in Istanbul with planning shaped around your dental health, features, shade and goals.',
        },
        imageAlt: 'A row of porcelain veneers arranged on a neutral surface beside a shade guide.',
      },
      tr: {
        name: 'Porselen Laminalar',
        summary: 'Doğal görünen bir sonuç hedefiyle şekli, rengi ve hizayı iyileştirmek için ince porselen veya kompozit laminaları değerlendirin.',
        cardDetails: ['Değerlendirme sonrası randevu planı', 'Klinikte renk eşleştirme'],
        quickFacts: { startingPrice: 'Diş başına €180’den başlayan', appointmentCount: '2–3 randevu', typicalTimeline: 'Birkaç gün ile 1–2 hafta', anaesthesia: 'Hazırlık gerekiyorsa' },
        priceNote: trPriceNote,
        detailIntroduction: 'İyileştirmek istediğiniz özellikleri ve sizin için doğru görünen değişim seviyesini konuşun.',
        whatItIs: 'Laminalar seçilen dişlerin ön yüzeyine yapıştırılan ince porselen veya kompozit kabuklardır. Şekli, rengi ve hafif hizalamayı değiştirebilir; hazırlık dişe ve plana göre değişir.',
        suitability: 'Şekil, renk, oran veya aşınmış ve kırılmış dişlerin görünümü için düşünülebilir. Mine, kapanış, diş eti, hizalama, diş sıkma ve istediğiniz değişim uygunluğu etkiler; preparasyonsuz uygulama her diş için uygun değildir.',
        process: [
          { title: 'Görüşme ve gülüş değerlendirmesi', description: 'Şekil, renk, oran ve değişim seviyesini konuşursunuz.' },
          { title: 'Diş, diş eti ve tarama değerlendirmesi', description: 'Klinisyen mineyi, diş etlerini, kapanışı, hizayı ve gereken taramaları inceler.' },
          { title: 'Tasarım ve uygun olduğunda mock-up', description: 'Uygun şekiller, renkler ve önizleme adımları görüşülür.' },
          { title: 'Hazırlık ve lamina üretimi', description: 'Dişler gerektiği kadar hazırlanır ve laminalar tasarıma göre üretilir.' },
          { title: 'Son uyum ve yapıştırma', description: 'Restorasyonlar kontrol edilir, ayarlanır ve plan onaylandıktan sonra yapıştırılır.' },
        ],
        timeline: 'Laminalar çoğunlukla birkaç gün ile bir veya iki hafta içinde iki veya üç randevu gerektirir. Diş sayısı, laboratuvar, hazırlık veya tasarım değişiklikleri süreci uzatabilir.',
        planFactors: ['Mine durumu', 'Kapanış, diş sıkma ve diş eti sağlığı', 'Diş hizası', 'Renk ve şekil hedefleri', 'Sayı, malzeme ve hazırlık'],
        pricing: 'Tahmini ücret; muayene, materyaller ve tedavi kapsamına göre belirlenir.',
        faqs: [
          { question: 'Doğal dişlerimde hazırlık gerekir mi?', answer: 'Hazırlık dişe, malzemeye, kapanışa ve üzerinde anlaşılan tasarıma bağlıdır. Miktar, diş ve çevre dokular değerlendirildikten sonra görüşülür.' },
          { question: 'Porselen mi kompozit mi seçmeliyim?', answer: 'Malzemeler süreç, görünüm, bakım ve uygunluk açısından farklıdır. Uygun karşılaştırma dişlerinize ve hedeflerinize bağlıdır.' },
          { question: 'Kaç diş tedavi edilebilir?', answer: 'Sayı; değiştirmek istediğiniz gülüş özelliklerine, kapanışınıza ve diş sağlığınıza uygun plana göre belirlenir.' },
          { question: 'Renk ve şekli önceden görebilir miyim?', answer: 'Renk ve şekil görüşülebilir; durumunuza uygun olduğunda önizleme veya mock-up adımları kullanılabilir.' },
          { question: 'Laminalar ne kadar dayanır?', answer: 'Laminalar uzun süreli restorasyon olarak planlanır; ancak ömür malzemeye, kapanışa, bakıma ve günlük alışkanlıklara göre değişir, sabit süre garanti edilemez.' },
        ],
        aftercare: 'Bakım sonrası temizlik, kapanışa dikkat, restorasyon koruması ve takip içerir.',
        metadata: {
          title: 'İstanbul’da Porselen Laminalar | Luma Dental Istanbul',
          description: 'İstanbul’da porselen veya kompozit laminaları, diş sağlığınıza, özelliklerinize, renginize ve hedeflerinize göre planlamayı görüşün.',
        },
        imageAlt: 'Nötr bir yüzeyde renk skalasının yanında dizilmiş porselen laminalar.',
      },
    },
  },
  {
    slug: 'crowns',
    featuredOnHomepage: false,
    order: 4,
    image: '/images/treatments/crowns.webp',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'Crowns',
        summary: 'Crowns can be discussed when a tooth needs added support, shape or coverage as part of a wider restorative plan.',
        cardDetails: ['Bite and shade planning', 'Timing after assessment'],
        quickFacts: { startingPrice: 'From €180 / tooth', appointmentCount: '2–3 visits', typicalTimeline: 'Several days to 1–2 weeks', anaesthesia: 'Usually local if needed' },
        priceNote: enPriceNote,
        detailIntroduction: 'Begin with an assessment of the tooth and the result you want to maintain.',
        whatItIs: 'A crown covers most or all visible tooth structure to restore strength, shape and function. It may support a damaged, heavily restored, root-canal-treated or worn tooth; material depends on the tooth and bite.',
        suitability: 'Crowns may suit a damaged, heavily restored, root-canal-treated or worn tooth needing coverage. Remaining structure, root and gum health, bite, adjacent teeth and material affect suitability.',
        process: [
          { title: 'Examination and tooth/root assessment', description: 'The clinician checks tooth structure, root health, gums, bite and existing restorations.' },
          { title: 'Tooth preparation', description: 'The tooth is shaped as needed for the planned crown.' },
          { title: 'Scan or impression', description: 'A scan or impression records the tooth and bite for the laboratory.' },
          { title: 'Temporary crown if needed', description: 'A temporary restoration may be used while the final crown is produced.' },
          { title: 'Final crown fit and cementation', description: 'The final crown is checked for fit, bite and appearance before cementation.' },
        ],
        timeline: 'Crowns commonly involve two to three appointments over several days to one or two weeks. Laboratory work, tooth condition, a temporary crown or root and gum treatment can extend the schedule.',
        planFactors: ['Remaining tooth structure', 'Root health', 'Gum health and bite', 'Existing restorations and adjacent teeth', 'Material and shade selection'],
        pricing: 'The estimate follows examination, materials and treatment scope.',
        faqs: [
          { question: 'Why might I need a crown instead of a filling?', answer: 'A crown may be discussed when a tooth needs more support or coverage than a filling can provide. The clinician confirms the appropriate option after assessment.' },
          { question: 'What crown materials are available?', answer: 'Material options vary by tooth, bite, appearance, strength and the treatment plan. The team explains the relevant choices for your case.' },
          { question: 'Will I have a temporary crown?', answer: 'A temporary restoration may be used while the final crown is produced or while the tooth is reviewed, when appropriate.' },
          { question: 'How long does the crown process take?', answer: 'It commonly involves two to three appointments over several days to around one to two weeks, with timing affected by laboratory work and tooth condition.' },
          { question: 'Can a crowned tooth need future treatment?', answer: 'A crowned tooth still needs cleaning and review, and future treatment can be needed if the tooth, gums or surrounding bite changes.' },
        ],
        aftercare: 'Aftercare covers cleaning around the crown, bite monitoring, restoration protection and review.',
        metadata: {
          title: 'Dental Crowns in Istanbul | Luma Dental Istanbul',
          description: 'Explore dental crown planning in Istanbul for teeth that may need support, coverage or a carefully considered restoration.',
        },
        imageAlt: 'A clinician examining a ceramic dental crown in a modern dental clinic.',
      },
      tr: {
        name: 'Kuronlar',
        summary: 'Daha geniş bir restoratif planın parçası olarak desteğe, şekle veya kaplamaya ihtiyaç duyan dişler için kuronları görüşün.',
        cardDetails: ['Kapanış ve renk planlaması', 'Değerlendirme sonrası zamanlama'],
        quickFacts: { startingPrice: 'Diş başına €180’den başlayan', appointmentCount: '2–3 randevu', typicalTimeline: 'Birkaç gün ile 1–2 hafta', anaesthesia: 'Gerekirse genellikle lokal' },
        priceNote: trPriceNote,
        detailIntroduction: 'Endişe duyduğunuz dişi ve korumak istediğiniz sonucu değerlendirmeyle netleştirin.',
        whatItIs: 'Kuron, görünen diş yapısının çoğunu veya tamamını kaplayarak gücü, şekli ve işlevi geri kazandırır. Hasarlı, ileri restorasyon görmüş, kanal tedavili veya aşınmış dişleri destekleyebilir; malzeme dişe ve kapanışa göre seçilir.',
        suitability: 'Hasarlı, ileri restorasyon görmüş, kanal tedavili veya aşınmış ve kaplamaya ihtiyaç duyan dişlerde düşünülebilir. Kalan doku, kök ve diş eti sağlığı, kapanış, komşu dişler ve malzeme uygunluğu etkiler.',
        process: [
          { title: 'Dişi ve kökü değerlendirin', description: 'Klinisyen diş dokusunu, kökü, diş etlerini, kapanışı ve restorasyonu inceler.' },
          { title: 'Dişi hazırlayın', description: 'Diş, planlanan kurona uygun olacak kadar şekillendirilir.' },
          { title: 'Tarama veya ölçü', description: 'Diş ve kapanış laboratuvar için tarama veya ölçüyle kaydedilir.' },
          { title: 'Gerekirse geçici kuron', description: 'Son kuron hazırlanırken geçici restorasyon kullanılabilir.' },
          { title: 'Son kuronun uyumu ve yapıştırılması', description: 'Kuron yapıştırılmadan önce uyum, kapanış ve görünüm kontrol edilir.' },
        ],
        timeline: 'Kuronlar çoğunlukla birkaç gün ile bir veya iki hafta içinde iki veya üç randevu gerektirir. Laboratuvar, dişin durumu, geçici kuron veya kök ve diş eti tedavisi süreyi uzatabilir.',
        planFactors: ['Kalan diş dokusu', 'Kök sağlığı', 'Diş eti sağlığı ve kapanış', 'Mevcut restorasyonlar ve komşu dişler', 'Malzeme ve renk seçimi'],
        pricing: 'Tahmini ücret; muayene, materyaller ve tedavi kapsamına göre belirlenir.',
        faqs: [
          { question: 'Dolgu yerine neden kuron gerekebilir?', answer: 'Diş bir dolgudan daha fazla desteğe veya kaplamaya ihtiyaç duyduğunda kuron gündeme gelebilir. Uygun seçenek muayeneden sonra belirlenir.' },
          { question: 'Hangi kuron malzemeleri kullanılabilir?', answer: 'Malzeme seçenekleri dişe, kapanışa, görünüme, dayanıklılık ihtiyacına ve tedavi planına göre değişir. Ekip durumunuza uygun seçenekleri açıklar.' },
          { question: 'Geçici kuron takılır mı?', answer: 'Son kuron üretilirken veya diş değerlendirilirken, uygun olduğunda geçici restorasyon kullanılabilir.' },
          { question: 'Kuron süreci ne kadar sürer?', answer: 'Çoğunlukla birkaç gün ile yaklaşık bir veya iki hafta içinde iki veya üç randevu gerekir; laboratuvar çalışması ve dişin durumu süreyi etkileyebilir.' },
          { question: 'Kuronlu bir diş ileride yeniden tedavi gerektirebilir mi?', answer: 'Kuronlu dişin de temizlenmesi ve kontrolü gerekir; diş, diş etleri veya çevre kapanış değişirse ileride ek tedavi gerekebilir.' },
        ],
        aftercare: 'Bakım sonrası kuron çevresi temizliği, kapanış takibi, restorasyon koruması ve kontrol içerir.',
        metadata: {
          title: 'İstanbul’da Dental Kuronlar | Luma Dental Istanbul',
          description: 'Destek, kaplama veya özenli bir restorasyona ihtiyaç duyabilecek dişler için İstanbul’da kuron planlamasını keşfedin.',
        },
        imageAlt: 'Modern bir diş kliniğinde seramik diş kuronunu inceleyen klinisyen.',
      },
    },
  },
  {
    slug: 'smile-makeover',
    featuredOnHomepage: true,
    order: 5,
    image: '/images/treatments/smile-makeover.webp',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'Smile Makeovers',
        summary: 'A considered combination of treatments designed around your features, dental health and the smile you want to see.',
        cardDetails: ['Digital smile design', 'Preview before treatment'],
        quickFacts: { startingPrice: 'From €2,500', appointmentCount: 'Varies by plan', typicalTimeline: 'Several visits to several weeks+', anaesthesia: 'Depends on included treatments' },
        priceNote: enPriceNote,
        detailIntroduction: 'Start by discussing what you want to change and how dental health should guide the plan.',
        whatItIs: 'A smile makeover is a coordinated combination of treatments, not one procedure. It may include whitening, bonding, veneers, crowns, gum care or restorative work.',
        suitability: 'It may suit people considering several connected cosmetic or restorative changes. Active decay, gum problems or other health needs may come first; bite, proportions, goals and desired change also guide planning.',
        process: [
          { title: 'Goals and concerns', description: 'You describe the features you would like to change.' },
          { title: 'Full dental and smile assessment', description: 'The team reviews teeth, gums, bite, proportions and active health issues.' },
          { title: 'Smile design and treatment combination', description: 'Procedures, materials, previews and treatment order are brought into one plan.' },
          { title: 'Treatment in planned stages', description: 'The selected procedures are delivered in an order shaped by your health and goals.' },
          { title: 'Final review and maintenance plan', description: 'The result and ongoing care for the included treatments are reviewed.' },
        ],
        timeline: 'A smile makeover may take several appointments over several weeks or longer. Timing depends on the treatment combination, laboratory stages, healing and order of care.',
        planFactors: ['Tooth, gum and smile proportions', 'Desired level of change', 'Selected procedures', 'Material choices', 'Treatment order and maintenance'],
        pricing: 'The estimate follows examination, materials and treatment scope.',
        faqs: [
          { question: 'Which treatments can be combined?', answer: 'Depending on your needs, a plan may combine whitening, bonding, veneers, crowns, gum-related care or restorative treatment after assessment.' },
          { question: 'Do I automatically need veneers?', answer: 'No. A smile plan may use other treatments or focus on one concern. The suitable route depends on your dental health and goals.' },
          { question: 'Can I preview the smile?', answer: 'The team explains which design, preview or mock-up steps are appropriate for your case before treatment is confirmed.' },
          { question: 'How is the treatment sequence decided?', answer: 'The sequence is shaped by dental health, bite, goals, healing, laboratory stages and the treatments included in the plan.' },
          { question: 'How is the total price calculated?', answer: 'The estimate depends on the included treatments, number of teeth, materials, preparation, laboratory work and your individual plan.' },
        ],
        aftercare: 'Aftercare combines cleaning, bite protection, gum care, restoration maintenance and reviews as needed.',
        metadata: {
          title: 'Smile Makeovers in Istanbul | Luma Dental Istanbul',
          description: 'Discuss a considered smile makeover in Istanbul, planned around your facial features, dental health and preferred level of change.',
        },
        imageAlt: 'A patient reviewing a smile design preview with a dentist in a bright clinic.',
      },
      tr: {
        name: 'Gülüş Tasarımı',
        summary: 'Özelliklerinize, diş sağlığınıza ve görmek istediğiniz gülüşe göre düşünülen tedavilerin bir arada planlanması.',
        cardDetails: ['Dijital gülüş tasarımı', 'Tedavi öncesi önizleme'],
        quickFacts: { startingPrice: '€2.500’den başlayan', appointmentCount: 'Plana göre değişir', typicalTimeline: 'Birkaç randevudan birkaç hafta+', anaesthesia: 'Dahil edilen tedavilere göre' },
        priceNote: trPriceNote,
        detailIntroduction: 'Neyi değiştirmek istediğinizi ve diş sağlığınızın planı nasıl yönlendireceğini konuşarak başlayın.',
        whatItIs: 'Gülüş tasarımı tek bir işlem değil, tedavilerin bir arada planlanmasıdır. Beyazlatma, bonding, lamina, kuron, diş eti bakımı veya restoratif işler dahil edilebilir.',
        suitability: 'Birden fazla estetik veya restoratif değişikliği görüşmek isteyen kişiler için düşünülebilir. Aktif çürük, diş eti veya başka sağlık ihtiyaçları önce ele alınabilir; kapanış, oranlar, hedefler ve değişim seviyesi de planı yönlendirir.',
        process: [
          { title: 'Hedefler ve endişeler', description: 'Değiştirmek istediğiniz özellikleri anlatırsınız.' },
          { title: 'Kapsamlı diş ve gülüş değerlendirmesi', description: 'Ekip dişleri, diş etlerini, kapanışı, oranları ve aktif sorunları inceler.' },
          { title: 'Gülüş tasarımı ve tedavi kombinasyonu', description: 'İşlemler, malzemeler, önizlemeler ve bakım sırası tek planda birleşir.' },
          { title: 'Planlanan aşamalarda tedavi', description: 'Seçilen işlemler sağlığınıza ve hedeflerinize göre sırayla uygulanır.' },
          { title: 'Son kontrol ve bakım planı', description: 'Sonuç ve plana dahil edilen tedavilerin bakımı gözden geçirilir.' },
        ],
        timeline: 'Gülüş tasarımı birkaç randevudan birkaç hafta veya daha uzun sürebilir. Zamanlama tedavi kombinasyonuna, laboratuvar aşamalarına, iyileşmeye ve uygulama sırasına bağlıdır.',
        planFactors: ['Diş, diş eti ve gülüş oranları', 'İstenen değişimin seviyesi', 'Seçilen işlemler', 'Malzeme seçimleri', 'Tedavi sırası ve bakım'],
        pricing: 'Tahmini ücret; muayene, materyaller ve tedavi kapsamına göre belirlenir.',
        faqs: [
          { question: 'Hangi tedaviler bir arada planlanabilir?', answer: 'İhtiyaçlarınıza göre değerlendirme sonrasında beyazlatma, bonding, lamina, kuron, diş eti bakımı veya restoratif tedavi bir arada planlanabilir.' },
          { question: 'Mutlaka lamina gerekir mi?', answer: 'Hayır. Gülüş planı başka tedavileri kullanabilir veya tek bir konuya odaklanabilir. Uygun yaklaşım diş sağlığınıza ve hedeflerinize bağlıdır.' },
          { question: 'Gülüşü önceden görebilir miyim?', answer: 'Ekip, tedavi kesinleşmeden önce durumunuza uygun tasarım, önizleme veya mock-up adımlarını açıklar.' },
          { question: 'Tedavi sırası nasıl belirlenir?', answer: 'Sıra; diş sağlığına, kapanışa, hedeflere, iyileşmeye, laboratuvar aşamalarına ve plana dahil edilen tedavilere göre belirlenir.' },
          { question: 'Toplam ücret nasıl hesaplanır?', answer: 'Tahmini ücret; dahil edilen tedavilere, diş sayısına, malzemelere, hazırlığa, laboratuvar çalışmasına ve kişisel plana bağlıdır.' },
        ],
        aftercare: 'Bakım sonrası dahil edilen tedavilere göre temizlik, kapanış, diş eti, restorasyon ve takip bakımını kapsar.',
        metadata: {
          title: 'İstanbul’da Gülüş Tasarımı | Luma Dental Istanbul',
          description: 'İstanbul’da yüz özelliklerinize, diş sağlığınıza ve istediğiniz değişim seviyesine göre planlanan gülüş tasarımını görüşün.',
        },
        imageAlt: 'Aydınlık bir klinikte diş hekimiyle gülüş tasarımı önizlemesini inceleyen hasta.',
      },
    },
  },
  {
    slug: 'all-on-4',
    featuredOnHomepage: false,
    order: 6,
    image: '/images/treatments/all-on-4.webp',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'All-on-4 / All-on-6',
        summary: 'Full-arch implant-supported options can be discussed when several teeth are missing or a wider restorative plan is being considered.',
        cardDetails: ['Full-arch assessment', 'Healing phases considered'],
        quickFacts: { startingPrice: 'From €4,000 / arch', appointmentCount: 'Multiple visits', typicalTimeline: 'Usually several months', anaesthesia: 'Usually local' },
        priceNote: enPriceNote,
        detailIntroduction: 'Review your dental health, remaining teeth, bite and goals before discussing a full-arch route.',
        whatItIs: 'All-on-4 / All-on-6 is a fixed full-arch restoration supported by multiple implants in one jaw. Implant number, positions, prosthesis and sequence depend on anatomy, health and planning.',
        suitability: 'It may suit extensive tooth loss, failing dentition or a full-arch restorative need. Bone, gums, general health, bite, remaining teeth and hygiene affect suitability.',
        process: [
          { title: 'Full-mouth examination and imaging', description: 'The clinician reviews remaining teeth, gums, bone, anatomy, bite, health history and scans.' },
          { title: 'Implant and restoration planning', description: 'Implant positions, number, prosthesis, materials and stages are planned together.' },
          { title: 'Implant placement', description: 'The planned implants are placed in one jaw using the agreed surgical and anaesthesia plan.' },
          { title: 'Temporary or provisional restoration', description: 'A temporary full-arch restoration may be used while healing is assessed.' },
          { title: 'Healing and final prosthesis', description: 'After healing and follow-up, the final prosthesis is fitted with a maintenance plan.' },
        ],
        timeline: 'Surgical and restorative stages may span several months because healing and review are part of the process. Remaining teeth, anatomy, prosthesis stages, laboratory work or added treatment can change timing.',
        planFactors: ['Remaining teeth and gum health', 'Bone volume and anatomy', 'Implant number and position', 'Prosthesis design', 'Bite, material and maintenance'],
        pricing: 'The estimate follows examination, materials and treatment scope.',
        faqs: [
          { question: 'Is All-on-4 the same as dentures?', answer: 'No. All-on-4 describes an implant-supported full-arch restoration; the prosthesis, support strategy and maintenance plan are assessed for each case.' },
          { question: 'Why might four or six implants be considered?', answer: 'The number and positions depend on bone, anatomy, remaining teeth, prosthesis design and clinical planning rather than a standard choice for everyone.' },
          { question: 'Is a temporary fixed bridge always possible immediately?', answer: 'No. A temporary restoration depends on clinical suitability, stability, health, planning and the treatment approach.' },
          { question: 'What happens during healing?', answer: 'The implant sites and surrounding tissues are reviewed during healing, with instructions and follow-up shaped around the provisional or final restoration plan.' },
          { question: 'What affects suitability and final maintenance?', answer: 'Bone and gum health, remaining teeth, bite, general health, hygiene and the design of the final prosthesis all affect planning and ongoing maintenance.' },
        ],
        aftercare: 'Aftercare covers prosthesis and gum-area cleaning, hygiene reviews, healing guidance and maintenance.',
        metadata: {
          title: 'All-on-4 and All-on-6 in Istanbul | Luma Dental Istanbul',
          description: 'Explore full-arch implant-supported planning in Istanbul, shaped around your anatomy, dental health, bite and restorative goals.',
        },
        imageAlt: 'A full-arch implant treatment planning image in a modern clinical setting.',
      },
      tr: {
        name: 'All-on-4 / All-on-6',
        summary: 'Birden fazla diş eksikliği veya daha kapsamlı bir restoratif plan için tam çene implant destekli seçenekleri görüşün.',
        cardDetails: ['Tam çene değerlendirmesi', 'İyileşme aşamaları dikkate alınır'],
        quickFacts: { startingPrice: 'Çene başına €4.000’den başlayan', appointmentCount: 'Birden fazla randevu', typicalTimeline: 'Genellikle birkaç ay', anaesthesia: 'Genellikle lokal' },
        priceNote: trPriceNote,
        detailIntroduction: 'Tam çene yaklaşımını görüşmeden önce diş sağlığınızı, mevcut dişlerinizi, kapanışınızı ve hedeflerinizi değerlendirin.',
        whatItIs: 'All-on-4 / All-on-6, tek çenede birden fazla implantın desteklediği sabit tam çene restorasyonudur. İmplant sayısı, konumları, protez ve sıra; anatomiye, sağlığa ve planlamaya göre belirlenir.',
        suitability: 'İleri diş eksikliği, başarısız durumdaki dişler veya tam çene restorasyonu ihtiyacı için düşünülebilir. Kemik, diş eti, genel sağlık, kapanış, mevcut dişler ve hijyen uygunluğu etkiler.',
        process: [
          { title: 'Kapsamlı muayene ve görüntüleme', description: 'Klinisyen kalan dişleri, diş etlerini, kemiği, anatomiyi, kapanışı, geçmişi ve görüntülemeleri inceler.' },
          { title: 'İmplant ve restorasyon planlaması', description: 'İmplant konumları, sayısı, protez, malzemeler ve aşamalar birlikte planlanır.' },
          { title: 'İmplantların yerleştirilmesi', description: 'Planlanan implantlar üzerinde anlaşılan cerrahi ve anestezi planıyla yerleştirilir.' },
          { title: 'Geçici veya ara restorasyon', description: 'Uygun olduğunda iyileşme değerlendirilirken geçici tam çene restorasyonu kullanılır.' },
          { title: 'İyileşme ve son protez', description: 'İyileşme ve takip sonrasında son protez takılır ve bakım planı açıklanır.' },
        ],
        timeline: 'Cerrahi ve restoratif aşamalar, iyileşme ve kontroller nedeniyle birkaç aya yayılabilir. Mevcut dişler, anatomi, protez aşamaları, laboratuvar veya ek tedavi zamanlamayı değiştirir.',
        planFactors: ['Kalan dişler ve diş eti sağlığı', 'Kemik hacmi ve anatomik yapı', 'İmplant sayısı ve konumu', 'Protez tasarımı', 'Kapanış, malzeme ve bakım'],
        pricing: 'Tahmini ücret; muayene, materyaller ve tedavi kapsamına göre belirlenir.',
        faqs: [
          { question: 'All-on-4 protez dişle aynı mıdır?', answer: 'Hayır. All-on-4 implant destekli tam çene restorasyonunu ifade eder; protez, destek stratejisi ve bakım planı her durum için değerlendirilir.' },
          { question: 'Neden dört veya altı implant düşünülebilir?', answer: 'Sayı ve konum; kemiğe, anatomiye, kalan dişlere, protez tasarımına ve klinik planlamaya bağlıdır; herkes için standart değildir.' },
          { question: 'Geçici sabit köprü her zaman hemen takılabilir mi?', answer: 'Hayır. Geçici restorasyonun uygunluğu klinik duruma, stabiliteye, sağlığa, planlamaya ve tedavi yaklaşımına bağlıdır.' },
          { question: 'İyileşme sırasında ne olur?', answer: 'İyileşme sürecinde implant bölgeleri ve çevre dokular kontrol edilir; yönlendirme ve takip geçici veya son protez planına göre şekillenir.' },
          { question: 'Uygunluğu ve uzun vadeli bakımı neler etkiler?', answer: 'Kemik ve diş eti sağlığı, kalan dişler, kapanış, genel sağlık, hijyen ve son protezin tasarımı planlamayı ve sürekli bakımı etkiler.' },
        ],
        aftercare: 'Bakım sonrası protez ve diş eti bölgelerinin temizliği, hijyen kontrolleri, iyileşme ve bakımı kapsar.',
        metadata: {
          title: 'İstanbul’da All-on-4 ve All-on-6 | Luma Dental Istanbul',
          description: 'İstanbul’da anatomik yapınıza, diş sağlığınıza, kapanışınıza ve restoratif hedeflerinize göre tam çene implant planlamasını keşfedin.',
        },
        imageAlt: 'Modern bir klinik ortamında tam çene implant tedavisi planlamasını gösteren görsel.',
      },
    },
  },
] satisfies readonly TreatmentDefinition[]

function getDefinition(slug: string) {
  return treatmentCatalog.find((treatment) => treatment.slug === slug)
}

function hasText(value: unknown) {
  return typeof value === 'string' && value.trim().length > 0
}

function getContentIssues(content: TreatmentLocalizedContent) {
  const issues: string[] = []
  const requiredTextFields: Array<keyof TreatmentLocalizedContent> = [
    'name',
    'summary',
    'detailIntroduction',
    'whatItIs',
    'suitability',
    'timeline',
    'pricing',
    'aftercare',
    'imageAlt',
  ]

  for (const field of requiredTextFields) {
    if (!hasText(content[field])) issues.push(field)
  }

  if (!hasText(content.quickFacts.startingPrice)) issues.push('quickFacts.startingPrice')
  if (!hasText(content.quickFacts.appointmentCount)) issues.push('quickFacts.appointmentCount')
  if (!hasText(content.quickFacts.typicalTimeline)) issues.push('quickFacts.typicalTimeline')
  if (content.quickFacts.anaesthesia !== undefined && !hasText(content.quickFacts.anaesthesia)) issues.push('quickFacts.anaesthesia')
  if (!hasText(content.priceNote)) issues.push('priceNote')

  if (content.cardDetails.length === 0) issues.push('cardDetails')
  if (content.process.length < 3 || content.process.length > 5 || content.process.some((step) => !hasText(step.title) || !hasText(step.description))) issues.push('process')
  if (content.planFactors.length === 0 || content.planFactors.some((factor) => !hasText(factor))) issues.push('planFactors')
  if (content.faqs.length < 3 || content.faqs.length > 5 || content.faqs.some((faq) => !hasText(faq.question) || !hasText(faq.answer))) issues.push('faqs')
  if (!hasText(content.metadata.title)) issues.push('metadata.title')
  if (!hasText(content.metadata.description)) issues.push('metadata.description')

  return issues
}

export function getTreatmentCompletenessIssues(slug: string): Record<TreatmentLocale, string[]> {
  const definition = getDefinition(slug)
  if (!definition) return { en: ['missing definition'], tr: ['missing definition'] }

  const imageIssues = hasText(definition.image) ? [] : ['image']

  return {
    en: [...imageIssues, ...getContentIssues(definition.content.en)],
    tr: [...imageIssues, ...getContentIssues(definition.content.tr)],
  }
}

export function isTreatmentComplete(slug: string) {
  const issues = getTreatmentCompletenessIssues(slug)
  return issues.en.length === 0 && issues.tr.length === 0
}

export function getTreatmentBySlug(slug: string): TreatmentDefinition | undefined {
  const definition = getDefinition(slug)
  return definition && isTreatmentComplete(slug) ? definition : undefined
}

export function getLocalizedTreatment(slug: string, locale: TreatmentLocale) {
  return getTreatmentBySlug(slug)?.content[locale]
}

export function getFeaturedTreatments(locale: TreatmentLocale): HomepageTreatment[] {
  return getHomepageTreatments(locale, (definition) => definition.featuredOnHomepage)
}

export function getAllTreatments(locale: TreatmentLocale): HomepageTreatment[] {
  return getHomepageTreatments(locale)
}

function getHomepageTreatments(
  locale: TreatmentLocale,
  filter?: (definition: TreatmentDefinition) => boolean,
): HomepageTreatment[] {
  return treatmentCatalog
    .filter((definition) => filter?.(definition) ?? true)
    .sort((a, b) => a.order - b.order)
    .flatMap((definition) => {
      const content = definition.content[locale]
      if (!content) return []

      return [{
        id: definition.slug,
        name: content.name,
        summary: content.summary,
        details: content.cardDetails,
        image: definition.image,
        imageAlt: content.imageAlt,
      }]
    })
}
