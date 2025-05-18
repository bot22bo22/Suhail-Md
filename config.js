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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_00_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY1LFxuICAgICAgICA1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVWVHhEYnlUbUlocW1reEpBYkRpQzBZdGpLTFB1TTNGeW05RGFxWlh4RjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhvYkcxWXhxVC1TZE5nVGM4ZWdwR2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2FiMTliN2YtZGE5NC00M2JmLWFhODItMzljYjc1ZTQ5YWExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDEzMyxcbiAgICAgIDE3OCxcbiAgICAgIDI0NyxcbiAgICAgIDIwNCxcbiAgICAgIDE5MixcbiAgICAgIDE5OCxcbiAgICAgIDE1NyxcbiAgICAgIDkxLFxuICAgICAgODgsXG4gICAgICA0MCxcbiAgICAgIDEyMSxcbiAgICAgIDI0MyxcbiAgICAgIDI2LFxuICAgICAgMjMwLFxuICAgICAgMTExLFxuICAgICAgMTI4LFxuICAgICAgMjM4LFxuICAgICAgODUsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDIxOSxcbiAgICAgIDE3NyxcbiAgICAgIDI1MixcbiAgICAgIDIxMCxcbiAgICAgIDM4LFxuICAgICAgMTU5LFxuICAgICAgNTcsXG4gICAgICAyMzksXG4gICAgICAxMTIsXG4gICAgICAxMzAsXG4gICAgICA4OCxcbiAgICAgIDIwMCxcbiAgICAgIDQxLFxuICAgICAgMjQyLFxuICAgICAgMTk3LFxuICAgICAgODcsXG4gICAgICAxMjEsXG4gICAgICAxNDMsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYjcrZFVDRU1lMnBjRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYWNCbzZWQkNBV0p2REhxTGNuSGpQck9BVHlJREI2MzFBSHJpZzR2amVNRzlyT2hWSEN1VFAyUk85NzQzNSt0ZlQ1NklTby9mdFE2YktTczBXbFdQQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVWlHcEVySExsNG9qcmdUMUZQVlZJVExDcG9XUjJSdWNWUVJJV2t3RFk0cFBpTzhJWG5IdzB3bitxYWFvWWpZaHUyM3hMOEgzc3IxT1dHRFZVVnJKQWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjQyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzU0MDgxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU52YlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnZhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZXFIUUQyVEYrcThXaWJjOGVwVkxwSmdsQ3JyWXJSc0N1dzNNeHY0MWRVUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwOTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzQ5OTA0MDc2OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU52Yi5qc29uIjogIntcImtleURhdGFcIjpcImpwUUdSUENmanFkVHI4L0wrR2pmUk0zVEhaNlVIalpYbjVOclN5UjRweU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDkzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc0OTkzNTI1ODZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOdmMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1MGh2a3RNUk1Eek13V1BUZklvZXYzaTd4WDdRQ1F0bXRkdkVkbjJXeTJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA5MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnZkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRTJITUN3Mzl6WmxZZmNKdEN5cEU2anJZSXNzbmM4RnNML3FGcmNMUXFwbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwOTMsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc1MDcwMDc4NzJcIn0iCn0="  // PUT your SESSION_ID 


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
