export class Car {
    carId: string;
    carModel: string;
    registrationNumber: string;
    status: string;
    brand: string;
    pricePerHour: number;
    thumbnail: string;
    imageUrl: string;

    constructor(
        carId: string,
        carModel: string,
        registrationNumber: string,
        status: string,
        brand: string,
        pricePerHour: number,
        thumbnail: string,
        imageUrl: string
    ) {
        this.carId = carId;
        this.carModel = carModel;
        this.registrationNumber = registrationNumber;
        this.status = status;
        this.brand = brand;
        this.pricePerHour = pricePerHour;
        this.thumbnail = thumbnail;
        this.imageUrl = imageUrl;
    }
}
export const CARS: Car[] = [
    {
      carId: "1", carModel: 'Porsche 911 Cuopé', pricePerHour: 399, imageUrl: 'assets/images/911Coupe.jpg',
      registrationNumber: '',
      status: '',
      brand: '',
      thumbnail: ''
    },
    {
      carId: "2", carModel: 'Porsche Taycan', pricePerHour: 499, imageUrl: 'assets/images/taycan.jpg',
      registrationNumber: '',
      status: '',
      brand: '',
      thumbnail: ''
    },
    {
      carId: "3", carModel: 'Porsche 911 Cabriolet', pricePerHour: 469, imageUrl: 'assets/images/cabriolet.jpg',
      registrationNumber: '',
      status: '',
      brand: '',
      thumbnail: ''
    },
    {
      carId: "4", carModel: 'Porsche Macan BEV', pricePerHour: 339, imageUrl: 'assets/images/MacanBev.jpg',
      registrationNumber: '',
      status: '',
      brand: '',
      thumbnail: ''
    }
  ];