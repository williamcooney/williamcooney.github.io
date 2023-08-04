(() => {
    let list = [];
    let index = -1;

    const ec = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
    ];

    const qm = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
    ];

    const qn = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '15.jpg',
        '16.jpg',
        '17.jpg',
        '18.jpg',
        '19.jpg',
        '20.jpg',
        '21.jpg',
        '22.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.jpg',
        '27.jpg',
        '28.jpg',
        '29.jpg',
        '30.jpg',
        '31.jpg',
        '32.jpg',
        '33.jpg',
        '34.jpg',
        '35.jpg',
        '36.jpg',
        '37.jpg',
        '38.jpg',
        '39.jpg',
        '40.jpg',
        '41.jpg',
        '42.jpg',
        '43.jpg',
        '44.jpg',
        '45.jpg',
        '46.jpg',
        '47.jpg',
        '48.jpg',
        '49.jpg',
        '50.jpg',
        '51.jpg',
        '52.jpg',
        '53.jpg',
        '54.jpg',
        '55.jpg',
        '56.jpg',
        '57.jpg',
        '58.jpg',
        '59.jpg',
        '60.jpg',
        '61.jpg',
        '62.jpg',
        '63.jpg',
        '64.jpg',
        '65.jpg',
        '66.jpg',
    ];

    const ro = [
        '1.jpg',
        '2.mp4',
        '3.jpg',
        '4.mp4',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.mp4',
        '11.jpg',
        '12.jpg',
        '13.mp4',
        '14.mp4',
        '15.jpg',
        '16.jpg',
        '17.jpg',
        '18.jpg',
    ];

    const wc = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
    ];

    const ww = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '15.jpg',
        '16.mp4',
        '17.jpg',
        '18.jpg',
        '19.jpg',
        '20.jpg',
        '21.jpg',
        '22.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.jpg',
        '27.jpg',
        '28.jpg',
        '29.jpg',
        '30.jpg',
        '31.jpg',
        '32.jpg',
        '33.jpg',
        '34.jpg',
        '35.jpg',
        '36.jpg',
        '37.jpg',
        '38.jpg',
        '39.jpg',
        '40.mp4',
        '41.jpg',
        '42.jpg',
        '43.jpg',
        '44.jpg',
        '45.jpg',
        '46.jpg',
        '47.jpg',
        '48.mp4',
        '49.jpg',
        '50.mp4',
        '51.jpg',
        '52.jpg',
        '53.jpg',
        '54.jpg',
        '55.jpg',
    ];

    const on_click = (id, callback) => document.getElementById(id).addEventListener('click', callback);

    const show = (id) => {
        document.getElementById(id).classList.remove('d-none');
        document.getElementById(id).classList.add('d-flex');
    };

    const hide = (id) => {
        document.getElementById(id).classList.remove('d-flex');
        document.getElementById(id).classList.add('d-none');
    };

    const set_screen = (name) => {
        switch(name) {
            case 'pic': {
                hide('home');
                hide('vid');
                show('pic');
            } break;
            case 'vid': {
                hide('home');
                hide('pic');
                show('vid');
            } break;
            default: {
                hide('pic');
                hide('vid');
                show('home');
            } break;
        }
    };

    const build_list = (name) => {
        const results = [];

        switch(name) {
            case 'qn': {
                qn.forEach(x => results.push(`media/qn/${x}`));
            } break;
            case 'qm': {
                qm.forEach(x => results.push(`media/qm/${x}`));
            } break;
            case 'ww': {
                ww.forEach(x => results.push(`media/ww/${x}`));
            } break;
            case 'wc': {
                wc.forEach(x => results.push(`media/wc/${x}`));
            } break;
            case 'ro': {
                ro.forEach(x => results.push(`media/ro/${x}`));
            } break;
            case 'ec': {
                ec.forEach(x => results.push(`media/ec/${x}`));
            } break;
            default: {
                qn.forEach(x => results.push(`media/qn/${x}`));
                qm.forEach(x => results.push(`media/qm/${x}`));
                ww.forEach(x => results.push(`media/ww/${x}`));
                wc.forEach(x => results.push(`media/wc/${x}`));
                ro.forEach(x => results.push(`media/ro/${x}`));
                ec.forEach(x => results.push(`media/ec/${x}`));
            } break;
        }

        list = results;
        index = -1;
    };

    const set_media = (url) => {
        if(url.substring(url.length - 4) === '.mp4') {
            document.getElementById('vid-src').src = url;
            set_screen('vid');
        } else {
            document.getElementById('pic-src').src = url;
            set_screen('pic');
        }
    };

    const next = () => {
        index++;

        if(index >= list.length) {
            set_screen('home');
            return;
        }

        set_media(list[index]);
    };

    on_click('pic', () => next());
    on_click('vid', () => next());

    const setup = (name) => {
        on_click(`card-${name}`, () => {
            build_list(name);
            next();
        });
    }
    setup('all');
    setup('qn');
    setup('qm');
    setup('ww');
    setup('wc');
    setup('ro');
    setup('ec');
})();
