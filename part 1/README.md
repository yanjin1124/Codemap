This vscode extention (.vsix) should be placed in the directory 'WORKSPACE/code-map-ide-extension'.

It listens to the 'contralmarks.json' file and will open the target file and corresponding line when changes in the 'contralmarks.json' file.

When the 'contralmarks.json' file is closed, the change listening will not work, so the command below should be used to open the target file or open the 'contralmarks.json' file again.

'Command Palette', the command is 'Open Target File' and the keybinding is 'ctrl + i' or 'cmd+i'.
