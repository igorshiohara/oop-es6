'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function () {
  function Vehicle(license, model) {
    _classCallCheck(this, Vehicle);

    this._license = license;
    this._model = model;
  }

  _createClass(Vehicle, [{
    key: 'start',
    value: function start() {
      console.log('Starting vehicle.');
    }
  }]);

  return Vehicle;
}();

var Drone = function (_Vehicle) {
  _inherits(Drone, _Vehicle);

  function Drone(license, model, flies) {
    _classCallCheck(this, Drone);

    var _this = _possibleConstructorReturn(this, (Drone.__proto__ || Object.getPrototypeOf(Drone)).call(this, license, model));

    _this._flies = flies;
    return _this;
  }

  _createClass(Drone, [{
    key: 'fly',
    value: function fly() {
      console.log('Drone {id} is flying', this.id);
    }
  }, {
    key: 'flies',
    get: function get() {
      return this._flies;
    },
    set: function set(flies) {
      this._flies = flies;
    }
  }], [{
    key: 'getDefaultMessage',
    value: function getDefaultMessage() {
      return console.log('This is a static method.');
    }
  }]);

  return Drone;
}(Vehicle);

Drone.type = 'Fly'; //static property

var Car = function (_Vehicle2) {
  _inherits(Car, _Vehicle2);

  function Car(license, model, kilometers) {
    _classCallCheck(this, Car);

    var _this2 = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, license, model));

    _this2._kilometers = kilometers;
    return _this2;
  }

  _createClass(Car, [{
    key: 'start',
    value: function start() {
      _get(Car.prototype.__proto__ || Object.getPrototypeOf(Car.prototype), 'start', this).call(this);
      console.log('Overriding start method.');
    }
  }]);

  return Car;
}(Vehicle);

var c = new Car('a', 'b', 'c');
c.start();