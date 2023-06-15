start
  = s:sequence { return s; }

sequence
  = items:(braces / text)* { return items; }

braces
  = "(" s:sequence ")" { return {type: '()', content: s} }
  / "{" s:sequence "}" { return {type: '{}', content: s} }

text
  = c:[^{}()]+ { return {type: 'text', value: c.join("")}; }
