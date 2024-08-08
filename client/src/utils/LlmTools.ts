
const InfoVerify = (data: any) => {
  if (data === null || data === false) {
    return false
  }

  // 检测是否有宠物信息是否完全
  for (let key in data) {
    if (key === 'images') {
      continue
    }
    if (data[key] === null) {
      return false
    }
  }

  return true
}


const InfoComplete = (data: any) => {
  if (data === null) {
    return false
  }

}

export {
  InfoVerify,
  InfoComplete
}