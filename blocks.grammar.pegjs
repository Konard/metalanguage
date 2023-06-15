text
  = s:sequence { return s; }

sequence
  = elements:(blocks)* { return elements; }

blocks
  = "(" s:sequence ")" { return {type: '()', content: s} }
  / "{" s:sequence "}" { return {type: '{}', content: s} }
  / c:[^{}()]+ { return {type: '*', content: c.join("")}; }
