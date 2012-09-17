/*
 * File: app/store/Rules.js
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

Ext.define('ClothoExtXml.store.Rules', {
    extend: 'Ext.data.Store',

    requires: [
        'ClothoExtXml.model.Rule'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            remoteFilter: true,
            storeId: 'rules',
            model: 'ClothoExtXml.model.Rule',
            proxy: {
                type: 'rest',
                url: '/clothoxml/rules',
                reader: {
                    type: 'json',
                    root: 'data'
                },
                listeners: {
                    exception: {
                        fn: me.onRestproxyException,
                        scope: me
                    }
                }
            },
            listeners: {
                add: {
                    fn: me.onStoreAdd,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onRestproxyException: function(server, response, operation, options) {
        Ext.Msg.alert('Errore nell\'accesso al database', 
        operation.getError().status + ' - ' + operation.getError().statusText,
        function(){
            this.rejectChanges();
            ClothoExtXml.controller.GlobalVariables.hideCurrentContainer()
        },this);
    },

    onStoreAdd: function(store, records, index, options) {
        records[0].codice_vendor_fk=ClothoExtXml.controller.GlobalVariables.getCurrentVendor();
    }

});