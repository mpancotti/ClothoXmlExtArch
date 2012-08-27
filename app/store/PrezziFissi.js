/*
 * File: app/store/PrezziFissi.js
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

Ext.define('ClothoExtXml.store.PrezziFissi', {
    extend: 'Ext.data.Store',

    requires: [
        'ClothoExtXml.model.PrezzoFisso'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'prezziFissi',
            model: 'ClothoExtXml.model.PrezzoFisso',
            data: [
                {
                    id: 1,
                    codice: 12345,
                    prezzo_fornitore: 50,
                    netto_lordo: 60,
                    affiliato: 50,
                    affiliato_light: 60,
                    somministrato: 70,
                    scadenza: '2012/12/12'
                },
                {
                    id: 2,
                    codice: 12445,
                    prezzo_fornitore: 55,
                    netto_lordo: 65,
                    affiliato: 55,
                    affiliato_light: 65,
                    somministrato: 75,
                    scadenza: '2012/12/12'
                },
                {
                    id: 3,
                    codice: 12545,
                    prezzo_fornitore: 60,
                    netto_lordo: 70,
                    affiliato: 60,
                    affiliato_light: 70,
                    somministrato: 80,
                    scadenza: '2012/12/12'
                },
                {
                    id: 4,
                    codice: 12645,
                    prezzo_fornitore: 65,
                    netto_lordo: 75,
                    affiliato: 65,
                    affiliato_light: 75,
                    somministrato: 85,
                    scadenza: '2012/12/12'
                },
                {
                    id: 5,
                    codice: 12745,
                    prezzo_fornitore: 70,
                    netto_lordo: 80,
                    affiliato: 70,
                    affiliato_light: 80,
                    somministrato: 90,
                    scadenza: '2012/12/12'
                }
            ]
        }, cfg)]);
    }
});