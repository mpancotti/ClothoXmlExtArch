/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        ClothoExtXml: 'app'
    }
});

Ext.application({
    models: [
        'Discount',
        'Prezzo',
        'PrezzoFisso',
        'Rule',
        'Sconto',
        'Vendor'
    ],
    stores: [
        'Discounts',
        'Prezzi',
        'PrezziFissi',
        'Rules',
        'Sconti',
        'Vendors'
    ],
    views: [
        'BasicDataGrid',
        'VendorDataPanel',
        'RulesAreaPanel',
        'MainToolbar',
        'VendorArea'
    ],
    autoCreateViewport: true,
    name: 'ClothoExtXml',
    controllers: [
        'Rules',
        'Vendors',
        'FocusController'
    ]
});
