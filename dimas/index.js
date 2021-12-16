class Person {
  constructor(obj) {
    this.name = obj.name;
    this.job_title = obj.job_title;
    this.age = obj.age;
    this.resume = obj.resume;
    this.project = obj.project;
  }

  getCertificate(cert, from) {
    if (!cert) {
      return "no certificate";
    }
    return "get certification from " + from;
  }
}

var dimas = new Person({
  name: "Aries Dimas Yudhistira",
  job_title: "Full Stack Developer",
  age: 30,
  resume: "https://resume.io/r/r4Hvi4sTA",
  project: "https://kunglaw.github.io/yusudoku",
});

console.log(dimas);
