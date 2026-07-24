export interface Partner {
  id: string;
  name: string;
  category: string;
  logoText: string;
}

export const STRATEGIC_PARTNERS: Partner[] = [
  { id: 'p1', name: 'وزارة الرياضة', category: 'جهة حكومية', logoText: 'وزارة الرياضة' },
  { id: 'p2', name: 'وزارة الموارد البشرية والتنمية الاجتماعية', category: 'جهة حكومية', logoText: 'وزارة الموارد البشرية' },
  { id: 'p3', name: 'المجلس التخصصي للجمعيات الشبابية', category: 'المظلة الرسمية', logoText: 'SCY Council' },
  { id: 'p4', name: 'مؤسسة الراجحي الإنسانية', category: 'قطاع غير ربحي', logoText: 'الراجحي الإنسانية' },
  { id: 'p5', name: 'مؤسسة سالم بن محفوظ الأهلية', category: 'قطاع غير ربحي', logoText: 'ابن محفوظ الأهلية' },
  { id: 'p6', name: 'المركز الوطني لتنمية القطاع غير الربحي', category: 'جهة حكومية', logoText: 'المركز الوطني NCD' },
  { id: 'p7', name: 'صندوق دعم الجمعيات', category: 'تمويل وتمكين', logoText: 'صندوق دعم الجمعيات' },
  { id: 'p8', name: 'جامعة الملك سعود - مركز التطوع', category: 'قطاع تعليمي', logoText: 'جامعة الملك سعود' },
];

export interface ResourceGuide {
  id: string;
  title: string;
  category: string;
  description: string;
  fileSize: string;
  format: 'PDF' | 'DOCX';
  downloadCount: number;
  badgeColor: string;
}

export const RESOURCE_GUIDES: ResourceGuide[] = [
  {
    id: 'g1',
    title: 'دليل تأسيس وحوكمة الجمعيات الشبابية',
    category: 'حوكمة وأنظمة',
    description: 'الإطار التنظيمي الكامل والمتطلبات القانونية والإدارية لتأسيس وإدارة جمعية شبابية رسمية.',
    fileSize: '4.2 MB',
    format: 'PDF',
    downloadCount: 1420,
    badgeColor: 'bg-[#263370]',
  },
  {
    id: 'g2',
    title: 'حقيبة قياس الأثر الاجتماعي للمبادرات',
    category: 'نماذج عمل',
    description: 'مجموعة مؤشرات قياس أداء المبادرات الشبابية وتقييم العائد على الاستثمار الاجتماعي.',
    fileSize: '2.8 MB',
    format: 'PDF',
    downloadCount: 980,
    badgeColor: 'bg-[#0c7fae]',
  },
  {
    id: 'g3',
    title: 'دليل استقطاب وإدارة الفرق التطوعية',
    category: 'تطوع وتنظيم',
    description: 'أفضل الممارسات العلمية لإدارة المتطوعين، وتوزيع المهام وتحفيز الكوادر الشبابية.',
    fileSize: '3.1 MB',
    format: 'PDF',
    downloadCount: 2150,
    badgeColor: 'bg-[#42b07a]',
  },
  {
    id: 'g4',
    title: 'نموذج الخط التشغيلي والميزانية التقديرية',
    category: 'تخطيط مالي',
    description: 'قوالب جاهزة للتخطيط المالي وتتبع المصروفات وإعداد التقارير المالية السنوية.',
    fileSize: '1.5 MB',
    format: 'DOCX',
    downloadCount: 1730,
    badgeColor: 'bg-[#263370]',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  association: string;
  city: string;
  category: string;
  aspectRatio: string;
  gradient: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'ملتقى الابتكار التقني للشباب 2026',
    association: 'جمعية رؤية للابتكار',
    city: 'الرياض',
    category: 'تكنولوجيا',
    aspectRatio: 'col-span-1 md:col-span-2 row-span-2',
    gradient: 'from-[#263370]/90 to-[#0c7fae]/80',
  },
  {
    id: 'gal-2',
    title: 'معسكر قادة المستقبل',
    association: 'جمعية طموح',
    city: 'الدمام',
    category: 'تمكين',
    aspectRatio: 'col-span-1 row-span-1',
    gradient: 'from-[#0c7fae]/90 to-[#42b07a]/80',
  },
  {
    id: 'gal-3',
    title: 'حملة التطوع البيئي والتنمية',
    association: 'جمعية غراس',
    city: 'القصيم',
    category: 'تطوع',
    aspectRatio: 'col-span-1 row-span-1',
    gradient: 'from-[#42b07a]/90 to-[#263370]/80',
  },
  {
    id: 'gal-4',
    title: 'معرض الفنون والتراث الشبابي',
    association: 'جمعية أفق',
    city: 'أبها',
    category: 'ثقافة',
    aspectRatio: 'col-span-1 md:col-span-2 row-span-1',
    gradient: 'from-[#1c2757]/90 to-[#0c7fae]/80',
  },
];
