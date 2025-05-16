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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_47_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicStPL1p5RUtqSmFVMndDRzUwaG5ObzFvQ0RpYXV2RVFOVVFLaGhYeldMST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQmJJaFlhTFhUd2lQcXdKLUVkLTBPd1wiLFxuICBcInBob25lSWRcIjogXCJiMjVjZDUyNi04NmQ0LTRiZTktODMzYS0xZWMyNDhjYmY3MTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMTk4LFxuICAgICAgMjE1LFxuICAgICAgMTU1LFxuICAgICAgMTcwLFxuICAgICAgMjE2LFxuICAgICAgNDAsXG4gICAgICA3MSxcbiAgICAgIDEyOSxcbiAgICAgIDI0MSxcbiAgICAgIDc2LFxuICAgICAgNzIsXG4gICAgICAxNjUsXG4gICAgICAzOCxcbiAgICAgIDI1MixcbiAgICAgIDIwNixcbiAgICAgIDE2LFxuICAgICAgMjI5LFxuICAgICAgOTksXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgODQsXG4gICAgICAyMTgsXG4gICAgICA3MyxcbiAgICAgIDk4LFxuICAgICAgNjUsXG4gICAgICAxNzYsXG4gICAgICAxOTksXG4gICAgICAxNDYsXG4gICAgICAyNyxcbiAgICAgIDg4LFxuICAgICAgMjUsXG4gICAgICAxNixcbiAgICAgIDIwMCxcbiAgICAgIDE1MixcbiAgICAgIDI0NixcbiAgICAgIDE0OSxcbiAgICAgIDE1MCxcbiAgICAgIDY4LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy83K2RVQ0VPL25uTUVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBaa25EaldwZzcrSlBJVWY1amZMekJxcTY2Y0I1VTlJNDg0SU13aEgrTFN4ZUZrNmZrRDcyL0tUSmVuV1dlckNKemtyMm9wYk42cWFYK2lNdEtFVkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhEYzVOTUYzTGkzQzd0ay8yOGE3QU82WWF4cDA4ZUpGMHRva2FkUkI3d1IrVVA3VmtkS2FEK0JaWUQ0ZEw3ZnhCRTg4WC9WMjFDWG4zTDB4Ty9LS0NnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDozNEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDczOTk2NjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLbi9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtuKy5qc29uIjogIntcImtleURhdGFcIjpcIjFGSzFJRnFaWk9CeFR1a2d5L1R0Z1QrMmlIT0VqSG55NmtwMThrSE1ldUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLbl9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwianE2bW4wamlWYWtVQm1wempOeGZkZS95QnlNTlBwYmlYN3BVUUdvcGNndz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDczNzM2OTY1MzVcIn0iCn0="  // PUT your SESSION_ID 


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
