/*
 * File: app/controller/Vendors.js
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

Ext.define('ClothoExtXml.controller.Vendors', {
    extend: 'Ext.app.Controller',

    models: [
        'Vendor'
    ],
    stores: [
        'Vendors'
    ],

    refs: [
        {
            ref: 'ruleList',
            selector: 'ruleGridPanel'
        },
        {
            ref: 'disList',
            selector: 'discountGridPanel'
        }
    ],

    init: function(application) {
        this.control(
        {'vendorGridPanel': {'itemdblclick':this.vendorDoubleClick,'itemclick':this.vendorItemClick,'selectionchange':this.vendorSelectionChange},
        '#venFormSaveBtn':{'click': this.vendorFormSave},
        '#venFormExit':{'click':this.vendorFormExit},
        '#maintoolbar-add-btn':{'click': this.vendorClearToAdd},
        '#maintoolbar-modify-btn':{'click': this.vendorClearToModify}
    })
    },

    vendorDoubleClick: function(view, record) {
        // Mostra il container
        if(record){
            var container = Ext.getCmp('vendorFormContainer');
            if (!container.isVisible())
            container.setVisible(true);
            // Legge il Basic form
            var form = Ext.getCmp('vendorForm');
            form.queryById('codiceVendor').setEditable(false);
            form.queryById('nomeVendor').focus(false,100);
            // Carica i dati dallo store
            form.getForm().loadRecord(record);
            // Imposta le variabili globali
            ClothoExtXml.controller.GlobalVariables.setCurrentStore(view.getStore());
            ClothoExtXml.controller.GlobalVariables.setCurrentRecord(record);
            ClothoExtXml.controller.GlobalVariables.setCurrentVendor(record.codice);
            ClothoExtXml.controller.GlobalVariables.setCurrentForm(form);
            ClothoExtXml.controller.GlobalVariables.setCurrentContainer(container);
            ClothoExtXml.controller.GlobalVariables.setCurrentStatus('Modify');
            ClothoExtXml.controller.GlobalVariables.setCurrentModel('ClothoExtXml.model.Vendor');
        }
    },

    vendorFormSave: function() {

        ClothoExtXml.controller.GlobalVariables.formSave(
        function(){ClothoExtXml.controller.GlobalVariables.deleteFromStore()},
        function(){ClothoExtXml.controller.GlobalVariables.hideCurrentContainer();
        ClothoExtXml.controller.GlobalVariables.getCurrentForm().queryById('codiceVendor').setEditable(true);}
        )    

    },

    vendorItemClick: function(view, record) {
        var form = Ext.getCmp('vendorForm');
        var container = Ext.getCmp('vendorFormContainer');
        ClothoExtXml.controller.GlobalVariables.setCurrentStore(view.getStore());
        ClothoExtXml.controller.GlobalVariables.setCurrentRecord(record);
        ClothoExtXml.controller.GlobalVariables.setCurrentVendor(record.codice);
        ClothoExtXml.controller.GlobalVariables.setCurrentForm(form);
        ClothoExtXml.controller.GlobalVariables.setCurrentContainer(container);
        ClothoExtXml.controller.GlobalVariables.setCurrentStatus('Selected');
        ClothoExtXml.controller.GlobalVariables.setCurrentModel('ClothoExtXml.model.Vendor');
    },

    vendorClearToAdd: function() {
        if(ClothoExtXml.controller.GlobalVariables.getCurrentModel()=='ClothoExtXml.model.Vendor'){
            var form=Ext.getCmp('vendorForm');
            form.queryById('codiceVendor').setEditable(true);
            form.queryById('codiceVendor').focus(true,100);
            ClothoExtXml.controller.GlobalVariables.addCurrentRecord();
        }
    },

    vendorClearToModify: function() {
        this.vendorDoubleClick( 
        Ext.getCmp('vendorGridPanel'),
        ClothoExtXml.controller.GlobalVariables.getCurrentRecord()
        )
    },

    vendorSelectionChange: function(model,records) {

        if(records[0]!=undefined){
            this.getRuleList().getStore().load({params:{vendor:records[0].get('codice')}});
            this.getDisList().getStore().load({params:{vendor:records[0].get('codice')}});
        }
        else{
            var rec= Ext.getCmp('vendorGridPanel').getSelectionModel();
            rec.select(0);
            this.getRuleList().getStore().load({params:{vendor:rec.getSelection()[0].get('codice')}});
            this.getDisList().getStore().load({params:{vendor:records[0].get('codice')}});
        }

    },

    vendorFormExit: function() {
        ClothoExtXml.controller.GlobalVariables.formExit();
    }

});
