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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_31_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc2LFxuICAgICAgICA2NixcbiAgICAgICAgMjEwLFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMjAyLFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDksXG4gICAgICAgIDk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICA1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDI1LFxuICAgICAgICA1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk5LFxuICAgICAgICA5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDExLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibmhVOEx3TUkwWFY1ajRCOUNMdlRtd0w3RXM4T3YvbHFUaDZDc2JJTGozZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiclB2UnlDTDlSX3k2NkhMOEtpd3Nvd1wiLFxuICBcInBob25lSWRcIjogXCJmNWJhOGYxOC1iNTk4LTQ5MWQtOTFhNi1mNjg2ZWMzYzk3MzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgODIsXG4gICAgICAyMjEsXG4gICAgICAxODAsXG4gICAgICAxNzYsXG4gICAgICAxNTEsXG4gICAgICAxMDMsXG4gICAgICA2NCxcbiAgICAgIDIwMyxcbiAgICAgIDE3MCxcbiAgICAgIDEsXG4gICAgICAyMzUsXG4gICAgICAxNjUsXG4gICAgICA1NSxcbiAgICAgIDExLFxuICAgICAgMzMsXG4gICAgICA5MyxcbiAgICAgIDE3NyxcbiAgICAgIDY1LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMTMyLFxuICAgICAgMTM3LFxuICAgICAgMjI0LFxuICAgICAgMjE4LFxuICAgICAgMTQyLFxuICAgICAgMjYsXG4gICAgICAyMTEsXG4gICAgICAyOCxcbiAgICAgIDEyNCxcbiAgICAgIDE0LFxuICAgICAgMTAxLFxuICAgICAgNzQsXG4gICAgICAxOTEsXG4gICAgICAyMTYsXG4gICAgICAxNzYsXG4gICAgICAyNTIsXG4gICAgICAyNSxcbiAgICAgIDEyOCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5TkVBM0FNUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLajcrZFVDRU52a2o4RUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicTVlVjF4NnAzbWJRT0Y4WXg0bWlzM0VlOXhJWjhrbVdZMHpHbWc2QU5QVmJZYUQ3WEl6YnZRbWplZmdwQ0t0Q09mUU12ZzJsT1ZwTzZGSkw2TkVMREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUFpkTGVDTTJhbTdMa2l0YnJiYVNhbTR2MEk0NlJhRWpkb0lMT3Vjem5vMU5CZ256MkZPWW11OG5neUhRZE1vMDVGOWFMOXFpQk03NjBRZ3RaOGxiQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzE4NjI3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJveVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm95Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEs5MTJiajNWQU9sVTRiSVlEWWFGenpkWlVORktsYjQ0UzJNTGdDK0FEMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY4MDcyMDg3ODlcIn0iCn0="  // PUT your SESSION_ID 


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
