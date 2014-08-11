Ext.define("DBApp.store.User",{
	extend:'Ext.data.Store',
	requires:["DBApp.model.User","Ext.data.proxy.SQL"],
	storeId:'User',
//	name:'User',
	model:'DBApp.model.User',
	autoLoad:true,
	proxy:{
		//model:'DBApp.model.User',	
		type:"sql"
	}
	});
