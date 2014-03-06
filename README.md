iAlert
======

Interactive alert system

LIVE DEMO
---------

http://shankpaul.github.io/iAlert/iAlert/

How to use
----------

Include script and style to your page:
  
  <script src="ialert.js"></script>
  <link href="ialert.css" rel="stylesheet" type="text/css" />
  
<b>Methods availble</b>
  
  1. ialert.show(type,message ,callback);
  2. ialert.wait(message,true);// 'true' for cancel button 
  
Usage Example:
  
    <script language="javascript">
      ialert.show("confirm","Do you realy want to continue ?",function(){alert("Thanks")});
      ialert.wait("Please wait",true);
    <script>  
    
    
Alert Types for ialert.show method
---------------------------------

  1. alert
  2. confirm
  3. warning
  
Example Application
-------------------
  
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title>iAlert Examples</title>
    	<script type="text/javascript" src="http://code.jquery.com/jquery-1.6.min.js"></script>
    	<script src="ialert.js"></script>
    	<script language="javascript">
    	function show_confirm()
    	{	
    		ialert.show("confirm","Do you realy want to continue ?",function(){alert("Thanks")});
    	}
    	function show_alert()
    	{
      	//ialert.show("alert","hello world",function(){alert("Call back function for alert")});
      	ialert.show("alert","hello world - Alert box");
      }
      function show_warning()
      {
      	ialert.show("warning","This is a warning");
      }
      function show_waiting()
      {
      	ialert.wait("Please wait",true);
      }
    </script>
    <link href="ialert.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
    	<div class="center">
    		<h1><span>i</span>Alert<div>SIMPLE POPUPS</div></h1>
    		<button class="confirm"  onclick="show_confirm()">Confirm Box</button>
    		<button  class="ok" onclick="show_alert()">Alert Box</button>
    		<button class="warning"  onclick="show_warning()">Warning Box</button>
    		<button  class="load" onclick="show_waiting()">Waiting Box</button>
    	</div>
    </body>
    </html>
