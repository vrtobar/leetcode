/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  const trustTable = {};
  
  // Build trust table
  for (const rel of trust) {
    const a = rel[0];
    const b = rel[1];
    trustTable[a] = trustTable[a] !== undefined ? trustTable[a] : {};
    trustTable[a][b] = true;
  }
  
  // Determine if judge trusts noone
  let possibleJudge = 0;
  for (let i = 1; i <= N; i++) {
    if (!trustTable[i]) {
      possibleJudge = i;
    }
  }
  
  // Noone found that trusts noone
  if (possibleJudge === 0) return -1;
  
  // Determine if everone trusts the judge
  for (let i = 1; i <= N; i++) {
    if (i !== possibleJudge) {
      if (!trustTable[i][possibleJudge]) return -1;
    }
  }
  
  return possibleJudge;
};
