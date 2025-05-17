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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_10_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQxLFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY5LFxuICAgICAgICA0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODksXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQwLFxuICAgICAgICA5LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwL1ltR0dEUUp0MzdYcmd3Q2g2UVJzeC9RVGdsU3RTd2pJd2ZQU3YzZ0dVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlTWo2Tlp5SVJMVzFqaHNPVzh3NTFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzODE1NzFhLTA3YzctNGM0OS1hYzMyLTYwMWMyN2M5ZDQ1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICA0NixcbiAgICAgIDIyLFxuICAgICAgMTczLFxuICAgICAgMTY4LFxuICAgICAgMTgyLFxuICAgICAgMTA1LFxuICAgICAgMjE4LFxuICAgICAgMTcxLFxuICAgICAgMTMsXG4gICAgICA0LFxuICAgICAgNTgsXG4gICAgICAxNjUsXG4gICAgICAxOTQsXG4gICAgICAxNjIsXG4gICAgICAxNjksXG4gICAgICA2OCxcbiAgICAgIDI0NCxcbiAgICAgIDE0NixcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAyMTMsXG4gICAgICAzMCxcbiAgICAgIDg3LFxuICAgICAgMTMyLFxuICAgICAgMjM5LFxuICAgICAgMzgsXG4gICAgICAxOTIsXG4gICAgICAxNjgsXG4gICAgICA2NyxcbiAgICAgIDYxLFxuICAgICAgMTI4LFxuICAgICAgMTc3LFxuICAgICAgMjMsXG4gICAgICA5NCxcbiAgICAgIDIyNCxcbiAgICAgIDI0LFxuICAgICAgMzEsXG4gICAgICAxMDYsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMSDcrZFVDRUpDWW9NRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMkFwSzA2VWtWZVlTQmc4cDVDc1VCblRrZVB6UE45cm9NZ2I0SUpnZUQvOFY0Q3R6OGFFbHhUR0dGU2hVbWxma0tNREtXMnM4NlMrdjJBWGU5YndDQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2FwNW5oL1pQaW9RU0tZY2YwaU1SM3pPTkNybXl4VDFsZ0tTd1VGK3B0Z1YvMTIyUlorblp4OXFrTmh1dGR1WU9lQ2lZWjE0WTFyaVlhSDhvR3JXZ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjM2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzQ1NDk5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtvQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS24rLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUZLMUlGcVpaT0J4VHVrZ3kvVHRnVCsyaUhPRWpIbnk2a3AxOGtITWV1ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtuX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqcTZtbjBqaVZha1VCbXB6ak54ZmRlL3lCeU1OUHBiaVg3cFVRR29wY2d3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzM3MzY5NjUzNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtvQS5qc29uIjogIntcImtleURhdGFcIjpcInFZM0dEOUYybDNBbkFnUDNjcmtaS1A0OFNpTklGZnNIYjVhQ1FiTVl1eGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLb0IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBUWIxTk1GU1NlWWQvc3cvZmNtaTVKL0pmai84SU5GZE40ZWZoODlCdlg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzQwOTQ3MDczM1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtvQy5qc29uIjogIntcImtleURhdGFcIjpcIm0yK1E5QWxpVXMrWXRMTXliSTRLeUZzNVRmTEZzcjBXTDVENkhYZCtoVkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLb0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZWVZpRDFqb1hyUmdXdkJGMEtvOWxNWnFucnRNQ3haZkdTYWw0d3UzZTFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzQzMTA1NDMyN1wifSIKfQ=="  // PUT your SESSION_ID 


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
