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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_54_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcwLFxuICAgICAgICA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNySU9hZlB3NXdOSThJNmY5ekpERFhEWWJJUUY2ZFd2UnFSbVhKTFBHMVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkx5dVQyOVNUVFBHTFpUaHdTbkdBbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODNiNWNhOWItNDc2MC00ZjA5LTk2MWEtOWQyNTQyNTQ4MjUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMjMsXG4gICAgICAyMzUsXG4gICAgICAxMjUsXG4gICAgICA5MCxcbiAgICAgIDI0OSxcbiAgICAgIDIzMSxcbiAgICAgIDc3LFxuICAgICAgMTIwLFxuICAgICAgNTAsXG4gICAgICAzMSxcbiAgICAgIDk2LFxuICAgICAgMTU3LFxuICAgICAgMTA0LFxuICAgICAgMjQ1LFxuICAgICAgMTY0LFxuICAgICAgOTAsXG4gICAgICA1MSxcbiAgICAgIDI1MyxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDE0NixcbiAgICAgIDI1NCxcbiAgICAgIDQzLFxuICAgICAgMTk0LFxuICAgICAgNDIsXG4gICAgICAxMyxcbiAgICAgIDE2NCxcbiAgICAgIDEwMixcbiAgICAgIDQ1LFxuICAgICAgMTksXG4gICAgICAyMDIsXG4gICAgICAxMzEsXG4gICAgICAxNzQsXG4gICAgICAyNTMsXG4gICAgICAzNixcbiAgICAgIDIwLFxuICAgICAgMTgxLFxuICAgICAgMTg1LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTDcrZFVDRUlxT29zRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidFZSQTJWZGdabTFhSUxjdjlWTjg4bmZ6Z1FkWFNkU1dzTzBVQzhYYThtMXZHRDVyRS8yaHRvVVpTUmtsUm5YcUJOTVYzeWRoVUg0RllTeXJ5ckV5Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidzE0THZhRC9ORDRIVDllVVhlUmkxZXhqa1JjZzdGSEFhNEFMczVWekpuV1NoR3UwalU0ZXNZWVdCUEo2OFY2UncxMXY0NVVXVks3VjNJaFNqcVpralE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjM3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzQ4NjQ4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtvQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS24rLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUZLMUlGcVpaT0J4VHVrZ3kvVHRnVCsyaUhPRWpIbnk2a3AxOGtITWV1ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtuX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqcTZtbjBqaVZha1VCbXB6ak54ZmRlL3lCeU1OUHBiaVg3cFVRR29wY2d3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzM3MzY5NjUzNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtvQS5qc29uIjogIntcImtleURhdGFcIjpcInFZM0dEOUYybDNBbkFnUDNjcmtaS1A0OFNpTklGZnNIYjVhQ1FiTVl1eGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLb0IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBUWIxTk1GU1NlWWQvc3cvZmNtaTVKL0pmai84SU5GZE40ZWZoODlCdlg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzQwOTQ3MDczM1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtvQy5qc29uIjogIntcImtleURhdGFcIjpcIm0yK1E5QWxpVXMrWXRMTXliSTRLeUZzNVRmTEZzcjBXTDVENkhYZCtoVkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLb0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZWVZpRDFqb1hyUmdXdkJGMEtvOWxNWnFucnRNQ3haZkdTYWw0d3UzZTFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzQzMTA1NDMyN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtvRS5qc29uIjogIntcImtleURhdGFcIjpcInBrU3hQcU9MVmFyaU9remIyd3ZNQ3ZMUm5TSWFNQ1ZZajdTVmg0VVhQNWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLb0YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHMGxYK0VUYWNZd1hLRjlhMEwycEFzVi9WZ1VWdEJGeHB5WFFmZ2QvYkxnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzQ4NTczMDQ2MVwifSIKfQ=="  // PUT your SESSION_ID 


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
