
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

 define([
    'jquery',
    'Magento_Customer/js/model/authentication-popup',
    'Magento_Customer/js/customer-data',
], function ($) {
    'use strict';

    var sidebarMixin = {
        _initContent: function () {
            var events = {};
            events['click ' + this.options.button.remove] =  function (event) {
                event.stopPropagation();
                this._removeItem($(event.currentTarget));
                event.stopImmediatePropagation();
            };

            this._on(this.element, events);
            this._calcHeight();
            return this._super();
        }
    };

    return function (sidebar) {
        $.widget('mage.sidebar', sidebar, sidebarMixin);
        return $.mage.sidebar;
    };
});
