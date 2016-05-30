class vdpInfoController {
  static get UID(){
    return "vdpInfoController"
  }

  /* @ngInject */
  constructor($scope, InfoService) {

    this.recordId = 625165;
    this.record = {};
    InfoService.getInfo(this.recordId).then( (response) => { 
      this.record = response.data[0]; 
      console.log(this.record);
    });

    /*
    this.price = "$57,345.00";
    this.make = "Toyota";
    this.model = "Tundra";
    this.year = "2016";
    this.odometer = "15,000km";
    this.transmission = "6-speed A/T";
    this.drivetrain = "Four Wheel Drive";
    this.exterior = "Black";
    this.interior = "";
    this.vin = "5TFAY5F19GX552575";
    this.stocknum = "TR2718";
    this.stupid = ['Cloth Upholstery',
                   'Air Conditioning',
                   'Cruise Control'];

    this.features = ['Cloth',
          'UpholsteryAir',
          'ConditioningTilt',
          'Steering',
          'WheelPower',
          'Telescopic',
          'SteeringCruise',
          'ControlPower',
          'WindowsPower',
          'LocksTraction',
          'ControlElectronic',
          'Stability',
          'AdapterAluminum',
          'WheelsTire',
          'Pressure',
          'MonitoringBench',
          'SeatBucket',
          'SeatsFront',
          'Floor',
          'MatsChild',
          'Safety',
          'LocksTinted',
          'Windows',
          'OEMDriver',
          'MirrorHeated',
          'MirrorsPower',
          'BrakesPower',
          'SteeringDriver',
          'Front',
          'AirbagDriver',
          'Side',
          'Curtain'];
          
    this.basicYears = "3";
    this.basicMiles = "60,000";
    this.drivetrainYears = "5";
    this.drivetrainMiles = "100,000";
    this.corrosionYears = "5";
    this.corrosionMiles = "Unlimited";
    this.hybridYears = "8";
    this.hybridMiles = "160,000";
    this.hybridNote = "Applies to hybrid vehicles only";
    this.roadsideYears = "5";
    this.roadsideMiles = "100,000";
    */
    document.getElementById("tab-1-content").style.display = "block";
  }

  tabClick(num) {
  	// Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById("tab-" + num + "-content").style.display = "block";
    document.getElementById("tab-" + num).className = "tab-link is-active";
    //evt.currentTarget.className += " is-active";
  }
}

vdpInfoController.$inject = ['$scope', 'InfoService'];
export default vdpInfoController;