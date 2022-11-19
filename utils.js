
export function getPascalCase(s) {
    s = s.toLowerCase()
    s = s.trim()
    if(s=== "debug") {
        return "Debug"
    }
    
    if(s.includes("debug")) {
        const fl = s.split("debug")[0]
        return (fl.charAt(0).toUpperCase() + fl.slice(1) + "Debug")
    }
    return 0
}

export function getBuildPath(s) {
    outputPath = "app/build/outputs/apk/"
    s = s.toLowerCase()
    s = s.trim()
    if(s=== "debug") {
        return outputPath + "debug/"
    }
    
    if(s.includes("debug")) {
        const fl = s.split("debug")[0]
        return outputPath + fl + "/debug/"
    }
    return 0
}