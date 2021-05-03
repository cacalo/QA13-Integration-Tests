import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
      test('Email is not a string', () => {
        expect(complexOperations.checkEmail(12346)).toBe("The email should be an string");
      });
      test('Email is an invalid string', () => {
        expect(complexOperations.checkEmail("something@.com")).toBe("The email is invalid");
      });
      test('Email is a string', () => {
        expect(complexOperations.checkEmail("something@somethingelse.com")).toBe("The email is valid");
      });
  });


  describe('calculateArea', () => {
    test('Unsupported area', () => {
      expect(complexOperations.calculateArea("pentagon",5,7)).toBe("pentagon is not supported");
    });
    test('Only one number assigned', () => {
      expect(complexOperations.calculateArea("rectangle",5)).toBe(0);
    });
    test('First number is not a number', () => {
      expect(complexOperations.calculateArea("rectangle","5",7)).toBe("number1 and number2 should be numbers");
    });
    test('Second number is not a number', () => {
      expect(complexOperations.calculateArea("rectangle",5,"7")).toBe("number1 and number2 should be numbers");
    });
    test('Rectangle test', () => {
      expect(complexOperations.calculateArea("rectangle",5,7)).toBe(35);
    });
    test('Square test', () => {
      expect(complexOperations.calculateArea("square",5,5)).toBe(25);
    });
    test('Triangle test', () => {
      expect(complexOperations.calculateArea("triangle",5,10)).toBe(25);
    });
    test('Circle test', () => {
      expect(complexOperations.calculateArea("circle",5)).toBe(78.53981633974483);
    });
  });

  describe('sumGreaterThan', () => {
    test('First parameter not a number', () => {
      expect(complexOperations.sumGreaterThan("2",5,7)).toBe('The params should be numbers');
    });
    test('Second parameter not a number', () => {
      expect(complexOperations.sumGreaterThan(2,"5",7)).toBe('The params should be numbers');
    });
    test('Third parameter not a number', () => {
      expect(complexOperations.sumGreaterThan(2,5,"7")).toBe('The params should be numbers');
    });
    test('First two numbers added greater than third number', () => {
      expect(complexOperations.sumGreaterThan(3,5,7)).toBe('8 is greater than 7');
    });
    test('First two numbers added smaller than third number', () => {
      expect(complexOperations.sumGreaterThan(2,5,7)).toBe('7 is less than 7');
    });
  });

  describe('intersectionBetweenArrays', () => {
    test('First item is not an array', () => {
      expect(complexOperations.intersectionBetweenArrays("string",["something1","something2"])).toBe('The params should be arrays');
    });
    test('Second item is not an array', () => {
      expect(complexOperations.intersectionBetweenArrays(["something1","something2"],"string")).toBe('The params should be arrays');
    });
    test('No arrays matching', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2],[3,4])).toBe('There are not matching elements');
    });
    test('Array match found', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4],[4,5,6,7])).toEqual([4]);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    test('First argument is not an array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey("John,Ann,Clair","name")).toEqual("The first param should be an array");
    });
    test('Second argument is not a string', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(["John","Ann","Clair"],5)).toEqual("The second param should be an string");
    });
    test('Missing age property', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name:"Ann",age:25},{name:"Clair"},{name:"John",age:40}],"age")).toEqual("Some elements in the array does not have the age property");
    });
    test('Correct parameters', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name:"Ann",age:25},{name:"Clair",age:20},{name:"John",age:40}],"age")).toEqual([{"age": 20, "name": "Clair"}, {"age": 25, "name": "Ann"}, {"age": 40, "name": "John"}]);
    });
    test('Correct parameters with equal params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name:"Ann",age:25},{name:"Clair",age:20},{name:"Clair",age:20}],"age")).toEqual([{"age": 20, "name": "Clair"}, {"age": 20, "name": "Clair"}, {"age": 25, "name": "Ann"}]);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    test('Argument is not an array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers("1,2,3,4,5,6,7")).toEqual("The param should be an array");
    });
    test('An argument is not a number', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,"4",5,6,7])).toEqual("The array should have only numbers");
    });
    test('Correct arguments', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4,5,6,7])).toEqual({"even": 3, "odd": 4});
    });
  });
});