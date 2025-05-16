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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_45_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIwLFxuICAgICAgICA1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDgwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDczLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMixcbiAgICAgICAgMjEyLFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImdpeTNyUm04SmtZaDZDbVVGbHI4Zkl5ME9wWXIvaW5KVVNob0FxV2sxY2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJjNlZzdXo0UjJlM1ZsMFRNVUJfa2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2ZhOTdlMzgtMDFmZS00YmRkLTkyZDUtOGMwZjIyN2RiZDJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgNTAsXG4gICAgICA3MyxcbiAgICAgIDIyNCxcbiAgICAgIDM3LFxuICAgICAgNzcsXG4gICAgICAxNjUsXG4gICAgICAzNSxcbiAgICAgIDIyNixcbiAgICAgIDE3NyxcbiAgICAgIDI0MyxcbiAgICAgIDE0NixcbiAgICAgIDE1NSxcbiAgICAgIDIzMSxcbiAgICAgIDIzNixcbiAgICAgIDI0MCxcbiAgICAgIDEsXG4gICAgICAyMjYsXG4gICAgICA2MyxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMjUxLFxuICAgICAgMTQ2LFxuICAgICAgMTY1LFxuICAgICAgMzksXG4gICAgICA2MixcbiAgICAgIDIwNixcbiAgICAgIDAsXG4gICAgICAyMDUsXG4gICAgICAyMTEsXG4gICAgICAyNixcbiAgICAgIDY0LFxuICAgICAgMjQ4LFxuICAgICAgODgsXG4gICAgICAxNDEsXG4gICAgICAyMTMsXG4gICAgICAxNTgsXG4gICAgICAxNzcsXG4gICAgICAyNixcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3NytkVUNFT0dGbThFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGY0dvZHNDN0E2Wlc3OHhybTFkZzdqbVlqZVBqSFVvNSsveE10RTlZdzB1bjZKTUV0bmd0VjZubkZPUzBGTFlRVWlsS3VxMy9wR2JyRGJ4cUNIQjRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3Z3BFaTdYS0NaZDlFeUs0NzhCbGVxNUZxMHhOaE96YWRlaHh3NUtLbUUzTGsyMThLbnBMaG43NU1HQ2RLR2VlOERrY1dUY1ZEcUgyeENsSkdKeTRpZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MzNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MzcwNzI0XG59Igp9"  // PUT your SESSION_ID 


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
