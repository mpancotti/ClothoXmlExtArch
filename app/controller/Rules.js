/*
 * File: app/controller/Rules.js
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

Ext.define('ClothoExtXml.controller.Rules', {
    extend: 'Ext.app.Controller',

    models: [
        'Discount',
        'Prezzo',
        'PrezzoFisso',
        'Rule',
        'Sconto'
    ],
    stores: [
        'Discounts',
        'Prezzi',
        'PrezziFissi',
        'Rules',
        'Sconti'
    ],

    refs: [
        {
            ref: 'scontiList',
            selector: 'scontiGridPanel'
        },
        {
            ref: 'prezziList',
            selector: 'prezziGridPanel'
        },
        {
            ref: 'prezziFissiList',
            selector: 'prezziFissiGridPanel'
        }
    ],

    rulesDoubleClick: function(view,record) {
        // Mostra il container
        if(record){
            var container = Ext.getCmp('ruleFormContainer');
            if (!container.isVisible())
            container.setVisible(true);
            // Legge il Basic form
            var form = Ext.getCmp('ruleForm');
            // Carica i dati dallo store
            form.getForm().loadRecord(record);
            //Imposta le variabili globali
            ClothoExtXml.controller.GlobalVariables.setCurrentStore(view.getStore());
            ClothoExtXml.controller.GlobalVariables.setCurrentRecord(record);
            ClothoExtXml.controller.GlobalVariables.setCurrentForm(form);
            ClothoExtXml.controller.GlobalVariables.setCurrentContainer(container);
            ClothoExtXml.controller.GlobalVariables.setCurrentStatus('Modify');
            ClothoExtXml.controller.GlobalVariables.setCurrentModel('ClothoExtXml.model.Rule');
        }
    },

    init: function(application) {
        this.control(
        {'ruleGridPanel': {'itemdblclick':this.rulesDoubleClick,'itemclick':this.rulesItemClick,'selectionchange':this.ruleSelectionChange},
        '#ruleFormSaveBtn':{'click': this.ruleFormSave},
        '#ruleFormExit':{'click': this.ruleFormExit}, 
        '#maintoolbar-add-btn':{'click': this.ruleClearToAdd},
        '#maintoolbar-modify-btn':{'click': this.ruleClearToModify},
    })
    },

    rulesItemClick: function(view,record) {
        var form = Ext.getCmp('ruleForm');
        var container = Ext.getCmp('ruleFormContainer');
        ClothoExtXml.controller.GlobalVariables.setCurrentStore(view.getStore());
        ClothoExtXml.controller.GlobalVariables.setCurrentRecord(record);
        ClothoExtXml.controller.GlobalVariables.setCurrentForm(form);
        ClothoExtXml.controller.GlobalVariables.setCurrentContainer(container);
        ClothoExtXml.controller.GlobalVariables.setCurrentStatus('Selected');
        ClothoExtXml.controller.GlobalVariables.setCurrentModel('ClothoExtXml.model.Rule');
    },

    ruleFormSave: function() {
        ClothoExtXml.controller.GlobalVariables.formSave(
        function(){ClothoExtXml.controller.GlobalVariables.deleteFromStore()},
        function(){ClothoExtXml.controller.GlobalVariables.hideCurrentContainer()}
        )   
    },

    ruleSelectionChange: function(model, records) {
        if(records[0]){
            this.getScontiList().getStore().load({params:{rule:records[0].get('id')}});
            this.getPrezziList().getStore().load({params:{rule:records[0].get('id')}});
            this.getPrezziFissiList().getStore().load({params:{rule:records[0].get('id')}});

        }
        else{
            var rec= Ext.getCmp('ruleGridPanel').getSelectionModel();
            rec.select(0);
            this.getScontiList().getStore().load({params:{rule:rec.getSelection()[0].get('id')}});
            this.getPrezziList().getStore().load({params:{rule:rec.getSelection()[0].get('id')}});
            this.getPrezziFissiList().getStore().load({params:{rule:rec.getSelection()[0].get('id')}});
        }

    },

    ruleClearToAdd: function() {
        if(ClothoExtXml.controller.GlobalVariables.getCurrentModel()=='ClothoExtXml.model.Rule'){
            ClothoExtXml.controller.GlobalVariables.addCurrentRecord();
        }
    },

    ruleFormExit: function() {
        ClothoExtXml.controller.GlobalVariables.formExit();
    }

});
