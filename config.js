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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_16_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMixcbiAgICAgICAgNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidjlkRkd4M2ZIbFFKZW1LVlhuZzhrZXl2anhOcWNkb1QzdGdEc0xmVytmdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibGo5dmI5R2RUMWliaDJITmlyMDJFd1wiLFxuICBcInBob25lSWRcIjogXCJiM2E3NWIzNi01Yzg2LTQ5NTYtYmYyYS1lMDA5ZTZmYWRlYWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDI0MixcbiAgICAgIDI0OSxcbiAgICAgIDIwNCxcbiAgICAgIDI0MyxcbiAgICAgIDEyNixcbiAgICAgIDIzNCxcbiAgICAgIDI5LFxuICAgICAgMjUwLFxuICAgICAgMTM0LFxuICAgICAgNTcsXG4gICAgICAyMDksXG4gICAgICAxNzgsXG4gICAgICA1LFxuICAgICAgMTA5LFxuICAgICAgMTU2LFxuICAgICAgMjA0LFxuICAgICAgMTU1LFxuICAgICAgMTg1LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMjM4LFxuICAgICAgNjAsXG4gICAgICA1NCxcbiAgICAgIDE5NixcbiAgICAgIDIwNSxcbiAgICAgIDIzOSxcbiAgICAgIDExOCxcbiAgICAgIDE1NCxcbiAgICAgIDk0LFxuICAgICAgNzQsXG4gICAgICAyMzEsXG4gICAgICAxMDIsXG4gICAgICAxNDIsXG4gICAgICAyMDMsXG4gICAgICAxNTEsXG4gICAgICA1OCxcbiAgICAgIDEwLFxuICAgICAgMjI3LFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJXUk5YMzRTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tYNytkVUNFTGJLaWNFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWRE5tRU1wS1VtZDJsUWhJV2hSbUZoOU15Q1YrRUlIcFhpRnAwVWVmcXlrU0tHZUt6NVBSa09VbFV5cElXTktScEYya3BNajhzZ1NlblNjVG8yNElDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpamg4VzhlQytTbU5xQTJVYUprZWttWWhuMEpWSVZNL083ZStFMThlMWpjd0NDNkxhOHc0aVVqOXF4T2Q5SWRBZGlzSVc4TlVValVTelRkSzVKTEVnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MDg0NjAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm95XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUSzkxMmJqM1ZBT2xVNGJJWURZYUZ6emRaVU5GS2xiNDRTMk1MZ0MrQUQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjgwNzIwODc4OVwifSIKfQ=="  // PUT your SESSION_ID 


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
