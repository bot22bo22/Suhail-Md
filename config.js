const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_30_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgODksXG4gICAgICAgIDY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzLFxuICAgICAgICA0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyLFxuICAgICAgICA1NixcbiAgICAgICAgNCxcbiAgICAgICAgMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICA3NixcbiAgICAgICAgODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDM2LFxuICAgICAgICAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaGcyck54MnJsWlNWS3lMSzFoNXluUlhhMExBT29JczZuUUl1REMvbTJVaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVG1EaFJDb0tRT2V0UC1UbnNUQ0ZXZ1wiLFxuICBcInBob25lSWRcIjogXCI5ZTcyNzdlMy02ZGJmLTRmNDMtOTYxZS02NTEwYTA5NmJlY2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDEyLFxuICAgICAgMjMzLFxuICAgICAgNyxcbiAgICAgIDE0MSxcbiAgICAgIDE0LFxuICAgICAgMjQ1LFxuICAgICAgOTgsXG4gICAgICAyMDgsXG4gICAgICAyMDksXG4gICAgICA3LFxuICAgICAgMjExLFxuICAgICAgMTE0LFxuICAgICAgMjQ4LFxuICAgICAgOTQsXG4gICAgICAzOCxcbiAgICAgIDI0NixcbiAgICAgIDE0LFxuICAgICAgMzMsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMTAyLFxuICAgICAgMjksXG4gICAgICAyNDUsXG4gICAgICAxNTAsXG4gICAgICA4MSxcbiAgICAgIDY0LFxuICAgICAgMjAzLFxuICAgICAgMTMyLFxuICAgICAgMTIzLFxuICAgICAgMjM2LFxuICAgICAgMTc5LFxuICAgICAgNzcsXG4gICAgICAxMTEsXG4gICAgICAyMDYsXG4gICAgICA5OSxcbiAgICAgIDI0NSxcbiAgICAgIDk5LFxuICAgICAgNDgsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzhIS1dDOENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3I3K2RVQ0VNMldsTUVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkc0cE5VallIRVV3endac3Z1SGtBTE5teE04VDBocVBVYnh1bW9mR1FPVVVIM2d4QUU5RkJqSTFkOFNPM3VJSGN2eTN2Tlk4S0p6ZGRUb1lRMU1XQUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFlNi9xUWhSbjg5VkdTeDdNMHBsNm9YRXgzZUFTR1g3YWxtVlFkWHpGZXo4TStBL2Q0ekxZMmxlZG9uWEtJS1k1WlRPVG11TFN5VEVpNXh1K1hhK2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDcyNTgxOTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJveS5qc29uIjogIntcImtleURhdGFcIjpcIlRLOTEyYmozVkFPbFU0YklZRFlhRnp6ZFpVTkZLbGI0NFMyTUxnQytBRDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ2ODA3MjA4Nzg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
