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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_43_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICA1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwLFxuICAgICAgICA3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMixcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNxUUdIaXJmYWwzQU93THVWU2l0QzJBWExuT1VqbHVabTRUTnQrdWpTekE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVJX1pKSmpCVGw2VDI1b1VqeVZEeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWRhNzc0ZDItNDgxMi00NWViLTlkOGMtZGUzYzRhZTQyZDI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDUyLFxuICAgICAgMjQsXG4gICAgICAzNCxcbiAgICAgIDE5OSxcbiAgICAgIDI4LFxuICAgICAgNTYsXG4gICAgICAxLFxuICAgICAgNjEsXG4gICAgICAyMjgsXG4gICAgICA1NixcbiAgICAgIDMzLFxuICAgICAgMTA2LFxuICAgICAgNzIsXG4gICAgICA0NCxcbiAgICAgIDYzLFxuICAgICAgOTQsXG4gICAgICAxNTMsXG4gICAgICAxOTEsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgNzUsXG4gICAgICAxNDgsXG4gICAgICAzNyxcbiAgICAgIDEzNCxcbiAgICAgIDEzMixcbiAgICAgIDEyMSxcbiAgICAgIDE2MixcbiAgICAgIDY1LFxuICAgICAgMTA2LFxuICAgICAgOTIsXG4gICAgICA3NyxcbiAgICAgIDc3LFxuICAgICAgMTE0LFxuICAgICAgODMsXG4gICAgICA3MixcbiAgICAgIDk1LFxuICAgICAgMzksXG4gICAgICA2NSxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMNERNRUhYWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTDcrZFVDRUsya2hjRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNmQzbnA5SHBGUFhHY0Q2ZmFzTlVuYlZXSjlRdUE2UDhEN0FVSFRTTDNCdEJTekZ4Rk14WlJWNGNjZUdXa2ZsUnQxT1RVOWdxdFdBVmE5aXRHVlUzRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQW02am5wT0VwQUVFeGdWS3dza1RsSEpmajhvSnpGVUhKV2pMdUxlaU1pWmwwcnRLRkg2MGZURVJ2U01QRGs1VEtyNGc2SWxHdjZSdVAyZHoxcWRXRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzAxNDE5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJveVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm95Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEs5MTJiajNWQU9sVTRiSVlEWWFGenpkWlVORktsYjQ0UzJNTGdDK0FEMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY4MDcyMDg3ODlcIn0iCn0="  // PUT your SESSION_ID 


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
