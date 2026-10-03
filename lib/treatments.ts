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
        detailIntroduction: 'Start with a clear review of your dental health, the concerns you have noticed and the everyday care that may help.',
        whatItIs: 'Routine and preventive care is the regular dental care used to examine teeth and gums, remove professional plaque and calculus, treat fillings where needed, assess gum concerns, and plan maintenance before small issues grow.',
        suitability: 'Routine care is commonly considered for check-ups, professional hygiene, prevention, fillings, gum concerns or a new symptom. The plan may change if decay, gum inflammation, sensitivity or another issue is found during the examination.',
        process: [
          { title: 'Examination and history', description: 'The clinician reviews your symptoms, dental history, teeth, gums and any records you bring.' },
          { title: 'Hygiene and diagnostics', description: 'Professional cleaning or focused diagnostic checks are completed where they are appropriate.' },
          { title: 'Treat active concerns', description: 'Fillings, gum care or another immediate concern can be discussed and treated when suitable.' },
          { title: 'Build a home-care plan', description: 'You receive practical guidance for brushing, interdental care and prevention.' },
          { title: 'Set recall and maintenance', description: 'Future reviews are planned around your health and the care you need, without assuming one fixed interval.' },
        ],
        timeline: 'Routine care is often completed in one visit when no additional treatment is needed. A filling, gum treatment, further diagnostic work or a hygiene follow-up may add appointments, and the schedule is adjusted to what the examination finds.',
        planFactors: ['Current dental health', 'Gum condition', 'Plaque and calculus build-up', 'Active decay or symptoms', 'Preventive needs'],
        pricing: 'Final estimate depends on examination, materials and treatment scope.',
        faqs: [
          { question: 'What happens at a routine check-up?', answer: 'The clinician reviews your history, examines your teeth and gums, discusses any concerns and explains the next appropriate steps.' },
          { question: 'Is professional cleaning included?', answer: 'Professional cleaning may be included when it is appropriate, but the exact scope is confirmed after your needs are assessed.' },
          { question: 'Could a filling be done at the same visit?', answer: 'Sometimes, if the examination, timing and tooth condition make same-visit treatment appropriate.' },
          { question: 'How often should routine appointments be planned?', answer: 'The interval depends on your dental health, gum condition, risk factors and maintenance needs rather than one fixed schedule.' },
        ],
        aftercare: 'Aftercare can include home-care guidance, advice for any treated tooth or gum concern, and a recall or maintenance plan shaped around your ongoing needs.',
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
        detailIntroduction: 'Diş sağlığınızı, fark ettiğiniz endişeleri ve günlük bakımınız için faydalı olabilecek adımları açık bir değerlendirmeyle ele alın.',
        whatItIs: 'Rutin ve koruyucu bakım; dişleri ve diş etlerini muayene etmeyi, profesyonel plak ve diş taşı temizliğini, gerektiğinde dolguları, diş eti değerlendirmesini ve küçük sorunların ilerlemesini önlemeye yönelik bakım planını kapsar.',
        suitability: 'Rutin bakım; kontrol, profesyonel hijyen, korunma, dolgu, diş eti endişeleri veya yeni bir belirti için düşünülebilir. Muayenede çürük, diş eti iltihabı, hassasiyet veya başka bir sorun görülürse plan değişebilir.',
        process: [
          { title: 'Muayene ve geçmiş', description: 'Klinisyen belirtilerinizi, diş geçmişinizi, dişlerinizi, diş etlerinizi ve getirdiğiniz kayıtları inceler.' },
          { title: 'Hijyen ve tanısal kontroller', description: 'Uygun olduğunda profesyonel temizlik veya odaklanmış tanısal kontroller tamamlanır.' },
          { title: 'Aktif sorunları ele alın', description: 'Uygun olduğunda dolgu, diş eti bakımı veya başka bir güncel sorun görüşülür ve tedavi edilir.' },
          { title: 'Evde bakım planı', description: 'Fırçalama, diş arası temizliği ve korunma için pratik yönlendirme verilir.' },
          { title: 'Kontrol ve bakım planı', description: 'Gelecek kontroller sağlığınıza ve ihtiyaç duyduğunuz bakıma göre planlanır; tek bir sabit aralık varsayılmaz.' },
        ],
        timeline: 'Başka bir tedavi gerekmiyorsa rutin bakım çoğunlukla tek randevuda tamamlanır. Dolgu, diş eti tedavisi, ek tanısal çalışma veya hijyen takibi randevu sayısını artırabilir; zamanlama muayenede görülenlere göre düzenlenir.',
        planFactors: ['Mevcut diş sağlığı', 'Diş eti durumu', 'Plak ve diş taşı birikimi', 'Aktif çürük veya belirtiler', 'Koruyucu bakım ihtiyaçları'],
        pricing: 'Nihai tahmini ücret; muayene, kullanılan materyaller ve tedavi kapsamına göre değişir.',
        faqs: [
          { question: 'Rutin kontrolde neler olur?', answer: 'Klinisyen geçmişinizi inceler, dişlerinizi ve diş etlerinizi muayene eder, endişelerinizi dinler ve uygun sonraki adımları açıklar.' },
          { question: 'Profesyonel temizlik dahil midir?', answer: 'Uygun olduğunda profesyonel temizlik planlanabilir; ancak kapsam ihtiyaçlarınız değerlendirildikten sonra netleşir.' },
          { question: 'Dolgu aynı randevuda yapılabilir mi?', answer: 'Muayene, süre ve dişin durumu uygun olduğunda bazen aynı randevuda yapılabilir.' },
          { question: 'Rutin randevular ne sıklıkta planlanır?', answer: 'Aralık; diş sağlığınıza, diş eti durumunuza, risk faktörlerinize ve bakım ihtiyaçlarınıza göre belirlenir; tek bir sabit program yoktur.' },
        ],
        aftercare: 'Bakım sonrası; evde bakım yönlendirmesini, tedavi edilen diş veya diş eti sorununa yönelik önerileri ve ihtiyaçlarınıza göre kontrol veya bakım planını içerebilir.',
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
    image: '/images/treatments/dental-implants.png',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'Dental Implants',
        summary: 'A structured way to discuss replacing one or more missing teeth, with planning shaped around your bone, bite and wider health.',
        cardDetails: ['Timing after assessment', '3D CBCT planning'],
        quickFacts: { startingPrice: 'From €500', appointmentCount: 'Multiple visits', typicalTimeline: 'Usually several months', anaesthesia: 'Usually local' },
        priceNote: enPriceNote,
        detailIntroduction: 'If you are considering replacing missing teeth, begin with an assessment that explains the available routes and the information still needed.',
        whatItIs: 'A dental implant is a titanium fixture, or a zirconia alternative where clinically appropriate, placed in the jawbone to replace a missing tooth root. After planning and healing as appropriate, a crown, bridge or other restoration is attached to replace the visible tooth.',
        suitability: 'Implants are commonly considered when one or more teeth are missing and a fixed or implant-supported replacement is being explored. Bone quantity and quality, gum health, general health, smoking, bite and possible grafting needs can affect suitability, so records and an examination are required.',
        process: [
          { title: 'Consultation, examination and imaging', description: 'The clinician reviews the missing tooth or teeth, gum health, bite, medical history and relevant scans.' },
          { title: 'Implant planning', description: 'The position, number, material options and restoration design are planned around your anatomy.' },
          { title: 'Implant placement', description: 'The implant fixture is placed in the jawbone using the agreed surgical plan and anaesthesia approach.' },
          { title: 'Healing and integration', description: 'A healing period allows the implant and surrounding tissues to be reviewed before the final restoration.' },
          { title: 'Final crown or restoration', description: 'The planned crown, bridge or other restoration is fitted and the maintenance steps are explained.' },
        ],
        timeline: 'Implant placement may take one appointment, but the complete process commonly spans several months because the implant and surrounding tissues may need time to heal before the final crown or restoration. Grafting, multiple sites, lab stages or healing may extend the schedule.',
        planFactors: ['Bone quantity and quality', 'Gum health', 'Implant location and number', 'Bite and existing teeth', 'Smoking and medical history', 'Possible grafting needs'],
        pricing: 'Final estimate depends on examination, materials and treatment scope.',
        faqs: [
          { question: 'Do I need enough bone for an implant?', answer: 'Bone quantity and quality are assessed as part of planning. If support is limited, the clinician explains which options may be relevant.' },
          { question: 'Could I need bone grafting?', answer: 'Grafting may be discussed when the planned implant position needs additional support; whether it is appropriate depends on imaging and examination.' },
          { question: 'How long until the final tooth is fitted?', answer: 'The final restoration may be fitted after the implant and surrounding tissues have healed. The timing is confirmed around your plan and reviews.' },
          { question: 'Can I start planning before travelling?', answer: 'You can share your starting information and records before travelling, but final suitability and treatment planning require appropriate assessment.' },
          { question: 'Is implant treatment painful?', answer: 'The team discusses anaesthesia, healing and aftercare for your plan. Experience varies, and no treatment outcome or comfort level can be guaranteed.' },
        ],
        aftercare: 'Aftercare includes hygiene around the implant site, healing instructions, planned follow-ups and long-term maintenance for the implant and final restoration.',
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
        detailIntroduction: 'Eksik dişleri tamamlamayı düşünüyorsanız, seçenekleri ve hâlâ ihtiyaç duyulan bilgileri açıklayan bir değerlendirmeyle başlayın.',
        whatItIs: 'Diş implantı; eksik diş kökünü değiştirmek için çene kemiğine yerleştirilen titanyum bir implant gövdesini veya klinik olarak uygun olduğunda zirkonyum alternatifi içerir. Uygun planlama ve iyileşme sonrasında görünen dişi tamamlamak için kuron, köprü veya başka bir restorasyon takılır.',
        suitability: 'İmplantlar bir veya daha fazla dişi eksik olan ve sabit veya implant destekli bir seçenek değerlendiren kişiler için gündeme gelebilir. Kemik miktarı ve kalitesi, diş eti sağlığı, genel sağlık, sigara kullanımı, kapanış ve olası kemik ekleme ihtiyacı uygunluğu etkileyebilir; bu nedenle kayıtlar ve muayene gerekir.',
        process: [
          { title: 'Görüşme, muayene ve görüntüleme', description: 'Klinisyen eksik dişi veya dişleri, diş eti sağlığını, kapanışı, sağlık geçmişini ve ilgili görüntülemeleri değerlendirir.' },
          { title: 'İmplant planlaması', description: 'Konum, sayı, malzeme seçenekleri ve restorasyon tasarımı anatomik yapınıza göre planlanır.' },
          { title: 'İmplantın yerleştirilmesi', description: 'İmplant gövdesi, üzerinde anlaşılan cerrahi plan ve anestezi yaklaşımıyla çene kemiğine yerleştirilir.' },
          { title: 'İyileşme ve bütünleşme', description: 'Son restorasyon öncesinde implantın ve çevre dokuların değerlendirilmesini sağlayan bir iyileşme dönemi olur.' },
          { title: 'Son kuron veya restorasyon', description: 'Planlanan kuron, köprü veya başka bir restorasyon takılır ve bakım adımları açıklanır.' },
        ],
        timeline: 'İmplantın yerleştirilmesi tek randevu sürebilir; ancak implantın ve çevre dokuların son kuron veya restorasyon öncesinde iyileşmesi gerekebildiği için toplam süreç çoğunlukla birkaç aya yayılır. Kemik ekleme, birden fazla bölge, laboratuvar aşamaları veya iyileşme süreci zamanlamayı uzatabilir.',
        planFactors: ['Kemik miktarı ve kalitesi', 'Diş eti sağlığı', 'İmplantın konumu ve sayısı', 'Kapanış ve mevcut dişler', 'Sigara ve sağlık geçmişi', 'Olası kemik ekleme ihtiyacı'],
        pricing: 'Nihai tahmini ücret; muayene, kullanılan materyaller ve tedavi kapsamına göre değişir.',
        faqs: [
          { question: 'İmplant için yeterli kemiğe sahip olmam gerekir mi?', answer: 'Planlamanın parçası olarak kemiğin miktarı ve kalitesi değerlendirilir. Destek sınırlıysa klinisyen ilgili seçenekleri açıklar.' },
          { question: 'Kemik ekleme gerekebilir mi?', answer: 'Planlanan implant konumu ek desteğe ihtiyaç duyduğunda kemik ekleme görüşülebilir; uygunluk görüntüleme ve muayeneye bağlıdır.' },
          { question: 'Son diş ne zaman takılır?', answer: 'Son restorasyon implant ve çevre dokular iyileştikten sonra takılabilir. Zamanlama planınıza ve kontrollerinize göre netleşir.' },
          { question: 'Seyahat etmeden önce planlamaya başlayabilir miyim?', answer: 'Başlangıç bilgilerinizi ve kayıtlarınızı seyahatten önce paylaşabilirsiniz; ancak nihai uygunluk ve tedavi planı için uygun değerlendirme gerekir.' },
          { question: 'İmplant tedavisi ağrılı mıdır?', answer: 'Ekip planınıza göre anesteziyi, iyileşmeyi ve bakım sonrasını açıklar. Deneyim kişiden kişiye değişir; ağrı veya konfor konusunda garanti verilemez.' },
        ],
        aftercare: 'Bakım sonrası; implant bölgesinin temizliği, iyileşme yönlendirmesi, planlanan kontroller ve implant ile son restorasyon için uzun vadeli bakımı kapsar.',
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
    image: '/images/treatments/veneers.png',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'Veneers',
        summary: 'Thin porcelain or composite veneers can be discussed to refine shape, shade and alignment with a natural-looking result in mind.',
        cardDetails: ['Appointment plan after assessment', 'Shade matched in clinic'],
        quickFacts: { startingPrice: 'From €180 / tooth', appointmentCount: '2–3 visits', typicalTimeline: 'Several days to 1–2 weeks', anaesthesia: 'If preparation is needed' },
        priceNote: enPriceNote,
        detailIntroduction: 'Start with a conversation about the features you would like to refine and the level of change that feels right for you.',
        whatItIs: 'Veneers are thin porcelain or composite shells bonded to the visible front surface of selected teeth. They can change shape, shade and proportion, improve minor alignment, or soften the appearance of worn or chipped teeth; preparation depends on the tooth and the agreed plan.',
        suitability: 'Veneers are commonly considered for changes to shape, shade, proportion, minor alignment or worn and chipped appearance. Enamel condition, bite, gum health, alignment, bruxism and the amount of change you want can affect suitability; zero-preparation treatment is not appropriate for every tooth.',
        process: [
          { title: 'Consultation and smile assessment', description: 'You discuss the shape, shade, proportion and level of change you would like to explore.' },
          { title: 'Tooth, gum and scan assessment', description: 'The clinician reviews enamel, gums, bite, alignment and scans needed for responsible planning.' },
          { title: 'Design and mock-up where appropriate', description: 'Possible shapes, shades and a preview or mock-up are discussed when they are suitable for your case.' },
          { title: 'Preparation and veneer production', description: 'If agreed, teeth are prepared as needed and the selected veneers are produced to the planned design.' },
          { title: 'Final fit and bonding', description: 'The restorations are checked, adjusted where needed and bonded after the plan is confirmed.' },
        ],
        timeline: 'Veneers commonly involve two to three appointments over several days to around one to two weeks. The workflow can take longer when more teeth are involved, a laboratory stage is needed, preparation is complex or design changes are requested.',
        planFactors: ['Enamel condition', 'Bite and bruxism considerations', 'Gum health and tooth alignment', 'Shade and shape goals', 'Number of teeth', 'Material and preparation choice'],
        pricing: 'Final estimate depends on examination, materials and treatment scope.',
        faqs: [
          { question: 'Will my natural teeth need preparation?', answer: 'Preparation depends on the tooth, material, bite and agreed design. The amount is discussed after the tooth and surrounding tissues are assessed.' },
          { question: 'Should I choose porcelain or composite?', answer: 'The materials differ in workflow, appearance, maintenance and suitability. The appropriate comparison depends on your teeth and goals.' },
          { question: 'How many teeth might be treated?', answer: 'The number depends on the smile features you want to change, your bite and the plan that is appropriate for your dental health.' },
          { question: 'Can shade and shape be previewed?', answer: 'Shade and shape can be discussed, and preview or mock-up steps may be used when they are suitable for your case.' },
          { question: 'How long do veneers last?', answer: 'Veneers are planned as a longer-term restoration, but their lifespan varies with material, bite, care and daily habits, so no fixed duration is guaranteed.' },
        ],
        aftercare: 'Aftercare includes careful cleaning, bite awareness, avoiding habits that could damage restorations and follow-up appropriate to the veneers and your wider dental health.',
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
        detailIntroduction: 'İyileştirmek istediğiniz özellikleri ve sizin için doğru görünen değişimin seviyesini konuşarak başlayın.',
        whatItIs: 'Laminalar, seçilen dişlerin görünen ön yüzeyine yapıştırılan ince porselen veya kompozit kabuklardır. Şekli, rengi ve oranı değiştirmeye, hafif hizalama sorunlarını iyileştirmeye veya aşınmış ve kırılmış dişlerin görünümünü yumuşatmaya yardımcı olabilir; hazırlık dişe ve planınıza göre değişir.',
        suitability: 'Laminalar şekil, renk, oran, hafif hizalama veya aşınmış ve kırılmış görünümdeki değişiklikler için düşünülebilir. Mine durumu, kapanış, diş eti sağlığı, hizalama, diş sıkma ve istediğiniz değişimin seviyesi uygunluğu etkileyebilir; preparasyonsuz uygulama her diş için uygun değildir.',
        process: [
          { title: 'Görüşme ve gülüş değerlendirmesi', description: 'Keşfetmek istediğiniz şekil, renk, oran ve değişim seviyesini konuşursunuz.' },
          { title: 'Diş, diş eti ve tarama değerlendirmesi', description: 'Klinisyen sorumlu planlama için mineyi, diş etlerini, kapanışı, hizayı ve gereken taramaları inceler.' },
          { title: 'Tasarım ve uygun olduğunda mock-up', description: 'Durumunuza uygun olduğunda olası şekiller, renkler ve önizleme veya mock-up adımı görüşülür.' },
          { title: 'Hazırlık ve lamina üretimi', description: 'Üzerinde anlaşıldığında dişler gerektiği kadar hazırlanır ve seçilen laminalar tasarıma göre üretilir.' },
          { title: 'Son uyum ve yapıştırma', description: 'Restorasyonlar kontrol edilir, gerektiğinde ayarlanır ve plan onaylandıktan sonra yapıştırılır.' },
        ],
        timeline: 'Laminalar çoğunlukla birkaç gün ile yaklaşık bir veya iki hafta içinde iki veya üç randevu gerektirir. Diş sayısı arttığında, laboratuvar aşaması gerektiğinde, hazırlık karmaşık olduğunda veya tasarım değişikliği istendiğinde süreç uzayabilir.',
        planFactors: ['Mine durumu', 'Kapanış ve diş sıkma değerlendirmesi', 'Diş eti sağlığı ve diş hizası', 'Renk ve şekil hedefleri', 'Diş sayısı', 'Malzeme ve hazırlık seçimi'],
        pricing: 'Nihai tahmini ücret; muayene, kullanılan materyaller ve tedavi kapsamına göre değişir.',
        faqs: [
          { question: 'Doğal dişlerimde hazırlık gerekir mi?', answer: 'Hazırlık dişe, malzemeye, kapanışa ve üzerinde anlaşılan tasarıma bağlıdır. Miktar, diş ve çevre dokular değerlendirildikten sonra görüşülür.' },
          { question: 'Porselen mi kompozit mi seçmeliyim?', answer: 'Malzemeler süreç, görünüm, bakım ve uygunluk açısından farklıdır. Uygun karşılaştırma dişlerinize ve hedeflerinize bağlıdır.' },
          { question: 'Kaç diş tedavi edilebilir?', answer: 'Sayı; değiştirmek istediğiniz gülüş özelliklerine, kapanışınıza ve diş sağlığınıza uygun plana göre belirlenir.' },
          { question: 'Renk ve şekli önceden görebilir miyim?', answer: 'Renk ve şekil görüşülebilir; durumunuza uygun olduğunda önizleme veya mock-up adımları kullanılabilir.' },
          { question: 'Laminalar ne kadar dayanır?', answer: 'Laminalar uzun süreli restorasyon olarak planlanır; ancak ömür malzemeye, kapanışa, bakıma ve günlük alışkanlıklara göre değişir, sabit süre garanti edilemez.' },
        ],
        aftercare: 'Bakım sonrası; dikkatli temizliği, kapanışa dikkat etmeyi, restorasyonlara zarar verebilecek alışkanlıklardan kaçınmayı ve laminalar ile genel diş sağlığınıza uygun takibi kapsar.',
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
    image: '/images/editorial/routine-care.jpg',
    imageStatus: 'prototype-placeholder',
    imageNote: 'No dedicated crowns asset is available yet; this uses the existing routine-care editorial image as a documented prototype placeholder.',
    content: {
      en: {
        name: 'Crowns',
        summary: 'Crowns can be discussed when a tooth needs added support, shape or coverage as part of a wider restorative plan.',
        cardDetails: ['Bite and shade planning', 'Timing after assessment'],
        quickFacts: { startingPrice: 'From €180 / tooth', appointmentCount: '2–3 visits', typicalTimeline: 'Several days to 1–2 weeks', anaesthesia: 'Usually local if needed' },
        priceNote: enPriceNote,
        detailIntroduction: 'Begin with an assessment of the tooth or teeth you are concerned about and a conversation about the result you want to maintain.',
        whatItIs: 'A crown is a custom restoration that covers most or all of the visible tooth structure to restore strength, shape and function. It may be considered for a heavily restored, fractured, root-canal-treated or worn tooth, and can use different materials depending on the tooth, bite and plan.',
        suitability: 'Crowns are commonly considered for a heavily restored, fractured, root-canal-treated or significantly worn tooth that needs coverage and support. Remaining tooth structure, root health, gum health, bite, adjacent teeth and material choice all affect suitability, so the tooth and surrounding tissues must be examined first.',
        process: [
          { title: 'Examination and tooth/root assessment', description: 'The clinician checks remaining tooth structure, root health, gums, bite and any existing restoration.' },
          { title: 'Tooth preparation', description: 'The tooth is shaped as needed so the planned crown can cover and restore it appropriately.' },
          { title: 'Scan or impression', description: 'A scan or impression records the prepared tooth and surrounding bite for the laboratory stage.' },
          { title: 'Temporary crown if needed', description: 'A temporary restoration may be used while the final crown is being produced and reviewed.' },
          { title: 'Final crown fit and cementation', description: 'The final crown is checked for fit, bite and appearance before it is cemented.' },
        ],
        timeline: 'Crowns commonly involve two to three appointments over several days to around one to two weeks. Laboratory workflow, the condition of the tooth, the need for a temporary crown and any root or gum treatment can extend the schedule.',
        planFactors: ['Remaining tooth structure', 'Root health', 'Gum health and bite', 'Existing restorations and adjacent teeth', 'Material and shade selection'],
        pricing: 'Final estimate depends on examination, materials and treatment scope.',
        faqs: [
          { question: 'Why might I need a crown instead of a filling?', answer: 'A crown may be discussed when a tooth needs more support or coverage than a filling can provide. The clinician confirms the appropriate option after assessment.' },
          { question: 'What crown materials are available?', answer: 'Material options vary by tooth, bite, appearance, strength and the treatment plan. The team explains the relevant choices for your case.' },
          { question: 'Will I have a temporary crown?', answer: 'A temporary restoration may be used while the final crown is produced or while the tooth is reviewed, when appropriate.' },
          { question: 'How long does the crown process take?', answer: 'It commonly involves two to three appointments over several days to around one to two weeks, with timing affected by laboratory work and tooth condition.' },
          { question: 'Can a crowned tooth need future treatment?', answer: 'A crowned tooth still needs cleaning and review, and future treatment can be needed if the tooth, gums or surrounding bite changes.' },
        ],
        aftercare: 'Aftercare includes cleaning around the crown, monitoring your bite, avoiding habits that could damage the restoration and returning for regular review when advised.',
        metadata: {
          title: 'Dental Crowns in Istanbul | Luma Dental Istanbul',
          description: 'Explore dental crown planning in Istanbul for teeth that may need support, coverage or a carefully considered restoration.',
        },
        imageAlt: 'A bright dental treatment room used as a prototype image for crown planning.',
      },
      tr: {
        name: 'Kuronlar',
        summary: 'Daha geniş bir restoratif planın parçası olarak desteğe, şekle veya kaplamaya ihtiyaç duyan dişler için kuronları görüşün.',
        cardDetails: ['Kapanış ve renk planlaması', 'Değerlendirme sonrası zamanlama'],
        quickFacts: { startingPrice: 'Diş başına €180’den başlayan', appointmentCount: '2–3 randevu', typicalTimeline: 'Birkaç gün ile 1–2 hafta', anaesthesia: 'Gerekirse genellikle lokal' },
        priceNote: trPriceNote,
        detailIntroduction: 'Endişe duyduğunuz dişi veya dişleri değerlendirerek ve korumak istediğiniz sonucu konuşarak başlayın.',
        whatItIs: 'Kuron, görünen diş yapısının büyük bölümünü veya tamamını kaplayarak dişin gücünü, şeklini ve işlevini geri kazandıran kişiye özel bir restorasyondur. İleri restorasyon görmüş, kırılmış, kanal tedavisi uygulanmış veya aşınmış dişlerde düşünülebilir; malzeme dişe, kapanışa ve plana göre değişir.',
        suitability: 'Kuronlar ileri restorasyon görmüş, kırılmış, kanal tedavili veya belirgin şekilde aşınmış ve kaplama ile desteğe ihtiyaç duyabilecek dişlerde düşünülebilir. Kalan diş dokusu, kök sağlığı, diş eti, kapanış, komşu dişler ve malzeme seçimi uygunluğu etkiler; önce diş ve çevre dokular muayene edilmelidir.',
        process: [
          { title: 'Dişi ve kökü değerlendirin', description: 'Klinisyen kalan diş dokusunu, kök sağlığını, diş etlerini, kapanışı ve mevcut restorasyonu inceler.' },
          { title: 'Dişi hazırlayın', description: 'Diş, planlanan kuronun uygun şekilde kaplayıp onarabilmesi için gerektiği kadar şekillendirilir.' },
          { title: 'Tarama veya ölçü', description: 'Hazırlanan diş ve çevresindeki kapanış laboratuvar aşaması için tarama veya ölçüyle kaydedilir.' },
          { title: 'Gerekirse geçici kuron', description: 'Son kuron hazırlanırken ve kontrol edilirken geçici bir restorasyon kullanılabilir.' },
          { title: 'Son kuronun uyumu ve yapıştırılması', description: 'Son kuron yapıştırılmadan önce uyum, kapanış ve görünüm açısından kontrol edilir.' },
        ],
        timeline: 'Kuronlar çoğunlukla birkaç gün ile yaklaşık bir veya iki hafta içinde iki veya üç randevu gerektirir. Laboratuvar süreci, dişin durumu, geçici kuron ihtiyacı ve kök veya diş eti tedavisi zamanlamayı uzatabilir.',
        planFactors: ['Kalan diş dokusu', 'Kök sağlığı', 'Diş eti sağlığı ve kapanış', 'Mevcut restorasyonlar ve komşu dişler', 'Malzeme ve renk seçimi'],
        pricing: 'Nihai tahmini ücret; muayene, kullanılan materyaller ve tedavi kapsamına göre değişir.',
        faqs: [
          { question: 'Dolgu yerine neden kuron gerekebilir?', answer: 'Diş bir dolgudan daha fazla desteğe veya kaplamaya ihtiyaç duyduğunda kuron gündeme gelebilir. Uygun seçenek muayeneden sonra belirlenir.' },
          { question: 'Hangi kuron malzemeleri kullanılabilir?', answer: 'Malzeme seçenekleri dişe, kapanışa, görünüme, dayanıklılık ihtiyacına ve tedavi planına göre değişir. Ekip durumunuza uygun seçenekleri açıklar.' },
          { question: 'Geçici kuron takılır mı?', answer: 'Son kuron üretilirken veya diş değerlendirilirken, uygun olduğunda geçici restorasyon kullanılabilir.' },
          { question: 'Kuron süreci ne kadar sürer?', answer: 'Çoğunlukla birkaç gün ile yaklaşık bir veya iki hafta içinde iki veya üç randevu gerekir; laboratuvar çalışması ve dişin durumu süreyi etkileyebilir.' },
          { question: 'Kuronlu bir diş ileride yeniden tedavi gerektirebilir mi?', answer: 'Kuronlu dişin de temizlenmesi ve kontrolü gerekir; diş, diş etleri veya çevre kapanış değişirse ileride ek tedavi gerekebilir.' },
        ],
        aftercare: 'Bakım sonrası; kuron çevresinde temizliği, kapanışınızı izlemeyi, restorasyona zarar verebilecek alışkanlıklardan kaçınmayı ve önerildiğinde düzenli kontrole dönmeyi kapsar.',
        metadata: {
          title: 'İstanbul’da Dental Kuronlar | Luma Dental Istanbul',
          description: 'Destek, kaplama veya özenli bir restorasyona ihtiyaç duyabilecek dişler için İstanbul’da kuron planlamasını keşfedin.',
        },
        imageAlt: 'Kuron planlaması için prototip görseli olarak kullanılan aydınlık bir diş tedavi odası.',
      },
    },
  },
  {
    slug: 'smile-makeover',
    featuredOnHomepage: true,
    order: 5,
    image: '/images/treatments/smile-makeover.png',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'Smile Makeovers',
        summary: 'A considered combination of treatments designed around your features, dental health and the smile you want to see.',
        cardDetails: ['Digital smile design', 'Preview before treatment'],
        quickFacts: { startingPrice: 'From €2,500', appointmentCount: 'Varies by plan', typicalTimeline: 'Several visits to several weeks+', anaesthesia: 'Depends on included treatments' },
        priceNote: enPriceNote,
        detailIntroduction: 'A smile makeover starts with understanding what you want to change and which parts of your dental health should guide the plan.',
        whatItIs: 'A smile makeover is not one single procedure. It is a coordinated plan that may combine selected treatments such as whitening, bonding, veneers, crowns, gum-related aesthetic care, or replacement and restorative treatment where relevant to change several connected aspects of a smile.',
        suitability: 'A smile makeover is commonly considered by people who want to discuss several connected cosmetic or restorative changes. Active decay, gum problems or other health issues may need attention first, and the clinician also reviews bite, proportions, goals and the level of change you want.',
        process: [
          { title: 'Goals and concerns', description: 'You describe the features you would like to change and how you want your smile to feel.' },
          { title: 'Full dental and smile assessment', description: 'The team reviews teeth, gums, bite, proportions and any active health issues that should be addressed first.' },
          { title: 'Smile design and treatment combination', description: 'Possible procedures, materials, previews and the order of care are brought together in a considered plan.' },
          { title: 'Treatment in planned stages', description: 'The selected cosmetic or restorative procedures are delivered in an order shaped by your health and goals.' },
          { title: 'Final review and maintenance plan', description: 'The result is reviewed and the care needed for the included treatments is explained.' },
        ],
        timeline: 'A smile makeover may take several appointments over several weeks or longer. Timing depends on the combination of whitening, bonding, veneers, crowns, gum-related care or restorative treatment, as well as laboratory stages, healing and the order of care.',
        planFactors: ['Tooth and gum health', 'Bite and facial or smile proportions', 'Desired level of change', 'Selected procedures', 'Material choices', 'Treatment sequencing and maintenance'],
        pricing: 'Final estimate depends on examination, materials and treatment scope.',
        faqs: [
          { question: 'Which treatments can be combined?', answer: 'Depending on your needs, a plan may combine whitening, bonding, veneers, crowns, gum-related care or restorative treatment after assessment.' },
          { question: 'Do I automatically need veneers?', answer: 'No. A smile plan may use other treatments or focus on one concern. The suitable route depends on your dental health and goals.' },
          { question: 'Can I preview the smile?', answer: 'The team explains which design, preview or mock-up steps are appropriate for your case before treatment is confirmed.' },
          { question: 'How is the treatment sequence decided?', answer: 'The sequence is shaped by dental health, bite, goals, healing, laboratory stages and the treatments included in the plan.' },
          { question: 'How is the total price calculated?', answer: 'The estimate depends on the included treatments, number of teeth, materials, preparation, laboratory work and your individual plan.' },
        ],
        aftercare: 'Aftercare depends on the treatments included and may combine guidance for cleaning, bite protection, gum care, restoration maintenance and follow-up reviews.',
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
        detailIntroduction: 'Gülüş tasarımı, neyi değiştirmek istediğinizi ve diş sağlığınızın planı nasıl yönlendirmesi gerektiğini anlamakla başlar.',
        whatItIs: 'Gülüş tasarımı tek bir işlem değildir. Gülüşün birbiriyle bağlantılı birkaç özelliğini değiştirmek için beyazlatma, bonding, lamina, kuron, diş eti estetiği veya uygun olduğunda eksik dişlerin restorasyonu gibi seçilmiş tedavileri bir araya getiren koordineli bir plandır.',
        suitability: 'Birbiriyle bağlantılı birkaç estetik veya restoratif değişikliği görüşmek isteyen kişiler için gülüş tasarımı düşünülebilir. Aktif çürük, diş eti sorunu veya başka sağlık ihtiyaçları önce ele alınabilir; klinisyen ayrıca kapanışı, oranları, hedefleri ve istediğiniz değişim seviyesini değerlendirir.',
        process: [
          { title: 'Hedefler ve endişeler', description: 'Değiştirmek istediğiniz özellikleri ve gülüşünüzün sizin için nasıl hissettirmesini istediğinizi anlatırsınız.' },
          { title: 'Kapsamlı diş ve gülüş değerlendirmesi', description: 'Ekip dişleri, diş etlerini, kapanışı, oranları ve önce ele alınması gereken aktif sorunları inceler.' },
          { title: 'Gülüş tasarımı ve tedavi kombinasyonu', description: 'Olası işlemler, malzemeler, önizlemeler ve bakım sırası düşünülmüş bir planda bir araya getirilir.' },
          { title: 'Planlanan aşamalarda tedavi', description: 'Seçilen estetik veya restoratif işlemler sağlığınıza ve hedeflerinize göre belirlenen sırayla uygulanır.' },
          { title: 'Son kontrol ve bakım planı', description: 'Sonuç gözden geçirilir ve plana dahil edilen tedavilere yönelik bakım açıklanır.' },
        ],
        timeline: 'Gülüş tasarımı birkaç randevudan birkaç hafta veya daha uzun bir sürece yayılabilir. Zamanlama; beyazlatma, bonding, lamina, kuron, diş eti bakımı veya restoratif tedavinin kombinasyonuna, laboratuvar aşamalarına, iyileşmeye ve uygulama sırasına bağlıdır.',
        planFactors: ['Diş ve diş eti sağlığı', 'Kapanış ve yüz veya gülüş oranları', 'İstenen değişimin seviyesi', 'Seçilen işlemler', 'Malzeme seçimleri', 'Tedavi sırası ve bakım'],
        pricing: 'Nihai tahmini ücret; muayene, kullanılan materyaller ve tedavi kapsamına göre değişir.',
        faqs: [
          { question: 'Hangi tedaviler bir arada planlanabilir?', answer: 'İhtiyaçlarınıza göre değerlendirme sonrasında beyazlatma, bonding, lamina, kuron, diş eti bakımı veya restoratif tedavi bir arada planlanabilir.' },
          { question: 'Mutlaka lamina gerekir mi?', answer: 'Hayır. Gülüş planı başka tedavileri kullanabilir veya tek bir konuya odaklanabilir. Uygun yaklaşım diş sağlığınıza ve hedeflerinize bağlıdır.' },
          { question: 'Gülüşü önceden görebilir miyim?', answer: 'Ekip, tedavi kesinleşmeden önce durumunuza uygun tasarım, önizleme veya mock-up adımlarını açıklar.' },
          { question: 'Tedavi sırası nasıl belirlenir?', answer: 'Sıra; diş sağlığına, kapanışa, hedeflere, iyileşmeye, laboratuvar aşamalarına ve plana dahil edilen tedavilere göre belirlenir.' },
          { question: 'Toplam ücret nasıl hesaplanır?', answer: 'Tahmini ücret; dahil edilen tedavilere, diş sayısına, malzemelere, hazırlığa, laboratuvar çalışmasına ve kişisel plana bağlıdır.' },
        ],
        aftercare: 'Bakım sonrası, dahil edilen tedavilere göre temizlik, kapanışı koruma, diş eti bakımı, restorasyonların bakımı ve takip kontrollerini birleştirir.',
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
    image: '/images/treatments/all-on-4.png',
    imageStatus: 'dedicated',
    content: {
      en: {
        name: 'All-on-4 / All-on-6',
        summary: 'Full-arch implant-supported options can be discussed when several teeth are missing or a wider restorative plan is being considered.',
        cardDetails: ['Full-arch assessment', 'Healing phases considered'],
        quickFacts: { startingPrice: 'From €4,000 / arch', appointmentCount: 'Multiple visits', typicalTimeline: 'Usually several months', anaesthesia: 'Usually local' },
        priceNote: enPriceNote,
        detailIntroduction: 'Begin with a complete review of your dental health, existing teeth, bite and goals before discussing a full-arch route.',
        whatItIs: 'All-on-4 / All-on-6 is a fixed full-arch restoration supported by multiple implants placed in one jaw. The terms describe different implant-support strategies; the number, positions, prosthesis design and treatment sequence depend on anatomy, health and clinical planning.',
        suitability: 'All-on-4 / All-on-6 may be considered for extensive tooth loss, failing dentition or a complex full-arch restorative need. Bone and anatomy, gum and general health, bite, remaining teeth and your ability to maintain hygiene can affect suitability; the number of implants is decided through planning rather than personal preference alone.',
        process: [
          { title: 'Full-mouth examination and imaging', description: 'The clinician reviews remaining teeth, gums, bone, anatomy, bite, health history and relevant scans.' },
          { title: 'Implant and restoration planning', description: 'Implant positions, number, prosthesis design, materials and the sequence of stages are planned together.' },
          { title: 'Implant placement', description: 'The planned implants are placed in one jaw using the agreed surgical and anaesthesia approach.' },
          { title: 'Temporary or provisional restoration', description: 'A temporary or provisional full-arch restoration may be used where clinically appropriate while healing is assessed.' },
          { title: 'Healing and final prosthesis', description: 'After healing and follow-up, the final prosthesis is reviewed, fitted and paired with a maintenance plan.' },
        ],
        timeline: 'The surgical and restorative stages may span several months because healing and review are part of the process. Timing can change with remaining teeth, bone and anatomy, provisional or final prosthesis stages, laboratory work, healing and any additional treatment needed first.',
        planFactors: ['Remaining teeth and gum health', 'Bone volume and anatomy', 'Implant number and position', 'Prosthesis design', 'Bite and material', 'Healing and maintenance requirements'],
        pricing: 'Final estimate depends on examination, materials and treatment scope.',
        faqs: [
          { question: 'Is All-on-4 the same as dentures?', answer: 'No. All-on-4 describes an implant-supported full-arch restoration; the prosthesis, support strategy and maintenance plan are assessed for each case.' },
          { question: 'Why might four or six implants be considered?', answer: 'The number and positions depend on bone, anatomy, remaining teeth, prosthesis design and clinical planning rather than a standard choice for everyone.' },
          { question: 'Is a temporary fixed bridge always possible immediately?', answer: 'No. A temporary restoration depends on clinical suitability, stability, health, planning and the treatment approach.' },
          { question: 'What happens during healing?', answer: 'The implant sites and surrounding tissues are reviewed during healing, with instructions and follow-up shaped around the provisional or final restoration plan.' },
          { question: 'What affects suitability and final maintenance?', answer: 'Bone and gum health, remaining teeth, bite, general health, hygiene and the design of the final prosthesis all affect planning and ongoing maintenance.' },
        ],
        aftercare: 'Aftercare includes cleaning the full-arch prosthesis and the areas under or around it, hygiene reviews, healing guidance, follow-up and long-term maintenance.',
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
        detailIntroduction: 'Tam çene yaklaşımını görüşmeden önce diş sağlığınızı, mevcut dişlerinizi, kapanışınızı ve hedeflerinizi kapsamlı şekilde değerlendirin.',
        whatItIs: 'All-on-4 / All-on-6, tek bir çeneye yerleştirilen birden fazla implantın desteklediği sabit tam çene restorasyonudur. Bu adlar farklı implant destek stratejilerini ifade eder; implant sayısı, konumları, protez tasarımı ve tedavi sırası anatomik yapıya, sağlığa ve klinik planlamaya göre belirlenir.',
        suitability: 'All-on-4 / All-on-6 ileri diş eksikliği, başarısız durumdaki dişler veya kapsamlı tam çene restorasyonu ihtiyacı olan bazı kişiler için düşünülebilir. Kemik ve anatomik yapı, diş eti ve genel sağlık, kapanış, mevcut dişler ve hijyen sağlayabilme durumu uygunluğu etkiler; implant sayısı yalnızca kişisel tercihle değil planlamayla belirlenir.',
        process: [
          { title: 'Kapsamlı muayene ve görüntüleme', description: 'Klinisyen kalan dişleri, diş etlerini, kemiği, anatomiyi, kapanışı, sağlık geçmişini ve ilgili görüntülemeleri inceler.' },
          { title: 'İmplant ve restorasyon planlaması', description: 'İmplant konumları, sayısı, protez tasarımı, malzemeler ve aşamaların sırası birlikte planlanır.' },
          { title: 'İmplantların yerleştirilmesi', description: 'Planlanan implantlar üzerinde anlaşılan cerrahi ve anestezi yaklaşımıyla tek bir çeneye yerleştirilir.' },
          { title: 'Geçici veya ara restorasyon', description: 'Klinik olarak uygun olduğunda iyileşme değerlendirilirken geçici veya ara tam çene restorasyonu kullanılabilir.' },
          { title: 'İyileşme ve son protez', description: 'İyileşme ve takip sonrasında son protez gözden geçirilir, takılır ve bakım planıyla birlikte açıklanır.' },
        ],
        timeline: 'İyileşme ve kontrol aşamaları sürecin parçası olduğu için cerrahi ve restoratif aşamalar birkaç aya yayılabilir. Mevcut dişler, kemik ve anatomi, geçici veya son protez aşamaları, laboratuvar çalışması, iyileşme ve önce gerekebilecek ek tedaviler zamanlamayı değiştirebilir.',
        planFactors: ['Kalan dişler ve diş eti sağlığı', 'Kemik hacmi ve anatomik yapı', 'İmplant sayısı ve konumu', 'Protez tasarımı', 'Kapanış ve malzeme', 'İyileşme ve bakım gereksinimleri'],
        pricing: 'Nihai tahmini ücret; muayene, kullanılan materyaller ve tedavi kapsamına göre değişir.',
        faqs: [
          { question: 'All-on-4 protez dişle aynı mıdır?', answer: 'Hayır. All-on-4 implant destekli tam çene restorasyonunu ifade eder; protez, destek stratejisi ve bakım planı her durum için değerlendirilir.' },
          { question: 'Neden dört veya altı implant düşünülebilir?', answer: 'Sayı ve konum; kemiğe, anatomiye, kalan dişlere, protez tasarımına ve klinik planlamaya bağlıdır; herkes için standart değildir.' },
          { question: 'Geçici sabit köprü her zaman hemen takılabilir mi?', answer: 'Hayır. Geçici restorasyonun uygunluğu klinik duruma, stabiliteye, sağlığa, planlamaya ve tedavi yaklaşımına bağlıdır.' },
          { question: 'İyileşme sırasında ne olur?', answer: 'İyileşme sürecinde implant bölgeleri ve çevre dokular kontrol edilir; yönlendirme ve takip geçici veya son protez planına göre şekillenir.' },
          { question: 'Uygunluğu ve uzun vadeli bakımı neler etkiler?', answer: 'Kemik ve diş eti sağlığı, kalan dişler, kapanış, genel sağlık, hijyen ve son protezin tasarımı planlamayı ve sürekli bakımı etkiler.' },
        ],
        aftercare: 'Bakım sonrası; tam çene protezinin ve altındaki veya çevresindeki bölgelerin temizliğini, hijyen kontrollerini, iyileşme yönlendirmesini, takibi ve uzun vadeli bakımı kapsar.',
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
