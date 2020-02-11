const fs = require('fs')
const path = require('path')

let results = []

const COMMAND = process.argv[2]
const CONFIRM = process.argv[3]

function walk (dir) {

  fs.readdir(dir,readDirCallback)
}

function readDirCallback (err,fileArray) {
  if (err) {
    throw err
  }

  
}

walk('/Volumes/Honduras/111919/')


//
// MXF
// MP4
// mov
// R3D
// MTS
//
//
// .BDM
// .BIM
// .BIN
// .CPI
// .DIR
// .DNG
// .IND
// .JPG
// .LRV
// .MOV
// .MP4
// .MPL
// .MTS
// .MXF
// .PPN
// .R3D
// .RDC
// .RDM
// .SCR
// .SMI
// .THM
// .THM 2
// .WAV
// .XML
// .app
// .bin
// .dat
// .db
// .exe
// .gis
// .icns
// .inf
// .jpeg
// .jpg
// .lproj
// .mov
// .mp4
// .nib
// .pdf
// .plist
// .png
// .sav
// .strings
// .sys
// .txt
// .url
// .wav
// .xml
