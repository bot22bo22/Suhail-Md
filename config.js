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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_23_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxLFxuICAgICAgICA4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI4LFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMzLFxuICAgICAgICA2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDU3LFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICA5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVnVrUk5PVlpIRWpEWXZpU2ZjMzBvMWdVblJRWFNOOXBrdDBqRDBUbDhTTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTnhFbFpNOVFTc0dRblMxNFM5OVI0d1wiLFxuICBcInBob25lSWRcIjogXCJmMjI4ZjUzOS1kYjA0LTQ3NGUtYThkMy1lZjBlMDY2N2FiYmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAxNjcsXG4gICAgICA0NyxcbiAgICAgIDg2LFxuICAgICAgMTg5LFxuICAgICAgNjcsXG4gICAgICAyNDcsXG4gICAgICAxMDUsXG4gICAgICAyNTEsXG4gICAgICAyMzUsXG4gICAgICAxNTMsXG4gICAgICAxMzMsXG4gICAgICAyNDMsXG4gICAgICAyNDYsXG4gICAgICAyMDUsXG4gICAgICAxMzUsXG4gICAgICAxNixcbiAgICAgIDUwLFxuICAgICAgMTQ5LFxuICAgICAgMjM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDQ3LFxuICAgICAgMTk3LFxuICAgICAgMTYwLFxuICAgICAgMTMxLFxuICAgICAgMjQ5LFxuICAgICAgNTgsXG4gICAgICAxOTcsXG4gICAgICAxNjksXG4gICAgICA5OSxcbiAgICAgIDI1MyxcbiAgICAgIDE3MSxcbiAgICAgIDIxNixcbiAgICAgIDI1MSxcbiAgICAgIDE1NSxcbiAgICAgIDkwLFxuICAgICAgMjM1LFxuICAgICAgNyxcbiAgICAgIDUwLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFg3K2RVQ0VQVHZvc0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFZWFdRdFlvUnRkbElSZVVwYkY2aUg2bUo0MXNwYzgzM2ZVbW9mNGIzV1NRNkVyVGNtZE5Hb2VkcTN5MHQ0Y2pZUTZLc3YxSkcrdE9oN0U3dnRRQkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklsYnFrQ3p5cjBGSTR2ZmJzK0hodGF1VTF4MDB5cHBMV09vVUtsVlMvWk5WaWdZSmpDQVJ1OUZ0QVV6bTJHYm9zakFGcysxYk0rVXlTWVpWT3JPSWhnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDozOUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDc0OTkwMDFcbn0iCn0="  // PUT your SESSION_ID 


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
