import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';


describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    beforeEach(() => {
    jest.restoreAllMocks()
  })
    test('Email is not a string', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(false)
      expect(complexOperations.checkEmail(12346)).toBe("The email should be an string");
    });
    test('Email is an invalid string', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "validateEmail").mockReturnValue(false);
      expect(complexOperations.checkEmail("something@.com")).toBe("The email is invalid");
    });
    test('Email is a string', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "validateEmail").mockReturnValue(true);
      expect(complexOperations.checkEmail("something@somethingelse.com")).toBe("The email is valid");
    });
  });


  describe('calculateArea', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    test('Empty figure', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(false);
      expect(complexOperations.calculateArea("pentagon",5,7)).toBe("pentagon is not supported");
    });
    test('Unsupported area', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(false);
      jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
      expect(complexOperations.calculateArea("pentagon",5,7)).toBe("pentagon is not supported");
    });
    test('Only one number assigned', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
      jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
      jest.spyOn(basicOperations, "multip").mockReturnValue(0);
      expect(complexOperations.calculateArea("rectangle",5)).toBe(0);
    });
    test('First number is not a number', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
      jest.spyOn(basicOperations, "isNumber").mockReturnValueOnce(false).mockReturnValueOnce(true);
      expect(complexOperations.calculateArea("rectangle","5",7)).toBe("number1 and number2 should be numbers");
    });
    test('Second number is not a number', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
      jest.spyOn(basicOperations, "isNumber").mockReturnValueOnce(true).mockReturnValueOnce(false);
      expect(complexOperations.calculateArea("rectangle",5,"7")).toBe("number1 and number2 should be numbers");
    });
    test('Rectangle test', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
      jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
      jest.spyOn(basicOperations, "multip").mockReturnValue(35);
      expect(complexOperations.calculateArea("rectangle",5,7)).toBe(35);
    });
    test('Square test', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
      jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
      jest.spyOn(basicOperations, "multip").mockReturnValue(25);
      expect(complexOperations.calculateArea("square",5,5)).toBe(25);
    });
    test('Triangle test', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
      jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
      jest.spyOn(basicOperations, "division").mockReturnValue(25);
      expect(complexOperations.calculateArea("triangle",5,10)).toBe(25);
    });
    test('Circle test', () => {
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
      jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
      jest.spyOn(basicOperations, "exponent").mockReturnValue(25);
      expect(complexOperations.calculateArea("circle",5)).toBe(78.53981633974483);
    });
  });

  describe('sumGreaterThan', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    test('First parameter not a number', () => {
      jest.spyOn(basicOperations, "isNumber").mockReturnValueOnce(false).mockReturnValueOnce(true).mockReturnValueOnce(true);
      expect(complexOperations.sumGreaterThan("2a",5,7)).toEqual('The params should be numbers');
    });
    test('Second parameter not a number', () => {
      jest.spyOn(basicOperations, "isNumber").mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(true);
      expect(complexOperations.sumGreaterThan(2,"5",7)).toEqual('The params should be numbers');
    });
    test('Third parameter not a number', () => {
      jest.spyOn(basicOperations, "isNumber").mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(false);
      expect(complexOperations.sumGreaterThan(2,5,"7")).toEqual('The params should be numbers');
    });
    test('First two numbers added greater than third number', () => {
      jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
      jest.spyOn(basicOperations, "sum").mockReturnValue(8);
      expect(complexOperations.sumGreaterThan(3,5,7)).toEqual('8 is greater than 7');
    });
    test('First two numbers added smaller than third number', () => {
      jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
      jest.spyOn(basicOperations, "sum").mockReturnValue(7);
      expect(complexOperations.sumGreaterThan(2,5,7)).toEqual('7 is less than 7');
    });
  });

  describe('intersectionBetweenArrays', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    test('First item is not an array', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValueOnce(false).mockReturnValueOnce(true);
      expect(complexOperations.intersectionBetweenArrays("string",["something1","something2"])).toBe('The params should be arrays');
    });
    test('Second item is not an array', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValueOnce(true).mockReturnValueOnce(false);
      expect(complexOperations.intersectionBetweenArrays(["something1","something2"],"string")).toBe('The params should be arrays');
    });
    test('No arrays matching', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
      jest.spyOn(basicOperations, "arrayIntersection").mockReturnValue([]);
      expect(complexOperations.intersectionBetweenArrays([1,2],[3,4])).toBe('There are not matching elements');
    });
    test('Array match found', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
      jest.spyOn(basicOperations, "arrayIntersection").mockReturnValue([4]);
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4],[4,5,6,7])).toEqual([4]);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    test('First argument is not an array', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey("John,Ann,Clair","name")).toEqual("The first param should be an array");
    });
    test('Second argument is not a string', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
      jest.spyOn(basicOperations, "isString").mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey(["John","Ann","Clair"],5)).toEqual("The second param should be an string");
    });
    test('Missing age property', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "arrayElementsAreObjectWithKey").mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{name:"Ann",age:25},{name:"Clair"},{name:"John",age:40}],"age")).toEqual("Some elements in the array does not have the age property");
    });
    test('Correct parameters', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "arrayElementsAreObjectWithKey").mockReturnValueOnce(1).mockReturnValueOnce(-1);
      jest.spyOn(basicOperations, "sortArrayByKey").mockReturnValue([{"age": 20, "name": "Clair"}, {"age": 25, "name": "Ann"}, {"age": 40, "name": "John"}]);
      expect(complexOperations.sortArrayOfObjectsByKey([{name:"Ann",age:25},{name:"Clair",age:20},{name:"John",age:40}],"age")).toEqual([{"age": 20, "name": "Clair"}, {"age": 25, "name": "Ann"}, {"age": 40, "name": "John"}]);
    });
    test('Correct parameters with equal params', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
      jest.spyOn(basicOperations, "isString").mockReturnValue(true);
      jest.spyOn(basicOperations, "sortArrayByKey").mockReturnValue([{"age": 20, "name": "Clair"}, {"age": 20, "name": "Clair"}, {"age": 25, "name": "Ann"}]);
      expect(complexOperations.sortArrayOfObjectsByKey([{name:"Ann",age:25},{name:"Clair",age:20},{name:"Clair",age:20}],"age")).toEqual([{"age": 20, "name": "Clair"}, {"age": 20, "name": "Clair"}, {"age": 25, "name": "Ann"}]);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    test('Argument is not an array', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers("1,2,3,4,5,6,7")).toEqual("The param should be an array");
    });
    test('An argument is not a number', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
      jest.spyOn(basicOperations, "isNumber").mockReturnValueOnce(false).mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(true);
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,"4",5,6,7])).toEqual("The array should have only numbers");
    });
    test('Correct arguments', () => {
      jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
      jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
      jest.spyOn(basicOperations, "getOddNumbersFromArray").mockReturnValue([1,3,5,7]);
      jest.spyOn(basicOperations, "getEvenNumbersFromArray").mockReturnValue([2,4,6]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4,5,6,7])).toEqual({"even": 3, "odd": 4});
    });
  });
});