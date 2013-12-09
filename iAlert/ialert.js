/*
*Plugin Name : iAlert
*Developer : SHAN K PAUL <shanpaul06@gmail.com>
*website : www.tagprof.com/shan 
*
*/
var ialert={
  buttons:this.ibutton,
  model:false,
  callback:'',
  type:'alert',
  ibutton:{'cancel':'<button  class="ibutton" id="icancel" value="Cancel" onclick="ialert.icancel()">Cancel</button>',
  'ok':'<button  class="ibutton" id="iok" value="Ok" onclick="ialert.iok()">Ok</button>',
  'confirm':'<button class="ibutton" id="iconfirm" value="Confirm" onclick="ialert.iconfirm()">Confirm</button>'        
},
iwindow:'<div id="ialert"><div class="ialert_content"><div id="iicon"><div class="iinfo"></div></div><div id="imessage"></div><br class="iclr"></div> <div class="icontrol" id="icontrol">'+this.buttons+'</div></div>',
imodel:'<div id="imodel"></div>',
iicon:{'warning':'<div class="iwarning"></div>',
'alert':'<div class="iinfo"></div>',
'confirm':'<div class="ichoose"></div>',
'wait':'<div class="iwait"></div>'
} ,
icreate:function(modeled)
{

  this.model=modeled||false;
  if(this.model)
  {
    $(document).find('body').append(this.imodel+this.iwindow);
  }
  else
    $(document).find('body').append(this.iwindow);
  $(window).bind('resize', function () { 
   ialert.icenter();
 });

},
show:function(typeofalert,msg,cb)
{

  if($('#ialert').length==0)
  {
                //alert('The ialert Not initialized.');
                this.icreate(true);
               // return false;
             }
             this.type=typeofalert||'alert';
             if(this.type=='alert')
             {
              if(cb)
              {
                this.callback=cb;
              }
              else
                this.callback="";
              $('#iicon').html(this.iicon['alert']);
              $('#icontrol').html(this.ibutton['ok']);
            }
            else if(this.type=='confirm')
            {
              if(cb)
              {
                this.callback=cb;
              }
              else
                this.callback="";
              $('#iicon').html(this.iicon['confirm']);
              $('#icontrol').html(this.ibutton['confirm']+this.ibutton['cancel']);
            }
            else if(this.type=='warning')
            {
              if(this.callback!='confirm')
               if(cb)
               {
                this.callback=cb;
              }
              else
                this.callback="";
              $('#iicon').html(this.iicon['warning']);
              $('#icontrol').html(this.ibutton['cancel']);
            }
            else
            {
              alert('Invalid ialert type')
              $('#iicon').html(this.iicon['alert']);
              $('#icontrol').html(this.ibutton['ok']);            
            }

            $('#imessage').html(msg);
            if(this.model)
              $('#imodel').fadeIn();

            this.icenter();
            $('#ialert').fadeIn();

            $('#iok').focus();
            $("#ialert").keyup(function(event){
              if(event.keyCode==13||event.keyCode==27)
              {                  
               ialert.iok();                    
             }

           })

          },
          wait:function(msg,needok)
          {       
            needok=needok||false;
            if($('#ialert').length==0)
            {
                //alert('The ialert Not initialized.');
                this.icreate(false);
                return false;
              }

              $('#iicon').html(this.iicon['wait']);             
              $('#imessage').html(msg);    
              $('#imodel').fadeOut();
              if(needok)
                $('#icontrol').html(this.ibutton['ok']);
              else
               $('#icontrol').html('');
             $('#icontrol').prepend('<div id="iloadbar"></div>');
             this.icenter();
             $('#ialert').show();


           },

           ihide:function(msg)
           {
            if(this.model)
              $('#imodel').fadeOut();
            $('#ialert').fadeOut();
          },

          icenter:function()
          {
           $('#ialert').css("top", ( $(window).height() -   $('#ialert').height() ) / 2);
           $('#ialert').css("left", ( $(window).width() -   $('#ialert').width() ) / 2);
         },
         iconfirm:function()
         {

           this.ihide();
           if(this.callback!="")
           {

            this.callback();
          }

        },
        icancel:function()
        {
          this.ihide();
          if(this.callback!="")
          {
           if(this.type!='confirm')
           this.callback();
         }


       },
       iok:function()
       {
         this.ihide();
         if(this.callback!="")
         {
          this.callback();
        }

      }
    }