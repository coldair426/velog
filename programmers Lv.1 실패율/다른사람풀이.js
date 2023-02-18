function solution(N, stages) {
  const answer = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((v) => v >= i).length;
    let curr = stages.filter((v) => v === i).length;
    answer.push([i, curr / reach]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((v) => v[0]);
}
