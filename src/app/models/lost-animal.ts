export class LostAnimal {
  constructor(
  public petType: string,
  public petName: string,
  public breed: string,
  public color: string,
  public date: string,
  public lastLocation: string,
  public image: File,
  public collar: boolean,
  public description: string,
  public ownerFirstName: string,
  public ownerLastName: string,
  public ownerEmail: string,
  public ownerPhone: number
  ) {}
}
