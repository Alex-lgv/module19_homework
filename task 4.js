function ElectricalAppliance() {
  this.color = "white";
  this.quality = "good";
}

ElectricalAppliance.prototype.plugIn = function () {
  console.log(this.name + " is plugged!");
  this.isPlugged = true;
};

ElectricalAppliance.prototype.plugOut = function () {
  console.log(this.name + " is unplugged!");
  this.isPlugged = false;
};

ElectricalAppliance.prototype.devicePower = function () {
  return this.isPlugged ? this.power : 0;
};

function LampProperties(name, power) {
  this.name = name;
  this.power = power;
  this.height = 30;
  this.weight = 500;
  this.price = 1255;
  this.isPlugged = false;
  this.lampInfo = function () {
    console.log(`This is ${name}`);
  };
}

function PcProperties(name, power) {
  this.name = name;
  this.power = power;
  this.ram = 8;
  this.graphicsCard = "nvidia";
  this.price = 56800;
  this.isPlugged = false;
  this.pcInfo = function () {
    console.group(`PC info:`);
    console.log(`Ram: 8 gb`);
    console.log(`Graphics card: nvidia`);
    console.log(`CPU: intel`);
    console.groupEnd();
  };
}

function TvProperties(name, power) {
  this.name = name;
  this.power = power;
  this.screen = "4K";
  this.additionalFunctions = "smartTV";
  this.price = 26999;
  this.isPlugged = false;
  this.startScreen = function (user) {
    console.log(`Welcome home dear ${user}!`);
  };
}

LampProperties.prototype = new ElectricalAppliance();
PcProperties.prototype = new ElectricalAppliance();
TvProperties.prototype = new ElectricalAppliance();

const lamp = new LampProperties("camelion KD-355", 50);

const pc = new PcProperties("dell", 1500);

const tv = new TvProperties("samsung", 1000);

function energyConsumption() {
  console.log(lamp.devicePower() + pc.devicePower() + tv.devicePower());
}

// Пример включения приборов в розетку:
// lamp.plugIn()
// pc.plugIn()
// tv.plugIn()

// Расчет потребляемой мощности осуществляется через функцию energyConsumption
// Вызываем функцию: energyConsumption()
// Результат: 2550

// Попробуем выключить один из приборов:
// pc.plugOut()
// Вызываем функцию: energyConsumption()
// Результат: 1050
