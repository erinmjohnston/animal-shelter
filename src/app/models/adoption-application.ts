/* Authors: Erin Johnston */

export class AdoptionApplication {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: number,
    public address1: string,
    public address2: string,
    public city: string,
    public state: string,
    public petType: string,
    public animalName: string,
    public adoptReason: string,
    public petExperience: string
  ) {}
}
