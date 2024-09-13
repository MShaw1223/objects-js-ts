class neat {
  constructor(private terminator?: string) {
    this.terminator = terminator || "";
  }

  TerminatingLogSpacing(t: string): void {
    console.log("");
    console.log(`---- ${t} ----`);
    console.log("");
  }
  consoleLogSpace() {
    console.log("");
    console.log("|<--------->|");
    console.log("");
  }
}

const n = new neat();

function returnNumber(value: number) {
  var returnValue = (Math.floor(value * 100) / 100).toFixed(2);
  console.log(returnValue);
}
n.TerminatingLogSpacing("start");
returnNumber(4.777888899);
n.consoleLogSpace();

class person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  SayHello() {
    console.log(`My name is ${this.name}, I am ${this.age}`);
  }
}

const al = new person("al", 50);
al.SayHello();
n.consoleLogSpace();
const jen = new person("jen", 30);
jen.SayHello();
n.consoleLogSpace();

class financial {
  private inflation: number;
  private bank: string;
  private interest: number;
  private wages: number;
  constructor(
    wages: number = 30_000,
    inflation: number = 4.5,
    bank: string = "Barclays",
    interest: number = 2
  ) {
    this.bank = bank;
    this.wages = wages;
    this.inflation = inflation;
    this.interest = interest;
  }
  getTakeHome() {
    const taxable = this.wages - 12_570; // Personal Allowance
    if (taxable <= 50_270) {
      // Basic Rate
      return taxable * 0.8;
    } else if (taxable > 50_270 && taxable <= 125_140) {
      // Higher Rate
      const basicTax = 50_270 * 0.8;
      const higherTax = (taxable - 50_270) * 0.6;
      return basicTax + higherTax;
    } else {
      // Additional Rate
      const basicTax = 50_270 * 0.8;
      const higherTax = (125_140 - 50_270) * 0.6;
      const additionalTax = (taxable - 125_140) * 0.55;
      return basicTax + higherTax + additionalTax;
    }
  }
  getMonthlyTHP() {
    const THP = this.getTakeHome();
    return THP / 12;
  }
  possibleSavingsEarnings() {
    const MTHP = this.getMonthlyTHP();
    const monthlyAmountSaved = MTHP * 0.1;
    const interestToPercent = 1 + this.interest / 100;
    return 12 * (monthlyAmountSaved * interestToPercent);
  }
  flex() {
    return `I bank at ${this.bank}`;
  }
  inflationAdjustedPay() {
    const inflation = 1 - this.inflation / 100;
    const adjustedSalary = this.wages * inflation;
    const adjustedWage = adjustedSalary / 12;
    return `[All pretax] Inflation adjusted Salary: ${adjustedSalary}
    Inflation adjusted wage per month: ${adjustedWage}`;
  }
}
const mine = new financial(600000, 8, "Coutts", 2);

console.log("Take home for the year", mine.getTakeHome());
n.consoleLogSpace();
console.log("Monthly Take home", mine.getMonthlyTHP());
n.consoleLogSpace();
console.log("Earnings from saving 10% a month", mine.possibleSavingsEarnings());
n.consoleLogSpace();
console.log(mine.flex());
n.consoleLogSpace();
console.log(mine.inflationAdjustedPay());
n.TerminatingLogSpacing("end");
