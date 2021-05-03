#QA13: Integration Tests
This exercise tests the abilities to of the student to make unity integration tests with and without mocking.
To see the results of only one type of test, you would need to change the name of the .tests files so that Jest does not run it automatically.

The line 65 "return ${figure} is not supported" in complexOperations.js cannot be tested without mocking as there should be never a case where the function reaches that line as it should be handled by the "if (!figure || !isSupportedFigure(figure))" statement in line 49.
