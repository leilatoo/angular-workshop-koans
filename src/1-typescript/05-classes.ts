describe('Typescript - classes', function() {
  const __ = 'replace me so that the test is passing';
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    greet(): string {
      return 'Hello ' + this.name;
    }
  }
  it('have constructor, properties, methods', function() {
    let p = new Person('John');
    expect(p.greet()).toBe(__);
  });
  it('support inheritance', function() {
    class Worker extends Person {
      hoursWorked: number;

      constructor(name: string, hoursWorked: number) {
        super(name);
        this.hoursWorked = hoursWorked;
      }

      greet(): string {
        return `Hi I'm ${ this.name } and I've worked for ${ this.hoursWorked} hours.`;
      }
    }
    let w = new Worker('John', 8);
    expect(w.greet()).toBe(__);
  });
  it('supports public, private and protected access modifiers', function() {
    class Spy {
      private secret: string;
      public name: string;
      constructor(name: string) {
        this.name = name;
        this.secret = 'this is a top secret';
      }
      public speak(): string {
        return 'Here is a part of my secret: ' + this.secret.substring(0, 4);
      }
    }
    let s = new Spy('Mr X');
    expect(s.speak()).toBe(__);
    expect(s.name).toBe(__);
    // expect(s.secret).toBe(__);
  });
  it('still suffers from same issues as prototype-based "classes"', function() {
    class Person {
      constructor(private name: string) {
      }
      setName(name: string): void {
        this.name = name;
      }
      sayHello() {
        return `Hello ${ this.name }!`;
      }
    }
    let p = new Person('John');
    expect(p.sayHello()).toBe(__);
    let setName = p.setName;
    setName('Paul');
    expect(p.sayHello()).toBe(__);
    expect(window.name).toBe(__);
    p.setName('Paul');
    expect(p.sayHello()).toBe(__);
  })
});
