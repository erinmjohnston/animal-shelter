/* Authors: Erin Johnston */

export class Volunteer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public volunteerReason: string,
    public longTermFoster: boolean,
    public inShelter: boolean,
    public fieldTrips: boolean,
    public ambassador: boolean
  ) {}
}
