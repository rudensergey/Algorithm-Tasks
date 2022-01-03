/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 const countMatches = (items, ruleKey, ruleValue) => items.filter(item => {
  const [type, color, name] = item;
  if (ruleKey === 'type') return type === ruleValue
  if (ruleKey === 'color') return color === ruleValue
  if (ruleKey === 'name') return name === ruleValue
}).length