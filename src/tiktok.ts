import { Members, Officials } from './accounts.types';

type TiktokAccount = {
    id: string;
    username: string;
};

type ActiveOfficials = Extract<Officials, 'jkt48'>;

export const officialsTiktok: Record<
    ActiveOfficials,
    Readonly<TiktokAccount>
> = {
    // Official
    jkt48: { id: '6940509177513477122', username: 'jkt48.official' },
} as const;

export const membersTiktok: Record<Members, Readonly<TiktokAccount>> = {
    // Members
    adel: { id: '6824805914240664577', username: 'adeljkt48' },
    amanda: { id: '7059268179784729626', username: 'jkt48.amanda.s' },
    callie: { id: '7059269155057402906', username: 'jkt48.callie.a' },
    christy: { id: '6832179585023624194', username: 'christyjkt48' },
    eli: { id: '6832179968195150849', username: 'elijkt48' },
    ella: { id: '7059270147147744282', username: 'jkt48.ella.a' },
    feni: { id: '6832177287313605634', username: 'fenijkt48' },
    fiony: { id: '6825556405542700033', username: 'fionyjkt48' },
    flora: { id: '6949541772762596354', username: 'florajkt48' },
    freya: { id: '6824893042371331073', username: 'freyajkt48' },
    gita: { id: '6832182064680453122', username: 'gitajkt48' },
    gracia: { id: '6823991216523281410', username: 'graciajkt48' },
    indah: { id: '6825075377343415298', username: 'indahjkt48' },
    indira: { id: '7059270926596326427', username: 'jkt48.indira.s' },
    jessi: { id: '6825077928226948097', username: 'jessijkt48' },
    kathrina: { id: '6825080798975493121', username: 'kathrinjkt48' },
    lia: { id: '7059268867134211098', username: 'jkt48.aurellia_' },
    lulu: { id: '6963122911164466177', username: 'lulu_jkt48' },
    lyn: { id: '7059271144537326618', username: 'jkt48.lyn.s' },
    marsha: { id: '7009953449279456282', username: 'marsha.jkt48' },
    muthe: { id: '6832182385536287746', username: 'muthejkt48' },
    olla: { id: '6825090801980425218', username: 'ollajkt48' },
    oniel: { id: '6832183812560258049', username: 'onieljkt48' },
    raisha: { id: '7059271844842701851', username: 'jkt48.raisha.s' },
    shani: { id: '6824461281114735618', username: 'shanijkt48' },
    zee: { id: '6586157972286701570', username: 'zeejkt48' },

    // Gen 11
    alya: { id: '7147350941363225626', username: 'alyajkt48' },
    anindya: { id: '7160633338074760218', username: 'anindyajkt48' },
    cathy: { id: '7160634166081111067', username: 'cathyjkt48' },
    chelsea: { id: '7160635659521311771', username: '_chelseajkt48' },
    cynthia: { id: '7160636732106605595', username: 'cynthiajkt48' },
    daisy: { id: '7160638442229187610', username: 'daisyjkt48' },
    danella: { id: '7160637482131981338', username: 'danellajkt48' },
    elin: { id: '7160634715749401627', username: 'elinjkt48' },
    gendis: { id: '7160639400253883419', username: 'gendisjkt48' },
    gracie: { id: '7160640306315461658', username: 'graciejkt48' },
    greesel: { id: '7160641579928355867', username: 'greeseljkt48' },
    jeane: { id: '7160642658128987163', username: 'jeanejkt48' },
    michie: { id: '7160643809347372058', username: 'michiejkt48' },

    // Gen 12
    aralie: { id: '7302008975795782661', username: 'jkt48.aralie' },
    delynn: { id: '7302009964900533253', username: 'jkt48.delynn' },
    erine: { id: '7302013007226209286', username: 'jkt48.erine_' },
    fritzy: { id: '7302028807191708677', username: 'jkt48.fritzy' },
    kimmy: { id: '7302028134320358406', username: 'jkt48.kimmy' },
    lana: { id: '7302012164674601989', username: 'jkt48.lana' },
    levi: { id: '7302014721846166533', username: 'jkt48.levi' },
    lily: { id: '7302013440380503045', username: 'jkt48.lily' },
    moreen: { id: '7302014372519838726', username: 'jkt48.moreen' },
    nachia: { id: '7302015014482707462', username: 'jkt48.nachia' },
    nala: { id: '7302027891700892677', username: 'jkt48.nala' },
    nayla: { id: '7302011557688017926', username: 'jkt48.nayla' },
    oline: { id: '7302026621119333381', username: 'jkt48.oline' },
    regie: { id: '7302027091918078982', username: 'jkt48.regie' },
    ribka: { id: '7302624596221608965', username: 'jkt48.ribka' },
    shasa: { id: '7302010912515654662', username: 'jkt48.shasa' },
    trisha: { id: '7302013854274733061', username: 'jkt48.trisha' },
} as const;
