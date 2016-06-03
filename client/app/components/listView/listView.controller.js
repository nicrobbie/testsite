export default class listViewController {
  static get UID(){
    return "listViewController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a listView component"
    this.records =[
    {
      "price": "0.00",
      "odemeter": 42687,
      "exterior": "Gray[Space Grey Metallic]",
      "drivetrain": "Rear Wheel Drive",
      "title": "2008 BMW 3 Series 2dr Cpe 335i RWD"
    },{
      "price": "1110.00",
      "odemeter": 11111,
      "exterior": "Black",
      "drivetrain": "All Wheel Drive",
      "title": "2014 Audi Fastone"
    },{
      "price": "22222",
      "odemeter": 22222,
      "exterior": "pink",
      "drivetrain": "All Wheel Drive",
      "title": "2016 mustang stank"
    },{
      "price": "3333.00",
      "odemeter": 3333,
      "exterior": "dank purple",
      "drivetrain": "All wing flyer",
      "title": "2020 Concept ubelievable"
    },{
      "price": "4444.00",
      "odemeter": 444,
      "exterior": "white",
      "drivetrain": "All hover",
      "title": "1900 Masterpiece"
    },{
      "price": "155550.00",
      "odemeter": 5555,
      "exterior": "green",
      "drivetrain": "Front Wheel Drive",
      "title": "2000 reliable car"
    }
    ]
  }
}
