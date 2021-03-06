'use strict';

// Suzaku Extreme
[{
  zoneRegex: {
    en: /^Hells\' Kier \(Extreme\)$/,
    cn: /^朱雀诗魂战$/,
  },
  timelineFile: 'suzaku-ex.txt',
  triggers: [
    {
      id: 'SuzEx Cremate',
      regex: Regexes.startsUsing({ id: '32D1', source: 'Suzaku' }),
      regexDe: Regexes.startsUsing({ id: '32D1', source: 'Suzaku' }),
      regexFr: Regexes.startsUsing({ id: '32D1', source: 'Suzaku' }),
      regexJa: Regexes.startsUsing({ id: '32D1', source: '朱雀' }),
      regexCn: Regexes.startsUsing({ id: '32D1', source: '朱雀' }),
      regexKo: Regexes.startsUsing({ id: '32D1', source: '주작' }),
      alertText: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tankbuster auf DIR',
            fr: 'Tankbuster sur VOUS',
            cn: '死刑减伤',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Buster on ' + data.ShortName(matches.target),
            de: 'Tankbuster auf ' + data.ShortName(matches.target),
            fr: 'Tankbuster sur ' + data.ShortName(matches.target),
            cn: '死刑->' + data.ShortName(matches.target),
          };
        }
      },
      tts: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'buster',
            de: 'basta',
            fr: 'tankbuster',
            ja: 'バスター',
            cn: '死刑',
          };
        }
      },
    },
    {
      id: 'SuzEx Phantom Flurry',
      regex: Regexes.startsUsing({ id: '32DC', source: 'Suzaku', capture: false }),
      regexDe: Regexes.startsUsing({ id: '32DC', source: 'Suzaku', capture: false }),
      regexFr: Regexes.startsUsing({ id: '32DC', source: 'Suzaku', capture: false }),
      regexJa: Regexes.startsUsing({ id: '32DC', source: '朱雀', capture: false }),
      regexCn: Regexes.startsUsing({ id: '32DC', source: '朱雀', capture: false }),
      regexKo: Regexes.startsUsing({ id: '32DC', source: '주작', capture: false }),
      condition: function(data) {
        return data.role == 'tank' || data.role == 'healer';
      },
      alertText: {
        en: 'Tank Buster',
        de: 'Tankbuster',
        fr: 'Tankbuster',
        cn: '死刑',
      },
      tts: {
        en: 'buster',
        de: 'basta',
        fr: 'tankbuster',
        cn: '死刑',
      },
    },
    {
      id: 'SuzEx Mesmerizing Melody',
      regex: Regexes.startsUsing({ id: '32DA', source: 'Suzaku', capture: false }),
      regexDe: Regexes.startsUsing({ id: '32DA', source: 'Suzaku', capture: false }),
      regexFr: Regexes.startsUsing({ id: '32DA', source: 'Suzaku', capture: false }),
      regexJa: Regexes.startsUsing({ id: '32DA', source: '朱雀', capture: false }),
      regexCn: Regexes.startsUsing({ id: '32DA', source: '朱雀', capture: false }),
      regexKo: Regexes.startsUsing({ id: '32DA', source: '주작', capture: false }),
      alertText: {
        en: 'Get Out',
        de: 'Raus da',
        fr: 'Allez au bord extérieur',
        ja: '誘引',
        cn: '远离',
      },
      tts: {
        ja: '外へ',
      },
    },
    {
      id: 'SuzEx Ruthless Refrain',
      regex: Regexes.startsUsing({ id: '32DB', source: 'Suzaku', capture: false }),
      regexDe: Regexes.startsUsing({ id: '32DB', source: 'Suzaku', capture: false }),
      regexFr: Regexes.startsUsing({ id: '32DB', source: 'Suzaku', capture: false }),
      regexJa: Regexes.startsUsing({ id: '32DB', source: '朱雀', capture: false }),
      regexCn: Regexes.startsUsing({ id: '32DB', source: '朱雀', capture: false }),
      regexKo: Regexes.startsUsing({ id: '32DB', source: '주작', capture: false }),
      alertText: {
        en: 'Get In',
        de: 'Rein da',
        fr: 'Allez au bord intérieur',
        ja: '拒絶',
        cn: '靠近',
      },
      tts: {
        ja: '中へ',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        ':Tenzen': ':Tenzen',
        'Eastern Pyre': 'Ostflamme',
        'Engage!': 'Start!',
        'Northern Pyre': 'Nordflamme',
        'Rapturous Echo': 'Klang der Liebe',
        'Scarlet Lady': 'Flammenvogel',
        'Scarlet Plume': 'Flügelfeder',
        'Scarlet Tail Feather': 'Schwanzfeder',
        'Song of Durance': 'Lied der Gefangenheit',
        'Song of Fire': 'Lied des Feuerrots',
        'Song of Oblivion': 'Lied der Lüge',
        'Song of Sorrow': 'Lied der Tränen',
        'Southern Pyre': 'Südflamme',
        'Suzaku': 'Suzaku',
        'Western Pyre': 'Westflamme',
      },
      'replaceText': {
        '--targetable--': '--anvisierbar--',
        '--untargetable--': '--nich anvisierbar--',
        'Burn': 'Verbrennung',
        'Close-Quarter Crescendo': 'Puppencrescendo',
        'Cremate': 'Einäschern',
        'Enrage': 'Finalangriff',
        'Eternal Flame': 'Ewige Flamme',
        'Fleeting Summer': 'Vergänglicher Sommer',
        'Hotspot': 'Hitzestau',
        'Incandescent Interlude': 'Glühendes Intermezzo',
        'Mesmerizing Melody': 'Bezaubernde Melodie',
        'Pay The Piper': 'Lied des Fängers',
        'Pay the Piper': 'Lied des Fängers',
        'Phantom Flurry': 'Phantomhast',
        'Phantom Half': 'Phantom Half', // FIXME
        'Phoenix Down': 'Phönixsturz',
        'Rekindle': 'Wiederaufleben',
        'Rout': 'Kolossgalopp',
        'Ruthless Refrain': 'Rabiater Refrain',
        'Ruthless/Mesmerizing': 'Refrain/Melodie',
        'Scarlet Fever': 'Feuertod',
        'Scarlet Hymn': 'Zinnoberhymne',
        'Scathing Net': 'Vernichtendes Netz',
        'Screams Of The Damned': 'Schreie der Verdammten',
        'Southron Star': 'Stern des Südens',
        'Well Of Flame': 'Flammenbrunnen',
        'Wing And A Prayer': 'Letztes Gebet',
      },
      '~effectNames': {
        'Burns': 'Brandwunde',
        'Damage Up': 'Schaden +',
        'Fire Resistance Down II': 'Feuerresistenz - (stark)',
        'HP Boost': 'LP-Bonus',
        'Looming Crescendo': 'Puppencrescendo',
        'Paying the Piper': 'Marschbefehl',
        'Physical Vulnerability Up': 'Erhöhte physische Verwundbarkeit',
        'Primary Target': 'Angriffsziel',
        'Stun': 'Betäubung',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        ':Tenzen': ':Tenzen',
        'Eastern Pyre': 'flamme orientale',
        'Engage!': 'À l\'attaque',
        'Northern Pyre': 'flamme boréale',
        'Rapturous Echo': 'chant d\'amour',
        'Scarlet Lady': 'oiseau de feu',
        'Scarlet Plume': 'plume de Suzaku',
        'Scarlet Tail Feather': 'plume de queue de Suzaku',
        'Song of Durance': 'poème captif',
        'Song of Fire': 'poème phosphoré',
        'Song of Oblivion': 'poème démuni',
        'Song of Sorrow': 'poème larmoyant',
        'Southern Pyre': 'flamme australe',
        'Suzaku': 'Suzaku',
        'Western Pyre': 'flamme occidentale',
      },
      'replaceText': {
        '--targetable--': '--Ciblable--',
        '--untargetable--': '--Impossible à cibler--',
        'Burn': 'Combustion',
        'Close-Quarter Crescendo': 'Mélopée fantoche',
        'Cremate': 'Crématorium',
        'Enrage': 'Enrage',
        'Eternal Flame': 'Flamme éternelle',
        'Fleeting Summer': 'Ailes vermillon',
        'Hotspot': 'Couleurs',
        'Incandescent Interlude': 'Mélopée incandescente',
        'Mesmerizing Melody': 'Mélodie hypnotique',
        'Pay The Piper': 'Poème fantoche',
        'Pay the Piper': 'Poème fantoche',
        'Phantom Flurry': 'Frénésie spectrale',
        'Phantom Half': 'Frénésie - Moitié de plateau',
        'Phoenix Down': 'Queue de phénix',
        'Rekindle': 'Ravivement',
        'Rout': 'Irruption',
        'Ruthless Refrain': 'Refrain impitoyable',
        'Ruthless/Mesmerizing': 'Ruthless/Mesmerizing', // FIXME
        'Scarlet Fever': 'Fièvre écarlate',
        'Scarlet Hymn': 'Hymne vermillon',
        'Scathing Net': 'Étoiles des enfers',
        'Screams Of The Damned': 'Cris des damnés',
        'Southron Star': 'Étoile australe',
        'Well Of Flame': 'Puits ardent',
        'Wing And A Prayer': 'Prière de pennes',
      },
      '~effectNames': {
        'Burns': 'Brûlure',
        'Damage Up': 'Bonus De Dégâts',
        'Fire Resistance Down II': 'Résistance Au Feu Réduite+',
        'HP Boost': 'Bonus De PV',
        'Looming Crescendo': 'Mélopée fantoche',
        'Paying the Piper': 'Marche forcée',
        'Physical Vulnerability Up': 'Vulnérabilité physique augmentée',
        'Primary Target': 'Cible prioritaire',
        'Stun': 'Étourdissement',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        ':Tenzen': ':テンゼン',
        'Eastern Pyre': '東炎',
        'Engage!': '戦闘開始！',
        'Northern Pyre': '北炎',
        'Rapturous Echo': '愛の音色',
        'Scarlet Lady': '火焔鳥',
        'Scarlet Plume': '朱雀の羽根',
        'Scarlet Tail Feather': '朱雀の尾羽根',
        'Song of Durance': '牢の詩',
        'Song of Fire': '燐の詩',
        'Song of Oblivion': '虚の詩',
        'Song of Sorrow': '涙の詩',
        'Southern Pyre': '南炎',
        'Suzaku': '朱雀',
        'Western Pyre': '西炎',
      },
      'replaceText': {
        '--targetable--': '--targetable--',
        '--untargetable--': '--untargetable--',
        'Burn': '燃焼',
        'Close-Quarter Crescendo': '傀儡の調べ',
        'Cremate': '赤熱撃',
        'Enrage': 'Enrage',
        'Eternal Flame': '再生の大火',
        'Fleeting Summer': '翼宿撃',
        'Hotspot': '紅蓮炎',
        'Incandescent Interlude': '灼熱の調べ',
        'Mesmerizing Melody': '誘引の旋律',
        'Pay The Piper': '傀儡詩',
        'Pay the Piper': '傀儡詩',
        'Phantom Flurry': '鬼宿脚',
        'Phantom Half': 'Phantom Half', // FIXME
        'Phoenix Down': '再生の羽根',
        'Rekindle': '再生の炎',
        'Rout': '猛進',
        'Ruthless Refrain': '拒絶の旋律',
        'Ruthless/Mesmerizing': 'Ruthless/Mesmerizing', // FIXME
        'Scarlet Fever': '焼滅天火',
        'Scarlet Hymn': '朱の旋律',
        'Scathing Net': '張宿業火',
        'Screams Of The Damned': '叫喚地獄',
        'Southron Star': '星宿波',
        'Well Of Flame': '井宿焔',
        'Wing And A Prayer': '再生の神通力',
      },
      '~effectNames': {
        'Burns': '火傷',
        'Damage Up': 'ダメージ上昇',
        'Fire Resistance Down II': '火属性耐性低下[強]',
        'HP Boost': '最大ＨＰアップ',
        'Looming Crescendo': '傀儡の調べ',
        'Paying the Piper': '強制移動',
        'Physical Vulnerability Up': '被物理ダメージ増加',
        'Primary Target': '攻撃目標',
        'Stun': 'スタン',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        ':Tenzen': ':典膳',
        'Eastern Pyre': '东炎',
        'Engage!': '战斗开始！',
        'Northern Pyre': '北炎',
        'Rapturous Echo': '爱之音',
        'Scarlet Lady': '火焰鸟',
        'Scarlet Plume': '朱雀的羽毛',
        'Scarlet Tail Feather': '朱雀的尾羽',
        'Song of Durance': '牢之诗',
        'Song of Fire': '燐之诗',
        'Song of Oblivion': '虚之诗',
        'Song of Sorrow': '泪之诗',
        'Southern Pyre': '南炎',
        'Suzaku': '朱雀',
        'Western Pyre': '西炎',
      },
      'replaceText': {
        '--targetable--': '--可选中--',
        '--untargetable--': '--不可选中--',
        'Burn': '燃烧',
        'Close-Quarter Crescendo': '傀儡旋律',
        'Cremate': '赤热击',
        'Enrage': 'Enrage', // FIXME
        'Eternal Flame': '苏生大火',
        'Fleeting Summer': '翼宿击',
        'Hotspot': '红莲炎',
        'Incandescent Interlude': '灼热旋律',
        'Mesmerizing Melody': '引诱旋律',
        'Pay The Piper': '傀儡诗',
        'Pay the Piper': '傀儡诗',
        'Phantom Flurry': '鬼宿脚',
        'Phantom Half': '半场AOE',
        'Phoenix Down': '苏生之羽',
        'Rekindle': '苏生之炎',
        'Rout': '猛进',
        'Ruthless Refrain': '拒绝旋律',
        'Ruthless/Mesmerizing': '拒绝/引诱',
        'Scarlet Fever': '灭尽天火',
        'Scarlet Hymn': '朱红旋律',
        'Scathing Net': '张宿业火',
        'Screams Of The Damned': '叫唤地狱',
        'Southron Star': '星宿波',
        'Well Of Flame': '井宿焰',
        'Wing And A Prayer': '苏生神通力',
      },
      '~effectNames': {
        'Burns': '火伤',
        'Damage Up': 'ダメージ上昇',
        'Fire Resistance Down II': '火属性耐性大幅降低',
        'HP Boost': '体力增加',
        'Looming Crescendo': '傀儡旋律',
        'Paying the Piper': '强制移动',
        'Physical Vulnerability Up': '物理受伤加重',
        'Primary Target': '攻击目标',
        'Stun': '眩晕',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        ':Tenzen': ':텐젠',
        'Eastern Pyre': '동염',
        'Engage!': '전투 시작!',
        'Northern Pyre': '북염',
        'Rapturous Echo': '사랑의 음색',
        'Scarlet Lady': '화염조',
        'Scarlet Plume': '주작의 깃털',
        'Scarlet Tail Feather': '주작의 꽁지깃',
        'Song of Durance': '감금의 시',
        'Song of Fire': '불꽃의 시',
        'Song of Oblivion': '공허의 시',
        'Song of Sorrow': '눈물의 시',
        'Southern Pyre': '남염',
        'Suzaku': '주작',
        'Western Pyre': '서염',
      },
      'replaceText': {
        '--targetable--': '--대상 지정 가능--',
        '--untargetable--': '--대상 지정 불가--',
        'Burn': '연소',
        'Close-Quarter Crescendo': '꼭두각시의 음률',
        'Cremate': '적열격',
        'Enrage': '전멸기',
        'Eternal Flame': '재생의 불길',
        'Fleeting Summer': '익수격',
        'Hotspot': '홍련염',
        'Incandescent Interlude': '작열의 음률',
        'Mesmerizing Melody': '유인의 선율',
        'Pay The Piper': '꼭두각시의 노래',
        'Pay the Piper': '꼭두각시의 노래',
        'Phantom Flurry': '귀수각',
        'Phantom Half': 'Phantom Half', // FIXME
        'Phoenix Down': '재생의 깃털',
        'Rekindle': '재생의 불꽃',
        'Rout': '맹진',
        'Ruthless Refrain': '거절의 선율',
        'Ruthless/Mesmerizing': 'Ruthless/Mesmerizing', // FIXME
        'Scarlet Fever': '소멸천화',
        'Scarlet Hymn': '붉은 선율',
        'Scathing Net': '장수업화',
        'Screams Of The Damned': '규환지옥',
        'Southron Star': '성수파',
        'Well Of Flame': '정수염',
        'Wing And A Prayer': '재생의 신통력',
      },
      '~effectNames': {
        'Burns': '화상',
        'Damage Up': 'ダメージ上昇',
        'Fire Resistance Down II': '불속성 저항 감소[강]',
        'HP Boost': '최대 HP 증가',
        'Looming Crescendo': '꼭두각시의 음률',
        'Paying the Piper': '강제 이동',
        'Physical Vulnerability Up': '받는 물리 피해량 증가',
        'Primary Target': '공격 대상',
        'Stun': '기절',
      },
    },
  ],
}];
