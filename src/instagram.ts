import { Members, Officials } from './accounts.types';

type InstagramAccount = {
    id: string;
    username: string;
};

type ActiveOfficials = Exclude<Officials, 'jkt48-cs'>;

export const officialsInstagram: Record<
    ActiveOfficials,
    Readonly<InstagramAccount>
> = {
    // Official
    jkt48: { id: '3082798080', username: 'jkt48' },
    'jkt48-merch': { id: '4775538769', username: 'jkt48mrch' },
} as const;

export const membersInstagram: Record<Members, Readonly<InstagramAccount>> = {
    // Members
    adel: { id: '14818786906', username: 'jkt48.adel' },
    amanda: { id: '51673997280', username: 'jkt48.amanda.s' },
    callie: { id: '51704682083', username: 'jkt48.callie.a' },
    christy: { id: '9145176000', username: 'jkt48.christy' },
    eli: { id: '8971446779', username: 'jkt48.eli' },
    ella: { id: '51296391646', username: 'jkt48.ella.a' },
    feni: { id: '3079024445', username: 'jkt48feni' },
    fiony: { id: '14997520514', username: 'jkt48.fiony' },
    flora: { id: '14811899509', username: 'jkt48.flora' },
    freya: { id: '9884975657', username: 'jkt48.freya' },
    gita: { id: '7950862752', username: 'jkt48gita' },
    gracia: { id: '3079069051', username: 'jkt48gracia' },
    indah: { id: '28733660397', username: 'jkt48indah_' },
    indira: { id: '51849341795', username: 'jkt48.indira.s' },
    jessi: { id: '10672013127', username: 'jkt48.jessi' },
    kathrina: { id: '28942049294', username: 'jkt48.kathrina' },
    lia: { id: '51662869963', username: 'jkt48.aurellia_' },
    lulu: { id: '14742425077', username: 'jkt48.lulu' },
    lyn: { id: '51306804718', username: 'jkt48.lyn.s' },
    marsha: { id: '29112442650', username: 'jkt48.marsha' },
    muthe: { id: '8792364019', username: 'jkt48.muthe_' },
    olla: { id: '10113792466', username: 'jkt48.olla' },
    oniel: { id: '14671615574', username: 'jkt48.oniel' },
    raisha: { id: '51292071924', username: 'jkt48.raisha.s' },
    shani: { id: '3079067207', username: 'jkt48shani' },
    zee: { id: '9144760144', username: 'jkt48.zee' },

    // Gen 11
    alya: { id: '56089447105', username: 'jkt48.alya_' },
    anindya: { id: '56472271647', username: 'jkt48.anindya_' },
    cathy: { id: '56437909652', username: 'jkt48.cathy' },
    chelsea: { id: '60806566287', username: 'jkt48.chelsea.d' },
    cynthia: { id: '56463179512', username: 'jkt48.cynthia' },
    daisy: { id: '56468714778', username: 'jkt48.daisy' },
    danella: { id: '56436245861', username: 'jkt48.danella' },
    elin: { id: '56084727697', username: 'jkt48.elin_' },
    gendis: { id: '56135666678', username: 'jkt48.gendis' },
    gracie: { id: '56427487233', username: 'jkt48.gracie' },
    greesel: { id: '56428863043', username: 'jkt48.greesel' },
    jeane: { id: '56467955023', username: 'jkt48.jeane' },
    michie: { id: '56513469431', username: 'jkt48.michie_' },

    // Gen 12
    aralie: { id: '62379322098', username: 'jkt48.aralie' },
    delynn: { id: '62839331181', username: 'jkt48.delynn' },
    erine: { id: '62837867436', username: 'jkt48.erine' },
    fritzy: { id: '62793959585', username: 'jkt48.fritzy.r' },
    kimmy: { id: '62971997401', username: 'jkt48.kimmy' },
    lana: { id: '62789927836', username: 'jkt48.lana.a' },
    levi: { id: '62975221284', username: 'jkt48.levi' },
    lily: { id: '62798039169', username: 'jkt48.lily_' },
    moreen: { id: '63159411688', username: 'jkt48.moreen' },
    nachia: { id: '62954143386', username: 'jkt48.nachia.t' },
    nala: { id: '63367504599', username: 'jkt48.nala' },
    nayla: { id: '62967333855', username: 'jkt48.nayla.s' },
    oline: { id: '63140775119', username: 'jkt48.oline' },
    regie: { id: '62980548726', username: 'jkt48.regie' },
    ribka: { id: '62846082488', username: 'jkt48.ribka' },
    shasa: { id: '62804670461', username: 'jkt48.shasa' },
    trisha: { id: '63369176393', username: 'jkt48.trisha' },
} as const;
