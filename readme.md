#QA13: Integration Tests

The line "return ${figure} is not supported" cannot be tested as there should be never a case where the function reaches that line as it should be handled by the "if (!figure || !isSupportedFigure(figure))" statement.
