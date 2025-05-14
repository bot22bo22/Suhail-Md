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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_31_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAzMixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDk4LFxuICAgICAgICA0NSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYZnQyOVcyTzZSMWNrdEZHNDdtNTVIZUdvNWs1OUFKTk9MTSsvUWU0M0hZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5LUVVZlc3clRHYVRZY1hubUVNU1pRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg3NTE1YmI0LWJiM2UtNDVhYS1hMmU3LWJkYjNjYzQyZWZiZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDI2LFxuICAgICAgMTk0LFxuICAgICAgMjEzLFxuICAgICAgMjA2LFxuICAgICAgMTE3LFxuICAgICAgMTYwLFxuICAgICAgNzIsXG4gICAgICAxNzIsXG4gICAgICAxNjMsXG4gICAgICAxNzgsXG4gICAgICA4MyxcbiAgICAgIDMzLFxuICAgICAgMjI5LFxuICAgICAgNDIsXG4gICAgICAyMjEsXG4gICAgICAyMDgsXG4gICAgICAxODQsXG4gICAgICAzOCxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAxMDIsXG4gICAgICA4NyxcbiAgICAgIDU5LFxuICAgICAgMjI2LFxuICAgICAgMjUxLFxuICAgICAgNzIsXG4gICAgICAxOTYsXG4gICAgICAxMjQsXG4gICAgICA2NyxcbiAgICAgIDE1MixcbiAgICAgIDEwNyxcbiAgICAgIDEzOSxcbiAgICAgIDIyMCxcbiAgICAgIDg4LFxuICAgICAgNzYsXG4gICAgICAyMzIsXG4gICAgICAxMzMsXG4gICAgICA1OCxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDS1NGTjczUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbjcrZFVDRUxmU2tzRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR0VBMzl4VzZ5eSthRVcwSVd3ZVIrTlVHSnNNWTBkbWp6RnhHc3l5Zm9Lb2ppMU1lajBIaHZibTE5a1lLSWQ5WGFwcjhoN1ZvWnRkd0xydGJ1ZHRYRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZmlUekg1cFMrcHd3UEI1OUhtZU5kSkVQRWNaeGppZ3d3eENvaW5SaURvUDJEM0xKVWhtdkZyQ1NJNis0Wm9jd3MvNUNlb0FCUHV2Z1NWeW84cndUQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzIzMzA4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJveVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm95Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEs5MTJiajNWQU9sVTRiSVlEWWFGenpkWlVORktsYjQ0UzJNTGdDK0FEMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY4MDcyMDg3ODlcIn0iCn0="  // PUT your SESSION_ID 


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
