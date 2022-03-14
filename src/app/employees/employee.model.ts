import { Dependent } from "./dependent.model";

export class Employee {
  public id: number;
  public firstName: string;
  public lastName: string;
  public anualSalary: number;
  public yearlyCostOfBenefit: number;
  public totalCostOfBenefits: number;
  public dependents: Dependent[];

  constructor(id: number, firstName: string, lastName: string, anualSalary: number,
    costOfBenefit: number, totalCostOfBenefits: number, dependents: Dependent[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.anualSalary = anualSalary;
    this.yearlyCostOfBenefit = costOfBenefit;
    this.totalCostOfBenefits = totalCostOfBenefits;
    this.dependents = dependents;
  }
}
