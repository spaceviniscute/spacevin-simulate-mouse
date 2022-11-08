function legitMoves(page,goto_X,goto_Y) 
{
  return new Promise(function(resolve) 
  { 
  while((xCords !== goto_X || yCords !== goto_Y)) 
  {
  if (xCords <  goto_X) { xCords = xCords + getRandomInt(1.5) } else if (xCords > goto_X) {xCords = xCords - getRandomInt(1.5) }
  if (yCords <  goto_Y) { yCords = yCords + getRandomInt(1.5)  } else if (yCords > goto_Y) {yCords = yCords - getRandomInt(1.5) }
  console.log(`X : ${xCords}   Y : ${yCords}       GOTOX : ${goto_X}       GOTOY : ${goto_Y}`)
  page.mouse.move(xCords ,yCords)
 
  }
resolve()
  })
}
