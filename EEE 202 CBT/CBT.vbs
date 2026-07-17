Set WshShell = CreateObject("WScript.Shell")

WshShell.Run "cmd /c cd /d ""C:\Users\Wummi's PC\Documents\CBT\EEE 202 CBT"" && http-server.cmd", 0, False

WScript.Sleep 2000

WshShell.Run "http://127.0.0.1:8080"