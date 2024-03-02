import { Members, Officials } from './accounts.types';

type IdnAccount = {
    username: string;
    uuid: string;
    name: string;
    defaultStreamUrl?: string;
};

type ActiveOfficials = Extract<Officials, 'jkt48'>;
type ActiveMembers = Exclude<
    Members,
    | 'aralie'
    | 'delynn'
    | 'erine'
    | 'fritzy'
    | 'kimmy'
    | 'lana'
    | 'levi'
    | 'lily'
    | 'moreen'
    | 'nachia'
    | 'nala'
    | 'nayla'
    | 'oline'
    | 'regie'
    | 'ribka'
    | 'shasa'
    | 'trisha'
>;

export const officialsIdn: Record<ActiveOfficials, Readonly<IdnAccount>> = {
    //#region Official
    jkt48: {
        username: 'jkt48-official',
        uuid: '50a27780-93e7-4e40-8474-60f6e0cca6da',
        name: 'JKT48',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.4idUspKIZskG.m3u8',
    },
    //#endregion
} as const;

export const membersIdn: Record<ActiveMembers, Readonly<IdnAccount>> = {
    //#region Members
    adel: {
        username: 'jkt48_adel',
        uuid: '9b41afb1-718c-405c-b192-5f3a878c3f17',
        name: 'Adel',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.NfnSR4ckP9Im.m3u8',
    },
    amanda: {
        username: 'jkt48_amanda',
        uuid: 'e8aa0877-684a-4430-8a3b-d96302e53aab',
        name: 'Amanda',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.08vLei7g32Nv.m3u8',
    },
    callie: {
        username: 'jkt48_callie',
        uuid: '0609625b-63dc-4e08-bd4b-4dfe124220ba',
        name: 'Callie',
        defaultStreamUrl: undefined,
    },
    christy: {
        username: 'jkt48_christy',
        uuid: '01506e57-d837-4a1e-8dd4-3e99e3489ac8',
        name: 'Christy',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.R4bPsdzRonL3.m3u8',
    },
    eli: {
        username: 'jkt48_eli',
        uuid: '1f119aa1-3482-44b6-9f68-2ad41c8d6743',
        name: 'Eli',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.809zi18MGuB1.m3u8',
    },
    ella: {
        username: 'jkt48_ella',
        uuid: 'b0d1e6c3-d356-4b00-8d00-846e5297693b',
        name: 'Ella',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.BDGTjOuDMTDH.m3u8',
    },
    feni: {
        username: 'jkt48_feni',
        uuid: '13f4d35d-f3a7-482e-a593-91d664c7ffcc',
        name: 'Feni',
        defaultStreamUrl: undefined,
    },
    fiony: {
        username: 'jkt48_fiony',
        uuid: '85482779-8b59-4995-a600-f8a4230c29d8',
        name: 'Fiony',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.oDOImnzzGyk8.m3u8',
    },
    flora: {
        username: 'jkt48_flora',
        uuid: 'ad52d75c-c00f-4c6d-9f36-b865b15b342f',
        name: 'Flora',
        defaultStreamUrl: undefined,
    },
    freya: {
        username: 'jkt48_freya',
        uuid: '12addeb8-6ec5-4cea-a3b4-ad86e9bfc8d1',
        name: 'Freya',
        defaultStreamUrl: undefined,
    },
    gita: {
        username: 'jkt48_gita',
        uuid: '82ffac10-ee56-43d0-ad38-ce432384cfe5',
        name: 'Gita',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.k4fAFOYXENlG.m3u8',
    },
    gracia: {
        username: 'jkt48_gracia',
        uuid: 'ffbdaf60-9c8c-4897-82ef-fc3e7f6deb9c',
        name: 'Gracia',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.jnOMRcM1CNz3.m3u8',
    },
    indah: {
        username: 'jkt48_indah',
        uuid: '539f5185-1414-416c-b84d-2ad366b6d60a',
        name: 'Indah',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.oKpAUHJSe6RM.m3u8',
    },
    indira: {
        username: 'jkt48_indira',
        uuid: '101e8521-4f90-4b0e-9bff-fc4d1923e82d',
        name: 'Indira',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.O6aLPrWLhBTe.m3u8',
    },
    jessi: {
        username: 'jkt48_jessi',
        uuid: 'a9579a29-9203-40c0-9326-9837b8eae6e8',
        name: 'Jessi',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.726SnUjvlfRJ.m3u8',
    },
    kathrina: {
        username: 'jkt48_kathrina',
        uuid: 'c3d28bcd-d000-4ccc-a9bf-956853cfa433',
        name: 'Kathrina',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.a4Aq6zWq9xBO.m3u8',
    },
    lia: {
        username: 'jkt48_lia',
        uuid: '15dfee86-a928-4a15-8c90-6aa21097d0ff',
        name: 'Lia',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.ZEhAbERTyvxy.m3u8',
    },
    lulu: {
        username: 'jkt48_lulu',
        uuid: '531d1bc0-ee91-475f-9e9d-098127b8d383',
        name: 'Lulu',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.LuflGrysVdSz.m3u8',
    },
    lyn: {
        username: 'jkt48_lyn',
        uuid: '73aa1a4d-7482-41be-b28e-25e0b6c7b967',
        name: 'Lyn',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.YMhzlmrLe7tw.m3u8',
    },
    marsha: {
        username: 'jkt48_marsha',
        uuid: 'e27569d2-0d2a-4cd8-a0a6-ca2da28e0a62',
        name: 'Marsha',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.sSKNwImoM3zD.m3u8',
    },
    muthe: {
        username: 'jkt48_muthe',
        uuid: '9f308a8f-29cb-45c0-9df2-6ffd16bc9298',
        name: 'Muthe',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.sm9AmQPkGDGS.m3u8',
    },
    olla: {
        username: 'jkt48_olla',
        uuid: '9c32c2bc-f74e-4420-8be8-f4ac863b8064',
        name: 'Olla',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.QGp4Op9dfxOA.m3u8',
    },
    oniel: {
        username: 'jkt48_oniel',
        uuid: '0078fe3c-8f4d-495b-bb7c-bdb2b98d0598',
        name: 'Oniel',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.KGbEli9xlInK.m3u8',
    },
    raisha: {
        username: 'jkt48_raisha',
        uuid: '728d224e-6ccb-43d2-a029-a0147dc7fdee',
        name: 'Raisha',
        defaultStreamUrl: undefined,
    },
    shani: {
        username: 'jkt48_shani',
        uuid: '291f4ff3-698b-4258-9343-372f9133c4f0',
        name: 'Shani',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.P7Sbhg6PTgcn.m3u8',
    },
    zee: {
        username: 'jkt48_zee',
        uuid: 'f4388e63-04a6-4a62-9533-fbca54d6dd4d',
        name: 'Zee',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.w5OhSjUumDJq.m3u8',
    },
    //#endregion

    //#region Gen 11
    alya: {
        username: 'jkt48_alya',
        uuid: '74e76417-0353-487f-b9b7-7520c0398e87',
        name: 'Alya',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.sLZkhRvMutd4.m3u8',
    },
    anindya: {
        username: 'jkt48_anindya',
        uuid: 'a5c72141-65a3-47be-86ef-1dc1feaab10d',
        name: 'Anindya',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.r1IZpJ0puDJi.m3u8',
    },
    cathy: {
        username: 'jkt48_cathy',
        uuid: 'f740e9da-772f-4ae2-8ddd-49f717aacf63',
        name: 'Cathy',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.Q0uEvM6Dl951.m3u8',
    },
    chelsea: {
        username: 'jkt48_chelsea',
        uuid: '7e9a83b8-4fd8-42ad-b4b6-54c00fbbe28d',
        name: 'Chelsea',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.o3XoGdLr8Ejd.m3u8',
    },
    cynthia: {
        username: 'jkt48_cynthia',
        uuid: '4f795073-38c9-4df7-9388-74b83de69801',
        name: 'Cynthia',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.UVu6FmzsZAuY.m3u8',
    },
    daisy: {
        username: 'jkt48_daisy',
        uuid: 'b11b0692-d0b8-464c-849a-9e81439a048c',
        name: 'Daisy',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.tk9WxdsYj8NE.m3u8',
    },
    danella: {
        username: 'jkt48_danella',
        uuid: '33139b05-1c43-4b48-bba3-ec960b18b36e',
        name: 'Danella',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.1TQqlwWPwce5.m3u8',
    },
    elin: {
        username: 'jkt48_elin',
        uuid: 'e0ececb4-71d8-4f32-a221-ef21634a746a',
        name: 'Elin',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.OHdxDVm8kOqf.m3u8',
    },
    gendis: {
        username: 'jkt48_gendis',
        uuid: 'ab901d82-db49-488c-8d03-da0082ab70e2',
        name: 'Gendis',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.pIypkyH1I3k7.m3u8',
    },
    gracie: {
        username: 'jkt48_gracie',
        uuid: 'cae4d972-5f14-4512-9706-37c1802a0541',
        name: 'Gracie',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.ztIO0UisaA3P.m3u8',
    },
    greesel: {
        username: 'jkt48_greesel',
        uuid: '0b6b1a63-a0d6-4f4b-be5a-563a63fe279e',
        name: 'Greesel',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.z3nXSqOvE9Fs.m3u8',
    },
    jeane: {
        username: 'jkt48_jeane',
        uuid: '67896474-8e0a-487a-8415-22846bb9f4ae',
        name: 'Jeane',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.2lfzssN6fqEn.m3u8',
    },
    michie: {
        username: 'jkt48_michie',
        uuid: '6970e68a-b488-497a-b793-3a735db5e997',
        name: 'Michie',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.uE0Cu8MD1aMc.m3u8',
    },
    //#endregion

    //#region Gen 12
    /* 
    aralie: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    delynn: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    erine: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    fritzy: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    kimmy: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    lana: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    levi: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    lily: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    moreen: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    nachia: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    nala: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    nayla: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    oline: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    regie: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    ribka: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    shasa: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    trisha: {
        username: '',
        uuid: '',
        name: '',
        defaultStreamUrl: undefined,
    },
    */
    //#endregion
} as const;
