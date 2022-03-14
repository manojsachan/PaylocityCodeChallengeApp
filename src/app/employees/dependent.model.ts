export class Dependent {
  public employeeId: number;
  public id: number;
  public firstName: string;
  public lastName: string;
  public yearlyCostOfBenefit: number

  constructor(employeeId: number, id: number, firstName: string, lastName: string, costOfBenefit: number) {
    this.employeeId = employeeId;
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearlyCostOfBenefit = costOfBenefit;
  }
}
