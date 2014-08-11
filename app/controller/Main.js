Ext.define('DBApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
    		saveButton:'button[action=submitform]'        
        },
        control: {
		saveButton:{
			tap:'saveFormData'
		}
            
        }
    },
    saveFormData:function(btn){
	var form=btn.up("formpanel");
//	console.log(form.getValues());
	Ext.getStore("User").add(form.getValues());
	Ext.getStore("User").sync();

	},
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});

