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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_51_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmZG5IYlYyZ3J4bGJyS1QxMjZtVkdvaVVMcE41d01lZ0huWEVORVQ2RzhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2bnh5V0t4YVFWLWZmOXVXVjV4RHZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMyZDFkZGM5LTAyNmMtNDBmMS05ZDExLTQ0MjRlYjVjYTRiMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDEzMCxcbiAgICAgIDc2LFxuICAgICAgMTM4LFxuICAgICAgMTI3LFxuICAgICAgMTY2LFxuICAgICAgOTcsXG4gICAgICAxMyxcbiAgICAgIDIzOCxcbiAgICAgIDE5NSxcbiAgICAgIDEzMyxcbiAgICAgIDI1MCxcbiAgICAgIDIsXG4gICAgICAxNTYsXG4gICAgICAyMDYsXG4gICAgICAyMjAsXG4gICAgICAxNTYsXG4gICAgICAyMjQsXG4gICAgICAxMjgsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTEwLFxuICAgICAgMTU2LFxuICAgICAgMTYxLFxuICAgICAgMjA5LFxuICAgICAgNTAsXG4gICAgICAxMzMsXG4gICAgICA3LFxuICAgICAgMTQzLFxuICAgICAgNyxcbiAgICAgIDQsXG4gICAgICAyNCxcbiAgICAgIDcyLFxuICAgICAgMjIxLFxuICAgICAgMTkzLFxuICAgICAgMTIxLFxuICAgICAgNjgsXG4gICAgICAxNzksXG4gICAgICAxMzksXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDJQWUJQRFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0g3K2RVQ0VJS3JnOEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdHWmg2VmxNaWN6NUVLTWRYUzJWdFMzS251WnFUZVQzZXQwUVdnV2dSRHhsQXdpTkVxak95QXNlcnp2NjlQR0NkVGRBbVlOdHZnMXlHYzZxdTZKc0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjArclM0a2p4VUdYRlk5c1I1cHBjeHV0N2NzWDB5QzVuQ3VwS0VLQUZvTnBBeG51SGNRVHdBTVFMNHRmZWJ5NTJvUTFReTU0MEc4NUIyYVljN2RmdmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY5ODIyODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJveS5qc29uIjogIntcImtleURhdGFcIjpcIlRLOTEyYmozVkFPbFU0YklZRFlhRnp6ZFpVTkZLbGI0NFMyTUxnQytBRDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ2ODA3MjA4Nzg5XCJ9Igp9"  // PUT your SESSION_ID 


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
