var _0x1ab9ab = _0x1002;
(function (_0x471911, _0x56eb36) {
    var _0x87882a = _0x1002;
    while (!![]) {
        try {
            var _0x44d49f = parseInt(_0x87882a(0xe8)) + -parseInt(_0x87882a(0x101)) + -parseInt(_0x87882a(0xb5)) * parseInt(_0x87882a(0xe1)) + parseInt(_0x87882a(0x113)) * parseInt(_0x87882a(0xe5)) + -parseInt(_0x87882a(0x106)) + -parseInt(_0x87882a(0x117)) + parseInt(_0x87882a(0xdc));
            if (_0x44d49f === _0x56eb36) break;
            else _0x471911['push'](_0x471911['shift']());
        } catch (_0x42625b) {
            _0x471911['push'](_0x471911['shift']());
        }
    }
}(_0x8b91, 0x68f61));
var vidlength = 0x32,
    matrix_a = [],
    myPlayer, OT_CB = 0x0,
    isStart = 0x0,
    myScore = 0x0;
current_question = 0x0;
var abbreviations = '',
    PLAYER_ID = 0x0,
    pause_times = [_0x1ab9ab(0x112), _0x1ab9ab(0xef), _0x1ab9ab(0xbb), _0x1ab9ab(0xec)],
    seconds_times = [];
setUpQuestions(pause_times), convertToTimes(pause_times);
var current_pos = 0x0,
    OT_INTERVAL, OTR_INTERVAL, CURRENT_POINTS = 0x0,
    OTR = 0x0,
    OT_CB = 0x12c,
    CURRENT_PAGE = 0x0,
    LEVEL = 0x1,
    DID = '',
    PLAYER_ID;
clientStorage = window[_0x1ab9ab(0xd4)];
clientStorage[_0x1ab9ab(0xaa)](_0x1ab9ab(0xf2)) === null && (clientStorage['setItem'](_0x1ab9ab(0xf2), '-'), clientStorage[_0x1ab9ab(0x9f)](_0x1ab9ab(0xb1), '-'));
clientStorage['getItem'](_0x1ab9ab(0x9e)) === null ? (DID = generateFingerprint(0xa), clientStorage[_0x1ab9ab(0x9f)](_0x1ab9ab(0x9e), DID)) : DID = clientStorage[_0x1ab9ab(0xaa)](_0x1ab9ab(0x9e));
$(_0x1ab9ab(0xc1))['on'](_0x1ab9ab(0xa7), _0x1ab9ab(0x123), function () {
    var _0x84243b = _0x1ab9ab;
    takeMeTo('.home', _0x84243b(0xf5));
}), $('body')['on'](_0x1ab9ab(0xa7), _0x1ab9ab(0xf8), function () {
    var _0x39408b = _0x1ab9ab;
    takeMeTo(_0x39408b(0xf5), _0x39408b(0xd1));
}), $(_0x1ab9ab(0xc1))['on'](_0x1ab9ab(0xa7), _0x1ab9ab(0x102), function () {
    var _0x35f225 = _0x1ab9ab;
    fname = '-', ek_number = $('#staff')[_0x35f225(0x9d)](), team = '-';
    if ($(_0x35f225(0xb7))['is'](_0x35f225(0x10e))) {
        if (fname == '') swal({
            'title': _0x35f225(0xe9),
            'text': _0x35f225(0xe7),
            'icon': _0x35f225(0x10d)
        });
        else {
            if (ek_number == '') swal({
                'title': 'Please Enter Staff ID',
                'text': '',
                'icon': _0x35f225(0x10d)
            });
            else team == '' ? swal({
                'title': _0x35f225(0x116),
                'text': '',
                'icon': _0x35f225(0x10d)
            }) : (data = 'fname=' + fname + _0x35f225(0xfd) + DID + _0x35f225(0xd8) + ek_number + _0x35f225(0xbf) + team, $[_0x35f225(0x11b)]({
                'type': _0x35f225(0x10c),
                'url': _0x35f225(0xf7),
                'data': data,
                'dataType': _0x35f225(0xba),
                'timeout': _0x35f225(0xc9),
                'beforeSend': function () {
                    var _0x14739e = _0x35f225;
                    $(_0x14739e(0x102))[_0x14739e(0x11f)](_0x14739e(0xcf));
                },
                'success': function (_0x959da2) {
                    var _0x30ceaa = _0x35f225;
                    console[_0x30ceaa(0x11d)](_0x959da2), $(_0x30ceaa(0x102))[_0x30ceaa(0x11f)]('Success...'), response = _0x959da2[_0x30ceaa(0x122)];
                    response == '1' && (PLAYER_ID = _0x959da2['id'], clientStorage[_0x30ceaa(0x9f)](_0x30ceaa(0x104), PLAYER_ID), loadGame(), takeMeTo(_0x30ceaa(0xd1), '.game_instructions'), console[_0x30ceaa(0x11d)](response));
                    if (response == '2') PLAYER_ID = _0x959da2['id'], time_taken = _0x959da2['time_taken'], accuracy = _0x959da2[_0x30ceaa(0x124)], clientStorage['setItem'](_0x30ceaa(0x104), PLAYER_ID), takeMeTo(_0x30ceaa(0xd1), _0x30ceaa(0xd0)), $(_0x30ceaa(0xfa))['text'](accuracy + '%'), $(_0x30ceaa(0xc4))[_0x30ceaa(0xa8)](time_taken + _0x30ceaa(0xb2)), console['log'](response);
                    else {
                        if (response == 0x3) swal({
                            'title': 'Please Try again later',
                            'text': '',
                            'icon': 'error'
                        });
                        else response == 0x4 && swal({
                            'title': 'Engagement Closed',
                            'text': _0x30ceaa(0xc7),
                            'icon': 'error'
                        });
                    }
                },
                'complete': function () {
                    var _0x43299b = _0x35f225;
                    $(_0x43299b(0x102))['text'](_0x43299b(0xd5));
                },
                'error': function (_0x3fb5c1, _0x2092e6, _0xbfe7d6) {
                    var _0x4d3948 = _0x35f225;
                    console[_0x4d3948(0x11d)](_0x2092e6, _0xbfe7d6);
                }
            }));
        }
    } else swal({
        'title': 'Please Accept Terms and Conditions',
        'text': '',
        'icon': 'error'
    });
}), $(_0x1ab9ab(0xc1))['on'](_0x1ab9ab(0xa7), _0x1ab9ab(0x10f), function () {
    var _0x1520b0 = _0x1ab9ab;
    takeMeTo('.game_instructions', _0x1520b0(0xa4)), OT_INTERVAL = window[_0x1520b0(0x111)](function () {
        overallCounter_CB();
    }, 0x3e8), OTR_INTERVAL = window[_0x1520b0(0x111)](function () {
        overallCounter2();
    }, 0xa);
});
function takeMeTo(_0x8ae478, _0x352a38) {
    var _0x36d11b = _0x1ab9ab,
        _0x2c4fee = $(_0x8ae478);
    out_anime = _0x36d11b(0xf4), _0x2c4fee[_0x36d11b(0x109)](out_anime + ' animated')[_0x36d11b(0xfe)](out_anime + _0x36d11b(0xa0))[_0x36d11b(0xf3)](_0x36d11b(0xb6), function () {
        var _0x58588f = _0x36d11b;
        _0x2c4fee[_0x58588f(0x109)](out_anime + _0x58588f(0xa0)), _0x2c4fee[_0x58588f(0xfe)](_0x58588f(0xbd));
    }), in_anime = _0x36d11b(0xa9);
    var _0x55a340 = $(_0x352a38);
    return _0x55a340[_0x36d11b(0x109)](_0x36d11b(0xbd)), _0x55a340[_0x36d11b(0x109)](in_anime + _0x36d11b(0xa0))[_0x36d11b(0xfe)](in_anime + _0x36d11b(0xa0))[_0x36d11b(0xf3)](_0x36d11b(0xb6), function () {
        var _0x1fd543 = _0x36d11b;
        _0x55a340['removeClass'](in_anime + _0x1fd543(0xa0)), _0x2c4fee['removeClass'](out_anime);
    }), !![];
}
function timeIsUp() {
    var _0x3fe5a2 = _0x1ab9ab;
    console[_0x3fe5a2(0x11d)](_0x3fe5a2(0xcc)), loadFinal('TU');
}
function loadGame() {
    var _0x7a95d9 = _0x1ab9ab;
    $[_0x7a95d9(0x11b)]({
        'type': 'POST',
        'url': 'scripts/GQ4.php',
        'dataType': _0x7a95d9(0xba),
        'beforeSend': function () {},
        'success': function (_0x4d3611) {
            var _0x1f7101 = _0x7a95d9;
            abbreviations = _0x4d3611, total_items = abbreviations['length'], console[_0x1f7101(0x11d)](total_items);
        }
    });
}
function loadFinal(_0x10b099) {
    var _0x497e78 = _0x1ab9ab;
    takeMeTo(_0x497e78(0xa4), _0x497e78(0xd0)), FIN = Number(OTR) / 0x64, FIN > 0x12c && (FIN = 0x12c), _0x10b099 == 'TU' && (FIN = 0x12c), clearInterval(OT_INTERVAL), clearInterval(OTR_INTERVAL), Percent_acc = LOCKED_POINTS / 0x28 * 0x64, UA = matrix_a[_0x497e78(0xcd)](), $('#final_score')['text'](Percent_acc + '%'), $(_0x497e78(0xc4))[_0x497e78(0xa8)](FIN + _0x497e78(0xb2)), serialized = _0x497e78(0x110) + Percent_acc + _0x497e78(0x125) + PLAYER_ID + _0x497e78(0x103) + LOCKED_POINTS + _0x497e78(0xd2) + FIN + _0x497e78(0xea) + _0x497e78(0xfb) + UA + _0x497e78(0xfd) + DID, $[_0x497e78(0x11b)]({
        'type': _0x497e78(0x10c),
        'url': 'scripts/update_points.php',
        'data': serialized,
        'dataType': _0x497e78(0xba),
        'beforeSend': function () {
            var _0x7209ec = _0x497e78;
            $(_0x7209ec(0xeb))['addClass'](_0x7209ec(0xd6)), $(_0x7209ec(0xeb))['text'](_0x7209ec(0x11c));
        },
        'success': function (_0x4bf05d) {
            var _0x71c921 = _0x497e78;
            response = _0x4bf05d[_0x71c921(0x122)], console[_0x71c921(0x11d)](response);
            if (response == 0x1) {} else {
                if (response == 0x3) {} else {
                    if (response == 0x0) {} else {}
                }
            }
        },
        'complete': function () {},
        'error': function (_0x196e1f, _0x2a1d41, _0x816419) {
            var _0x13a7d2 = _0x497e78;
            console[_0x13a7d2(0x11d)](_0x2a1d41, _0x816419);
        }
    });
}
function processRT(_0xe023d8, _0x171484) {
    var _0x1c095a = _0x1ab9ab;
    serialized = _0x1c095a(0xde) + PLAYER_ID + _0x1c095a(0x103) + LOCKED_POINTS + _0x1c095a(0xd2) + OTR + _0x1c095a(0xea) + '&qid=' + _0xe023d8 + _0x1c095a(0xce) + _0x171484, $[_0x1c095a(0x11b)]({
        'type': _0x1c095a(0x10c),
        'url': _0x1c095a(0x127),
        'data': serialized,
        'dataType': _0x1c095a(0xba),
        'beforeSend': function () {},
        'success': function (_0x3f1109) {
            var _0x555b22 = _0x1c095a;
            response = _0x3f1109['response'], console[_0x555b22(0x11d)](response);
        }
    });
}
function overallCounter2() {
    OTR = OTR + 0x1;
}
function overallCounter_CB() {
    var _0x548582 = _0x1ab9ab;
    OT_CB > 0x0 ? (OT_CB = OT_CB - 0x1, $(_0x548582(0x114))[_0x548582(0x11f)](OT_CB)) : timeIsUp();
}
function sendFinal(_0x358728, _0x22e649) {
    var _0x5bd903 = _0x1ab9ab;
    serialized = _0x5bd903(0x110) + _0x358728 + _0x5bd903(0x125) + PLAYER_ID + _0x5bd903(0x103) + _0x358728 + _0x5bd903(0xd2) + _0x22e649 + '&DID=' + DID, $['ajax']({
        'type': _0x5bd903(0x10c),
        'url': _0x5bd903(0x10b),
        'data': serialized,
        'dataType': _0x5bd903(0xba),
        'beforeSend': function () {},
        'success': function (_0x29c716) {
            var _0x555037 = _0x5bd903;
            response = _0x29c716[_0x555037(0x122)], console[_0x555037(0x11d)](response);
            if (response == 0x1) {}
        },
        'complete': function () {},
        'error': function (_0x31fae0, _0x34c254, _0x80e00e) {
            var _0x597a2c = _0x5bd903;
            console[_0x597a2c(0x11d)](_0x34c254, _0x80e00e);
        }
    });
}
function generateFingerprint(_0x272c75) {
    var _0x465c82 = _0x1ab9ab,
        _0x528fcd = '',
        _0x2024e4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        _0x26c24e = _0x2024e4[_0x465c82(0xc2)];
    for (var _0xe54b69 = 0x0; _0xe54b69 < _0x272c75; _0xe54b69++) {
        _0x528fcd += _0x2024e4[_0x465c82(0xc5)](Math['floor'](Math['random']() * _0x26c24e));
    }
    return res = Date['now'](), _0x528fcd = _0x528fcd + '*' + res, _0x528fcd;
}
function playTune(_0x59b07a) {
    var _0x12aa4f = _0x1ab9ab,
        _0x5c46c5 = document[_0x12aa4f(0xb8)](_0x59b07a);
    return _0x5c46c5[_0x12aa4f(0xe6)] = 0x1, _0x5c46c5[_0x12aa4f(0xdf)]();
}
function pauseTune(_0x543194) {
    var _0x57f6e7 = _0x1ab9ab,
        _0x430768 = document[_0x57f6e7(0xb8)](_0x543194);
    _0x430768[_0x57f6e7(0xed)](), _0x430768[_0x57f6e7(0x100)] = 0x0;
}
function playMuted(_0x423d05) {
    var _0x5b7a37 = _0x1ab9ab,
        _0x6aaf9b = document['getElementById'](_0x423d05);
    return _0x6aaf9b[_0x5b7a37(0xe6)] = 0x0, _0x6aaf9b[_0x5b7a37(0xdf)]();
}
function setUpQuestions(_0x1f7f88) {
    var _0x530811 = _0x1ab9ab;
    len = _0x1f7f88[_0x530811(0xc2)], html_code = '';
    for (var _0x1986ee = 0x0; _0x1986ee < len; _0x1986ee++) {
        pos = _0x1f7f88[_0x1986ee], segments = pos[_0x530811(0xae)](':'), minutes = Number(segments[0x0]), seconds = Number(segments[0x1]), display_pos = _0x1986ee + 0x1, total_time = minutes * 0x3c + seconds, percent = total_time / vidlength * 0x64, cls = 'inactive', _0x1986ee == 0x0 && (cls = _0x530811(0xa2)), html_code = html_code + _0x530811(0xc8) + percent + _0x530811(0xb4) + _0x1986ee + _0x530811(0xd9) + cls + '\">' + display_pos + _0x530811(0xdb) + pos + _0x530811(0xdd);
    }
    console[_0x530811(0x11d)](html_code), $(_0x530811(0x11e))[_0x530811(0xb3)](html_code);
}
function convertToTimes(_0x480aef) {
    var _0x3bb441 = _0x1ab9ab;
    len = _0x480aef[_0x3bb441(0xc2)];
    for (var _0xf58f19 = 0x0; _0xf58f19 < len; _0xf58f19++) {
        pos = _0x480aef[_0xf58f19], segments = pos[_0x3bb441(0xae)](':'), minutes = Number(segments[0x0]), seconds = Number(segments[0x1]), display_pos = _0xf58f19 + 0x1, total_time = minutes * 0x3c + seconds, seconds_times['push'](total_time);
    }
}
videojs(_0x1ab9ab(0xda))[_0x1ab9ab(0x121)](function () {
    var _0x569bc5 = _0x1ab9ab;
    myPlayer = this, myPlayer['fill'](!![]), myPlayer['responsive'](!![]), myPlayer[_0x569bc5(0xf1)](![]), myPlayer['on'](_0x569bc5(0x11a), function () {
        var _0x59eda3 = _0x569bc5;
        valu = seconds_times[current_question], cur_time = Number(myPlayer[_0x59eda3(0x100)]()), updateGreenProgress(cur_time), cur_time > valu && (myPlayer[_0x59eda3(0xed)](), loadQuiz());
    });
});
function updateGreenProgress(_0x3be9cb) {
    var _0x21211d = _0x1ab9ab;
    percent = _0x3be9cb / total_time * 0x64, console[_0x21211d(0x11d)](percent), $(_0x21211d(0xab))['css']('width', percent + '%');
}
function loadQuiz() {
    var _0x226411 = _0x1ab9ab;
    ht = prepareQuestion(current_question), $('#question_holder')['html'](ht), $(_0x226411(0xb9))[_0x226411(0x109)]('hidden');
}
function _0x1002(_0x24199c, _0x5aa21e) {
    _0x24199c = _0x24199c - 0x9d;
    var _0x8b91c5 = _0x8b91[_0x24199c];
    return _0x8b91c5;
}
function loadNext() {
    var _0x1d76d3 = _0x1ab9ab;
    $(_0x1d76d3(0xb9))[_0x1d76d3(0xfe)](_0x1d76d3(0xbd)), current_question = current_question + 0x1, console[_0x1d76d3(0x11d)](current_question), current_question == 0x4 && loadFinal('NT'), $(_0x1d76d3(0xf6) + current_question)['removeClass'](_0x1d76d3(0x107)), $('#indicator_' + current_question)[_0x1d76d3(0xfe)](_0x1d76d3(0xa2)), myPlayer['play']();
}
$('#play_pause')[_0x1ab9ab(0xa7)](function () {
    var _0x5eecbe = _0x1ab9ab;
    isStart = isStart + 0x1, current_status = $(this)[_0x5eecbe(0xe2)](_0x5eecbe(0xac));
    if (current_status == _0x5eecbe(0xe4)) myPlayer[_0x5eecbe(0xdf)](), $(this)[_0x5eecbe(0xe2)](_0x5eecbe(0xac), _0x5eecbe(0x10a)), $(this)[_0x5eecbe(0x109)]('play'), $(this)[_0x5eecbe(0xfe)](_0x5eecbe(0xed));
    else current_status == 'playing' && (myPlayer['pause'](), $(this)[_0x5eecbe(0xe2)]('value', _0x5eecbe(0xe4)), $(this)['removeClass'](_0x5eecbe(0xed)), $(this)[_0x5eecbe(0xfe)](_0x5eecbe(0xdf)));
});
var TEMP_CHOICES_HOLDER = [],
    LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
function prepareQuestion(_0x306fad) {
    var _0x205e6d = _0x1ab9ab;
    html_code = '', total_items = abbreviations[_0x205e6d(0xc2)];
    for (var _0x3f3f41 = 0x0; _0x3f3f41 < total_items; _0x3f3f41++) {
        questions = abbreviations[_0x3f3f41]['question'], que = questions['title'], cqid = questions['id'], c_count = questions[_0x205e6d(0xe3)], console[_0x205e6d(0x11d)](abbreviations[_0x3f3f41]);
        if (_0x306fad == c_count) {
            html_code = _0x205e6d(0x119) + que + _0x205e6d(0x105), answers = abbreviations[_0x3f3f41]['answers'], answer_length = answers[_0x205e6d(0xc2)];
            for (var _0x2ee374 = 0x0; _0x2ee374 < answer_length; _0x2ee374++) {
                html_code = html_code + '<button  class=\"ans answer_holder\"  data-is_selected=\"no\" data-pos=\"1\"   data-q=\"' + questions['id'] + '\" data-a=\"' + answers[_0x2ee374][_0x205e6d(0xaf)] + '\" data-qm=\"' + answers[_0x2ee374][_0x205e6d(0xd7)] + '\">' + answers[_0x2ee374][_0x205e6d(0xf0)] + _0x205e6d(0x108);
            }
            html_code = html_code + '</div></div><div class=\"bottom_div\"><button id=\"submit_answer\" class=\"butty submit_bt\" data-id=\"' + questions['id'] + _0x205e6d(0xc0);
        }
    }
    return console[_0x205e6d(0x11d)](html_code), html_code;
}
$('body')['on'](_0x1ab9ab(0xa7), _0x1ab9ab(0xee), function () {
    var _0x3e2566 = _0x1ab9ab;
    data_a = $(this)[_0x3e2566(0xe2)]('a'), data_q = $(this)[_0x3e2566(0xe2)]('q'), data_qp = $(this)[_0x3e2566(0xe2)]('qp'), data_qm = $(this)['data']('qm'), q_type = $(this)[_0x3e2566(0xe2)](_0x3e2566(0xbc)), CURRENT_UA = data_q + '|' + data_a + '|' + data_qp + '|' + data_qm + '|S', is_selected = $(this)['data'](_0x3e2566(0xca)), console[_0x3e2566(0x11d)](is_selected);
    if (is_selected == _0x3e2566(0xc3)) {
        playTune(_0x3e2566(0xd3));
        const _0x320d05 = TEMP_CHOICES_HOLDER[_0x3e2566(0x115)](CURRENT_UA);
        _0x320d05 > -0x1 && TEMP_CHOICES_HOLDER['splice'](_0x320d05, 0x1), console[_0x3e2566(0x11d)](TEMP_CHOICES_HOLDER + _0x3e2566(0xff)), $(this)[_0x3e2566(0x109)](_0x3e2566(0xa1)), $(this)['data'](_0x3e2566(0xca), 'no');
    } else playTune(_0x3e2566(0xb0)), TEMP_CHOICES_HOLDER = [], $(_0x3e2566(0xee))['removeClass'](_0x3e2566(0xa1)), $(_0x3e2566(0xf9) + data_q)['find'](_0x3e2566(0xee))['removeClass'](_0x3e2566(0xa1)), $(_0x3e2566(0xf9) + data_q)['find'](_0x3e2566(0xee))[_0x3e2566(0xe2)]('is_selected', 'no'), TEMP_CHOICES_HOLDER[_0x3e2566(0xfc)](CURRENT_UA), $(this)[_0x3e2566(0xe2)]('is_selected', _0x3e2566(0xc3)), $(this)[_0x3e2566(0xfe)](_0x3e2566(0xa1));
}), $(_0x1ab9ab(0xc1))['on'](_0x1ab9ab(0xa7), _0x1ab9ab(0xa6), function () {
    var _0x2f1051 = _0x1ab9ab;
    matrix_a[_0x2f1051(0xfc)](CURRENT_UA);
    var _0x5e9218 = processAnswers();
    _0x5e9218 && (send_ans_content = TEMP_CHOICES_HOLDER['join'](), setTimeout(function () {
        loadNext();
    }, 0xc8));
}), LOCKED_POINTS = 0x0;
function processAnswers() {
    var _0x19ce0b = _0x1ab9ab,
        _0x4eeb63 = ![];
    num_choices = TEMP_CHOICES_HOLDER[_0x19ce0b(0xc2)];
    if (num_choices < 0x1) swal(_0x19ce0b(0xbe), '', _0x19ce0b(0x118)), playTune(_0x19ce0b(0x128));
    else {
        var _0x357061 = 0x0;
        for (var _0x1e053b = 0x0; _0x1e053b < num_choices; _0x1e053b++) {
            composite_string = TEMP_CHOICES_HOLDER[_0x1e053b];
            var _0x13abc4 = composite_string[_0x19ce0b(0xae)]('|'),
                _0x48693f = _0x13abc4[0x1],
                _0x1835ff = _0x13abc4[0x0],
                _0x4a1f7b = _0x13abc4[0x3],
                _0x3f1414 = _0x13abc4[0x4],
                _0x2eed47 = Number(_0x13abc4[0x2]);
            _0x4a1f7b[_0x19ce0b(0xcb)]() == 'c' ? (_0x357061 = _0x357061 + 0xa, myScore = myScore + 0xa, $(_0x19ce0b(0xf6) + current_question)[_0x19ce0b(0x109)](_0x19ce0b(0xa2)), $(_0x19ce0b(0xf6) + current_question)[_0x19ce0b(0xfe)]('done'), playTune(_0x19ce0b(0xa3))) : ($(_0x19ce0b(0xf6) + current_question)[_0x19ce0b(0x109)]('activate'), $(_0x19ce0b(0xf6) + current_question)[_0x19ce0b(0xfe)](_0x19ce0b(0xc6)), playTune(_0x19ce0b(0xa5))), $(_0x19ce0b(0xe0))[_0x19ce0b(0x11f)](myScore), TEMP_CHOICES_HOLDER = [];
        }
        LOCKED_POINTS = LOCKED_POINTS + _0x357061, $('.display_score')[_0x19ce0b(0x11f)](LOCKED_POINTS), processRT(_0x1835ff, _0x48693f), _0x4eeb63 = !![];
    }
    return _0x4eeb63;
}
function playTune(_0x34b86e) {
    var _0x4b5482 = _0x1ab9ab,
        _0x460430 = document[_0x4b5482(0xb8)](_0x34b86e);
    return _0x460430[_0x4b5482(0xe6)] = 0x1, _0x460430[_0x4b5482(0xdf)]();
}
function togglePause(_0x3065b7) {
    var _0x39a928 = _0x1ab9ab,
        _0x5a0fde = document[_0x39a928(0xb8)](_0x3065b7);
    _0x5a0fde[_0x39a928(0xed)](), _0x5a0fde[_0x39a928(0x100)] = 0x0;
}
function playMuted(_0x2982ba) {
    var _0x456872 = _0x1ab9ab,
        _0x2a4c01 = document[_0x456872(0xb8)](_0x2982ba);
    return _0x2a4c01['volume'] = 0x0, _0x2a4c01['play']();
}
document[_0x1ab9ab(0xad)](_0x1ab9ab(0x120), function (_0x4d5a34) {
    var _0x308a75 = _0x1ab9ab;
    _0x4d5a34[_0x308a75(0x126)]();
}, ![]);