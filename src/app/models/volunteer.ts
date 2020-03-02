export class Volunteer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: number,
    public volunteerReason: string,
    public longTermFoster: boolean,
    public inShelter: boolean,
    public fieldTrips: boolean,
    public ambassador: boolean
  ) {}
}
