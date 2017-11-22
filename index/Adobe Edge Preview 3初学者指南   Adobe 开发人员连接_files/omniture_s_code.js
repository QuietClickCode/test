var s_Host=window.location.hostname.toLowerCase();
var s_URL=document.URL.toLowerCase();
var s_JsHost = (("https:" == document.location.protocol) ? "https://www.adobe.com" : "http://wwwimages.adobe.com");	

/** Define rsid and create s object**/
if ((s_Host.indexOf(".dev.adobe.") != -1) || (s_Host.indexOf(".sflab.acrobat.") != -1) || (s_Host.indexOf("stage.") != -1) || (s_Host.indexOf("stage2.") != -1) || (s_Host.indexOf("staging.") != -1) || (s_Host.indexOf(".sea.adobe") != -1) || (s_Host.indexOf(".corp.adobe") != -1) || (s_Host.indexOf(".dev0")!=-1) || (s_Host.indexOf(".qa0")!=-1) || (s_Host.indexOf(".pr0") != -1)) var s_account="mxadobetest";
if (s_Host.indexOf("cps-internal.corp") != -1) var s_account="mxcpsinternal";
else if (s_Host.indexOf("kuler.adobe") != -1) var s_account="mxmacromedia,mxkuler";	
if (!window.s_accountName && !window.s_account)	var s_account="mxmacromedia";
else if (window.s_accountName!='' && window.s_account==null) var s_account=window.s_accountName;
else if (window.s_account!='') var s_account=window.s_account;

var s=s_gi(s_account,1) // Copy G to H variables
function s_wds(vs){	return; }
function s_ca(vs){ return; }

/************************** CONFIG SECTION **************************/
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,doc,pdf,xls,hqx,dmg,mxp,bin,jar,adpp,air,msi,zxp,flv,xml,cptx"
s.linkInternalFilters="javascript:,adobe.,adobesystems.,macromedia.,photoshop.com,acrobat.com,scene7.com,businesscatalyst.com,openscreenproject.org,flex.org,acrobatusers.com,worldsecuresystems.com,runaware.com,../"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"

/** Set Server Variable for Dylan pages **/
var s_checkDylan= /(adobe.com\/cfusion\/)|(adobe.com\/flex\/)|(http:\/\/livedocs.*)/gi;
if (s_URL.search(s_checkDylan)!= -1) s.server="Dylan";

/** Custom TrackingTranslation Services **/
if (s_URL.indexOf("translate.google.com")!=-1){
	var s_sourceLanguagePattern = /.*&sl=(..).*/g;
	var s_targetLanguagePattern = /.*&tl=(..).*/g;
	var s_pageURLPattern		= /.*&u=(.*)?&usg=/g;
	s.pageName=s_pageURLPattern.exec(s_URL)[1];
	s.pageName="translated-google:"+decodeURIComponent(s.pageName);
	s.prop53="google:"+s_sourceLanguagePattern.exec(s_URL)[1]+"-"+s_targetLanguagePattern.exec(s_URL)[1];
}
else if (s_URL.indexOf("207.46.192.232")!=-1){
	var s_URL = parent.document.URL.toLowerCase(); // microsoft uses frames, so need to work with the right one
	var s_sourceLanguagePattern = /.*&from=(..).*/g;
	var s_targetLanguagePattern = /.*&to=(..).*/g;
	var s_pageURLPattern        = /.*&a=(.*html)/g;
	s.pageName=s_pageURLPattern.exec(s_URL)[1];
	s.pageName="translated-microsoft:"+decodeURIComponent(s.pageName);
	s.prop53="microsoft:"+s_sourceLanguagePattern.exec(s_URL)[1]+"-"+s_targetLanguagePattern.exec(s_URL)[1];
}
else if (s_URL.indexOf("babelfish")!=-1){
	var s_sourceLanguagePattern = /.*lp=(..).*/g;
	var s_targetLanguagePattern = /.*lp=.._(..).*/g;
	var s_pageURLPattern        = /.*url=(.*html)/g;
	s.pageName=s_pageURLPattern.exec(s_URL)[1];
	s.pageName="translated-babelfish:"+decodeURIComponent(s.pageName);
	s.prop53="babelfish:"+s_sourceLanguagePattern.exec(s_URL)[1]+"-"+s_targetLanguagePattern.exec(s_URL)[1];
}

/** Dependant JS (Eloqua, Demandbase, TNT mbox.js) **/
if (s.c_r("omniture_optout")!=1 && s_URL.indexOf("/misc/optout")==-1) {
	/* Eloqua Integration */	
	var s_checkElq=/(success.adobe.com)|(\/digital-media)|(\/education)|(\/solutions)|(\/manufacturing)|(\/products\/)|(adobe.com\/aboutadobe\/openoptions)|(\/acom\/connectnow)|(devnet\/acrobat\/sdk)|(adobe.com\/devnet-archive\/acrobatconnect)|(blogs.adobe.com\/adobeingovernment)|(adobe.com\/security\/partners)|(\/support\/connect)|(\/support\/programs\/connect)|(partners.adobe.com\/resellerfinder\/na\/)/gi;
	var s_matchElq = s_URL.search(s_checkElq);
	if (s_matchElq < 1) {
		if (s_URL.indexOf("/acrobat.com") != -1) s_matchElq = 1;
		else if (s_URL.indexOf("/cfusion/mmform/index.cfm") != -1) {
			var s_checkElqDylan=/(name=livecycle)|(name=vertical_rfi)|(name=vertical%5f)|(name=acrobat)|(name=open_options)|(name=open%5foptions)/;
			var s_matchElqDylan=window.s_URL.search(s_checkElqDylan);
			if (s_matchElqDylan > 0) s_matchElq = 1;
		}
		else if ((s_URL.indexOf("/cfusion/event/index.cfm?event=list") != -1) && (s_URL.indexOf("loc=en_us") != -1)) s_matchElq = 1;	
		else if (s_URL.indexOf("/cfusion/acrobatconnectpro") != -1)	s_matchElq = 1;
		else if (s_URL.indexOf("/cfusion/showcase/") != -1) s_matchElq = 1;
		else if (s_URL.indexOf("/cfusion/mmform/") != -1) s_matchElq = 1;
		else if (s_URL.indexOf("/cfusion/tdrc/ ") != -1) s_matchElq = 1;
	}
	if (s_matchElq > 0) {		
		document.write('<SCR' + 'IPT TYPE="text/javascript" LANGUAGE="JavaScript" SRC="' + s_JsHost + '/uber/eloqua/elqCfg.js' + '"><\/SCR' + 'IPT>');
		document.write('<SCR' + 'IPT TYPE="text/javascript" LANGUAGE="JavaScript" SRC="' + s_JsHost + '/uber/eloqua/elqImg.js' + '"><\/SCR' + 'IPT>');
	}

	var s_matchTnT=-1;
	if (s_URL.indexOf("http://get.")!=-1 || s_URL.indexOf("/flash/about")!=-1 || s_URL.indexOf("blogs.adobe") != -1) s_matchTnT=1;
	else {
		/* TNT mbox.js file */
		if(typeof(window['mboxVersion']) == "undefined") {
			if (s_Host.indexOf(".corp.adobe") != -1 || s_Host.indexOf("uqa01.adobe") != -1 || s_Host.indexOf("stage.adobe") != -1 || s_Host.indexOf(".dev.adobe") != -1 || s_Host.indexOf("staging.") != -1) document.write(unescape("%3Cscript src='" + "/uber/js/omniture/mbox.js' type='text/javascript'%3E%3C/script%3E"));
					else document.write(unescape("%3Cscript src='" + s_JsHost + "/uber/js/omniture/mbox.js' type='text/javascript'%3E%3C/script%3E")); 
		}		
		/* DemandBase */
		if (s_URL.indexOf("adobe.com")!=-1) {
			/* Partner Plugin: Demandbase TL v1.3 */
			function s_genesis_dmdbase(a){this.conf=a;
			this.tl=function(){if("done"==this.c_r(this.conf.var_name))return;if(typeof window[this.conf.var_name]=="object"&&typeof window["s_gi"]!="undefined"){var a=s_gi(window.s_account);var b=window[this.conf.var_name];
			var c={},d=this.conf.data_mapping;if(b.demandbase_sid){if(d.sid)c[d.sid]=b.demandbase_sid;if(d.company)c[d.company]=b.company_name;if(d.industry)c[d.industry]=b.industry+"::"+b.sub_industry;if(d.employee_range)c[d.employee_range]=b.employee_range;
			if(d.revenue_range)c[d.revenue_range]=b.revenue_range;this.slb(a,c,this.conf.link_name)}this.c_w(this.conf.var_name,"done",0,this.conf.ck_domain,this.conf.ck_path)}else{if(typeof this.conf.count=="undefined")this.conf.count=1;
			if(this.conf.count<=this.conf.check_max){this.conf.count=this.conf.count+1;setTimeout("s_genesis_dmdbase_i.tl()",this.conf.check_delay)}}};
			this.r=function(){if("done"==this.c_r(this.conf.var_name))return;var a=window.location&&window.location.href?window.location.href:"";var b=a.indexOf("https")==0?"https://":"http://";
			var c=b+"api.demandbase.com/api/v2/ip.js?key="+this.conf.key+"&var="+this.conf.var_name+"&rnd="+Math.floor(Math.random()*10001);var d=document.createElement("SCRIPT");d.type="text/javascript";
			d.src=c;document.getElementsByTagName("HEAD")[0].appendChild(d);setTimeout("s_genesis_dmdbase_i.tl()",this.conf.check_delay)};
			this.slb=function(a,b,c){var d="";for(var e in b){if(b[e])a[e]=b[e];d+=(d?",":"")+e;if(e=="events"){a.linkTrackEvents=a.events=a[e]}}if(d){a.linkTrackVars=d}else{a.linkTrackVars=a.linkTrackEvents="None"}a.tl(true,"o",c)};
			this.c_r=function(a){var b,c,d,e=document.cookie.split(";");for(b=0;b<e.length;b++){c=e[b].substr(0,e[b].indexOf("="));d=e[b].substr(e[b].indexOf("=")+1);c=c.replace(/^\s+|\s+$/g,"");if(c==a){return unescape(d)}}};
			this.c_w=function(a,b,c,d,e){var f=new Date;f.setDate(f.getDate()+c);var g=escape(b)+(c==null||c==0?"":"; expires="+f.toUTCString())+"; path="+e+"; domain="+d;document.cookie=a+"="+g}}
			s_genesis_dmdbase_i = new s_genesis_dmdbase(
				   {
						  key:"e4086fa3ea9d74ac2aae2719a0e5285dc7075d7b",
						  data_mapping:{
							  	 sid:"eVar51",
								 company:"eVar55",
								 industry:"eVar56",
								 employee_range:"eVar57",
								 revenue_range:"eVar58"
						  },
						  var_name:"s_dmdbase_v_1",
						  link_name:"Genesis: Demandbase event",
						  check_delay:500,
						  check_max:10,
						  ck_domain:".adobe.com",
						  ck_path:"/"
				   }
			);
			s_genesis_dmdbase_i.r();
		}	  
	}
}

/* Plugin Config */
s.usePlugins=true
function s_doPlugins(s) {
  s.plugins="";
  /** Patch variables on Adobe.com CQ pages **/ 
  if (s.server=='Day WCMS' && typeof(s_prop32)!=="undefined" && s_prop32.indexOf('ad_') == 0) {
	s_prop32=s_prop32.replace(/US$|CA$/,"");
	if (s_prop32=='ad_en') s.prop32=s_prop32=s_prop32.replace("_en","_us");  
	s.channel=s_channel=s_channel.replace(/STE$/,"");
	if (typeof(s_pageName)!=="undefined" && s_pageName.indexOf("ad_")==0) {
	  s_pageName=s_pageName.replace(/US_|CA_/,"_");
	  s_pageName=s_pageName.replace(/STE_/,"");
	  s_pageName=s_pageName.replace("ad_en_","ad_us_");
	  s.pageName=s_pageName=s_pageName.replace(/&usg(.*)/,"");
	}
	if (typeof(s_prop52)!=="undefined" && s_prop52.indexOf("ad_")==0) { 
	  s_prop52=s_prop52.replace(/US_|CA_/,"_");
	  s_prop52=s_prop52.replace(/STE$/,"");
	  s.prop52=s_prop52=s_prop52.replace("ad_en_","ad_us_");
	}
	if (typeof(s_products)!=="undefined" && s_products.indexOf(";")!=-1) s.products=s_products=s_products.replace(/STE;/g,";");
  }
  else if (s.server=='Dylan' && typeof(s_channel)!=="undefined" && s_channel.indexOf('HOLS-')==0 && typeof(s_events)!=="undefined" && s_events.indexOf('scAdd')!=-1){ 
	  s.products=s_products=s_products.replace(/;eVar20=.+/i,";");
  }
  if(s.server=='Day WCMS' && s_URL.indexOf("adobe.com/designcenter")!=-1) {
	  var s_pageNameBase='';
	  if(s_URL.indexOf("/designcenter.html")!=-1) var s_URLbase="/designcenter.html";
	  else var s_URLbase=window.s_URL.substring(s_URL.indexOf("/designcenter/")+13); // Get designcenter topic
	  if (s_URLbase.indexOf("?")!=-1) s_URLbase=s_URLbase.replace(/\?(.*)/,""); // strip query string
	  s_splitURL=s_URLbase.split('/');
	  for(i=1;i<s_splitURL.length;i++) {
		s_pageNameBase=s_pageNameBase+"_"+s_splitURL[i];
	  }
	  s_pageNameBase=s_pageNameBase.substring(1,s_pageNameBase.length);
	  s.pageName=s.prop32+"_"+"designcenter-"+s_pageNameBase;
	  if(s_URL.indexOf("/designcenter.html")!=-1) s.channel='ad_designcenter';
	  else s.channel='ad_designcenter_'+s_splitURL[1];
	  s.prop11="Design Center";
	  s.eVar5="Design Center";
  }
  if (window.s_account=="mxmacromedia" && s.server=='Day WCMS' && typeof(s_pageName)!=="undefined" && s_pageName.indexOf('ad_') == 0) {
	  if (s_URL.indexOf("/products/small-business-pricing/")!=-1) {
		  if (s_pageName.indexOf("_ProductCatalog_")!=-1) {
		    s_pageName=s_pageName.replace("_ProductCatalog_","_ProductCatalog_SmallBusiness_");
			s_pageName=s_pageName.substring(0,s_pageName.lastIndexOf("_"));
		    s.pageName=s_pageName=s_pageName+"_"+s_URL.substring(s_URL.lastIndexOf("/")+1);
		    if (s_pageName.indexOf("?")!=-1) s.pageName=s_pageName=s_pageName.replace(/\?(.*)/,""); // strip query string
		  }
	  }
	  else if (s_URL.indexOf("/education")!=-1 && s_prop11=="Education") {
		  if (s_channel=='ad_') {
			  if (s_URL.indexOf("/education/students")!=-1)  s.channel=s_channel="ad_students";
			  else if (s_URL.indexOf("/education/k12")!=-1) s.channel=s_channel="ad_k12";
			  else if (s_URL.indexOf("/education/higher-ed")!=-1) s.channel=s_channel="ad_higher-ed";
			  else s.channel=s_channel="ad_education";
		  }
		  if (s_pageName.indexOf("__")!=-1) s.pageName=s_pageName=s_pageName.replace('__','_education_');
	  }
      if (s_pageName.indexOf("_buying-guide_buying-guide.")!=-1) {
		  var s_splitpageName=s_pageName.split('_'); 			  
		  var s_URLprod=s_URL.substring(s_URL.indexOf("/products/")+9); // Get product from URL
	  	  s_splitURL=s_URLprod.split('/');
		  if (s_splitURL.length==2) s_URLprod=s_splitURL[0];
		  else if (s_splitURL.length>2) s_URLprod=s_splitURL[1];
		  if (s_URLprod=='creativesuite') s_URLprod='CreativeSuiteFamily';
		  else if (s_URLprod=='mastercollection') s_URLprod='CSMasterCollection';
		  else if (s_URLprod=='designstandard') s_URLprod='DesignStandard';
		  else if (s_URLprod=='design-web-premium') s_URLprod='DesignWebPremium';
		  else if (s_URLprod=='production') s_URLprod='ProductionPremium';
		  else if (s_URLprod=='creativecloud') s_URLprod='CreativeCloud';
		  else s_URLprod=s_URLprod.charAt(0).toUpperCase()+s_URLprod.substring(1);
		  s_splitpageName[s_splitpageName.length-2]=s_URLprod;
		  s_pageName=s_splitpageName[0];
		  for (i=1;i<s_splitpageName.length;i++) s_pageName=s_pageName+"_"+s_splitpageName[i];	
		  s.pageName=s_pageName;
		  s.channel=s_channel="ad_"+s_URLprod;
		  s.prop52=s_prop52=s_pageName.substring(0,s_pageName.lastIndexOf("_"));
		  if (s_URLprod.indexOf("Family")==-1) s.products=s_products=";"+s_URLprod+";;;;evar26=site|evar27="+s_pageName;
		  else s.products=s_products="";
	  }
	  if (s_pageName.indexOf("creativesuiteFamily")!=-1) {
		s.pageName=s_pageName=s_pageName.replace("creativesuiteFamily","CreativeSuiteFamily");
		s.channel=s_channel=s_channel.replace("creativesuiteFamily","CreativeSuiteFamily");
		s.prop52=s_prop52=s_prop52.replace("creativesuiteFamily","CreativeSuiteFamily");
		s.products=s_products=s_products.replace(/creativesuiteFamily/g,"CreativeSuiteFamily");
	  }
	  else if (s_pageName.indexOf("acrobatFamily")!=-1) {
		s.pageName=s_pageName=s_pageName.replace("acrobatFamily","AcrobatFamily");
		s.channel=s_channel=s_channel.replace("acrobatFamily","AcrobatFamily");
		s.prop52=s_prop52=s_prop52.replace("acrobatFamily","AcrobatFamily");
		s.products=s_products=s_products.replace(/acrobatFamily/g,"AcrobatFamily");
	  }
	  else if (s_pageName.indexOf("_creativecloud_")!=-1) {
		s.pageName=s_pageName=s_pageName.replace("_creativecloud_","_CreativeCloud_");
		s.channel=s_channel=s_channel.replace("_creativecloud","_CreativeCloud");
		s.prop52=s_prop52=s_prop52.replace("_creativecloud_","_CreativeCloud_");
		s.products=s_products=s_products.replace(/creativecloud/g,"CreativeCloud");
	  }
	  else if (s_pageName.indexOf("_ProductCatalog_software")!=-1 || s_pageName.indexOf("_ProductCatalog_Overview")!=-1) {
		  s_pageName=s_pageName.substring(0,s_pageName.lastIndexOf("_"));
		  s.pageName=s_pageName=s_pageName+"_"+s_URL.substring(s_URL.lastIndexOf("/")+1);
		  if (s_pageName.indexOf("?")!=-1) s.pageName=s_pageName=s_pageName.replace(/\?(.*)/,""); // strip query string
	  } 
	  if (s_events=="prodView" && s_pageName.indexOf("InlineConfigurator")==-1 && s_pageName.indexOf("HoverCart")==-1 && s_pageName.indexOf("Hovercart")==-1) s.events=s_events="prodView,event37";
  } 

  /** CPod Tracking **/
  if (typeof(s_omtrProd)!=="undefined") {
	  if(s_omtrProd.indexOf(";")!= -1 && s_pageName.indexOf('ad_')==0) {
		  if(s_products.indexOf("eVar27=")!=-1) {
			  if (s_products.indexOf("Family")!=-1) s_products=s_products.replace(/eVar27=([^,]*)/g,'eVar27='+s_pageName);
			  else s_products=s_omtrProd.replace(/eVar27=([^,]*)/g,'eVar27='+s_pageName);
			  s_products=s_products.replace(/STE;/g,";");
			  s.products=s_products=s_products.replace(/,$/,'');
			  s.events=s_events="prodView,event37";
		  }
	  }
  }

  /** Marketing Myths Deep-Link Tracking **/
  if (s_URL.indexOf("/solutions/digital-marketing.html")!=-1) {
	s.channel="Solutions: Marketing Myths";
	if (s.getQueryParam('tb')) {
		if (s.pageName.indexOf("Tab")==-1) {
		s.pageName=s_URL.replace(/\?(.*)/,"");
		if (s.getQueryParam('tb')=='ov') s.pageName=s.pageName+":DeepLink=overview";
		else if (s.getQueryParam('tb')=='so') s.pageName=s.pageName+":DeepLink=social-marketing";
		else if (s.getQueryParam('tb')=='mo') s.pageName=s.pageName+":DeepLink=media-optimization";
		else if (s.getQueryParam('tb')=='al') s.pageName=s.pageName+":DeepLink=digital-analytics";
		else if (s.getQueryParam('tb')=='tg') s.pageName=s.pageName+":DeepLink=testing-and-targeting";
		else if (s.getQueryParam('tb')=='ex') s.pageName=s.pageName+":DeepLink=web-experience-management";
		}
	}
  }
  
  /** GeoRouting Modal Layer **/
  if (typeof(window.grmodal_loaded)!=="undefined")	s.prop26=s_prop26="GeoRouting Modal Layer Loaded";
	
  /** Touch Apps Tracking
  s.exitURL = s.exitLinkHandler()
  if(s.exitURL) {
	  if (s.exitURL.indexOf("android.com")!=-1 || s.exitURL.indexOf("itunes.apple.com")!=-1) {
		s.linkTrackEvents = "";
		s.linkTrackVars='eVar4';
		s.linkName = s.exitURL.toLowerCase();
		s.eVar4 = "Touch Apps: " + s.exitURL;				
	  } 
  }  **/
  /** SAMCAP Campaign Tracking **/
  if (s.getQueryParam('trackingid')) {
    s.campaign=s.getQueryParam('trackingid');
    s.campaign=s.getValOnce(s.campaign,'s_campaign',0);
	if(!document.referrer) if(s.campaign){s.referrer="mail://SAMCAP.Email-or-InApp.link/"+s.campaign;}
  }
  if (s.getQueryParam('promoid')) {
    s.eVar2=s.getQueryParam('promoid');
    s.eVar2=s.getValOnce(s.eVar2,'eVar2',0);
  }
  if (s.getQueryParam('sdid')) {
    s.eVar9=s.getQueryParam('sdid');
    s.eVar9=s.getValOnce(s.eVar9,'eVar9',0);
    s_eVar9=s.eVar9;
  }
  s.eVar39=s.getQueryParam('pid');  //Affiliate Tracking

  s.eVar11=s.getQueryParam('pss'); //Legacy Products Start Screen

  if (s.server=="Dylan" && s.events=="event22") s.events=""; // Clear event22
  
  /* Persist Store Experience*/
  s.prop17=s.getAndPersistValue(s.prop17,'s_c17_persist',0);
  if (s.prop17!="") s.eVar33=s.prop17;
  
  /** Search Team Requirements **/
  /* clickPast */
  s.SEMvar = s.getQueryParam('skwcid');
  s.SEMvar = s.getValOnce(s.SEMvar,'SEM_var',45);
  s.clickPast(s.SEMvar,'event66','event67');
  s.pageURL=s.manageQueryParam('skwcid',1,1);
  /* Overwrite SearchCenter in case other channels are used */
  if(!s.getQueryParam('skwcid')&&s.getQueryParam('sdid')) {
	s.eVar50='Other Channel';
	s.prop51=s.getAndPersistValue(s.eVar50,'s_cp_persist',45);
  }
  else s.prop51=s.getAndPersistValue(s.SEMvar,'s_cp_persist',45); // Persist SEMvar for 45 days and populate prop51
  /*Time Parting PST*/
  s.prop59 = s.eVar59 = s.getTimeParting('h','-8'); // Set hour on Pacific Time
  s.prop60 = s.eVar60 = s.getTimeParting('d','-8'); // Set day based on Pacific Time

  /** Social Media Tracking **/
  s.socialPlatforms('eVar69');
  //s.socialTerms('eVar68');

  //using interval and only measuring the facebook like click with a success event:
  // var socialInterval = setInterval( function() { s.facebookSocialPlugins('','fb:like>event43','','','','','',''); }, 1000);	

  //when someone clicks like (tracked above by facebookSocialPlugins()), people who click back to our site get this tracking code
  if(s.getQueryParam('fb_ref')) s.campaign='fbLike'; //FB click-back should never happen when another campaign code is set
	
  /** TNT **/
  if (s.c_r("omniture_optout")!=1 && s_URL.indexOf("/misc/optout")==-1 && s_matchTnT<0) {
	if(typeof(window['mboxVersion']) != "undefined") {
	mboxLoadSCPlugin(s);
	s.tnt=s.trackTNT(); 
	}
	/* ClientContext Integration - CCM Status Level */
	if(typeof CQ_Analytics != 'undefined') {
		if(typeof CQ_Analytics.ClientContext != 'undefined') {
			var yodaStore = CQ_Analytics.ClientContext.get("yoda");
    		if(yodaStore){
				s.eVar67="serviceCode="+yodaStore.getProperty("serviceCode")+":serviceLevel="+yodaStore.getProperty("serviceLevel")+":serviceStatus="+yodaStore.getProperty("serviceStatus");
    		}
		}
	}
  }
  /* TNT Audience Segment eVar */
  if (s.getQueryParam('ttsrccat')) {
    s.eVar51=s.getQueryParam('ttsrccat');
    s.eVar51=s.getValOnce(s.eVar51,'eVar51',0);
  }
}

s.doPlugins=s_doPlugins

/************************** PLUGINS SECTION *************************/
/* Plugin: getQueryParam 2.3 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"

+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/* Plugin: getValOnce_v1.0 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");

/* Plugin: getAndPersistValue 0.3 - get a value on every page */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");
/* Plugin Utility: apl v1.1 */
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/* Plugin: exitLinkHandler 0.5 - identify and report exit links */
s.exitLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h||(s.linkTyp"
+"e&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h="
+"s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.li"
+"nkType='e';else h='';s[n]=t;return h;");

/* Utility Function: split v1.5 - split a string (JS 1.0 compatible) */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* Utility Function: p_gh */
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

/* Plugin: manageQueryParam v1.2 - correct parameters in query string */
s.manageQueryParam=new Function("p","w","e","u",""
+"var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.lo"
+"cation);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1"
+"?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf("
+"'?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring"
+"(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.le"
+"ngth);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1"
+",x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.su"
+"bstring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp)"
+"{y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0"
+";while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break"
+";}qv=s.rep(qv,'+',' ');qv=escape(qv);qv=s.rep(qv,'%25','%');qv=s.re"
+"p(qv,'%7C','|');qv=s.rep(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}i"
+"f(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='"
+"?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if"
+"(qp)qs='?'+qp;return u+qs;");

/* TNT Integration Plugin v1.0 */
s.trackTNT =new Function("v","p","b",""
+"var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s."
+"getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v"
+"]!=undefined){r+=s.wd[v];}return r;");

/* Plugin: clickPast - version 1.0 */
s.clickPast=new Function("scp","ct_ev","cp_ev","cpc",""
+"var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc)"
+"{cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev"
+";s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc"
+",0,0);}}}");
s.p_fo=new Function("n",""
+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+"new Object;return 1;}else {return 0;}");

/* Plugin: getTimeParting 2.0 */
s.getTimeParting=new Function("t","z","y","l",""
+"var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
+"tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
+".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
+"|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z"
+"=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
+"g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
+"=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
+"a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
+" Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
+"etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
+"nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
+"Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
+"00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6"
+"||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab"
+"le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r"
+"eturn A}}else{return Z+', '+W}}}");

/* Plugin: socialPlatforms v0.2 */
s.socialPlatforms=new Function("a",""
+"var s=this,g,K,D,E,F;g=s.referrer?s.referrer:document.referrer;g=g."
+"toLowerCase();K=s.split(s.socPlatList,'|');for(i=0;i<K.length;i++){"
+"D=s.split(K[i],'>');if(g.indexOf(D[0])!=-1){if(a){s[a]=D[1];" 
+"}}}"); 

s.socPlatList="facebook.com>Facebook|twitter.com>Twitter|t.co/>Twitter|youtube.com>Youtube|clipmarks.com>Clipmarks|dailymotion.com>Dailymotion|delicious.com>Delicious|digg.com>Digg|diigo.com>Diigo|flickr.com>Flickr|flixster.com>Flixster|fotolog.com>Fotolog|friendfeed.com>FriendFeed|google.com/buzz>Google Buzz|buzz.googleapis.com>Google Buzz|plus.google.com>Google+|hulu.com>Hulu|identi.ca>identi.ca|ilike.com>iLike|intensedebate.com>IntenseDebate|myspace.com>MySpace|newsgator.com>Newsgator|photobucket.com>Photobucket|plurk.com>Plurk|slideshare.net>SlideShare|smugmug.com>SmugMug|stumbleupon.com>StumbleUpon|tumblr.com>Tumblr|vimeo.com>Vimeo|wordpress.com>WordPress|xanga.com>Xanga|";

/* Plugin: socialTerms v0.1 */
s.socialTerms=new Function("a",""
+"var s=this,A,B,g,l,m,M,p,q,h,k,u,S,i,O,j,r,t,D,E,G,H,U,Y;g=s.referr"
+"er?s.referrer:document.referrer;g=g.toLowerCase();if(!g)h=1;i=g.ind"
+"exOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInt"
+"ernalFilters.toLowerCase();k=s.split(k,',');for(m=0;m<k.length;m++)"
+"{B=j.indexOf(k[m])>-1?g:'';if(B)O=B;}if(!O&&!h){p=g;U=g.indexOf('//"
+"');q=U>-1?U+2:0;Y=g.indexOf('/',q);r=Y>-1?Y:i;u=t=g.substring(q,r)."
+"toLowerCase();S='altavista.co,altavista.de|q,r>.aol.,suche.aolsvc.d"
+"e|q,query>ask.jp,ask.co|q,ask>www.baidu.com,www.baidu.jp|wd,word>da"
+"um.net,search.daum.net|q>google.,googlesyndication.com|q,as_q>icqit"
+".com|q>bing.com|q>myway.com|searchfor>naver.com,search.naver.com|qu"
+"ery>netscape.com|query,search>reference.com|q>seznam|w>abcsok.no|q>"
+"tiscali.it,www.tiscali.co.uk|key,query>virgilio.it|qs>yahoo.com,yah"
+"oo.co.jp|p,va>yandex|text';A=s.split(S,'>');for(i=0;i<A.length;i++)"
+"{D=A[i];D=s.split(D,'|');E=s.split(D[0],',');for(G=0;G<E.length;G++"
+"){H=j.indexOf(E[G]);if(H>-1){i=s.split(D[1],',');for(k=0;k<i.length"
+";k++){l=s.getQueryParam(i[k],'',g).toLowerCase();if(l){M=l;}}}}}}s["
+"a]=M;");

/*Plugin: facebookSocialPlugins v1.1*/
s.facebookSocialPlugins=new Function("a","b","c","d","e","f","g","h",""
+"var s=this;s.fbICount++;if(s.fbICount>=5){clearInterval(socialInter"
+"val);}if(typeof(FB)!='undefined'){clearInterval(socialInterval);fun"
+"ction re(a,b){a=s.split(a,'>'),FB.Event.subscribe(b,function(){trac"
+"k(a[0],a[1]);});}if(b){re(b,'edge.create');}if(c){re(c,'edge.remove"
+"');}if(d){re(d,'comment.create');}if(e){re(e,'comment.remove');}if("
+"f){re(f,'auth.login');}if(g){re(g,'auth.logout');}if(h){re(h,'messa"
+"ge.send');}}function track(m,n){s.ltVT=s.linkTrackVars;s.ltET=s.lin"
+"kTrackEvents;s.etE=s.events;s.linkTrackVars=a?(a+',events'):'events"
+"';s.linkTrackEvents=n;s.events=n;if(a){s[a]=m;}s.tl(this,'o',m);"
+"s.linkTrackVars=s.ltVT;s.linkTrackEvents=s.ltET;s.event"
+"s=s.etE;}");
s.fbICount = 0; 

/* socialAuthors v1.1 */
s.socialAuthors=new Function("",""
+"var s=this,g,tco;g=s.referrer?s.referrer:document.referrer;if(g.ind"
+"exOf('t.co/')!=-1){s.tco=escape(s.split(g,'/')[3]);s.Integrate.add("
+"'SocialAuthor');s.Integrate.SocialAuthor.tEvar='eVar70';s.Integrate"
+".SocialAuthor.get('http://search.twitter.com/search.json?var=[VAR]&"
+"callback=s.twitterSearch&q=http%3A%2F%2Ft.co%2F'+s.tco);s.Integrate"
+".SocialAuthor.delay();s.Integrate.SocialAuthor.setVars=function(s,p"
+"){s[p.tEvar]=s.user;}}");
s.twitterSearch=new Function("obj",""
+"if(typeof obj=='undefined'||obj.results.length==0){s.user='Not Foun"
+"d';s.Integrate.SocialAuthor.ready();return;}s.user=obj.results[0].f"
+"rom_user;resultNum=obj.results;s.Integrate.SocialAuthor.ready();");

s.twitterSearch=new Function("obj",""
+"var s=this,txt,txtRT,txtEnd,txtAuthor;txt=obj.results[0].text;txtRT"
+"=txt.indexOf('RT @');if(txtRT!=-1){txtEnd=txt.indexOf(' ',txtRT+4);"
+"txtAuthor=txt.substring(txtRT+4,txtEnd);s.user=txtAuthor.replace(':"
+"','');}else{s.user=obj.results[0].from_user;}s.Integrate.SocialAuth"
+"or.ready();");

s.maxDelay='1000';	//max time to wait for 3rd party api response in milliseconds
s.loadModule("Integrate")
s.Integrate.onLoad=function(s,m){
	s.socialAuthors();
	//add other integration module dependent functions here
};


/** MODULES **/

/* Module: Integrate */
s.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!s.wd[o])s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p.get"
+"=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m.l[i]"
+"];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=function"
+"(p,u){var m=this,s=m.s,x,v,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*1000000000000"
+"0):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;for(x in p)if(x&&x.substring(0,1)!='_'&&(!Object||!Object.prototype||!Object.prototype[x])){v=''+p[x];if(v==p[x]||parseFloat(v)==p[x])u="
+"s.rep(u,'['+x+']',s.rep(escape(v),'+','%2B'))}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule("
+"'Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<"
+"m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d["
+"x];p._d--}};m.beacon=function(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;i"
+"m=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.script=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
s.m_i("Integrate");

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.trackingServer="stats.adobe.com"
s.trackingServerSecure="sstats.adobe.com"
s.dc=112
if ("file:" == document.location.protocol) { s.trackingServer='#'; s.trackingServerSecure='#'; }

// Send data as the JS file is loaded - page code does not call s_dc
// var s_code=s.t();
// if(s_code)document.write(s_code)
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.25.2';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this"
+",t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.i"
+"ndexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf"
+"',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVi"
+"sibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s"
+"._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s"
+".mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)"
+"!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,"
+"a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n"
+":2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d"
+".cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifeti"
+"me,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?"
+"v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!"
+"s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;ret"
+"urn b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}"
+"else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e'"
+",'var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.lo"
+"cation;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtf"
+"set',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=func"
+"tion(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un"
+"),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'."
+"'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.im"
+"ages&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_"
+"il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,"
+"'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_"
+"c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTr"
+"ackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr()}',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=="
+"'_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=functi"
+"on(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;i"
+"f(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0"
+";if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie"
+",start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring"
+"(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s"
+"=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Obj"
+"ect||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.s"
+"ubstring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='bo"
+"olean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='chann"
+"el')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}"
+"}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s."
+"vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvent"
+"s}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring("
+"4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if"
+"(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationSer"
+"ver'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase"
+"()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProv"
+"ider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='"
+"c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionTyp"
+"e')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k]"
+",fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='"
+"retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop'"
+")q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h"
+"){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLow"
+"erCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s"
+".wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&("
+"!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=func"
+"tion(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function("
+"'e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\""
+"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;s.t();s.eo=0;if(s.nrs>0&&s.useForcedLinkTracking"
+"&&e.target){t=e.target.target;if(e.target.dispatchEvent&&(!t||t==\\'_self\\'||t==\\'_top\\'||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopImmediatePropagation();e.preventDefault();n=s.d.cr"
+"eateEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget"
+");n.s_fe=1;s.bct=e.target;s.bce=n;}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k)"
+")){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substri"
+"ng(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';i"
+"f(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.prot"
+"ocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x="
+"2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_o"
+"idt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.in"
+"dexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq'"
+",0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;re"
+"turn 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.pr"
+"ototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='"
+"+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclic"
+"k?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ism"
+"ac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent){s.bbc=1;s.useForcedLinkTrackin"
+"g=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s"
+"_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m)"
+"{if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}retu"
+"rn 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m"
+";l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s"
+".un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl"
+"=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e'"
+",'_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m["
+"l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))r"
+"eturn;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).ind"
+"exOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s."
+"m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).i"
+"ndexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.l"
+"oadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}"
+"else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._i"
+"n+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250"
+";if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/"
+"javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,"
+"u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){v"
+"ar s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=fu"
+"nction(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;"
+"i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s."
+"dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.track=s.t="
+"function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate("
+")+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Objec"
+"t;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(St"
+"ring&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf="
+"new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}"
+"}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n."
+"plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Fu"
+"nction('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#d"
+"efault#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution"
+"=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((v"
+"o&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer"
+"=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNod"
+"e;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.tar"
+"get;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h"
+"?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else "
+"if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){va"
+"r ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.ch"
+"arAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring("
+"ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?"
+"'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s"
+".hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.l"
+"inkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s"
+".lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContai"
+"ner=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_"
+"'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||"
+"(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}"
+"}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s"
+".h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera"
+" '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat"
+"(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s."
+"em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVar"
+"iablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextDa"
+"ta,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNa"
+"mespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campai"
+"gn,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+="
+"',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl"
+"_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,"
+"dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilt"
+"ers,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds()"
+";if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()