console.log("코드 시작!");
const user = getUser(1);
const userCallback = getUserCallback(1, user => {
  getRepo(user.githubID, repo => {
    console.log(repo);
  });
});

console.log(user);
console.log("코드 끝");

const users = [{ id: 1, githubID: "bing" }, { id: 2, githubID: "KIM" }];
function getUser(id) {
  let user;
  setTimeout(() => {
    user = users.find(user => user.id === id);
  }, 2000);
  return user;
}

function getUserCallback(id, callback) {
  let user;
  setTimeout(() => {
    const user = users.find(user => user.id === id);
    callback(user);
  }, 2000);
}

function getRepo(githubID, callback) {
  const repos = [
    { githubID: "bing", commitsID: 1 },
    { githubID: "KIM", commitsID: 2 }
  ];
  setTimeout(() => {
    const repo = repos.find(repo => repo.githubID === githubID);
    callback(repo);
  }, 2000);
}

function getCommits(commitsID, callback) {
  const commits = [
    { commitsID: 1, contents: "안녕하세요" },
    { commitsID: 2, contents: "반갑습니다" }
  ];
  setTimeout(() => {
    const commit = commits.find(repo => commit.commitsID === commitsID);
    callback(commit);
  }, 2000);
}
