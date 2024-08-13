
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

  const content = []
  const res: any = {
    species: '请说明该宠物是什么物种(猫/狗/...)',
    coat: '毛发长短(长毛/短毛/无毛/...)',
    fur_type: '毛发类型(毛发蓬松/自然卷毛/毛发顺滑/..)',
    fur_color: '毛发颜色(黄色/黑色/白色/...)',
    temperament: '目测性格(活泼/安静/亲人/不亲人/...)',
    size: '体型(基于该物种标准体型: 小型/中型/大型/...)',
    limbs: '四肢长短(短腿/长腿/...)',
    ears: '耳部(立耳/垂耳/...)',
    tail: '尾部(长尾/短尾/无尾/...)'
  }

  if (data !== null) {
    for (let key in data) {
      if (data[key] === null) {
        content.push(res[key])
      }
    }
  }

  return content
}

const InfoSupplement = (data: any) => {
  if (data === null) {
    return false
  }

  if (data !== null) {
    for (let key in data) {
      if (data[key] === null) {
        data[key] = '暂无描述'
      }
    }
  }

  return data

}

export {
  InfoVerify,
  InfoComplete,
  InfoSupplement
}