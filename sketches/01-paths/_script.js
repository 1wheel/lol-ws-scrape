console.clear()
d3.select('body').selectAppend('div.tooltip')


//TRLH3-1002350252.json
d3.loadData('/../../remote-games/TRLH1-1002440271.json', (err, res) => {
  data = res[0]

  c = d3.conventions({
    sel: d3.select('#graph').html('').append('div'),
    layers: 'dcs',
    width: 500,
    height: 500
  })


  p2 = data.map(d => d.playerStats[2])
  p7 = data.map(d => d.playerStats[7])

  var {x, y, layers: [divSel, ctx, svg]} = c

  x.domain([0, 15000])
  y.domain([0, 15000])


  var line = d3.line().x(d => x(d.x)).y(d => y(d.y))


  svg.append('path').at({d: line(p2), fill: 'none', stroke: '#000'})

  svg.append('path').at({d: line(p7), fill: 'none', stroke: '#f0f'})

  // line.context(ctx)(p1)
  // ctx.stroke()


})