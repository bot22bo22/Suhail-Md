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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_59_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1LFxuICAgICAgICA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICA3LFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwOU16dmtGbGpERlNsSC9RdXdzem1VOU0xY0p0clVXelJaalBYa3MzbUJJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyN1BUZUtnT1M4bXRhM2hMaFpVaUVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiNDY0ZTQ2LTdkNDItNGVhYS1iY2I1LWI3YzI4OTMwNDg5M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDExMyxcbiAgICAgIDIyNSxcbiAgICAgIDEwNixcbiAgICAgIDIyNSxcbiAgICAgIDksXG4gICAgICAxNzcsXG4gICAgICAxNjUsXG4gICAgICAzMyxcbiAgICAgIDE3LFxuICAgICAgMTY5LFxuICAgICAgOTcsXG4gICAgICAxOTgsXG4gICAgICA3MixcbiAgICAgIDQ5LFxuICAgICAgMTQ4LFxuICAgICAgMjExLFxuICAgICAgNzYsXG4gICAgICA3OCxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICA3MCxcbiAgICAgIDIwNyxcbiAgICAgIDYxLFxuICAgICAgMixcbiAgICAgIDEzOSxcbiAgICAgIDI4LFxuICAgICAgMTE0LFxuICAgICAgOTIsXG4gICAgICA5OCxcbiAgICAgIDg0LFxuICAgICAgMTkxLFxuICAgICAgMjUsXG4gICAgICA5NyxcbiAgICAgIDY3LFxuICAgICAgMjE0LFxuICAgICAgMjMzLFxuICAgICAgMzYsXG4gICAgICA2MSxcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTTlFSjNYQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLVDcrZFVDRU5PWmlNRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidnhLeldsOElzcEJyenhITmNJclpvalZ2UDk3SkV2Y1Nxd1k4TXFPcGNibmR2S3l5T1RDRmtOUEtQbVVCbXB4di80Vld3L1BudHl6dlRTblJMWmpVQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL1NlNG5pVWgram80QXllM2t3WXRiNUF1NS9ydXVuK1U5NjRMMXE4clpDd0F6NjdqekdFdHNWM215VVdVWkJFWmdMNUlCUUFxb2diUWxUcllnS05haWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzA2MTk3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJveVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm95Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
