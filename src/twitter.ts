import { Members, Officials } from './accounts.types';

type TwitterAccount = {
    id: string;
    username: string;
};

type ActiveOfficials = Exclude<Officials, 'jkt48-merch'>;

export const officialsTwitter: Record<ActiveOfficials, TwitterAccount> = {
    // Official
    jkt48: { id: '351535962', username: 'officialJKT48' },
    'jkt48-cs': { id: '1308054102702583809', username: 'moshi2jkt48' },
} as const;

export const membersTwitter: Record<Members, TwitterAccount> = {
    // Members
    adel: { id: '1148250023303401472', username: 'R_AdelJKT48' },
    amanda: { id: '1487067198162046979', username: 'PS_AmandaJKT48' },
    callie: { id: '1487068731142377476', username: 'AW_CallieJKT48' },
    christy: { id: '1057323534551142400', username: 'A_ChristyJKT48' },
    eli: { id: '1057318996561690624', username: 'H_EliJKT48' },
    ella: { id: '1487291928257654785', username: 'AM_EllaJKT48' },
    feni: { id: '2397436536', username: 'F_FeniJKT48' },
    fiony: { id: '1130448444282232832', username: 'A_FionyJKT48' },
    flora: { id: '1130447123319681024', username: 'S_FloraJKT48' },
    freya: { id: '4722555409', username: 'Freya_JKT48' },
    gita: { id: '986499254188322816', username: 'A_GitaJKT48' },
    gracia: { id: '2397676153', username: 'S_GraciaJKT48' },
    indah: { id: '1223198542988054529', username: 'C_IndahJKT48' },
    indira: { id: '1487072752955658243', username: 'SP_IndiraJKT48' },
    jessi: { id: '1057844081315897344', username: 'C_JessiJKT48' },
    kathrina: { id: '1222076115566522368', username: 'I_KathrinaJKT48' },
    lia: { id: '1487068053116362757', username: 'AU_LiaJKT48' },
    lulu: { id: '1130446438704353280', username: 'A_LuluJKT48' },
    lyn: { id: '1487297103588368385', username: 'SE_LynJKT48' },
    marsha: { id: '1222075070404689922', username: 'L_MarshaJKT48' },
    muthe: { id: '1051192239882293248', username: 'A_MutheJKT48' },
    olla: { id: '1051495051124043776', username: 'F_OllaJKT48' },
    oniel: { id: '1130446548913934336', username: 'C_OnielJKT48' },
    raisha: { id: '1487298128499806208', username: 'SW_RaishaJKT48' },
    shani: { id: '2399305668', username: 'N_ShaniJKT48' },
    zee: { id: '1051522644988686341', username: 'A_ZeeJKT48' },

    // Gen 11
    alya: { id: '1586985330800226304', username: 'AA_AlyaJKT48' },
    anindya: { id: '1586990445854593024', username: 'AR_AnindyaJKT48' },
    cathy: { id: '1586992742093103104', username: 'N_CathyJKT48' },
    chelsea: { id: '1587001241200390144', username: 'DC_ChelseaJKT48' },
    cynthia: { id: '1587004468524388353', username: 'Y_CynthiaJKT48' },
    daisy: { id: '1587029214170996737', username: 'Daisy_JKT48' },
    danella: { id: '1587029640623030274', username: 'Danella_JKT48' },
    elin: { id: '1586994398684123136', username: 'Elin_JKT48' },
    gendis: { id: '1587028520232161280', username: 'Gendis_JKT48' },
    gracie: { id: '1587027654146129926', username: 'Gracie_JKT48' },
    greesel: { id: '1587026900635242497', username: 'Greesel_JKT48' },
    jeane: { id: '1587025846786609152', username: 'Jeane_JKT48' },
    michie: { id: '1586998054384586753', username: 'Michie_JKT48' },

    // Gen 12
    aralie: { id: '1725124372485328896', username: 'Aralie_JKT48' },
    delynn: { id: '1725125435045163008', username: 'Delynn_JKT48' },
    erine: { id: '1725178982428274688', username: 'CErine_JKT48' },
    fritzy: { id: '1725130363620753408', username: 'RFritzy_JKT48' },
    kimmy: { id: '1725207957129084928', username: 'Kimmy_JKT48' },
    lana: { id: '1736615634237284352', username: 'AR_LanaJKT48' },
    levi: { id: '1725200414822580227', username: 'Levi_JKT48' },
    lily: { id: '1725188974296391680', username: 'Lily_JKT48' },
    moreen: { id: '1725199599651209216', username: 'Moreen_JKT48' },
    nachia: { id: '1725203010434056193', username: 'Nachia_JKT48' },
    nala: { id: '1725207038559731713', username: 'Nala_JKT48' },
    nayla: { id: '1735554273617031168', username: 'SNayla_JKT48' },
    oline: { id: '1725203926793011201', username: 'M_OlineJKT48' },
    regie: { id: '1725205692456583168', username: 'Regie_JKT48' },
    ribka: { id: '1725111671025524736', username: 'Ribka_JKT48' },
    shasa: { id: '1725126936622665728', username: 'Shasa_JKT48' },
    trisha: { id: '1725198003680788481', username: 'JTrisha_JKT48' },
};
