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

export type TreatmentLocalizedContent = {
  name: string
  summary: string
  cardDetails: string[]
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

const enPricing = 'Pricing depends on your individual treatment plan. Request an estimate after assessment.'
const trPricing = 'Fiyatlandırma kişisel tedavi planınıza göre değişir. Değerlendirme sonrası tahmini ücret isteyin.'

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
        detailIntroduction: 'Start with a clear review of your dental health, the concerns you have noticed and the everyday care that may help.',
        whatItIs: 'Routine and preventive care can include examinations, hygiene, fillings and gum care. The right combination depends on an appropriate clinical assessment.',
        suitability: 'This may be suitable if you want to understand your current dental health, maintain your smile or discuss a specific concern. The team confirms the appropriate route after examination.',
        process: [
          { title: 'Share your concerns', description: 'Tell the team what you have noticed and what you would like to protect or improve.' },
          { title: 'Complete an examination', description: 'The clinician reviews your dental health and any relevant records.' },
          { title: 'Discuss your options', description: 'You receive clear next steps for prevention, maintenance or restorative care.' },
          { title: 'Continue with support', description: 'Your follow-up plan is shaped around your needs and confirmed with the clinic.' },
        ],
        timeline: 'The number and timing of appointments depend on your assessment and the care included in your plan.',
        planFactors: ['Current dental health', 'Hygiene and gum needs', 'Any symptoms or concerns', 'Your everyday care goals'],
        pricing: enPricing,
        faqs: [
          { question: 'What can a routine appointment include?', answer: 'It may include an examination, hygiene or discussion of a restorative concern. The team confirms what is appropriate after reviewing your needs.' },
          { question: 'Do I need an examination before a plan is suggested?', answer: 'An appropriate examination is required before the clinic confirms a treatment recommendation.' },
          { question: 'Can I ask about prevention even if I have no pain?', answer: 'Yes. You can use the consultation to discuss maintenance, hygiene and ways to protect your dental health.' },
        ],
        aftercare: 'The team explains any home care, follow-up or maintenance steps that apply to your plan.',
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
        detailIntroduction: 'Diş sağlığınızı, fark ettiğiniz endişeleri ve günlük bakımınız için faydalı olabilecek adımları açık bir değerlendirmeyle ele alın.',
        whatItIs: 'Rutin ve koruyucu bakım; muayene, hijyen, dolgu ve diş eti bakımını içerebilir. Uygun kombinasyon klinik değerlendirmeye göre belirlenir.',
        suitability: 'Diş sağlığınızı anlamak, gülüşünüzü korumak veya belirli bir konuyu görüşmek istiyorsanız bu yol size uygun olabilir. Ekip uygun yaklaşımı muayene sonrasında netleştirir.',
        process: [
          { title: 'Endişelerinizi paylaşın', description: 'Fark ettiklerinizi ve korumak ya da değiştirmek istediklerinizi ekiple paylaşın.' },
          { title: 'Muayeneyi tamamlayın', description: 'Klinisyen diş sağlığınızı ve ilgili kayıtlarınızı değerlendirir.' },
          { title: 'Seçeneklerinizi konuşun', description: 'Koruyucu, düzenli bakım veya restoratif tedavi için sonraki adımlar açıklanır.' },
          { title: 'Takiple devam edin', description: 'Takip planınız ihtiyaçlarınıza göre şekillendirilir ve klinikle netleştirilir.' },
        ],
        timeline: 'Randevuların sayısı ve zamanlaması değerlendirmeye ve planınızdaki bakıma göre değişir.',
        planFactors: ['Mevcut diş sağlığı', 'Hijyen ve diş eti ihtiyaçları', 'Belirtiler veya endişeler', 'Günlük bakım hedefleriniz'],
        pricing: trPricing,
        faqs: [
          { question: 'Rutin bir randevuda neler olabilir?', answer: 'Muayene, hijyen veya restoratif bir konunun görüşülmesi planlanabilir. Ekip ihtiyaçlarınızı değerlendirdikten sonra uygun yaklaşımı açıklar.' },
          { question: 'Plan önerilmeden önce muayene gerekir mi?', answer: 'Klinik bir tedavi önerisi kesinleşmeden önce uygun bir muayene yapılması gerekir.' },
          { question: 'Ağrım yoksa da koruyucu bakım hakkında soru sorabilir miyim?', answer: 'Evet. Görüşmede düzenli bakım, hijyen ve diş sağlığınızı koruma yollarını konuşabilirsiniz.' },
        ],
        aftercare: 'Ekip, planınıza uygun evde bakım, takip veya düzenli kontrol adımlarını açıklar.',
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
        detailIntroduction: 'If you are considering replacing missing teeth, begin with an assessment that explains the available routes and the information still needed.',
        whatItIs: 'A dental implant plan may use an implant-supported restoration to replace a missing tooth or teeth. The final approach depends on your anatomy, dental health and clinical assessment.',
        suitability: 'Implants may be suitable for some people with missing teeth, but suitability cannot be confirmed from a message or photograph alone. An appropriate examination and records are required.',
        process: [
          { title: 'Discuss what you want to replace', description: 'Share your concerns, history and the changes you would like to make.' },
          { title: 'Review your records', description: 'The clinician uses an examination and relevant imaging to understand bone, bite and health factors.' },
          { title: 'Compare the plan options', description: 'You receive an explanation of possible implant-supported routes and the information each requires.' },
          { title: 'Confirm the next stage', description: 'Timing and appointments are confirmed after assessment and agreement on the plan.' },
        ],
        timeline: 'Appointment count and healing phases vary by the plan, the areas involved and your clinical assessment.',
        planFactors: ['Number and position of missing teeth', 'Bone and gum health', 'Bite and existing restorations', 'Healing and appointment requirements'],
        pricing: enPricing,
        faqs: [
          { question: 'Can you tell me if implants are suitable before I travel?', answer: 'The team can discuss your starting information, but suitability requires an appropriate clinical assessment and relevant records.' },
          { question: 'Will imaging be part of the planning?', answer: 'Relevant imaging may be recommended so the clinician can assess anatomy and plan responsibly.' },
          { question: 'How long does implant treatment take?', answer: 'Timing varies by the treatment plan and healing requirements. The clinician confirms a schedule after assessment.' },
          { question: 'What are the alternatives to an implant?', answer: 'Depending on your needs, the team may discuss other restorative options. The suitable choices depend on assessment.' },
        ],
        aftercare: 'You receive guidance for the healing and restoration stages that apply to your plan, with follow-up arranged around the treatment.',
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
        detailIntroduction: 'Eksik dişleri tamamlamayı düşünüyorsanız, seçenekleri ve hâlâ ihtiyaç duyulan bilgileri açıklayan bir değerlendirmeyle başlayın.',
        whatItIs: 'Diş implantı planı, eksik bir veya daha fazla dişi implant destekli bir restorasyonla tamamlamayı içerebilir. Nihai yaklaşım anatomik yapınıza, diş sağlığınıza ve klinik değerlendirmeye bağlıdır.',
        suitability: 'İmplantlar bazı eksik dişleri olan kişiler için uygun olabilir; ancak uygunluk yalnızca mesaj veya fotoğrafla kesinleştirilemez. Uygun bir muayene ve kayıtlar gerekir.',
        process: [
          { title: 'Değiştirmek istediklerinizi anlatın', description: 'Endişelerinizi, geçmişinizi ve yapmak istediğiniz değişiklikleri paylaşın.' },
          { title: 'Kayıtlarınızı değerlendirin', description: 'Klinisyen muayene ve ilgili görüntülemeyle kemik, kapanış ve sağlık faktörlerini inceler.' },
          { title: 'Plan seçeneklerini karşılaştırın', description: 'İmplant destekli olası yollar ve her biri için gereken bilgiler açıklanır.' },
          { title: 'Sonraki aşamayı netleştirin', description: 'Zamanlama ve randevular değerlendirme ve plan üzerinde anlaşma sonrasında belirlenir.' },
        ],
        timeline: 'Randevu sayısı ve iyileşme aşamaları plana, ilgili bölgelere ve klinik değerlendirmeye göre değişir.',
        planFactors: ['Eksik dişlerin sayısı ve konumu', 'Kemik ve diş eti sağlığı', 'Kapanış ve mevcut restorasyonlar', 'İyileşme ve randevu gereksinimleri'],
        pricing: trPricing,
        faqs: [
          { question: 'Seyahat etmeden önce implantın bana uygun olup olmadığını öğrenebilir miyim?', answer: 'Ekip başlangıç bilgilerinizi görüşebilir; ancak uygunluk için uygun bir klinik değerlendirme ve ilgili kayıtlar gerekir.' },
          { question: 'Planlamada görüntüleme kullanılır mı?', answer: 'Klinisyenin anatomik yapıyı değerlendirebilmesi ve sorumlu bir plan yapabilmesi için ilgili görüntüleme istenebilir.' },
          { question: 'İmplant tedavisi ne kadar sürer?', answer: 'Süre tedavi planına ve iyileşme gereksinimlerine göre değişir. Zamanlama değerlendirme sonrasında netleştirilir.' },
          { question: 'İmplant yerine başka seçenekler var mı?', answer: 'İhtiyaçlarınıza göre başka restoratif seçenekler de görüşülebilir. Uygun seçenekler değerlendirmeye bağlıdır.' },
        ],
        aftercare: 'Planınıza bağlı iyileşme ve restorasyon aşamaları için yönlendirme yapılır; takip randevuları tedavinize göre düzenlenir.',
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
        detailIntroduction: 'Start with a conversation about the features you would like to refine and the level of change that feels right for you.',
        whatItIs: 'Veneers are thin coverings placed on the visible surface of selected teeth. Material, preparation and the number of teeth depend on assessment and the agreed plan.',
        suitability: 'Veneers may be suitable for some cosmetic concerns, but they are not the right route for everyone. The clinician reviews your dental health, bite, enamel and goals before advising.',
        process: [
          { title: 'Describe the change you want', description: 'Share what you would like to refine and what you want your smile to feel like.' },
          { title: 'Review health and proportions', description: 'The clinician assesses your teeth, gums, bite and the balance of your smile.' },
          { title: 'Explore the proposed design', description: 'Possible shapes, shades and preparation requirements are discussed before you decide.' },
          { title: 'Confirm the treatment plan', description: 'The team confirms the appropriate appointments and aftercare once the plan is agreed.' },
        ],
        timeline: 'The appointment sequence and timing depend on the number of teeth, material and assessment findings.',
        planFactors: ['Tooth and gum health', 'Bite and available enamel', 'Desired shape and shade', 'Material and preparation needs'],
        pricing: enPricing,
        faqs: [
          { question: 'Are veneers suitable for every smile?', answer: 'No. Suitability depends on your dental health, bite, enamel and goals, and requires an appropriate assessment.' },
          { question: 'Can I discuss the shade before treatment?', answer: 'Yes. Shade and shape are part of the design discussion and are confirmed as part of the plan.' },
          { question: 'Will I see a design before deciding?', answer: 'The team can explain the available planning and preview steps that are appropriate for your case.' },
          { question: 'How many appointments will I need?', answer: 'The appointment plan depends on the treatment proposed and is confirmed after assessment.' },
        ],
        aftercare: 'You receive guidance on cleaning, daily care and follow-up appropriate to the restorations and your wider dental health.',
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
        detailIntroduction: 'İyileştirmek istediğiniz özellikleri ve sizin için doğru görünen değişimin seviyesini konuşarak başlayın.',
        whatItIs: 'Laminalar, seçilen dişlerin görünen yüzeyine uygulanan ince kaplamalardır. Malzeme, hazırlık ve diş sayısı değerlendirmeye ve üzerinde anlaşılan plana göre değişir.',
        suitability: 'Laminalar bazı estetik endişeler için uygun olabilir; ancak herkes için doğru yaklaşım değildir. Klinisyen öneri sunmadan önce diş sağlığınızı, kapanışınızı, mine yapınızı ve hedeflerinizi değerlendirir.',
        process: [
          { title: 'İstediğiniz değişikliği anlatın', description: 'Neyi iyileştirmek istediğinizi ve gülüşünüzün nasıl görünmesini arzu ettiğinizi paylaşın.' },
          { title: 'Sağlık ve oranları değerlendirin', description: 'Klinisyen dişleri, diş etlerini, kapanışı ve gülüşünüzün dengesini inceler.' },
          { title: 'Önerilen tasarımı konuşun', description: 'Karar vermeden önce olası şekiller, renkler ve hazırlık gereksinimleri açıklanır.' },
          { title: 'Tedavi planını netleştirin', description: 'Plan üzerinde anlaşınca uygun randevular ve bakım sonrası adımlar belirlenir.' },
        ],
        timeline: 'Randevu sırası ve zamanlama diş sayısına, malzemeye ve değerlendirme bulgularına göre değişir.',
        planFactors: ['Diş ve diş eti sağlığı', 'Kapanış ve mevcut mine', 'İstenen şekil ve renk', 'Malzeme ve hazırlık ihtiyaçları'],
        pricing: trPricing,
        faqs: [
          { question: 'Laminalar her gülüş için uygun mudur?', answer: 'Hayır. Uygunluk diş sağlığınıza, kapanışınıza, mine yapınıza ve hedeflerinize bağlıdır; uygun bir değerlendirme gerekir.' },
          { question: 'Tedaviden önce rengi görüşebilir miyim?', answer: 'Evet. Renk ve şekil tasarım görüşmesinin parçasıdır ve plan kapsamında netleştirilir.' },
          { question: 'Karar vermeden önce tasarımı görebilir miyim?', answer: 'Ekip, durumunuza uygun planlama ve önizleme adımlarını açıklayabilir.' },
          { question: 'Kaç randevu gerekir?', answer: 'Randevu planı önerilen tedaviye göre değişir ve değerlendirme sonrasında netleşir.' },
        ],
        aftercare: 'Restorasyonlarınıza ve genel diş sağlığınıza uygun temizlik, günlük bakım ve takip yönlendirmesi alırsınız.',
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
        detailIntroduction: 'Begin with an assessment of the tooth or teeth you are concerned about and a conversation about the result you want to maintain.',
        whatItIs: 'A crown is a custom restoration that covers and supports a prepared tooth or restoration. The material and design depend on the tooth, bite, gum health and plan.',
        suitability: 'A crown may be suitable for some damaged, weakened or heavily restored teeth. The clinician needs to examine the tooth and surrounding tissues before confirming the route.',
        process: [
          { title: 'Review the concern', description: 'Explain what feels uncomfortable, damaged or different and share any relevant history.' },
          { title: 'Assess the tooth and bite', description: 'The clinician examines the tooth, surrounding gums and the way your teeth meet.' },
          { title: 'Discuss material and design', description: 'The proposed shape, shade and restoration approach are explained before you decide.' },
          { title: 'Plan the appointments', description: 'The clinic confirms the required steps and timing once the restoration plan is agreed.' },
        ],
        timeline: 'The number and timing of appointments depend on the tooth, restoration and findings from assessment.',
        planFactors: ['Remaining tooth structure', 'Gum health and bite', 'Material and shade goals', 'Any related restorative needs'],
        pricing: enPricing,
        faqs: [
          { question: 'When might a crown be discussed?', answer: 'A crown may be discussed when a tooth needs support, coverage or a planned restoration. The clinician confirms whether it is appropriate.' },
          { question: 'Can the shade be matched to my other teeth?', answer: 'Shade is considered during planning, with the final approach depending on your teeth and the selected material.' },
          { question: 'Is a crown permanent?', answer: 'A crown is intended as a long-term restoration, but its care and lifespan depend on your dental health, bite and daily habits.' },
        ],
        aftercare: 'The clinic explains how to care for the restoration, protect your bite and return for follow-up when needed.',
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
        detailIntroduction: 'Endişe duyduğunuz dişi veya dişleri değerlendirerek ve korumak istediğiniz sonucu konuşarak başlayın.',
        whatItIs: 'Kuron, hazırlanmış bir dişi veya restorasyonu kaplayan ve destekleyen kişiye özel bir restorasyondur. Malzeme ve tasarım dişe, kapanışa, diş eti sağlığına ve plana göre değişir.',
        suitability: 'Kuronlar bazı hasarlı, zayıflamış veya kapsamlı restorasyon görmüş dişler için uygun olabilir. Yaklaşım kesinleşmeden önce dişin ve çevre dokuların muayene edilmesi gerekir.',
        process: [
          { title: 'Endişenizi değerlendirin', description: 'Rahatsızlık, hasar veya değişiklik hissini ve ilgili geçmişi paylaşın.' },
          { title: 'Dişi ve kapanışı inceleyin', description: 'Klinisyen dişi, çevresindeki diş etlerini ve dişlerin birbirine temasını değerlendirir.' },
          { title: 'Malzeme ve tasarımı konuşun', description: 'Karar vermeden önce önerilen şekil, renk ve restorasyon yaklaşımı açıklanır.' },
          { title: 'Randevuları planlayın', description: 'Restorasyon planı üzerinde anlaşılınca gereken adımlar ve zamanlama belirlenir.' },
        ],
        timeline: 'Randevuların sayısı ve zamanlaması dişe, restorasyona ve değerlendirme bulgularına göre değişir.',
        planFactors: ['Kalan diş dokusu', 'Diş eti sağlığı ve kapanış', 'Malzeme ve renk hedefleri', 'İlgili restoratif ihtiyaçlar'],
        pricing: trPricing,
        faqs: [
          { question: 'Kuron ne zaman gündeme gelebilir?', answer: 'Dişin destek, kaplama veya planlı restorasyona ihtiyaç duyduğu durumlarda kuron görüşülebilir. Uygunluğu klinisyen belirler.' },
          { question: 'Renk diğer dişlerimle eşleştirilebilir mi?', answer: 'Renk planlamada değerlendirilir; nihai yaklaşım dişlerinize ve seçilen malzemeye bağlıdır.' },
          { question: 'Kuron kalıcı mıdır?', answer: 'Kuron uzun süreli bir restorasyon olarak planlanır; ancak bakım ve kullanım ömrü diş sağlığınıza, kapanışınıza ve günlük alışkanlıklarınıza bağlıdır.' },
        ],
        aftercare: 'Restorasyona nasıl bakım yapacağınız, kapanışınızı nasıl koruyacağınız ve gerektiğinde ne zaman takip yapılacağı açıklanır.',
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
        detailIntroduction: 'A smile makeover starts with understanding what you want to change and which parts of your dental health should guide the plan.',
        whatItIs: 'A smile makeover is a coordinated plan that may combine restorative or cosmetic treatments. The sequence and materials depend on assessment and the changes you want to make.',
        suitability: 'This may be suitable if you want to discuss several connected cosmetic or restorative concerns. The clinician first checks your dental health, bite and goals before suggesting a route.',
        process: [
          { title: 'Share your priorities', description: 'Describe the features you would like to refine and what a natural result means to you.' },
          { title: 'Assess the foundations', description: 'The team reviews dental health, gum health, bite and any treatment that should come first.' },
          { title: 'Build the sequence', description: 'Possible treatments, materials and preview steps are arranged into a considered plan.' },
          { title: 'Review and confirm', description: 'You discuss the plan, estimate and timing before deciding how to proceed.' },
        ],
        timeline: 'The sequence and timing vary because a smile makeover can combine different treatments and preparation stages.',
        planFactors: ['Dental and gum health', 'Bite and facial proportions', 'Desired level of change', 'Materials, sequence and maintenance'],
        pricing: enPricing,
        faqs: [
          { question: 'Does a smile makeover always involve veneers?', answer: 'No. A plan may combine different treatments or focus on one concern. The suitable route depends on assessment.' },
          { question: 'Can I ask for a natural-looking result?', answer: 'Yes. Your preferred level of change, shape and shade are part of the planning conversation.' },
          { question: 'Will I see a preview before treatment?', answer: 'The team explains which design or preview steps are appropriate for your case before treatment is confirmed.' },
          { question: 'How is the order of treatment decided?', answer: 'The sequence is shaped by your dental health, bite, goals and the treatments included in the plan.' },
        ],
        aftercare: 'Aftercare combines the maintenance guidance for the treatments included in your plan, with follow-up shaped around your needs.',
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
        detailIntroduction: 'Gülüş tasarımı, neyi değiştirmek istediğinizi ve diş sağlığınızın planı nasıl yönlendirmesi gerektiğini anlamakla başlar.',
        whatItIs: 'Gülüş tasarımı, estetik veya restoratif tedavileri bir araya getirebilen koordineli bir plandır. Sıra ve malzemeler değerlendirmeye ve istediğiniz değişikliklere göre belirlenir.',
        suitability: 'Birbirine bağlı birkaç estetik veya restoratif konuyu görüşmek istiyorsanız bu yaklaşım size uygun olabilir. Ekip bir yol önermeden önce diş sağlığınızı, kapanışınızı ve hedeflerinizi değerlendirir.',
        process: [
          { title: 'Önceliklerinizi paylaşın', description: 'İyileştirmek istediğiniz özellikleri ve doğal bir sonucun sizin için ne anlama geldiğini anlatın.' },
          { title: 'Temeli değerlendirin', description: 'Ekip diş, diş eti ve kapanış sağlığını; önce ele alınması gereken tedavilerle birlikte inceler.' },
          { title: 'Sıralamayı oluşturun', description: 'Olası tedaviler, malzemeler ve önizleme adımları düşünülmüş bir plan içinde düzenlenir.' },
          { title: 'Görüşüp netleştirin', description: 'Karar vermeden önce planı, tahmini ücreti ve zamanlamayı görüşürsünüz.' },
        ],
        timeline: 'Gülüş tasarımı farklı tedavileri ve hazırlık aşamalarını bir araya getirebildiği için sıra ve zamanlama değişir.',
        planFactors: ['Diş ve diş eti sağlığı', 'Kapanış ve yüz oranları', 'İstenen değişimin seviyesi', 'Malzeme, sıra ve bakım'],
        pricing: trPricing,
        faqs: [
          { question: 'Gülüş tasarımında her zaman laminate kullanılır mı?', answer: 'Hayır. Plan birden fazla tedaviyi birleştirebilir veya tek bir konuya odaklanabilir. Uygun yaklaşım değerlendirmeye bağlıdır.' },
          { question: 'Doğal görünen bir sonuç isteyebilir miyim?', answer: 'Evet. İstediğiniz değişimin seviyesi, şekil ve renk planlama görüşmesinin parçasıdır.' },
          { question: 'Tedaviden önce önizleme görebilir miyim?', answer: 'Ekip, tedavi kesinleşmeden önce durumunuza uygun tasarım veya önizleme adımlarını açıklar.' },
          { question: 'Tedavinin sırası nasıl belirlenir?', answer: 'Sıra; diş sağlığınız, kapanışınız, hedefleriniz ve plana dahil edilen tedavilere göre şekillenir.' },
        ],
        aftercare: 'Bakım sonrası yönlendirme, planınıza dahil edilen tedavilere göre birleştirilir ve ihtiyaçlarınıza göre takip edilir.',
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
        detailIntroduction: 'Begin with a complete review of your dental health, existing teeth, bite and goals before discussing a full-arch route.',
        whatItIs: 'All-on-4 or All-on-6 describes an implant-supported full-arch restoration approach. The appropriate design, number of implants and sequence depend on clinical assessment.',
        suitability: 'This may be relevant for some people with extensive tooth loss or a complex restorative need. The team must assess your anatomy, health, bite and existing restorations before advising.',
        process: [
          { title: 'Discuss your current situation', description: 'Share your concerns, history and what you would like a full-arch plan to change.' },
          { title: 'Review health and imaging', description: 'The clinician assesses your remaining teeth, gums, anatomy, bite and relevant records.' },
          { title: 'Compare full-arch options', description: 'Possible restorative designs, sequence, materials and practical requirements are explained.' },
          { title: 'Confirm timing after assessment', description: 'The clinic sets the next stage and appointment plan once the appropriate route is agreed.' },
        ],
        timeline: 'Treatment and healing timing vary by your anatomy, health, restorative design and assessment findings.',
        planFactors: ['Remaining teeth and gum health', 'Bone and anatomy', 'Bite and restorative design', 'Healing and maintenance requirements'],
        pricing: enPricing,
        faqs: [
          { question: 'Is All-on-4 or All-on-6 suitable for everyone?', answer: 'No. The appropriate route depends on anatomy, health, remaining teeth, bite and an appropriate clinical assessment.' },
          { question: 'What does full-arch mean?', answer: 'It describes a restoration planned to replace or support a wider arch of teeth. The final design depends on your assessment.' },
          { question: 'How are healing stages planned?', answer: 'Healing and restoration stages are considered with your anatomy and plan; the clinician confirms timing after assessment.' },
          { question: 'Can I start planning from abroad?', answer: 'Yes. You can share the information you have, but an appropriate assessment is required before the final plan.' },
        ],
        aftercare: 'You receive written guidance for healing, cleaning, maintenance and follow-up appropriate to the full-arch restoration.',
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
        detailIntroduction: 'Tam çene yaklaşımını görüşmeden önce diş sağlığınızı, mevcut dişlerinizi, kapanışınızı ve hedeflerinizi kapsamlı şekilde değerlendirin.',
        whatItIs: 'All-on-4 veya All-on-6, implant destekli tam çene restorasyon yaklaşımını ifade eder. Uygun tasarım, implant sayısı ve sıra klinik değerlendirmeye göre belirlenir.',
        suitability: 'Bu yaklaşım ileri diş eksikliği veya kapsamlı restoratif ihtiyacı olan bazı kişiler için gündeme gelebilir. Ekip öneri sunmadan önce anatomik yapınızı, sağlığınızı, kapanışınızı ve mevcut restorasyonlarınızı değerlendirir.',
        process: [
          { title: 'Mevcut durumunuzu anlatın', description: 'Endişelerinizi, geçmişinizi ve tam çene planıyla neyi değiştirmek istediğinizi paylaşın.' },
          { title: 'Sağlık ve görüntülemeyi inceleyin', description: 'Klinisyen mevcut dişleri, diş etlerini, anatomiyi, kapanışı ve ilgili kayıtları değerlendirir.' },
          { title: 'Tam çene seçeneklerini karşılaştırın', description: 'Olası restorasyon tasarımları, sıra, malzemeler ve pratik gereksinimler açıklanır.' },
          { title: 'Değerlendirme sonrası zamanlamayı netleştirin', description: 'Uygun yaklaşım üzerinde anlaşılınca sonraki aşama ve randevu planı belirlenir.' },
        ],
        timeline: 'Tedavi ve iyileşme zamanlaması anatomik yapınıza, sağlığınıza, restorasyon tasarımına ve değerlendirme bulgularına göre değişir.',
        planFactors: ['Kalan dişler ve diş eti sağlığı', 'Kemik ve anatomik yapı', 'Kapanış ve restorasyon tasarımı', 'İyileşme ve bakım gereksinimleri'],
        pricing: trPricing,
        faqs: [
          { question: 'All-on-4 veya All-on-6 herkese uygun mudur?', answer: 'Hayır. Uygun yaklaşım anatomik yapıya, sağlığa, kalan dişlere, kapanışa ve klinik değerlendirmeye bağlıdır.' },
          { question: 'Tam çene ne anlama gelir?', answer: 'Daha geniş bir diş arkını tamamlamak veya desteklemek üzere planlanan restorasyonu ifade eder. Nihai tasarım değerlendirmeye bağlıdır.' },
          { question: 'İyileşme aşamaları nasıl planlanır?', answer: 'İyileşme ve restorasyon aşamaları anatomik yapınız ve planınızla birlikte değerlendirilir; zamanlama muayene sonrasında netleşir.' },
          { question: 'Yurt dışından planlamaya başlayabilir miyim?', answer: 'Evet. Elinizdeki bilgileri paylaşarak başlayabilirsiniz; ancak nihai plan öncesinde uygun bir değerlendirme gerekir.' },
        ],
        aftercare: 'Tam çene restorasyonuna uygun iyileşme, temizlik, bakım ve takip yönlendirmesi yazılı olarak paylaşılır.',
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
