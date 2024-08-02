
function computedHeight(DOMs: HTMLElement[] | null) {
  // 如果没有数据则不进行计算
  if (DOMs === null) {
    return null
  }
  const res: number[] = [0]

  // 计算高度

  for (let i = 0; i < DOMs.length; i++) {
    const height = DOMs[i].offsetHeight + res[i]
    res.push(height)
  }

  return res
}

export {
  computedHeight
}