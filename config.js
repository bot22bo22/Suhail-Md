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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_20_05_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNOajc5a3Vmd2xRN3VISmE3YVZwNUV3cUhNU0ZIQW0xL2txZ1Y5T2xBWUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZELUJWS2tQVEhDVWh1WmpJNlRRRXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDc0YjNiNWUtNjc0My00NjhiLWE3NWYtYTYzNjc4MTc2YTMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMTk3LFxuICAgICAgMTY0LFxuICAgICAgNjMsXG4gICAgICAxNTUsXG4gICAgICA2NSxcbiAgICAgIDE5LFxuICAgICAgMzksXG4gICAgICAxMTgsXG4gICAgICAxNjMsXG4gICAgICAyMSxcbiAgICAgIDExNSxcbiAgICAgIDI5LFxuICAgICAgOTUsXG4gICAgICA5MyxcbiAgICAgIDE5NSxcbiAgICAgIDEwLFxuICAgICAgMjEyLFxuICAgICAgMjE4LFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMTAxLFxuICAgICAgNzUsXG4gICAgICA0NSxcbiAgICAgIDE5OSxcbiAgICAgIDE4OSxcbiAgICAgIDIwMCxcbiAgICAgIDcsXG4gICAgICAxNixcbiAgICAgIDE3OSxcbiAgICAgIDMyLFxuICAgICAgMjEsXG4gICAgICAyMDQsXG4gICAgICA5LFxuICAgICAgMjMwLFxuICAgICAgMjE0LFxuICAgICAgODIsXG4gICAgICAyLFxuICAgICAgMTExLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkY4TFhITTVHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiNytkVUNFUCtOamNFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKYXdXWUdsbTNKbW5GMUZaMTkrYXVvNTgrUEQxRkFyemE3S2UreFZwQzhxMUFvdkRmQmdtYXZRTTgwbXBvYk9uMGFxeHgrZThQaTRUTFZiZHVYNHNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4b2R1Q05ydlM4SVN0TWdWU0lLaWR3VjNQWXZkWWdHNHc3REdTUTJvcTU2NEQySG1TLzg0MXplNFB2WFhnZFBKMTkrT1JKUXUvZm94RkF4aHBIUi9ndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MTQyNDAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm95XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUSzkxMmJqM1ZBT2xVNGJJWURZYUZ6emRaVU5GS2xiNDRTMk1MZ0MrQUQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjgwNzIwODc4OVwifSIKfQ=="  // PUT your SESSION_ID 


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
