/* global kiwi:true */

import NicklistUser from './components/NicklistUser.vue'

kkiwi.plugin('NicklistUser', function(kiwi, log) {
    kiwi.replaceModule('components/NicklistUser', {
        template: NicklistUser
    });
});