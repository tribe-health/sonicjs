var dataService = require('../../../services/data.service');
var emitterService = require('../../../services/emitter.service');
var globalService = require('../../../services/global.service');

module.exports = menuItemWithNewPageMainService = {

    startup: async function () {
        emitterService.on('beginProcessModuleShortCode', async function (options) {

            if (options.shortcode.name === 'MENU-ITEM-WITH-NEW-PAGE') {

                options.moduleName = 'menu-item-with-new-page';
                await moduleService.processModuleInColumn(options);
            }

        });
    },

}
