Ext.define('Rd.view.settings.winSettingsApiMqttTest', {
    extend      : 'Ext.window.Window',
    alias       : 'widget.winSettingsApiMqttTest',
    closable    : true,
    draggable   : true,
    resizable   : true,
    title       : 'Test API Comms',
    width       : 500,
    height      : 350,
    plain       : true,
    border      : false,
    layout      : 'fit',
    glyph       : Rd.config.icnGlobe,
    autoShow    : false,
    defaults    : {
            border: false
    },
    initComponent: function() {
        var me = this;   
        me.items = {
            xtype : 'panel'       
        };
        me.callParent(arguments);
    }
});
