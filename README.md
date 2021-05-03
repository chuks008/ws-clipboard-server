## ws-clipboard-server
## Overview
This project serves as a companion server for the [ws-clipboard-android](https://github.com/chuks008/ws-clipboard-android) project
It's part of an HTTP clipboard I'm building, this project is the part responsible for receiving text
snippets from the Android app.

## Start Server
If you are on Windows, make sure to change your WIFI hotspot/connection properties as follows:
1) Select your WIFI hotspot/connection in the lower right hand corner of the desktop, and click on "Properties"
2) Under "Network Profile", switch from "Public" to "Private"

To start the server, follow these steps:

1) Clone this project
2) Open your terminal/command line
3) Navigate to the cloned project's directory (via the command line or an editor like VSCode):
```aidl
cd <path_to_project>
```
4) Create a .env file, and add the following:
```aidl
AIRCLIP_PORT=<YOUR_SERVER_PORT>
```
5) While still being in the root folder of the project, type the following in the terminal and press ENTER:
```aidl
node server.js
```