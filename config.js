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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_31_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYzLFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU3LFxuICAgICAgICA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDI3LFxuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmTTU1aUtWeFNmK1hmWWNmclcrVlFJRHBMR1p4Vk5VWVY4Sml2QUpscDJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3d0c2dDVUUVFwR3owWTlMUVF0RjJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0ZGYzYzU5LWMyNWEtNGI0MS04MDRjLWZkOGE5MjMwMWE5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICA1NyxcbiAgICAgIDY2LFxuICAgICAgMTU3LFxuICAgICAgMTgwLFxuICAgICAgMjQ5LFxuICAgICAgMTg1LFxuICAgICAgMzcsXG4gICAgICA4MSxcbiAgICAgIDI4LFxuICAgICAgMTcyLFxuICAgICAgMjAzLFxuICAgICAgMjE4LFxuICAgICAgOTEsXG4gICAgICAyMTAsXG4gICAgICAxNjAsXG4gICAgICAxOTcsXG4gICAgICAxOSxcbiAgICAgIDExMCxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICA5MixcbiAgICAgIDExOSxcbiAgICAgIDIyNSxcbiAgICAgIDEyNyxcbiAgICAgIDExLFxuICAgICAgNjMsXG4gICAgICAxMzYsXG4gICAgICAzMSxcbiAgICAgIDEzOCxcbiAgICAgIDEzNixcbiAgICAgIDE3MixcbiAgICAgIDE3NixcbiAgICAgIDMwLFxuICAgICAgMjQ1LFxuICAgICAgMTgyLFxuICAgICAgNzIsXG4gICAgICAyMzUsXG4gICAgICAxOTcsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRDcrZFVDRU42MG5jRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMFRRclZ4aWp4TXpwTTBVZ3NpOEh2Szg3VUJzOGFncjBpS1lRbFlOVFk4TlFrV0libStBQytiRWlEZUpoQVErdll6TUhvV1ZLdGl6R2xvV0gvYktaQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmJJMWd2OThuQ0YwQTlsU25FV09MSUNSSE5nRXAyOGJ4WWdhdytUdENRZmRCNTJZak42dVRIaVpndWc5U0E0SWxud2FkVm1ZbHRtYjNqcXRyTFlqQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjM1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzQwOTUwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtvQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS24rLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUZLMUlGcVpaT0J4VHVrZ3kvVHRnVCsyaUhPRWpIbnk2a3AxOGtITWV1ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtuX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqcTZtbjBqaVZha1VCbXB6ak54ZmRlL3lCeU1OUHBiaVg3cFVRR29wY2d3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzM3MzY5NjUzNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtvQS5qc29uIjogIntcImtleURhdGFcIjpcInFZM0dEOUYybDNBbkFnUDNjcmtaS1A0OFNpTklGZnNIYjVhQ1FiTVl1eGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLb0IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBUWIxTk1GU1NlWWQvc3cvZmNtaTVKL0pmai84SU5GZE40ZWZoODlCdlg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzQwOTQ3MDczM1wifSIKfQ=="  // PUT your SESSION_ID 


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
