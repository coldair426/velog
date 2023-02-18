function solution(N, stages) {
  let answer = [];
  for (let i = 1; i <= N; ++i) {
    let usersReachedCurrentStage = stages.reduce((acc, curStage) => acc + (curStage >= i ? 1 : 0), 0);
    let usersStagnatedCurrentStage = stages.reduce((acc, curStage) => acc + (curStage == i ? 1 : 0), 0);
    if (usersReachedCurrentStage === 0) {
      answer.push({ stage: i, failRate: 0 });
      continue;
    }
    answer.push({ stage: i, failRate: usersStagnatedCurrentStage / usersReachedCurrentStage });
  }
  return answer
    .sort((a, b) => {
      if (a.failRate > b.failRate) return -1;
      if (a.failRate < b.failRate) return 1;
      return a.stage - b.stage;
    })
    .map((entry) => entry.stage);
}
