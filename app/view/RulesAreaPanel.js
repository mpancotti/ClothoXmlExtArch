/*
 * File: app/view/RulesAreaPanel.js
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

Ext.define('ClothoExtXml.view.RulesAreaPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rulesAreaPanel',

    requires: [
        'ClothoExtXml.view.RuleGidPanel',
        'ClothoExtXml.view.RuleForm'
    ],

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Regole di sconto e prezzo',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            maxWidth: 160,
                            minWidth: 160,
                            width: 160,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'ruleGridPanel'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            hidden: false,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    id: 'ruleData',
                                    maxHeight: 30,
                                    minHeight: 30,
                                    tpl: [
                                        '<div style="padding:5px"> ',
                                        '    <span>RegExp:<b>{regexp}</b></span>&nbsp;&nbsp;<span>Valore Note 3:<b>{valore_note_3}</b></span>',
                                        '    &nbsp;&nbsp;<span>Strategia:<b>{strategy}</b></span>&nbsp;&nbsp;<span>Scadenza:<b>{scadenza}</b></span>',
                                        '</div>'
                                    ],
                                    frameHeader: false
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    hidden: true,
                                    id: 'ruleFormContainer',
                                    maxHeight: 220,
                                    minHeight: 220,
                                    items: [
                                        {
                                            xtype: 'ruleForm',
                                            hidden: false
                                        }
                                    ]
                                },
                                {
                                    xtype: 'tabpanel',
                                    flex: 1,
                                    padding: 2,
                                    activeTab: 0,
                                    items: [
                                        {
                                            xtype: 'gridpanel',
                                            padding: 2,
                                            title: 'Sconti',
                                            store: 'Sconti',
                                            viewConfig: {

                                            },
                                            columns: [
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'sconto_fornitore',
                                                    text: 'Sconto_fornitore'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'tolleranza',
                                                    text: 'Tolleranza'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_lordo',
                                                    text: 'Prezzo_lordo'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'affiliato',
                                                    text: 'Affiliato'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'affiliato_light',
                                                    text: 'Affiliato_light'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'somministrato',
                                                    text: 'Somministrato'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_affiliato',
                                                    text: 'Prezzo_affiliato'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_affiliato_light',
                                                    text: 'Prezzo_affiliato_light'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_somministrato',
                                                    text: 'Prezzo_somministrato'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'scadenza',
                                                    text: 'Scadenza'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'gridpanel',
                                            title: 'Prezzi',
                                            store: 'Prezzi',
                                            viewConfig: {

                                            },
                                            columns: [
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_from',
                                                    text: 'Prezzo_from'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_to',
                                                    text: 'Prezzo_to'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'netto_lordo',
                                                    text: 'Netto_lordo'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_affiliato',
                                                    text: 'Prezzo_affiliato'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_affiliato_light',
                                                    text: 'Prezzo_affiliato_light'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_somministrato',
                                                    text: 'Prezzo_somministrato'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    dataIndex: 'scadenza',
                                                    text: 'Scadenza'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'gridpanel',
                                            title: 'Prezzo fisso',
                                            store: 'PrezziFissi',
                                            viewConfig: {

                                            },
                                            columns: [
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'prezzo_fornitore',
                                                    text: 'Prezzo_fornitore'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'netto_lordo',
                                                    text: 'Netto_lordo'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'affiliato',
                                                    text: 'Affiliato'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'affiliato_light',
                                                    text: 'Affiliato_light'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    dataIndex: 'somministrato',
                                                    text: 'Somministrato'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    dataIndex: 'scadenza',
                                                    text: 'Scadenza'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});