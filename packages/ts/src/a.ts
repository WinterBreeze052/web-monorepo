class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  public greet(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// 创建一个 Person 实例并调用 greet 方法
const person = new Person('Alice', 30);
person.greet();
