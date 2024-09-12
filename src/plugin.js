/* global kiwi:true */
import NicklistUserExt from './components/NicklistUserExt.vue'

kiwi.plugin('NicklistUser', function (kiwi, log) {
    kiwi.replaceModule('components/NicklistUser', NicklistUserExt);
});