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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_45_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDYzLFxuICAgICAgICAyNyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUyLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjd1MXcxeE8rUnQvZFRHUzlFblBSUXNGZUlRUTR2SDk5b1I4eFNuQjcwSUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNSNXF1cTZyUVBxSmg0ZzNfUW1FSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2I3ZmEyNWItZDUxMC00YTc4LWE1OTktMGQ5MDI1ZTdiNTI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDI1MixcbiAgICAgIDE0NSxcbiAgICAgIDY0LFxuICAgICAgODUsXG4gICAgICAxMTcsXG4gICAgICAxODEsXG4gICAgICA1NSxcbiAgICAgIDExMyxcbiAgICAgIDIyNyxcbiAgICAgIDEwNCxcbiAgICAgIDE2NyxcbiAgICAgIDExNSxcbiAgICAgIDEzNCxcbiAgICAgIDE4MCxcbiAgICAgIDE2OCxcbiAgICAgIDIxOCxcbiAgICAgIDUwLFxuICAgICAgMTM1LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgMTE5LFxuICAgICAgNTUsXG4gICAgICA0NyxcbiAgICAgIDI1MCxcbiAgICAgIDI0NyxcbiAgICAgIDQ5LFxuICAgICAgMjAsXG4gICAgICA2MCxcbiAgICAgIDI1NCxcbiAgICAgIDEwMyxcbiAgICAgIDQ5LFxuICAgICAgMTI1LFxuICAgICAgMTk0LFxuICAgICAgMyxcbiAgICAgIDEzMSxcbiAgICAgIDE2NyxcbiAgICAgIDI0NyxcbiAgICAgIDIzOCxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdIRDhZTFlLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tuNytkVUNFTTZFa3NFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuQUFVOExqUjFUeG1GWmNoRStlV3FTTWNQVGVtTXAvdHlsb0NjU0hJd3JyaXQ5RXBCcEQwZGZ6UDRmdEk2b1hIem8yNkJrWWxCdWduRVZMYXJWT1FBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2eUVZekpYTWpaOG1pcUxpcnZMV2VKR2NNOS9BSHVvTStpREpBdEk3NnNUL2F1SXA2ZlIzK2FYUERTSm0wY3hkM1ROcU5DOEczVDR1S1JiT2lXdWlpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MjIzMTIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm95XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUSzkxMmJqM1ZBT2xVNGJJWURZYUZ6emRaVU5GS2xiNDRTMk1MZ0MrQUQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjgwNzIwODc4OVwifSIKfQ=="  // PUT your SESSION_ID 


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
