export function get AllpostIds() {
  const fileNames = fs.readdirSync (postDirectory)

  return fileNames.map(fileName => {
    return {
      paramsL {
        id:fileName.replace(/\.md$/,'')
      }
    }
  })
}